import { createContext, useContext, useState } from "react";
import { ITask, ITaskListContextProps } from "./interfaces";

const TaskListContext = createContext<ITaskListContextProps>({
	setState: () => {},
	state: [],
});

export const TaskContextProvider = ({
	children,
}: {
	children: JSX.Element[] | JSX.Element;
}) => {
	const [state, setState] = useState<ITask[]>([]);

	return (
		<TaskListContext.Provider value={{ state, setState }}>
			{children}
		</TaskListContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskListContext);
