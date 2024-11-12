import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toaster } from '@/components/ui/toaster';
import { QUERY_KEYS } from '@/constants/query-keys';
import { kyDeleteTodo } from '@/lib/ky/request';
import { TodoListItemDeleteButton } from '@/routes-features/root-page/todo-list-item-delete-action/todo-list-item-delete-button';

type TodoListItemDeleteActionProps = {
  todoId: number;
};

const TodoListItemDeleteAction = ({
  todoId,
}: TodoListItemDeleteActionProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: kyDeleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });

      toaster.create({
        title: '할 일을 삭제했어요.',
        type: 'success',
      });
    },
    onError: () => {
      toaster.create({
        title: '할 일 삭제에 실패했어요.',
        description: '잠시 후에 시도해주세요.',
        type: 'error',
      });
    },
  });

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    mutate(todoId);
  };

  return <TodoListItemDeleteButton onClick={handleClick} />;
};

export { TodoListItemDeleteAction };
