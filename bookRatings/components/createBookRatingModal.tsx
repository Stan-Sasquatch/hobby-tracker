import { Box, Button, Modal } from "@mui/material";
import { CreateBookRating } from "bookRatings/api";
import BooksSearch from "books/components/booksSearch";
import { GoogleVolume } from "books/models";
import { useRouter } from "next/router";
import React from "react";
import { FunctionComponent } from "react";
import { HoverRating } from "./hoverRating";

interface CreateBookRatingModalProps {
	open: boolean;
	onClose: () => void;
}

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const CreateBookRatingModal: FunctionComponent<CreateBookRatingModalProps> = ({ open, onClose }) => {
	const [volume, setVolume] = React.useState<GoogleVolume | null>(null);
	const [rating, setRating] = React.useState<number | null>(null);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [submitResponse, setSubmitResponse] = React.useState<string>("");

	const submitDisabled = !volume || !rating || loading;
	const handleSubmit = async () => {
		if (!submitDisabled) {
			setLoading(true);
			const response = await CreateBookRating(volume, rating);
			setSubmitResponse(response);
			reset();
			router.replace(router.asPath);
			setLoading(false);
		}
	};

	const reset = () => {
		setVolume(null);
		setRating(null);
		setLoading(false);
	};

	const closeAndReset = () => {
		onClose();
		reset();
		setSubmitResponse("");
	};

	const router = useRouter();

	return (
		<Modal open={open} onClose={closeAndReset}>
			<Box sx={style}>
				<h2>Find a book to rate</h2>
				<BooksSearch selectedBookVolume={volume} setSelectedBookVolume={setVolume} />
				{volume && <HoverRating value={rating} setValue={setRating} />}
				<Button variant="contained" onClick={handleSubmit} disabled={submitDisabled}>
					Submit
				</Button>
				{submitResponse && (
					<>
						<h3>{submitResponse}</h3>
						<Button variant="contained" onClick={closeAndReset}>
							Close
						</Button>
					</>
				)}
			</Box>
		</Modal>
	);
};

export default CreateBookRatingModal;
