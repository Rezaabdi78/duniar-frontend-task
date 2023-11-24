import { ITask } from "./interfaces";

export const getStatusColor = (status: ITask["status"]) => {
	let color = "gray";
	switch (status) {
		case "blocked":
			color = "orange";
			break;
		case "inProgress":
			color = "teal";
			break;
		case "done":
			color = "blue";
			break;
		case "deployed":
			color = "green";
			break;
		case "inQA":
			color = "purple";
			break;
		case "todo":
		default:
			break;
	}
	return color;
};

export const findChanges = (
	original: Partial<Omit<ITask, "history" | "id">>,
	updated: Partial<Omit<ITask, "history" | "id">>
) => {
	const newValues: Partial<Omit<ITask, "history" | "id">> = {};
	const prevValues: Partial<Omit<ITask, "history" | "id">> = {};

	Object.keys(updated).forEach((key) => {
		if (
			original[key as keyof Partial<Omit<ITask, "history" | "id">>] !==
			updated[key as keyof Partial<Omit<ITask, "history" | "id">>]
		) {
			newValues[key as keyof Partial<Omit<ITask, "history" | "id">>] =
				updated[key as keyof Partial<Omit<ITask, "history" | "id">>];
			prevValues[key as keyof Partial<Omit<ITask, "history" | "id">>] =
				original[key as keyof Partial<Omit<ITask, "history" | "id">>];
		}
	});

	return { newValues, prevValues };
};