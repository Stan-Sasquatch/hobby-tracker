import { NextApiResponse } from "next";

export async function handleTryCatch<T>(request: Promise<T>, res: NextApiResponse<any>): Promise<void> {
	try {
		const response = await request;
		res.json(response);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
}
