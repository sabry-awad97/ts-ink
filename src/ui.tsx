import React, { FC } from "react";
import { Text } from "ink";

interface Props {
	name?: string;
}

const App: FC<Props> = ({ name = "Stranger" }) => (
	<Text>
		Hello, <Text color="green">{name}</Text>
	</Text>
);

export default App;
