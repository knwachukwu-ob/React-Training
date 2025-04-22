import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";  
import { Button } from "../../../Components";
import { GetPropertiesListingType } from "./queries/types";

type PropertyListingProps = {
  properties: GetPropertiesListingType[];   
};

const PropertyListing = ({ properties }: PropertyListingProps) => { 
    const navigate = useNavigate();

    const handleRowClick = (id: number) => {
        navigate(`/properties/${id}`);
    };

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 200 },
    ];

    return (
        <>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "40%" }}>
        <DataGrid
            rows={properties}
            columns={columns}
            onRowClick={(params) => handleRowClick(params.row.id)}
            
        />
        
        <Button onClick={() => navigate("/properties/new")}>
            Add Property    
        </Button>
        </div>
            </>
    );
};

export default React.memo(PropertyListing);