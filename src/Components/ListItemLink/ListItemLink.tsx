import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import React, { forwardRef, useMemo } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router";
import ListItemButton from "../ListItemButton/ListItemButton";
import ListItemIcon from "../ListItemIcon/ListItemIcon";
import ListItemText from "../ListItemText/ListItemText";

const StyledMenuItem = styled(MenuItem)({
	padding: 0,
	marginTop: "0.4rem",
	marginBottom: "0.4rem",
});

interface ListItemLinkProps {
	icon?: React.ReactElement;
	primary: string;
	to: string;
	selected?: boolean;
}

const ListItemLink = ({ icon, primary, to, selected }: ListItemLinkProps) => {
	const renderLink = useMemo(
		() =>
			forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(function Link(
				itemProps,
				ref,
			) {
				return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
			}),
		[to],
	);

	return (
		<StyledMenuItem
			disableGutters
			selected={selected}
			LinkComponent={renderLink}
		>
			<ListItemButton component={renderLink}>
				{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
				<ListItemText primary={primary} />
			</ListItemButton>
		</StyledMenuItem>
	);
};

export default React.memo(ListItemLink);
