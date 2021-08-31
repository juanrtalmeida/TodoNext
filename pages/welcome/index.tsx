import { Box, Flex, FormControl, Input, Stack, Text } from "@chakra-ui/react";
import { getSession } from "next-auth/client";
import Namer from "../../components/Header";
export default function welcome() {
  return (
    <>
      <Flex
        h="100vh"
        w="100vw"
        alignItems="center"
        justifyContent="center"
        bg="gray.900"
      >
        <Box
          width="70%"
          maxWidth={600}
          borderRadius={8}
          alignItems="center"
          justifyContent="center"
          bg="gray.700"
          flexDirection="column"
          mt="8"
          p="4"
        >
          <Stack spacing={4}>
            <Text
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              color="whiteAlpha.900"
              fontsize="xl"
              w="100%"
            >
              This will be Our Todo List
            </Text>
            <FormControl w="100%">
              <Input
                variant="flushed"
                colorScheme="pink.500"
                placeholder="What you got to do?"
                alignItems="center"
                w="100%"
                textAlign="center"
              ></Input>
            </FormControl>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
