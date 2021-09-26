import {
  Button,
  Flex,
  FormControl,
  Grid,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  task: string;
  taskType: string;
};

export default function Welcome() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormValues>();
  const [session] = useSession();
  const { push } = useRouter();
  console.log(watch());

  function onSubmit(values) {
    setTimeout(() => alert(JSON.stringify(values)));
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ task: "" });
    }
  });
  if (process.browser) {
    if (!session) {
      push("/");
    }
  }
  return (
    <>
      <Flex
        h="95vh"
        w="100vw"
        alignItems="center"
        justifyContent="center"
        bg="gray.900"
      >
        <Flex
          width="70%"
          maxWidth={600}
          borderRadius={8}
          bg="gray.700"
          flexDirection="column"
          mt="8"
          p="4"
        >
          <Text
            mb={3}
            textAlign="center"
            color="whiteAlpha.900"
            fontSize="xl"
            w="100%"
          >
            This will be Our Todo List
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl w="100%" justifyContent="center" alignItems="center">
              <Grid gridGap={3} gridTemplateColumns="68% 30%">
                <Input
                  id="task"
                  variant="flushed"
                  placeholder="What you got to do?"
                  alignItems="center"
                  textAlign="center"
                  color="white"
                  {...register("task", { required: "true" })}
                ></Input>
                <Select
                  {...register("taskType", { required: "true" })}
                  id="taskType"
                  textAlign="center"
                  bg="pink.600"
                  borderColor="pink.600"
                  placeholder="Task Type"
                >
                  <option>Gym</option>
                  <option>Work</option>
                  <option>Code</option>
                </Select>
              </Grid>

              <Flex w="100%" justifyContent="center">
                <Button
                  type="submit"
                  mt={3}
                  _hover={{ bgColor: "purple.700" }}
                  bg="purple.500"
                  color="whiteAlpha.900"
                  w="40%"
                >
                  {" "}
                  Submit
                </Button>
              </Flex>
            </FormControl>
          </form>
        </Flex>
      </Flex>
    </>
  );
}
