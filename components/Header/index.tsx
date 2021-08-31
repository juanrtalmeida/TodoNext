import { Flex, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import React from "react";

export default function Header() {
  const [session] = useSession();
  return session ? (
    <Flex
      w="100vw"
      bg="gray.800"
      h="60px"
      borderRadius={8}
      justifyContent="flex-end"
      alignItems="center"
    >
      <Text color="whiteAlpha.900">Hello, {session.user.name}</Text>
    </Flex>
  ) : (
    <Flex
      w="100vw"
      bg="gray.800"
      h="60px"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Text color="whiteAlpha.900">
        Hello, Stranger!{JSON.stringify(session)}
      </Text>
    </Flex>
  );
}
