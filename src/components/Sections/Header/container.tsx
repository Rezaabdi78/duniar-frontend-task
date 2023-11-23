import { Flex } from "@chakra-ui/react";

export const NavbarContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
	...props
}) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="center"
			wrap="wrap"
			w="100%"
			mb={8}
			px={8}
			py={4}
			bg={["blue.500", "blue.500", "blue.50", "blue.50"]}
			color={["white", "white", "blue.700", "blue.700"]}
			boxShadow={"md"}
			{...props}
		>
			<Flex
				align="center"
				justify="space-between"
				wrap="wrap"
				w="100%"
				maxW={"1200px"}
			>
				{children}
			</Flex>
		</Flex>
	);
};
