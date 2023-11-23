import { Box, Icon, BoxProps, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const Logo = (props: BoxProps) => {
	return (
		<Box {...props}>
			<Text fontSize="lg" fontWeight="bold">
				Duniar-ToDo
			</Text>
		</Box>
	);
};
