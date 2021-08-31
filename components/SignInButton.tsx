import { Button, Flex } from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/client";

export function SignInButton(props) {
  const [session] = useSession();

  return session ? (
    <Button
      width="100%"
      borderRadius="8"
      bg="blue.400"
      p="6"
      onClick={() =>
        props.social === "Google" ? signIn("google") : signIn("facebook")
      }
    >
      Welcome {session.user.name}
    </Button>
  ) : (
    <Button
      width="100%"
      borderRadius="8"
      bg="blue.400"
      p="6"
      onClick={() =>
        props.social === "Google" ? signIn("google") : signIn("facebook")
      }
    >
      Sign In With {props.social}
    </Button>
  );
}
