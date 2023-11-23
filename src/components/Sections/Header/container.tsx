import { Flex, useColorModeValue } from "@chakra-ui/react";

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
			bg={useColorModeValue(
				["blue.500", "blue.500", "blue.100", "blue.100"],
				["blue.500", "blue.500", "blue.900", "blue.900"]
			)}
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
