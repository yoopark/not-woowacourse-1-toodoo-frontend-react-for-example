import { useMemo, useState } from 'react';

import {
  HStack,
  Stack,
  type SwitchCheckedChangeDetails,
} from '@chakra-ui/react';

import { ShowAlreadyDoneSwitch } from '@/routes-features/root-page/todo/todo-fetcher/show-already-done-switch';
import { TodoList } from '@/routes-features/root-page/todo/todo-fetcher/todo-list';
import { TodoResultDescriptor } from '@/routes-features/root-page/todo/todo-fetcher/todo-result-descriptior';
import { type Todo } from '@/types/entity';

type TodoResultProps = {
  result: Todo[];
};

const TodoResult = ({ result }: TodoResultProps) => {
  const [isShowAlreadyDone, setIsAlreadyDone] = useState<boolean>(false);

  const handleCheckedChange = (details: SwitchCheckedChangeDetails) => {
    setIsAlreadyDone(details.checked);
  };

  const filteredNotDoneResult = useMemo(() => {
    return result.filter(filterTodoPredicateNotDone);
  }, [result]);

  const sortedLatestFirstResult = useMemo(() => {
    if (isShowAlreadyDone) {
      return result.sort(sortTodoPredicateLatestFirst);
    }

    return filteredNotDoneResult.sort(sortTodoPredicateLatestFirst);
  }, [filteredNotDoneResult, isShowAlreadyDone, result]);

  return (
    <Stack gap={4}>
      <HStack justify="space-between">
        <TodoResultDescriptor
          isShowAlreadyDone={isShowAlreadyDone}
          totalCount={result.length}
          notDoneCount={filteredNotDoneResult.length}
        />
        <ShowAlreadyDoneSwitch
          checked={isShowAlreadyDone}
          onCheckedChange={handleCheckedChange}
        />
      </HStack>
      <TodoList todos={sortedLatestFirstResult} />
    </Stack>
  );
};

const filterTodoPredicateNotDone = (todo: Todo) => {
  return !todo.isDone;
};

const sortTodoPredicateLatestFirst = (a: Todo, b: Todo) => {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
};

export { TodoResult };
