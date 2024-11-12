import { type Todo } from '@/types/entities/todo';

type PostTodoResponseDto = Todo;

type GetTodosResponseDto = Todo[];

type GetTodoResponseDto = Todo;

type PatchTodoResponseDto = Todo;

type DeleteTodoResponseDto = Todo;

export type {
  DeleteTodoResponseDto,
  GetTodoResponseDto,
  GetTodosResponseDto,
  PatchTodoResponseDto,
  PostTodoResponseDto,
};
