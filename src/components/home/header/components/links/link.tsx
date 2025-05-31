'use client'

import Typography from '@mui/material/Typography'
import { useTranslations } from 'next-intl'
import { LinkProps } from '.'
import { useEffect, useState } from 'react'

const Link: FC<LinkProps & { name: string; scrollTo?: number }> = ({ name, navOpen, scrollTo }) => {
  const t = useTranslations('Header')
  const [mainEl, setMainEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (document.getElementById('main')) setMainEl(document.getElementById('main'))
  }, [])

  const scroll = () => {
    if (!mainEl) return
    const start = mainEl.scrollTop!
    const startTime = performance.now()
    // Determine target scroll position
    const target = typeof scrollTo === 'number' ? scrollTo : mainEl.scrollHeight - mainEl.clientHeight

    const animate = (time: number) => {
      const elapsed = time - startTime
      const duration = 1000 // ms
      const progress = Math.min(elapsed / duration, 1)
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2
      const current = start + (target - start) * ease
      mainEl.scrollTo(0, current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  return (
    <Typography
      sx={{
        cursor: 'pointer',
        position: 'relative',
        fontSize: { xs: '1rem', lg: '1.2rem' },
        color: 'inherit',
        textWrap: 'nowrap',
        opacity: { xs: navOpen ? 1 : 0, md: 0.8 },
        pointerEvents: { xs: navOpen ? 'all' : 'none', md: 'all' },
        transition: `opacity 300ms cubic-bezier(.17,.67,.14,1)`,
        '&:hover': {
          opacity: 1
        }
      }}
      onClick={scroll}
    >
      {t(name)}
    </Typography>
  )
}

export default Link
