import React from "react";
import { Outlet } from "react-router";
import {
	AppBar,
	Box,
	Divider,
	Drawer,
	List,
	ListItemLink,
	Toolbar,
	Typography,
} from "../Components";
import NewVersionAvailableContainer from "../Pages/NewVersionAvailable/NewVersionAvailableContainer";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)({
	display: "flex",
	overflow: "hidden",
});

const LayoutContainer = () => {
	return (
		<StyledBox>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Rental Management System
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer>
				<Toolbar />
				<Divider />
				<List>
					{/* <ListItemLink to="/" primary="Home" />
					<ListItemLink to="/weather" primary="Weather" /> */}
					<ListItemLink to="/payments" primary="Payments" />
					<ListItemLink to="/tenants" primary="Tenants" />
					<ListItemLink to="/subsidiary" primary="Subsidiary" />
					<ListItemLink to="/properties" primary="Properties" />
				</List>
			</Drawer>
			<NewVersionAvailableContainer />
			<Outlet />
		</StyledBox>
	);
};

export default React.memo(LayoutContainer);
