import { useTaskContext } from "@/utils/context";
import { getStatusColor } from "@/utils/functions";
import { ITask } from "@/utils/interfaces";
import { EditIcon, RepeatIcon } from "@chakra-ui/icons";
import {
	Button,
	FormControl,
	FormLabel,
	HStack,
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

export const EditTaskModal = (props: { id: string }) => {
	const toast = useToast({
		duration: 3000,
		isClosable: true,
		position: "bottom-left",
	});
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { state, setState } = useTaskContext();
	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setState((c) => {
			const updatedTasks = [...c];
			const ind = updatedTasks.findIndex((v) => v.id === props.id);
			if (ind !== -1) {
				updatedTasks[ind] = {
					...updatedTasks[ind],
					...data,
				};
				updatedTasks[ind].history.push({
					time: new Date().toString(),
					new: data,
					prev: updatedTasks[ind],
				});
				toast({
					description: "Task was updated successfully!",
					status: "success",
					title: "Result",
				});
			} else {
				toast({
					description: "Failed to update task. Try again!",
					status: "error",
					title: "Error",
				});
			}
			onClose();
			return updatedTasks;
		});
	};
	const [data, setData] = useState<ITask>(
		state.find((item) => item.id === props.id) ?? {
			id: "-1",
			desc: "",
			history: [],
			status: "todo",
			title: "",
		}
	);
	const [statusHistory, setStatusHistory] = useState<ITask["status"][]>([]);
	const changeStatus = (newStatus: ITask["status"]) => {
		if (statusHistory.length === 0) {
			setStatusHistory([data.status]);
			setData((c) => ({ ...c, status: newStatus }));
		} else {
			toast({
				description: "Status can only be changed once.",
				status: "info",
				title: "Change Not Allowed",
			});
		}
	};

	const undoStatusChange = () => {
		// Revert to the previous status if possible
		if (statusHistory.length > 0) {
			const previousStatus = statusHistory[0];
			setData((c) => ({ ...c, status: previousStatus }));
			setStatusHistory([]); // Clear the history after undoing
		}
	};

	useEffect(() => {
		if (isOpen) {
			setStatusHistory([]);
			setData(
				state.find((item) => item.id === props.id) ?? {
					id: "-1",
					desc: "",
					history: [],
					status: "todo",
					title: "",
				}
			);
		}
	}, [isOpen]);
	const availableOptions = (currentStatus: ITask["status"]) => {
		let options = [
			"todo",
			"inProgress",
			"inQA",
			"done",
			"deployed",
			"blocked",
		];
		switch (currentStatus) {
			case "blocked":
				options = ["todo"];
				break;
			case "inProgress":
				options = ["blocked", "inQA"];
				break;
			case "todo":
				options = ["inProgress"];
				break;
			case "inQA":
				options = ["todo", "done"];
				break;
			case "done":
				options = ["deployed"];
				break;
			case "deployed":
				options = [];
			default:
				break;
		}
		return options;
	};

	const task = state.find((item) => item.id === props.id);
	const isDisabled =
		task &&
		data.status === task.status &&
		data.desc === task.desc &&
		data.title === task.title;
	return (
		<>
			<LightMode>
				<Button
					leftIcon={<EditIcon />}
					colorScheme="gray"
					onClick={onOpen}
				>
					Edit
				</Button>
			</LightMode>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay>
					<ModalContent>
						<ModalCloseButton />
						<ModalHeader>Edit Task</ModalHeader>
						<form onSubmit={handleSubmitForm}>
							<ModalBody>
								<VStack>
									<FormControl>
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
									<FormControl>
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
									<FormControl>
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
												options={availableOptions(
													data.status
												).map((o) => ({
													label: o.toUpperCase(),
													value: o,
												}))}
												onChange={(e) =>
													changeStatus(
														(e?.value as ITask["status"]) ??
															"todo"
													)
												}
												isDisabled={
													statusHistory.length !==
														0 ||
													data.status === "deployed"
												}
											/>
											{statusHistory.length !== 0 && (
												<Button
													aria-label="revert change"
													leftIcon={<RepeatIcon />}
													onClick={undoStatusChange}
												>
													Revert Change
												</Button>
											)}
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
