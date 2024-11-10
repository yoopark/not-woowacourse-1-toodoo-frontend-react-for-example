import { IoWarning } from 'react-icons/io5';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

import { Icon, Text, VStack } from '@chakra-ui/react';

import { Button } from '@/components/ui/button';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (!isRouteErrorResponse(error)) {
    throw error;
  }

  return (
    <VStack align="center" justify="center" minH="100vh" gap={20}>
      <VStack align="center" justify="center" gap={1}>
        <Icon fontSize="4xl" color="red.500">
          <IoWarning />
        </Icon>
        <Text fontSize="4xl" fontWeight="bold" color="red.500">
          {error.status}
        </Text>
        <Text fontSize="2xl" fontWeight="medium" color="gray.500">
          {error.statusText}
        </Text>
      </VStack>
      <Button variant="outline" onClick={() => navigate(-1)}>
        이전 페이지로 돌아가기
      </Button>
    </VStack>
  );
};

export { ErrorPage };
