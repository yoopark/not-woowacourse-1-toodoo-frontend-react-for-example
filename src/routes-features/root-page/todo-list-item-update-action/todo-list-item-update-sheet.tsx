import { Button, Input, Stack } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Field } from '@/components/ui/field';
import { toaster } from '@/components/ui/toaster';
import { QUERY_KEYS } from '@/constants/query-keys';
import { useForm } from '@/hooks/use-form';
import { kyPatchTodo } from '@/lib/ky/request';
import { type Todo } from '@/types/entities/todo';

type TodoListItemUpdateSheetProps = {
  trigger: React.ReactNode;
  todo: Todo;
};

const TodoListItemUpdateSheet = ({
  trigger,
  todo,
}: TodoListItemUpdateSheetProps) => {
  const queryClient = useQueryClient();

  // need to refactor
  const kyPatchTodoTitleAndDescription = async (data: {
    todoId: number;
    title: string;
    description: string;
  }) => {
    const { todoId, title, description } = data;

    if (title === '') {
      throw new Error('title is required'); /* unreachable */
    }

    await kyPatchTodo(todoId, {
      title,
      description: description === '' ? null : description,
    });
  };

  const { mutate } = useMutation({
    mutationFn: kyPatchTodoTitleAndDescription,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });

      toaster.create({
        title: '할 일을 수정했어요.',
        type: 'success',
      });
    },
    onError: () => {
      toaster.create({
        title: '할 일 수정에 실패했어요. 잠시 후에 시도해주세요.',
        type: 'error',
      });
    },
  });

  const updateTodoFormInitialValues: UpdateTodoFormSchema = {
    title: todo.title,
    description: todo.description ?? '',
  };

  const { values, handleChange, isDirty } = useForm<UpdateTodoFormSchema>({
    initialValues: updateTodoFormInitialValues,
  });

  const { title, description } = values;

  const isTitleEmpty = title === '';

  const handleSubmit = () => {
    mutate({
      todoId: todo.id,
      ...values,
    });
  };

  return (
    <DrawerRoot placement="bottom">
      <DrawerBackdrop />
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent mx="auto" maxW="xl" roundedTop="lg">
        <DrawerHeader>
          <DrawerTitle>할 일 수정</DrawerTitle>
          <DrawerDescription>할 일을 수정할 수 있어요.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <Stack gap={4}>
            <Field label="제목" required>
              <Input
                placeholder="할 일을 입력해주세요."
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Field>
            <Field label="설명">
              <Input
                placeholder="할 일에 대한 설명을 입력해주세요."
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Field>
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger>
            <Button disabled={isTitleEmpty || !isDirty} onClick={handleSubmit}>
              수정하기
            </Button>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

type UpdateTodoFormSchema = {
  title: string;
  description: string;
};

export { TodoListItemUpdateSheet };
