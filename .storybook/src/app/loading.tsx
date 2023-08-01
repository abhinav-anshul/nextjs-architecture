import { Box, Paper, Skeleton, Stack } from '@mui/material';

const loading = () => {
  return (
    <Box
      sx={{ marginTop: 10 }}
      gap={2}
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
    >
      {[...Array(12)].map((_, index) => (
        <Paper variant="outlined" key={index} sx={{ p: 1 }}>
          <Stack spacing={2}>
            <Skeleton
              variant="rectangular"
              sx={{ paddingTop: '75%', borderRadius: 1.5 }}
            />

            {index === 0 && (
              <Skeleton
                variant="rectangular"
                sx={{ paddingTop: '25%', borderRadius: 1.5 }}
              />
            )}

            {index !== 2 && (
              <Skeleton
                variant="rectangular"
                sx={{ paddingTop: '25%', borderRadius: 1.5 }}
              />
            )}
          </Stack>
        </Paper>
      ))}
    </Box>
  );
};

export default loading;
