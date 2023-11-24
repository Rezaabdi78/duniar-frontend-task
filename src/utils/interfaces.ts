export interface ITask {
	id: string;
	title: string;
	status: "todo" | "blocked" | "inProgress" | "inQA" | "done" | "deployed";
	desc: string;
	history: Array<{
		prev: Partial<Omit<ITask, "id" | "history">>;
		new: Partial<Omit<ITask, "id" | "history">>;
		time: string;
	}>;
}

export interface ITaskAction extends Partial<ITask> {}

export interface ITaskListContextProps {
	state: ITask[];
	setState: React.Dispatch<React.SetStateAction<ITask[]>>;
}
