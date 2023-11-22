export interface ITask {
	title: string;
	status: "todo" | "blocked" | "inProgress" | "inQA";
	desc: string;
}

export interface ITaskAction extends Partial<ITask> {}

export interface ITaskListContextProps {
	state: ITask[];
	setState: React.Dispatch<React.SetStateAction<ITask[]>>;
}
