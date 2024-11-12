import { Stack } from '@chakra-ui/react';

import { TodoListItem } from '@/routes-features/root-page/todo/todo-list-item';
import { type Todo } from '@/types/entity';

type TodoListProps = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Stack as="ul" overflowY="auto" maxH="70vh">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
};

export { TodoList };
