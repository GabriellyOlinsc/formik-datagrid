import { Box, Grid } from "@mui/material";
import SignupForm from "./SignupForm";
import DataTable from "./DataTable/DataTable";
import { useState } from "react";

export default function MainPage() {
  const [formDataList, setFormDataList] = useState<any[]>([])

  const handleSubmit = (data: any) => {
    setFormDataList([...formDataList, data]);
  }
  
  return (
    <Box sx={{
      '@media print': {
        width: '1500px',
        maxWidth: '80vw'
      }
    }}>
      <Grid container direction="row" spacing={2} sx={{ mt: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
        <Grid item xs={3} sm={5}>
          <SignupForm onSubmit={handleSubmit}/>
        </Grid>
        <Grid item xs={9} sm={7}>
          <DataTable formData={formDataList}/>
        </Grid>
      </Grid>
    </Box>
  );
}
