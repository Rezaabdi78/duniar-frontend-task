import { useTaskContext } from "@/utils/context";
import { findChanges, getStatusColor } from "@/utils/functions";
import { ITask } from "@/utils/interfaces";
import { AddIcon, EditIcon, RepeatIcon } from "@chakra-ui/icons";
import {
	Button,
	Card,
	CardBody,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Icon,
	IconButton,
	Input,
	LightMode,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	VStack,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useEffect, useState } from "react";

const options = ["todo", "inProgress", "inQA", "done", "deployed", "blocked"];

export const AddTaskModal = () => {
	const toast = useToast({
		duration: 3000,
		isClosable: true,
		position: "bottom-left",
	});
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { setState } = useTaskContext();
	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setState((c) => {
			const updatedTasks = [
				...c,
				{
					...data,
					id: (c.length + 1).toString(),
					history: [
						{
							time: new Date().toString(),
							new: { ...data },
							prev: {},
						},
					],
				},
			];

			toast({
				description: "Task was created successfully!",
				status: "success",
				title: "Result",
			});

			onClose();
			return updatedTasks;
		});
	};
	const [data, setData] = useState<Omit<ITask, "history">>({
		id: "-1",
		desc: "",
		status: "todo",
		title: "",
	});

	useEffect(() => {
		if (isOpen) {
			setData({
				id: "-1",
				desc: "",
				status: "todo",
				title: "",
			});
		}
	}, [isOpen]);

	const isDisabled =
		!data.status || data.desc.length === 0 || data.title.length === 0;
	return (
		<>
			<Card
				onClick={onOpen}
				variant={"outline"}
				align="center"
				justify={"center"}
				_hover={{ cursor: "pointer" }}
				border="2px dashed gray"
			>
				<CardBody display={"flex"}>
					<VStack spacing={4} justify={"center"}>
						<Icon as={AddIcon} boxSize={42} color="GrayText" />
						<Heading size="lg" color="GrayText">
							Add New Task
						</Heading>
					</VStack>
				</CardBody>
			</Card>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay>
					<ModalContent>
						<ModalCloseButton />
						<ModalHeader>Add New Task</ModalHeader>
						<form onSubmit={handleSubmitForm}>
							<ModalBody>
								<VStack>
									<FormControl isRequired>
										<FormLabel>Task Title</FormLabel>
										<Input
											variant="filled"
											value={data.title}
											onChange={(e) =>
												setData((c) => ({
													...c,
													title: e.target.value,
												}))
											}
										/>
									</FormControl>
									<FormControl isRequired>
										<FormLabel>Task Description</FormLabel>
										<Textarea
											variant="filled"
											value={data.desc}
											minH={24}
											maxH={48}
											onChange={(e) =>
												setData((c) => ({
													...c,
													desc: e.target.value,
												}))
											}
										/>
									</FormControl>
									<FormControl isRequired>
										<FormLabel>Task Status</FormLabel>
										<VStack align={"stretch"}>
											<Select<
												{
													label: string;
													value: string;
												},
												false
											>
												variant="filled"
												value={{
													label: data.status.toUpperCase(),
													value: data.status,
												}}
												options={options.map((o) => ({
													label: o.toUpperCase(),
													value: o,
												}))}
												onChange={(e) => {
													setData((c) => ({
														...c,
														status: e?.value as ITask["status"],
													}));
												}}
											/>
										</VStack>
									</FormControl>
								</VStack>
							</ModalBody>
							<ModalFooter gap={4}>
								<Button onClick={onClose}>Cancel</Button>
								<Button
									colorScheme="blue"
									type="submit"
									isDisabled={isDisabled}
								>
									Confirm
								</Button>
							</ModalFooter>
						</form>
					</ModalContent>
				</ModalOverlay>
			</Modal>
		</>
	);
};
