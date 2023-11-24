import { useTaskContext } from "@/utils/context";
import { TodoItem } from "../todoItem/todoItem";
import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { AddTaskModal } from "./addTaskModal";
import { ReactIcon } from "@chakra-ui/icons";

export const TodoList = () => {
	const { state, setState } = useTaskContext();

	return state.length ? (
		<SimpleGrid
			p={4}
			w="full"
			spacing={4}
			templateColumns="repeat(auto-fill, minmax(260px, 1fr))"
			templateRows="repeat(auto-fill, minmax(260px, 1fr))"
		>
			<AddTaskModal />
			{state.map((data) => (
				<TodoItem data={data} key={data.id} />
			))}
		</SimpleGrid>
	) : (
		<VStack spacing={12} mt="20%">
			<Text fontSize="3xl" fontWeight={700}>
				You don&apos;t have any tasks yet. Take a nap <ReactIcon />
			</Text>
			<AddTaskModal />
		</VStack>
	);
};
