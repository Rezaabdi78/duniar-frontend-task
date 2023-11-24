import { ITask } from "@/utils/interfaces";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
	AlertDialog,
	AlertDialogOverlay,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	HStack,
	Heading,
	LightMode,
	Tag,
	Text,
	VStack,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { DeleteAlertDialog } from "./deleteAlertDialog";
import { getStatusColor } from "@/utils/functions";
import { EditTaskModal } from "./editTaskModal";

export const TodoItem = (props: { data: ITask }) => {
	const [DetailModalOpen, setDetailModalOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	return (
		<Card>
			<CardHeader>
				<Flex align="center" justify="space-between">
					<Heading fontWeight={"semibold"} size={"md"} isTruncated>
						{props.data.title}
					</Heading>
					<Tag
						size={"sm"}
						fontFamily={"monospace"}
						colorScheme="gray"
					>
						id:{props.data.id}
					</Tag>
				</Flex>
			</CardHeader>
			<Divider />
			<CardBody>
				<VStack align="stretch" spacing={2}>
					<Text noOfLines={3}>{props.data.desc}</Text>
					<Divider />
					<HStack justify={"space-between"}>
						<Text fontWeight={700}>Status:</Text>
						<Tag
							size="md"
							colorScheme={getStatusColor(props.data.status)}
						>
							{props.data.status.toUpperCase()}
						</Tag>
					</HStack>
				</VStack>
			</CardBody>
			<Divider />
			<CardFooter justify={"space-between"}>
				<ButtonGroup
					size="sm"
					variant={useColorModeValue("ghost", "solid")}
					justifyContent={"space-between"}
					w="full"
				>
					<Button
						leftIcon={<ViewIcon />}
						colorScheme="blue"
						onClick={() => {
							setDetailModalOpen(true);
						}}
					>
						View
					</Button>
					<EditTaskModal id={props.data.id} />
					<DeleteAlertDialog id={props.data.id} />
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};
