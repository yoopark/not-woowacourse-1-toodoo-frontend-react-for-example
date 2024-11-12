import { HiPlus } from 'react-icons/hi';

import { Button } from '@/components/ui/button';

const CreateTodoFab = () => {
  return (
    <Button
      aria-label="할 일 추가"
      position="absolute"
      left={4}
      bottom={4}
      fontWeight="semibold"
    >
      <HiPlus /> 할 일 추가
    </Button>
  );
};

export { CreateTodoFab };
