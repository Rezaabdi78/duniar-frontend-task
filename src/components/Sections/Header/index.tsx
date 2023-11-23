import { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { NavbarContainer } from "./container";
import { Logo } from "./Logo";
import { MenuLinks } from "./MenuLinks";
import { HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export const Header: React.FC<{}> = ({ ...props }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { toggleColorMode, colorMode } = useColorMode();
	const handleToggle = () => setIsOpen(!isOpen);

	return (
		<NavbarContainer {...props}>
			<HStack spacing={2}>
				<IconButton
					icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
					onClick={toggleColorMode}
					size="sm"
					aria-label="toggle-colormode"
				/>
				<Logo
					maxW={32}
					w="full"
					color={
						colorMode === "light"
							? ["white", "white", "blue.500", "blue.500"]
							: ["white", "white", "blue.300", "blue.300"]
					}
				/>
			</HStack>
			<MenuToggle isOpen={isOpen} toggle={handleToggle} />
			<MenuLinks isOpen={isOpen} />
		</NavbarContainer>
	);
};
