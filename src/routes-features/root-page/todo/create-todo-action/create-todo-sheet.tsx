import { Button, Input } from '@chakra-ui/react';
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
import { kyPostTodo } from '@/lib/ky/request';

type CreateTodoSheetProps = {
  trigger: React.ReactNode;
};

const CreateTodoSheet = ({ trigger }: CreateTodoSheetProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: kyPostTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });
      reset();

      toaster.create({
        title: '할 일을 추가했어요.',
        type: 'success',
      });
    },
    onError: () => {
      toaster.create({
        title: '할 일 추가에 실패했어요. 잠시 후에 시도해주세요.',
        type: 'error',
      });
    },
  });

  const { values, handleChange, reset } = useForm<CreateTodoFormSchema>({
    initialValues: createTodoFormInitialValues,
  });

  const { title } = values;

  const isTitleEmpty = title === '';

  const handleSubmit = () => {
    mutate({ title });
  };

  return (
    <DrawerRoot placement="bottom">
      <DrawerBackdrop />
      {/* FIXME: asChild property not working ... maybe because it's absolutely positioned? */}
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent mx="auto" maxW="xl" roundedTop="lg">
        <DrawerHeader>
          <DrawerTitle>할 일 추가</DrawerTitle>
          <DrawerDescription>
            새로운 할 일을 추가할 수 있어요.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <Field label="제목" required>
            <Input
              placeholder="할 일을 입력해주세요."
              name="title"
              value={title}
              onChange={handleChange}
            />
          </Field>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger>
            <Button disabled={isTitleEmpty} onClick={handleSubmit}>
              추가하기
            </Button>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

type CreateTodoFormSchema = {
  title: string;
};

const createTodoFormInitialValues: CreateTodoFormSchema = {
  title: '',
};

export { CreateTodoSheet };
