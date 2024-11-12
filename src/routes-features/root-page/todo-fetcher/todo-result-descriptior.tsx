import { Text } from '@chakra-ui/react';

type TodoResultDescriptorProps = {
  isShowAlreadyDone: boolean;
  totalCount: number;
  notDoneCount: number;
};

const TodoResultDescriptor = ({
  isShowAlreadyDone,
  totalCount,
  notDoneCount,
}: TodoResultDescriptorProps) => {
  if (isShowAlreadyDone) {
    const doneLength = totalCount - notDoneCount;

    return (
      <Text fontSize="sm" fontWeight="light">
        총{' '}
        <Text as="span" fontWeight="semibold">
          {notDoneCount.toLocaleString()}개
        </Text>
        의 할 일이 남아있습니다. 지금까지{' '}
        <Text as="span" fontWeight="semibold">
          {doneLength.toLocaleString()}개
        </Text>
        의 할 일을 완료했습니다.
      </Text>
    );
  }

  return (
    <Text fontSize="sm" fontWeight="light">
      총{' '}
      <Text as="span" fontWeight="semibold">
        {notDoneCount.toLocaleString()}개
      </Text>
      의 할 일이 있습니다.
    </Text>
  );
};

export { TodoResultDescriptor };
