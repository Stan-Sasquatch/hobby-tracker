export function parseDateTimeString<Model extends { createdAt: string }>(arg: Model): Model {
	return { ...arg, createdAt: new Date(arg.createdAt) };
}
