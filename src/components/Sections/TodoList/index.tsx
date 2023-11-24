import { useTaskContext } from "@/utils/context";
import { TodoItem } from "../todoItem/todoItem";
import { SimpleGrid, VStack } from "@chakra-ui/react";

export const TodoList = () => {
	const { state, setState } = useTaskContext();

	return (
		<SimpleGrid
			p={4}
			w="full"
			spacing={4}
			templateColumns="repeat(auto-fill, minmax(260px, 1fr))"
		>
			{state.map((data) => (
				<TodoItem data={data} key={data.id} />
			))}
		</SimpleGrid>
	);
};