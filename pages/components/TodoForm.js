import React from "react";
import { Input, Button, HStack } from "@chakra-ui/react";

const TodoForm = ({ onSubmit, taskText, onTaskTextChange, buttonText }) => {
  return (
    <form onSubmit={onSubmit}>
      <HStack>
        <Input
          placeholder="Enter Todo"
          focusBorderColor="teal.400"
          w="300px"
          value={taskText}
          onChange={(e) => onTaskTextChange(e.target.value)}
        />
        <Button colorScheme="teal" size="md" onClick={onSubmit}>
          {buttonText}
        </Button>
      </HStack>
    </form>
  );
};

export default TodoForm;
