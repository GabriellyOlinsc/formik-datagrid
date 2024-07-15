import { lighten } from '@mui/material'

export const classes = {
  filterIcon: {
    width: '48px',
    height: '48px',
    border: '1px solid',
    borderColor: 'primary.light',
    borderRadius: '5px',
  },

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
    backgroundColor: lighten('rgba(26, 32, 44, 1)',0.2),
    fontSize: '14px',
    border: '1px solid',
    borderColor: 'custom.listBackgroundLight',
    borderRadius: '20px',
    
    '& .MuiDataGrid-main': {
      borderRadius: '20px',
    },

    '& .MuiDataGrid-cell': {
      border: 0,
      px: 1,
      overflow: 'unset !important',
      '&:focus': {
        outline: 'none',
      },
    },

    '& .MuiDataGrid-columnHeader': {
      px: 1,

      '&:focus': {
        outline: 'none',
      },

      '& >.MuiDataGrid-columnSeparator': {
        display: 'none',
      },
    },

    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 700,
      fontSize: 16,
    },

    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: 'custom.dataGridPrimary',
      border: 0,
    },

    '& .MuiDataGrid-row': {
      transition: 'all 0.4s',
      backgroundColor: 'custom.dataGridPrimary',
      border: '1px solid',
      borderColor: 'custom.dataGridPrimary',

      width: '100%',

      '&:nth-of-type(2n + 1)': {
        backgroundColor: 'custom.dataGridSecondary',
        border: '1px solid',
        borderColor: 'custom.dataGridSecondary',
      },

      '&:last-of-type': {
        borderRadius: '0 0 20px 20px',
      },

      '&.Mui-selected': {
        backgroundColor: lighten('rgba(0, 168, 76, 0.1)', 0.3),
      },

      '&:hover': {
        border: '1px solid #00A84C',
        borderRadius: 1,
        cursor: 'pointer',
        backgroundColor: lighten('rgba(0, 168, 76, 0.1)', 0.3),

        '&:last-of-type': {
          borderRadius: '0 0 20px 20px',
        },

        '& >:last-of-type > .MuiBox-root > .MuiSvgIcon-root': {
          display: 'inline-block',
        },
      },
    },
  },
}
