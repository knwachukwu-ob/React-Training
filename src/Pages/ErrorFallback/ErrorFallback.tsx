import React from "react";
import { Button, Card, Typography } from "../../Components";

type FallbackProps = {
	error: Error;
	resetErrorBoundary: (...args: Array<unknown>) => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<Card
			title="Something went wrong"
			actions={<Button onClick={resetErrorBoundary}>Try again</Button>}
		>
			<Typography>{error.message}</Typography>
		</Card>
	);
};

export default React.memo(ErrorFallback);
