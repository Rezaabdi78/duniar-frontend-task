import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { TaskContextProvider } from "@/utils/context";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<TaskContextProvider>
				<Component {...pageProps} />
			</TaskContextProvider>
		</ChakraProvider>
	);
}
