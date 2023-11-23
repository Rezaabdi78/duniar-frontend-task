import { useTaskContext } from "@/utils/context";
import { DeleteIcon } from "@chakra-ui/icons";
import {
	useDisclosure,
	Button,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	LightMode,
} from "@chakra-ui/react";
import React from "react";

export const DeleteAlertDialog = (props: { id: string }) => {
	const { setState } = useTaskContext();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const cancelRef = React.useRef(null);
	const handleConfirmDelete = () => {
		setState((c) => c.filter((d) => d.id !== props.id));
		onClose();
		null;
	};
	return (
		<>
			<LightMode>
				<Button
					leftIcon={<DeleteIcon />}
					colorScheme="red"
					onClick={onOpen}
				>
					Delete
				</Button>
			</LightMode>
			<AlertDialog
				isCentered
				isOpen={isOpen}
				onClose={onClose}
				leastDestructiveRef={cancelRef}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Task
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can&apos;t undo this action
							afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								onClick={handleConfirmDelete}
								ml={3}
							>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};
