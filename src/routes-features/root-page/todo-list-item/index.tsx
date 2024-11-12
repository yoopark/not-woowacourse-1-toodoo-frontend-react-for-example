import { HStack, Stack, Text } from '@chakra-ui/react';

import { TodoListItemDeleteAction } from '@/routes-features/root-page/todo-list-item-delete-action';
import { TodoListItemDoneAction } from '@/routes-features/root-page/todo-list-item-done-action';
import { TodoListItemUpdateAction } from '@/routes-features/root-page/todo-list-item-update-action';
import { type Todo } from '@/types/entities/todo';

type TodoListItemProps = {
  todo: Todo;
};

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const { title, description } = todo;

  return (
    <HStack
      as="li"
      justify="space-between"
      gap={2}
      rounded="md"
      p={4}
      bg="gray.50"
      border="1px solid"
      borderColor="gray.100"
    >
      <HStack gap={4}>
        <TodoListItemDoneAction todoId={todo.id} isDone={todo.isDone} />
        <Stack gap={1}>
          <Text fontWeight="semibold">{title}</Text>
          {description !== null && (
            <Text fontSize="sm" color="gray.600" fontWeight="light">
              {description}
            </Text>
          )}
        </Stack>
      </HStack>
      <HStack gap={0}>
        <TodoListItemUpdateAction todo={todo} />
        <TodoListItemDeleteAction todoId={todo.id} />
      </HStack>
    </HStack>
  );
};

export { TodoListItem };
