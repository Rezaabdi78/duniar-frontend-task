import { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { NavbarContainer } from "./container";
import { Logo } from "./Logo";
import { MenuLinks } from "./MenuLinks";
export const Header: React.FC<{}> = ({ ...props }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => setIsOpen(!isOpen);

	return (
		<NavbarContainer {...props}>
			<Logo
				w="100px"
				color={["white", "white", "blue.500", "blue.500"]}
			/>
			<MenuToggle isOpen={isOpen} toggle={handleToggle} />
			<MenuLinks isOpen={isOpen} />
		</NavbarContainer>
	);
};
