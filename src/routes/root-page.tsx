import { Text, VStack } from '@chakra-ui/react';

const RootPage = () => {
  return (
    <VStack align="center" justify="center" minH="100vh">
      <Text fontSize="8xl">👋</Text>
      <Text fontSize="4xl" fontWeight="semibold">
        안녕하세요
      </Text>
    </VStack>
  );
};

export { RootPage };
