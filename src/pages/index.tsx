import { Flex } from "@chakra-ui/react";
import { useTaskContext } from "@/utils/context";
import { Header } from "@/components/Sections/Header";
import { MainLayout } from "@/components/Layouts/mainLayout";
import { TodoList } from "@/components/Sections/TodoList";

export default function Home() {
	return (
		<MainLayout>
			<TodoList />
		</MainLayout>
	);
}
