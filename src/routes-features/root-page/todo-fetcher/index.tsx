import { Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/query-keys';
import { kyGetTodos } from '@/lib/ky/request';
import { TodoResult } from '@/routes-features/root-page/todo-fetcher/todo-result';

const TodoFetcher = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: QUERY_KEYS.TODOS,
    queryFn: kyGetTodos, // () => kyGetTodos() 중에 뭐가 좋을까? 다른건가? Post에서는 다르던데.
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  if (data === undefined) {
    return <Text>No data</Text>;
  }

  return <TodoResult result={data} />;
};

export { TodoFetcher };
