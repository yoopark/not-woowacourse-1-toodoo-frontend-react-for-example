import { API_ROUTES } from '@/constants/api-routes';
import { kyInstance } from '@/lib/ky/instance';
import {
  type PatchTodoRequestDto,
  type PostTodoRequestDto,
} from '@/types/dto/request';
import {
  type DeleteTodoResponseDto,
  type GetTodosResponseDto,
  type PatchTodoResponseDto,
  type PostTodoResponseDto,
} from '@/types/dto/response';

const kyPostTodo = (postTodoRequestDto: PostTodoRequestDto) => {
  return kyInstance
    .post<PostTodoResponseDto>(API_ROUTES.TODOS, {
      json: postTodoRequestDto,
    })
    .json();
};

const kyGetTodos = () => {
  return kyInstance.get<GetTodosResponseDto>(API_ROUTES.TODOS).json();
};

const kyPatchTodo = (id: number, patchTodoRequestDto: PatchTodoRequestDto) => {
  return kyInstance
    .patch<PatchTodoResponseDto>(API_ROUTES.TODO(id), {
      json: patchTodoRequestDto,
    })
    .json();
};

const kyDeleteTodo = (id: number) => {
  return kyInstance.delete<DeleteTodoResponseDto>(API_ROUTES.TODO(id)).json();
};

export { kyDeleteTodo, kyGetTodos, kyPatchTodo, kyPostTodo };
