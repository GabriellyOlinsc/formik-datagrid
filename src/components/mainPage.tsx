import { Box, Grid } from "@mui/material";
import SignupForm from "./SignupForm";
import DataTable from "./DataTable/DataTable";

export default function MainPage() {
  return (
    <Box>
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{ mt: 2 }}
        columns={{ xs: 6, sm: 6, md: 12 }}
      >
        <Grid item xs={6} sm={6}>
          <SignupForm/>
        </Grid>
        <Grid item xs={6} sm={6}>
            <DataTable/>
        </Grid>
      </Grid>
    </Box>
  );
}
