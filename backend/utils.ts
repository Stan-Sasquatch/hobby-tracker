import { NextApiResponse } from "next";

export async function handleTryCatch<T>(requestAction: Promise<T>, res: NextApiResponse<any>): Promise<void> {
	try {
		const response = await requestAction;
		res.json(response);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
}
