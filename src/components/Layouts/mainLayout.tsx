import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "@/components/Sections/Header";
export const MainLayout: React.FC<{ children: React.ReactNode }> = (props) => {
	return (
		<Flex direction="column" align="center" m="0 auto" {...props}>
			<Header />
			<Flex
				maxW={{ xl: "1200px" }}
				w="full"
				align={"center"}
				justify={"center"}
			>
				{props.children}
			</Flex>
		</Flex>
	);
};
