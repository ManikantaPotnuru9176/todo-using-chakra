import React from "react";
import { Text, IconButton, HStack, Spacer, Card } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ todo, onEdit, onDelete, onComplete }) => {
  const { id, task, complete } = todo;

  return (
    <Card key={id} padding="20px" w="400px">
      <HStack>
        <Text
          w="250px"
          as={complete ? "s" : "p"}
          onClick={() => onComplete(id)}
        >
          {task}
        </Text>
        <Spacer />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Edit"
          fontSize="20px"
          icon={<EditIcon />}
          onClick={() => onEdit(todo)}
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="red"
          aria-label="Delete"
          fontSize="20px"
          icon={<DeleteIcon />}
          onClick={() => onDelete(id)}
        />
      </HStack>
    </Card>
  );
};

export default TodoItem;
