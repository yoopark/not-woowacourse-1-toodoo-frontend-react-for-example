import { Container, Stack, Text } from '@chakra-ui/react';

import { CreateTodoAction } from '@/routes-features/root-page/todo/create-todo-action';
import { TodoFetcher } from '@/routes-features/root-page/todo/todo-fetcher';

const NICKNAME = '용준';

const RootPage = () => {
  return (
    <Container maxW="xl" minH="100vh" p={4} bg="white">
      <Stack gap={8}>
        <Text as="h1" fontSize="2xl" fontWeight="semibold">
          <Text as="span" color="blue.500">
            {NICKNAME}
          </Text>
          님의 할 일
        </Text>
        <TodoFetcher />
      </Stack>
      <CreateTodoAction />
    </Container>
  );
};

export { RootPage };
