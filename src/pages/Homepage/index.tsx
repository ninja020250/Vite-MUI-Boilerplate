import { Container, Stack, Typography } from '@components/atom'
import TechCard from '@components/organism/TechCard'

import viteLogo from '@assets/images/vite.jpg'
import reactLogo from '@assets/images/reactjs.png'
import muiLogo from '@assets/images/mui.png'

export const Homepage = () => {
  return (
    <Container sx={{ textAlign: 'center', paddingY: 8, paddingX: 4 }}>
      <Typography variant="h2" fontSize="bold">
        Move faster with <br />
        React + Vite + MUI
      </Typography>
      <Stack mt={8} direction="row" width="100%" justifyContent="space-around">
        <TechCard title="ReactJS" subtitle="JavaScript library for building user interfaces" iconUrl={reactLogo}></TechCard>
        <TechCard title="Vite" subtitle="Next Generation Frontend build Tool" iconUrl={viteLogo}></TechCard>
        <TechCard title="MUI" subtitle="Material Design UI for React" iconUrl={muiLogo}></TechCard>
      </Stack>
    </Container>
  )
}

export default Homepage
