import { CreateTodoFab } from '@/routes-features/root-page/create-todo-action/create-todo-fab';
import { CreateTodoSheet } from '@/routes-features/root-page/create-todo-action/create-todo-sheet';

const CreateTodoAction = () => {
  return <CreateTodoSheet trigger={<CreateTodoFab />} />;
};

export { CreateTodoAction };
