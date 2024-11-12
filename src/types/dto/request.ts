import { type Todo } from '@/types/entities/todo';

type PostTodoRequestDto = Pick<Todo, 'title'>;

type PatchTodoRequestDto = Partial<
  Pick<Todo, 'title' | 'description' | 'isDone'>
>;

export type { PatchTodoRequestDto, PostTodoRequestDto };
