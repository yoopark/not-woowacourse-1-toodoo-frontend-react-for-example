import { TodoListItemUpdateButton } from '@/routes-features/root-page/todo-list-item-update-action/todo-list-item-update-button';
import { TodoListItemUpdateSheet } from '@/routes-features/root-page/todo-list-item-update-action/todo-list-item-update-sheet';
import { type Todo } from '@/types/entity';

type TodoListItemUpdateActionProps = {
  todo: Todo;
};

const TodoListItemUpdateAction = ({ todo }: TodoListItemUpdateActionProps) => {
  return (
    <TodoListItemUpdateSheet
      trigger={<TodoListItemUpdateButton />}
      todo={todo}
    />
  );
};

export { TodoListItemUpdateAction };
