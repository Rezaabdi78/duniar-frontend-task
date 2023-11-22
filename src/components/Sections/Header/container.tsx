import { Flex } from "@chakra-ui/react";

export const NavbarContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
	...props
}) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			bg={["blue.500", "blue.500", "transparent", "transparent"]}
			color={["white", "white", "blue.700", "blue.700"]}
			{...props}
		>
			{children}
		</Flex>
	);
};
