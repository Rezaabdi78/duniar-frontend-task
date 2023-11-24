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
