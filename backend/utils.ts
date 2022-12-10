import { Book } from "@prisma/client";
import { NextApiResponse } from "next";

export async function handleTryCatch<T>(request: Promise<T>, res: NextApiResponse<any>): Promise<void> {
	try {
		const response = await request;
		res.json(response);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
}
type DBModel = { createdAt: Date };

export function parseModel<T extends DBModel>(res: T[]): ViewModel<T>[] {
	return res.map(parseItem);
}

export function parseItem<T extends DBModel>(model: T): ViewModel<T> {
	return { ...model, createdAt: model.createdAt.toDateString() };
}

export type ViewModel<T> = Omit<T, "createdAt"> & { createdAt: string };
