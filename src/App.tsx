import { useQuery } from '@tanstack/react-query';
import ky from 'ky';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = async () => {
  return await ky<Todo[]>('https://jsonplaceholder.typicode.com/todos').json();
};

const App = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  if (data === undefined) {
    return <div>No data...</div>;
  }

  console.log(data);

  return (
    <>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export { App };
