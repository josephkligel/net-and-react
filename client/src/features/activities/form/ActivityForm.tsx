import { Box, Paper, TextField, Typography } from "@mui/material";

export default function ActivityForm() {
  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create activity
      </Typography>
      <Box component="form" display="flex" flexDirection="column" gap={3}>
        <TextField label="Title" />
        <TextField label="Description" multiline={true} rows={3} />
        <TextField label="Category" />
        <TextField label="Date" type="datetime" />
        <TextField label="City" />
        <TextField label="Venue" />
      </Box>
    </Paper>
  );
}
