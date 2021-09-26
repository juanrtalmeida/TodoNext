import { Button, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SignInButton } from "../components/SignInButton";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const [session] = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (session) {
      push("/welcome");
    }
  }, [session]);
  return (
    <Flex
      h="95vh"
      w="100vw"
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
    >
      <Flex
        width="100%"
        maxWidth={300}
        borderRadius={8}
        alignItems="center"
        justifyContent="center"
        bg="gray.700"
        flexDirection="column"
        mt="8"
        p="4"
      >
        <Stack spacing="4">
          {session ? (
            <>
              <SignInButton social={session.user.name}></SignInButton>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </>
          ) : (
            <>
              <SignInButton social="Facebook"></SignInButton>
              <SignInButton social="Google"></SignInButton>
            </>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
}
