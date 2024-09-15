import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material'

export type HStackProps = {
  children?: React.ReactNode
} & MuiStackProps

const HStack = ({ children, direction = 'row', ...rest }: HStackProps) => {
  return (
    <MuiStack direction={direction} {...rest}>
      {children}
    </MuiStack>
  )
}

export default HStack
