import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export const MenuToggle = (props: {
	toggle: VoidFunction;
	isOpen: boolean;
}) => {
	return (
		<IconButton
			display={{ base: "block", md: "none" }}
			aria-label="menu-toggle-btn"
			onClick={props.toggle}
			variant={"outline"}
			color={"white"}
			colorScheme="blue"
			size="lg"
			icon={
				props.isOpen ? (
					<CloseIcon boxSize={5} />
				) : (
					<HamburgerIcon boxSize={5} />
				)
			}
		/>
	);
};
