import { Box, Grid } from "@mui/material";
import SignupForm from "../components/SignupForm";
import DataTable from "../components/DataTable/DataTable";
import { useState } from "react";
import ButtonAppBar from "../components/ButtonAppBar";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [formDataList, setFormDataList] = useState<any[]>([])
  const navigate = useNavigate()

  const handleSubmit = (data: any) => {
    setFormDataList([...formDataList, data]);
  }
  
  const handleClick = () => {
      navigate("/viewPage")
  }

  return (
    <>
    <ButtonAppBar onClick={handleClick} title="View Users"/>
    <Box sx={{
      '@media print': {
        width: '1500px',
        maxWidth: '80vw'
      }
    }}>
      <Grid container direction="row" spacing={2} sx={{ mt: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
        <Grid item xs={3} sm={5}>
          <SignupForm onSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={9} sm={7}>
          <DataTable formData={formDataList} />
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
