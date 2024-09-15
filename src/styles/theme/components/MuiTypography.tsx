import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material'

const MuiTypography: {
  defaultProps: ComponentsProps['MuiTypography']
  styleOverrides: ComponentsOverrides<Theme>['MuiTypography']
} = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState }: any) => {
      const sizeVariants: Record<string, React.CSSProperties> = {
        'display-2xl': {
          fontSize: '4.5rem',
          lineHeight: '90px',
          letterSpacing: '-2%',
        },
        'display-xl': {
          fontSize: '3.75rem',
          lineHeight: '72px',
          letterSpacing: '-2%',
        },
        'display-lg': {
          fontSize: '3rem',
          lineHeight: '44px',
          letterSpacing: '-2%',
        },
        'display-md': {
          fontSize: '2.25rem',
          lineHeight: '44px',
          letterSpacing: '-2%',
        },
        'display-sm': {
          fontSize: '1.875rem',
          lineHeight: '38px',
        },
        'display-xs': {
          fontSize: '1.5rem',
          lineHeight: '32px',
        },
        'text-xl': {
          fontSize: '1.25rem',
          lineHeight: '30px',
        },
        'text-lg': {
          fontSize: '1.125rem',
          lineHeight: '28px',
        },
        'text-md': {
          fontSize: '1rem',
          lineHeight: '24px',
        },
        'text-sm': {
          fontSize: '0.875rem',
          lineHeight: '20px',
        },
        'text-xs': {
          fontSize: '0.75rem',
          lineHeight: '18px',
        },
      }

      const weightVariants: Record<string, React.CSSProperties> = {
        regular: {
          fontWeight: 400,
        },
        medium: {
          fontWeight: 500,
        },
        semibold: {
          fontWeight: 600,
        },
        bold: {
          fontWeight: 700,
        },
      }

      const { size, weight, ellipsis, maxLines } = ownerState
      return {
        ...sizeVariants[size],
        ...weightVariants[weight],
        ...(ellipsis && {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          maxLines: maxLines,
        }),
      }
    },
  },
}

export default MuiTypography
