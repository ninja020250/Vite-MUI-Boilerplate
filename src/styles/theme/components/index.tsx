import { Theme } from '@mui/material'
import { Components } from '@mui/material/styles/components'
import MuiButton from './MuiButton'
import MuiTypography from './MuiTypography'
import MuiCssBaseline from './MuiCssBaseline'
import MuiContainer from './MuiContainer'
import MuiTableHead from './MuiTableHead'
import MuiTableRow from './MuiTableRow'
import MuiDivider from './MuiDivider'
import MuiCard from './MuiCard'
import MuiDialog from './MuiDialog'
import MuiInputLabel from './MuiInputLabel'

const components: Components<Omit<Theme, 'components'>> = {
  MuiButton,
  MuiTypography,
  MuiCssBaseline,
  MuiContainer,
  MuiTableHead,
  MuiTableRow,
  MuiDivider,
  MuiCard,
  MuiDialog,
  MuiInputLabel,
}

export default components
