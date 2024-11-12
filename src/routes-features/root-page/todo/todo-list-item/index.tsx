import { Stack, Text } from '@chakra-ui/react';

import { type Todo } from '@/types/entity';

type TodoListItemProps = {
  todo: Todo;
};

const TodoListItem = ({ todo: { title, description } }: TodoListItemProps) => {
  return (
    <Stack
      as="li"
      gap={1}
      rounded="md"
      p={4}
      bg="gray.50"
      border="1px solid"
      borderColor="gray.100"
    >
      <Text fontWeight="semibold">{title}</Text>
      {description !== null && (
        <Text fontSize="sm" color="gray.600" fontWeight="light">
          {description}
        </Text>
      )}
    </Stack>
  );
};

export { TodoListItem };
