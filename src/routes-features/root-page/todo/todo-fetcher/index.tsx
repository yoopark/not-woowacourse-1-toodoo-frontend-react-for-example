import { useQuery } from '@tanstack/react-query';

import { kyGetTodos } from '@/lib/ky/request';
import { TodoResult } from '@/routes-features/root-page/todo/todo-fetcher/todo-result';

const TodoFetcher = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => kyGetTodos(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (data === undefined) {
    return <div>No data</div>;
  }

  return <TodoResult result={data} />;
};

export { TodoFetcher };
