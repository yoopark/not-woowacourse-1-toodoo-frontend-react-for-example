import { HiPencil } from 'react-icons/hi';

import { IconButton } from '@chakra-ui/react';

const TodoListItemUpdateButton = () => {
  return (
    <IconButton aria-label="할 일 수정" size="sm" variant="ghost">
      <HiPencil />
    </IconButton>
  );
};

export { TodoListItemUpdateButton };
