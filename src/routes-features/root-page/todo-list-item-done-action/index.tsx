import { type CheckboxCheckedChangeDetails } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Checkbox } from '@/components/ui/checkbox';
import { toaster } from '@/components/ui/toaster';
import { QUERY_KEYS } from '@/constants/query-keys';
import { kyPatchTodo } from '@/lib/ky/request';

type TodoListItemDoneActionProps = {
  todoId: number;
  isDone: boolean;
};

const TodoListItemDoneAction = ({
  todoId,
  isDone,
}: TodoListItemDoneActionProps) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: kyPatchTodoIsDone,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TODOS,
      });
      toaster.create({
        title: '할 일 완료 상태를 변경했어요.',
        type: 'success',
      }); // 했을 때만 나오는 게 UX에 좋을 듯?
    },
    onError: () => {
      toaster.create({
        title: '할 일 완료 상태 변경에 실패했어요.',
        description: '잠시 후에 시도해주세요.',
        type: 'error',
      });
    },
  });

  const handleCheckedChange = ({ checked }: CheckboxCheckedChangeDetails) => {
    if (checked === 'indeterminate') {
      throw new Error('indeterminate state is not allowed');
    }

    if (checked === undefined) {
      throw new Error('checked state is not allowed'); // 이건 무슨 경우?
    }

    mutate({
      todoId,
      isDone: checked,
    });
  };

  return (
    <Checkbox
      size="sm"
      checked={isDone}
      disabled={isPending}
      onCheckedChange={handleCheckedChange}
    />
  );
};

// need to refactor
const kyPatchTodoIsDone = async (data: { todoId: number; isDone: boolean }) => {
  const { todoId, isDone } = data;

  await kyPatchTodo(todoId, { isDone });
};

export { TodoListItemDoneAction };
