import React, { FC } from "react";
import { Box, Text } from "ink";

// App functional component.
const Style = {
	backgroundColor: "#161b22",
	textColor: "#e6e6e6",
	brandColor: "#2f9ece",
};
type PropTypes = {
	name?: string;
};
export const App: FC<PropTypes> = ({ name = "Stranger" }) => {
	return (
		<Box
			borderStyle="round"
			borderColor={Style.brandColor}
			flexDirection="column"
			alignItems="center"
		>
			<Text color={Style.textColor} backgroundColor={Style.backgroundColor}>
				{`👋 Hello 👋`}
			</Text>
			<Text bold color={Style.textColor} backgroundColor={Style.brandColor}>
				{name}
			</Text>
		</Box>
	);
};
