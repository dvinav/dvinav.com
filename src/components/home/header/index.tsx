'use client'

import { useEffect, useRef, useState } from 'react'
import { Box, useTheme } from '@mui/material'
import useUI from '@/hooks/useUI'
import Links from './components/links'
import LanguageMenu from './components/languageMenu'
import HeaderContainer from './components/headerContainer'
import MobileMenu from './components/mobileMenu'
import heights from './consts/height'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [height, setHeight] = useState(heights.normal)
  const [doesOverlap, setDoesOverlap] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  const exiting = useUI(s => s.exiting)
  const theme = useTheme()

  const mixColors = (color1: string, color2: string, weight: number) => {
    const hex = (x: string) => parseInt(x, 16)
    const r1 = hex(color1.slice(1, 3)),
      g1 = hex(color1.slice(3, 5)),
      b1 = hex(color1.slice(5, 7))
    const r2 = hex(color2.slice(1, 3)),
      g2 = hex(color2.slice(3, 5)),
      b2 = hex(color2.slice(5, 7))
    const w = Math.max(0, Math.min(1, weight))
    const r = Math.round(r1 + (r2 - r1) * w)
    const g = Math.round(g1 + (g2 - g1) * w)
    const b = Math.round(b1 + (b2 - b1) * w)
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`
  }

  useEffect(() => {
    const headerEl = headerRef.current
    const heroEl = document.getElementById('hero')
    const mainEl = document.getElementById('main')
    const meta = document.querySelector('meta[name="theme-color"]')

    const checkOverlap = () => {
      if (!headerEl || !heroEl) return
      const headerBottom = headerEl.getBoundingClientRect().bottom
      const heroBottom = heroEl.getBoundingClientRect().bottom - heights.normal
      const overlap = headerBottom - 70 - heroBottom
      const progress = Math.max(0, Math.min(1, overlap / 80))
      setDoesOverlap(overlap - 40 > 0)
      const color = mixColors(theme.palette.secondary.main, theme.palette.primary.main, progress)
      meta?.setAttribute('content', color)
      if (headerEl) headerEl.style.background = color
      document.body.style.background = color
    }
    0
    const handleScroll = () => {
      setHeight(Math.max(70, heights.normal - (mainEl?.scrollTop || 0)))
      checkOverlap()
    }

    mainEl?.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkOverlap)
    checkOverlap()

    return () => {
      mainEl?.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkOverlap)
    }
  })

  useEffect(() => {
    if (headerRef?.current) headerRef.current.style.color = doesOverlap ? theme.palette.secondary.main : theme.palette.primary.main
  }, [doesOverlap])

  return (
    <HeaderContainer ref={headerRef} height={height} navOpen={navOpen} sx={{ opacity: exiting ? 0 : 1 }}>
      <Box
        sx={{
          height: { xs: navOpen ? heights.linksNormal : 0, md: 'initial' },
          overflow: 'hidden',
          display: 'flex',
          transition: 'height 500ms cubic-bezier(.17,.67,.16,.99)'
        }}
      >
        <Links navOpen={navOpen} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'center' },
          justifyContent: { md: 'flex-end' },
          flex: { xs: 0, md: 1 }
        }}
      >
        <MobileMenu onClick={() => setNavOpen(v => !v)} />
        <LanguageMenu doesOverlap={doesOverlap} />
      </Box>
    </HeaderContainer>
  )
}

export default Header
