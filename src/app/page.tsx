import { ErrorText } from '@/lib/exceptions/ErrorText';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default async function Home() {
  // const [post,users] = await Prop
  await new Promise((resolve) => setTimeout(resolve, 5000));
  //  throw new ErrorText("متن ارور در اینجا نمایش داده می شود")

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
            <Box>
              <Image
                src="/assets/icons/components/ic_extra_image.png"
                width={500}
                height={200}
                alt="test"
              />
            </Box>

            {index === 0 && (
              <Typography
                variant="caption"
                sx={{ paddingTop: 2, borderRadius: 1.5 }}
              >
                test
              </Typography>
            )}

            {index !== 2 && (
              <Typography
                variant="caption"
                sx={{ paddingTop: 2, borderRadius: 1.5 }}
              >
                hello world
              </Typography>
            )}
          </Stack>
        </Paper>
      ))}
    </Box>
  );
}
