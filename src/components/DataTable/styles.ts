import { lighten } from "@mui/material";

export const classes = {

  pagination: {
    mt: 1,
    '& .MuiPaginationItem-root.Mui-selected': {
      color: '#212A2F',
      backgroundColor: 'rgba(255, 255, 255, 0.80)',
    },
    '& .MuiPaginationItem-root.Mui-selected:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    mb: 1,
  },

  dataGrid: {
    height: 'calc(100vh - 400px)',
    backgroundColor: lighten("rgba(26, 32, 44, 1)", 0.0),
    fontSize: "14px",
    border: "1px solid",
    borderColor: lighten("rgba(26, 32, 44, 1)", 0.0),
    borderRadius: "20px",
    marginTop: '20px',

    "& .MuiDataGrid-main": {
      borderRadius: "20px",
    },
    "& .MuiDataGrid-cell": {
      border: 0,
      px: 1,
      overflow: "unset !important",
      "&:focus": {
        outline: "none",
      },
    },

    "& .MuiDataGrid-columnHeader": {
      px: 1,

      "&:focus": {
        outline: "none",
      },

      "& >.MuiDataGrid-columnSeparator": {
        display: "none",
      },
    },

    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: 700,
      fontSize: 16,
    },

    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: lighten("rgba(45, 55, 72, 1)", 0.1),
      border: 0,
    },

    "& .MuiDataGrid-row": {
      transition: "all 0.4s",
      backgroundColor: lighten("rgba(45, 55, 72, 1)", 0.1),
      border: "1px solid",
      borderColor: lighten("rgba(45, 55, 72, 1)", 0.1),
      //colors: lighten("rgba(1,1,1,1)",0.1),


      "&:nth-of-type(2n + 1)": {
        backgroundColor: lighten("rgba(113, 128, 150, 1)", 0.1),
        border: "1px solid",
        borderColor: lighten("rgba(113, 128, 150, 1)", 0.1),
      },

      "&:last-of-type": {
        borderRadius: "0 0 20px 20px",

      },

      "&.Mui-selected": {
        backgroundColor: lighten("rgba(113, 128, 150, 1)", 0.4),

      },

      "&:hover": {
        border: "1px solid #00A84C",
        borderRadius: 1,
        cursor: "pointer",
        backgroundColor: lighten("rgba(0, 168, 76, 0.1)", 0.3),

        "&:last-of-type": {
          borderRadius: "0 0 20px 20px",
        },

        "& >:last-of-type > .MuiBox-root > .MuiSvgIcon-root": {
          display: "inline-block",
        },
      },
    },
  },
};
