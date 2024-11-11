import { kyInstance } from '@/lib/ky/instance';
import { type GetTodosResponseDto } from '@/types/dto/response';

const kyGetTodos = () => {
  return kyInstance.get<GetTodosResponseDto>('todos').json();
};

export { kyGetTodos };
