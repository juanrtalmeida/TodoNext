import { Button, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { getSession } from "next-auth/client";
import React from "react";
import { SignInButton } from "../components/SignInButton";
import { signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session] = useSession();
  return (
    <Flex
      h="100vh"
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
              <SignInButton
                social={session ? session.user.name : ""}
              ></SignInButton>
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
