import axios from "axios";
import { Puzzle } from "../models/puzzles";

const baseUri = process.env.DEV_URL;
const puzzlesApi = `${baseUri}/api/puzzles`;

export async function getAllPuzzles() {
	const result = await axios.get(puzzlesApi);
	return result.data as Puzzle[];
}

export async function getPuzzle(id: string) {
	const test = await axios.get(`${puzzlesApi}/${id}`);
	return test.data as unknown as Puzzle;
}
