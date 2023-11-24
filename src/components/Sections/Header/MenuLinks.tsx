import { Box, BoxProps, Button, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface MenuItemProps extends BoxProps {
	isLast?: boolean;
	to?: string;
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}
const MenuItem: React.FC<MenuItemProps> = ({
	children,
	isLast,
	to = "/",
	...rest
}) => {
	return (
		<Link href={to}>
			<Box display="flex" {...rest}>
				{children}
			</Box>
		</Link>
	);
};

export const MenuLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "block" }}
			flexBasis={{ base: "100%", md: "auto" }}
		>
			<Stack
				spacing={8}
				align="center"
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				mt={[8, 8, 0, 0]}
			>
				<MenuItem to="/">
					<Button>Home</Button>
				</MenuItem>
				<MenuItem to="/how">
					<Button colorScheme="gray" variant="ghost" isDisabled>
						How It Works
					</Button>
				</MenuItem>
			</Stack>
		</Box>
	);
};
