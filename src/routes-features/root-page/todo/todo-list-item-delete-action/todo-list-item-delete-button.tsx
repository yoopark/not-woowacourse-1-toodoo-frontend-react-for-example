import { HiTrash } from 'react-icons/hi';

import { IconButton } from '@chakra-ui/react';

type TodoListItemDeleteButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const TodoListItemDeleteButton = ({
  onClick,
}: TodoListItemDeleteButtonProps) => {
  return (
    <IconButton
      aria-label="할 일 삭제"
      size="sm"
      variant="ghost"
      onClick={onClick}
    >
      <HiTrash />
    </IconButton>
  );
};

export { TodoListItemDeleteButton };
