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
        sx={{ mt: 2, border: 2}}
        columns={{ xs: 6, sm: 6, md: 12 }}
      >
        <Grid item sx={{border: 5}}xs={2} sm={5}>
          <SignupForm/>
        </Grid>
        <Grid item xs={12} sm={7}>
            <DataTable/>
        </Grid>
      </Grid>
    </Box>
  );
}
