import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

export default function Header() {
  const [session] = useSession();
  const { push } = useRouter();

  return session ? (
    <Flex
      w="100vw"
      bg="gray.800"
      h="5vh"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Box bg="pink.700" borderRadius={8} pt={2} pb={2} pr={1} pl={2} mr={8}>
        <Text color="whiteAlpha.900">
          Hello, {session.user.name}{" "}
          <Button
            boder="none"
            size="xs"
            bg="none"
            hoverColor="none"
            onClick={() => signOut()}
          >
            {" "}
            X{" "}
          </Button>
        </Text>
      </Box>
    </Flex>
  ) : (
    <Flex
      w="100vw"
      bg="gray.800"
      h="50px"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Text color="whiteAlpha.900" pt={2} pb={2} pr={1} pl={2} mr={8}>
        Hello, Stranger!
      </Text>
    </Flex>
  );
}
