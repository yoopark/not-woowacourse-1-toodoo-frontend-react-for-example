import { type Todo } from '@/types/entity';

type PostTodoRequestDto = Pick<Todo, 'title'>;

type PatchTodoRequestDto = Partial<
  Pick<Todo, 'title' | 'description' | 'isDone'>
>;

export type { PatchTodoRequestDto, PostTodoRequestDto };
