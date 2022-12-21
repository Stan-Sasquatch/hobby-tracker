import React, { FunctionComponent } from "react";
import { Box, Rating } from "@mui/material";

const labels: Record<number, string> = {
	0.5: "Awful",
	1: "Awful+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+",
};

interface HoverRatingProps {
	value: number | null;
	setValue: React.Dispatch<React.SetStateAction<number | null>>;
}

export const HoverRating: FunctionComponent<HoverRatingProps> = ({ value, setValue }) => {
	const [hover, setHover] = React.useState(-1);

	return (
		<div>
			<Rating
				name="hover-feedback"
				value={value}
				precision={0.5}
				onChange={(_event, newValue) => {
					setValue(newValue);
				}}
				onChangeActive={(_event, newHover) => {
					setHover(newHover);
				}}
			/>
			{(value !== null || hover !== -1) && <Box ml={2}>{labels[hover !== -1 ? hover : value ?? 0]}</Box>}
		</div>
	);
};
