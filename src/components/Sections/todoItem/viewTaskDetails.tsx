import { useTaskContext } from "@/utils/context";
import { formatDate, getStatusColor } from "@/utils/functions";
import { ITask } from "@/utils/interfaces";
import { ViewIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Button,
	Divider,
	HStack,
	Heading,
	LightMode,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	StackDivider,
	Table,
	TableContainer,
	Tag,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";

export const TaskDetailsModal = (props: { id: string }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { state } = useTaskContext();

	const task = state.find((item) => item.id === props.id);

	return (
		<>
			<LightMode>
				<Button
					leftIcon={<ViewIcon />}
					colorScheme="blue"
					onClick={onOpen}
				>
					View
				</Button>
			</LightMode>
			<Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
				<ModalOverlay>
					<ModalContent>
						<ModalCloseButton />
						<ModalHeader>Task Details</ModalHeader>
						<Divider />
						<ModalBody>
							<VStack
								align="flex-start"
								p={8}
								spacing={6}
								divider={<StackDivider />}
							>
								<HStack
									justify={"space-between"}
									align={"flex-start"}
									w="100%"
								>
									<Heading>{task?.title}</Heading>
									<VStack spacing={2} align="flex-end">
										<Tag
											colorScheme={getStatusColor(
												task?.status ?? "todo"
											)}
											size="lg"
										>
											{task?.status.toUpperCase()}
										</Tag>
										<Tag colorScheme="orange" size="lg">
											Date Created:{" "}
											{formatDate(
												new Date(
													task?.history[0].time ?? ""
												)
											)}
										</Tag>
									</VStack>
								</HStack>
								<VStack spacing={4} w="full" align="flex-start">
									<Heading size="lg">Description :</Heading>
									<Text>{task?.desc}</Text>
								</VStack>
								<VStack spacing={4} w="full" align="flex-start">
									<Heading size="lg">Action Logs :</Heading>
									<Accordion allowToggle w="full">
										{task?.history.map((h, i) => {
											return (
												<AccordionItem key={i}>
													<AccordionButton>
														<Text
															as="span"
															flex="1"
															textAlign="left"
															fontWeight={700}
														>
															{formatDate(
																new Date(
																	task
																		?.history[0]
																		.time ??
																		""
																)
															)}{" "}
															- Click to see
															change details
														</Text>
														<AccordionIcon />
													</AccordionButton>
													<AccordionPanel py={2}>
														{
															<TableContainer>
																<Table size="sm">
																	<Thead>
																		<Tr>
																			<Th>
																				Property
																			</Th>
																			<Th>
																				Previous
																			</Th>
																			<Th>
																				Current
																			</Th>
																		</Tr>
																	</Thead>
																	<Tbody>
																		{Object.keys(
																			h.new
																		).map(
																			(
																				key
																			) => (
																				<Tr
																					key={
																						key
																					}
																				>
																					<Td>
																						{
																							key
																						}
																					</Td>
																					<Td>
																						{key ===
																						"status" ? (
																							<Tag
																								colorScheme={getStatusColor(
																									h
																										.prev[
																										key
																									] ??
																										undefined
																								)}
																							>
																								{h
																									.prev[
																									key
																								] ??
																									"---"}
																							</Tag>
																						) : (
																							<Text
																								noOfLines={
																									2
																								}
																							>
																								{h
																									.prev[
																									key as keyof Partial<
																										Omit<
																											ITask,
																											| "id"
																											| "history"
																										>
																									>
																								] ??
																									"---"}
																							</Text>
																						)}
																					</Td>
																					<Td>
																						{key ===
																						"status" ? (
																							<Tag
																								colorScheme={getStatusColor(
																									h
																										.new[
																										key
																									] ??
																										undefined
																								)}
																							>
																								{h
																									.new[
																									key
																								] ??
																									"---"}
																							</Tag>
																						) : (
																							<Text
																								noOfLines={
																									2
																								}
																							>
																								{h
																									.new[
																									key as keyof Partial<
																										Omit<
																											ITask,
																											| "id"
																											| "history"
																										>
																									>
																								] ??
																									"---"}
																							</Text>
																						)}
																					</Td>
																				</Tr>
																			)
																		)}
																	</Tbody>
																</Table>
															</TableContainer>
														}
													</AccordionPanel>
												</AccordionItem>
											);
										})}
									</Accordion>
								</VStack>
							</VStack>
						</ModalBody>
						<ModalFooter gap={4}>
							<Button onClick={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</ModalOverlay>
			</Modal>
		</>
	);
};
