import { Container, Stack, Text } from '@chakra-ui/react';

import { TodoFetcher } from '@/routes-features/root-page/todo/todo-fetcher';

const RootPage = () => {
  return (
    <Container maxW="xl" px={2} py={4}>
      <Stack gap={8}>
        <Text as="h1" fontSize="2xl" fontWeight="semibold">
          Reminders 📝
        </Text>
        <TodoFetcher />
      </Stack>
    </Container>
  );
};

export { RootPage };
