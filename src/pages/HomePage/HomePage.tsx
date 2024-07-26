import { Box, Grid } from "@mui/material";
import SignupForm from "./SignupForm";
import DataTable from "./DataTable";
import { useState } from "react";
import { UsersType } from "../../model/users.interface";

export default function HomePage() {
  const [formDataList, setFormDataList] = useState<UsersType[]>([])

  const handleSubmit = (data: UsersType) => {
    let updatedFormDataList = [...formDataList, data];
    setFormDataList(updatedFormDataList);

    const localStorageData = localStorage.getItem("formDataList");
    const localUsers = localStorageData ? JSON.parse(localStorageData) : [];

    updatedFormDataList.push(...localUsers)
    localStorage.setItem("formDataList", JSON.stringify(updatedFormDataList));
  }

  return (
    <>
      <Box sx={{
        '@media print': {
          width: '1500px',
          maxWidth: '80vw'
        }
      }}>
        <Grid container direction="row" spacing={2} sx={{ mt: 18 }} columns={{ xs: 6, sm: 6, md: 12 }}>
          <Grid item xs={3} sm={5}>
            <SignupForm onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={9} sm={7} sx={{ mt: 4 }}>
            <DataTable formData={formDataList} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
