import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export const MenuToggle = (props: {
	toggle: VoidFunction;
	isOpen: boolean;
}) => {
	return (
		<IconButton
			aria-label="menu-toggle-btn"
			onClick={props.toggle}
			icon={props.isOpen ? <CloseIcon /> : <HamburgerIcon />}
		/>
	);
};
