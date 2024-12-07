import { Box, Container, Stack, Typography } from '@components/atom'

import muiLogo from '@assets/images/mui.png'
import reactLogo from '@assets/images/reactjs.png'
import viteLogo from '@assets/images/vite.jpg'
import { styled } from '@mui/material'

const Image = styled('img')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  layout: 'fill',
  objectFit: 'cover',
}))

export const Homepage = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', paddingY: 8, paddingX: 4 }}>
      <Stack mt={12} direction="row" width="100%" justifyContent="space-around">
        <Box sx={{ position: 'relative', borderRadius: 4 }} width={60} height={60}>
          <Image src={reactLogo} alt="icon-tech" width="100%" height="100%" />
        </Box>
        <Box sx={{ position: 'relative', borderRadius: 4 }} width={60} height={60}>
          <Image src={viteLogo} alt="icon-tech" width="100%" height="100%" />
        </Box>
        <Box sx={{ position: 'relative', borderRadius: 4 }} width={60} height={60}>
          <Image src={muiLogo} alt="icon-tech" width="100%" height="100%" />
        </Box>
      </Stack>
      <Typography mt={8} variant="h3" fontWeight="bold">
        React + Vite + MUI
      </Typography>
    </Container>
  )
}

export default Homepage
