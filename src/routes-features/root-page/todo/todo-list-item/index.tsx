import { HStack, Stack, Text } from '@chakra-ui/react';

import { TodoListItemDeleteAction } from '@/routes-features/root-page/todo/todo-list-item-delete-action';
import { TodoListItemUpdateAction } from '@/routes-features/root-page/todo/todo-list-item-update-action';
import { type Todo } from '@/types/entity';

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
      <Stack gap={1}>
        <Text fontWeight="semibold">{title}</Text>
        {description !== null && (
          <Text fontSize="sm" color="gray.600" fontWeight="light">
            {description}
          </Text>
        )}
      </Stack>
      <HStack gap={0}>
        <TodoListItemUpdateAction todo={todo} />
        <TodoListItemDeleteAction todoId={todo.id} />
      </HStack>
    </HStack>
  );
};

export { TodoListItem };
