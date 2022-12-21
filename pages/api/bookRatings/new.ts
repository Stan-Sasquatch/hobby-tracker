import type { NextApiRequest, NextApiResponse } from "next";
import { handleTryCatch } from "@backend/utils";
import { CreateNewBookAndRating } from "@backend/crud/bookRatings/Commands";

export default function bookRatingsHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method, body } = req;

	switch (method) {
		case "POST":
			return handleTryCatch(CreateNewBookAndRating(body), res);
		default:
			res.setHeader("Allow", ["POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
