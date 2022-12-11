import axios from "axios";
import { googleVolumeQueryTypes } from "common/models";
import { GoogleVolumesResponse } from "./models";
import secrets from "secrets.json";

export async function authorSearchGoogleVolumes(volumeSearchText: string, authorSearchText: string) {
	const api = "https://www.googleapis.com/books/v1";

	const query = `volumes?q=${volumeSearchText}+${googleVolumeQueryTypes.author}:${authorSearchText}&key=${secrets.GOOGLE_BOOKS_API_KEY}`;

	const response = await axios.get<GoogleVolumesResponse>(`${api}/${query}`);

	const { data } = response;
	GoogleVolumesResponse.parse(data);

	return data;
}
