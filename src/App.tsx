import { HStack } from '@chakra-ui/react';

import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
};

export { App };
