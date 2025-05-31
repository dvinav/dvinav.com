'use client'

import { globalPadding } from '@/config/theme'
import useUI from '@/hooks/useUI'
import { keyframes, styled } from '@mui/material/styles'

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Content = styled('div')(({ theme }) => {
  const { exiting } = useUI()

  return {
    paddingBottom: 32,
    zIndex: 7,
    paddingTop: theme.spacing(8),
    background: theme.palette.primary.main,
    width: '100%',
    opacity: exiting ? 0 : 1,
    transition: 'opacity 300ms',
    paddingLeft: globalPadding.xs,
    paddingRight: globalPadding.xs,
    '& > *': {
      animation: `${appearAnimation} 250ms`
    },
    '&:after': {
      content: '""',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '20%',
      background: `linear-gradient(to top, ${theme.palette.primary.main}, transparent)`,
      pointerEvents: 'none',
      transition: 'opacity 300ms ease',
      zIndex: 8
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: globalPadding.md,
      paddingRight: globalPadding.md,
      flexDirection: 'row'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: globalPadding.lg,
      paddingRight: globalPadding.lg
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: globalPadding.xl,
      paddingRight: globalPadding.xl
    }
  }
})

export default Content
