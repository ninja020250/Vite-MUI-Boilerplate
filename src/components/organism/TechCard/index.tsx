import { Box, Stack, Typography, styled } from '@mui/material'

const Image = styled('img')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  layout: 'fill',
  objectFit: 'cover',
}))

export type TechCardProps = {
  title: string
  subtitle?: string
  iconUrl: string
}

export const TechCard = ({ iconUrl = '', title, subtitle }: TechCardProps) => {
  return (
    <Stack direction="column" spacing={0} alignItems="center" justifyContent={'center'}>
      <Box sx={{ position: 'relative', borderRadius: 4 }} width={60} height={60}>
        <Image src={iconUrl} alt="icon-tech" width="100%" height="100%" />
      </Box>
      <Typography sx={{ marginTop: 2 }} variant="h6">
        {title}
      </Typography>
      <Typography align="center" sx={{ marginTop: 1, maxWidth: 200 }}>
        {subtitle}
      </Typography>
    </Stack>
  )
}

export default TechCard
