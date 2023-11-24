import { createContext, useContext, useState } from "react";
import { ITask, ITaskAction, ITaskListContextProps } from "./interfaces";

const TaskListContext = createContext<ITaskListContextProps>({
	setState: () => {},
	state: [
		{
			id: "1",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean. Vehicula ipsum a arcu cursus vitae congue. Nec ullamcorper sit amet risus nullam eget felis. Ac auctor augue mauris augue. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Malesuada nunc vel risus commodo viverra maecenas. Ac turpis egestas maecenas pharetra. Varius morbi enim nunc faucibus a. Metus dictum at tempor commodo ullamcorper a lacus. Cursus eget nunc scelerisque viverra mauris. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ridiculus mus mauris vitae ultricies.",
			status: "todo",
			title: "Task number one",
			history: [],
		},
	],
});

export const TaskContextProvider = ({
	children,
}: {
	children: JSX.Element[] | JSX.Element;
}) => {
	const [state, setState] = useState<ITask[]>([
		{
			id: "1",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean. Vehicula ipsum a arcu cursus vitae congue. Nec ullamcorper sit amet risus nullam eget felis. Ac auctor augue mauris augue. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Malesuada nunc vel risus commodo viverra maecenas. Ac turpis egestas maecenas pharetra. Varius morbi enim nunc faucibus a. Metus dictum at tempor commodo ullamcorper a lacus. Cursus eget nunc scelerisque viverra mauris. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ridiculus mus mauris vitae ultricies.",
			status: "todo",
			title: "Task number one",
			history: [],
		},
		{
			id: "2",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean. Vehicula ipsum a arcu cursus vitae congue. Nec ullamcorper sit amet risus nullam eget felis. Ac auctor augue mauris augue. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Malesuada nunc vel risus commodo viverra maecenas. Ac turpis egestas maecenas pharetra. Varius morbi enim nunc faucibus a. Metus dictum at tempor commodo ullamcorper a lacus. Cursus eget nunc scelerisque viverra mauris. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ridiculus mus mauris vitae ultricies.",
			status: "todo",
			title: "Task number one",
			history: [],
		},
		{
			id: "3",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean. Vehicula ipsum a arcu cursus vitae congue. Nec ullamcorper sit amet risus nullam eget felis. Ac auctor augue mauris augue. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Malesuada nunc vel risus commodo viverra maecenas. Ac turpis egestas maecenas pharetra. Varius morbi enim nunc faucibus a. Metus dictum at tempor commodo ullamcorper a lacus. Cursus eget nunc scelerisque viverra mauris. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ridiculus mus mauris vitae ultricies.",
			status: "todo",
			title: "Task number one",
			history: [],
		},
		{
			id: "4",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean. Vehicula ipsum a arcu cursus vitae congue. Nec ullamcorper sit amet risus nullam eget felis. Ac auctor augue mauris augue. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Malesuada nunc vel risus commodo viverra maecenas. Ac turpis egestas maecenas pharetra. Varius morbi enim nunc faucibus a. Metus dictum at tempor commodo ullamcorper a lacus. Cursus eget nunc scelerisque viverra mauris. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ridiculus mus mauris vitae ultricies.",
			status: "todo",
			title: "Task number one",
			history: [],
		},
	]);

	return (
		<TaskListContext.Provider value={{ state, setState }}>
			{children}
		</TaskListContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskListContext);
