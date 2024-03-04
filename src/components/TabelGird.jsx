import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function TabelGird(props) {
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    setPageSize(5); // Set initial page size to 5
  }, []);
  return (
    <Box
      sx={{
        "& .MuiDataGrid-root": { border: "none" },
        "& .MuiDataGrid-cell": { borderBottom: "none" },
        "& .MuiDataGrid-columnHeaders": {
          color: "rgb(107 114 128 / 0.8)",
          fontSize: "17px",
          borderBottom: "none",
        },
        "& .MuiDataGrid-footerContainer": { borderTop: "none" },
        "& .MuiDataGrid-row": {
          borderRadius: "40px",
          borderBottom: "none",
        },
      }}
    >
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        pageSize={pageSize} // Explicitly set `pageSize` prop
        pageSizeOptions={[5, 10, 100]}
        autoPageSize={false}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />
    </Box>
  );
}

export default TabelGird;
