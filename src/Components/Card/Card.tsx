import MuiCard from "@mui/material/Card";
import MuiCardActions from "@mui/material/CardActions";
import MuiCardContent from "@mui/material/CardContent";
import MuiCardHeader from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";
import React, { JSX } from "react";

const StyledCard = styled(MuiCard)({
	margin: "0.5rem",
});

type CardProps = {
	avatar?: JSX.Element & React.ReactNode;
	headerAction?: JSX.Element & React.ReactNode;
	title?: string;
	subHeader?: string;
	children?: React.ReactNode;
	actions?: React.ReactNode;
};

const Card = ({
	avatar,
	title,
	subHeader,
	headerAction,
	children,
	actions,
}: CardProps) => {
	return (
		<StyledCard>
			{title && (
				<MuiCardHeader
					avatar={avatar}
					action={headerAction}
					title={title}
					subheader={subHeader}
				/>
			)}
			{children && <MuiCardContent>{children}</MuiCardContent>}
			{actions && <MuiCardActions>{actions}</MuiCardActions>}
		</StyledCard>
	);
};

export default React.memo(Card);
