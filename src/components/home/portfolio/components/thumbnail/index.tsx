'use client'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import type { LottieRefCurrentProps } from 'lottie-react'
import Lottie from 'lottie-react'
import { useEffect, useRef } from 'react'

const Box = styled('div')(({ theme }) => ({
  aspectRatio: '16 / 9',
  borderRadius: 22,
  border: `3px solid ${theme.palette.secondary.main}80`,
  boxSizing: 'content-box',
  transform: theme.direction === 'rtl' ? 'scaleX(-1)' : 'none',
  position: 'relative',
  padding: 12
}))

interface Props {
  anim: any
  label: any
  mobileOffset: number
  desktopOffset: number
}

const Thumbnail: FC<Props> = ({ anim, label, mobileOffset, desktopOffset }) => {
  const theme = useTheme()
  const lottieRef = useRef<LottieRefCurrentProps | null>(null)
  const mainRef = useRef<HTMLElement | null>(null)

  /*
   * Interactivity doesn't work on lottie-react
   * There was a loop problem with the lottiefiles interactivity
   */

  useEffect(() => {
    mainRef.current = document.getElementById('main')
    const animContainer = lottieRef?.current?.animationContainerRef.current

    const isMobile = (mainRef?.current?.clientWidth || 0) < theme.breakpoints.values.md
    // Because useMediaQuery doesn't work for some reason :/

    const handleScroll = () => {
      const rect = animContainer!.getBoundingClientRect()
      const scrollY = mainRef.current?.scrollTop || 0
      const frame = Math.round(Math.abs((scrollY / rect.top) * 120)) - (isMobile ? mobileOffset : desktopOffset)
      if (frame <= 120) lottieRef.current?.goToAndStop(frame, true)
    }

    mainRef.current?.addEventListener('scroll', handleScroll)

    return () => {
      mainRef.current?.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Grid size={1} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box onClick={() => navigator.vibrate(20)}>
        <Lottie animationData={anim} loop={false} autoplay={false} lottieRef={lottieRef} style={{ display: 'flex' }} />
      </Box>
      <Typography fontSize="1.4rem" textAlign="center">
        {label}
      </Typography>
    </Grid>
  )
}

export default Thumbnail
