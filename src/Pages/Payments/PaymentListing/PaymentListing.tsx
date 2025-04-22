import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { 
  Typography, Tooltip, IconButton, 
  Box,
  Button} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { GetPaymentsListingType } from './queries/types';

type PaymentListingProps = {
  payments: GetPaymentsListingType[];
};

const PaymentListing = ({ payments }: PaymentListingProps) => {
  const navigate = useNavigate();
 
  const renderLeaseCell = (params: GridRenderCellParams) => {
    const leases = params.value;
    if (!leases || leases.length === 0) {
      return <Typography color="textSecondary">No lease information</Typography>;
    }

    return (
      <Tooltip
        title={
          <Box>
            {leases.map((lease: any, index: number) => (
              <Typography variant="body2" key={index}>
                {`ID: ${lease.leaseId}, Name: ${lease.tenantName}`}
              </Typography>
            ))}
          </Box>
        }
        arrow
      >
        <IconButton size="small">
          <InfoIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  };

  const columns: GridColDef[] = [
    { field: 'paymentId', headerName: 'ID', width: 70 },
    { field: 'transactionDate', headerName: 'Transaction Date', width: 200 },
    { field: 'amount', headerName: 'Amount', width: 130 },
    { 
      field: 'leaseDto', 
      headerName: 'Leases', 
      width: 130,
      renderCell: renderLeaseCell
    },
  ];

  const rowsWithId = payments.map(payment => ({
    ...payment,
    id: payment.paymentId,
  }));

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "70%" }}>
      <DataGrid
        rows={rowsWithId}
        columns={columns}
        getRowHeight={() => 'auto'}
        onRowClick={(value) => navigate(`../payments/${value.id}`)}
      />
      <Button variant="contained" onClick={() => navigate("/payments/new")}>
            Add New Payment    
        </Button>
      </div>
    </>
  );
};

export default React.memo(PaymentListing);