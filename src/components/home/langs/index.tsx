'use client'

import { useTheme } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import { Typography, useMediaQuery } from '@mui/material'
import { useTranslations } from 'next-intl'
import CPlain from 'devicons-react/icons/CPlain'
import CplusplusPlain from 'devicons-react/icons/CplusplusPlain'
import JavascriptPlain from 'devicons-react/icons/JavascriptPlain'
import TypescriptPlain from 'devicons-react/icons/TypescriptPlain'

const Languages = () => {
  const theme = useTheme()
  const t = useTranslations('Languages')
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Stack spacing={4} pb={24} pt={4}>
      <Typography fontSize="1.8rem" textAlign="center">
        {t('title')}
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          px: 2,
          pt: 4,
          gap: { xs: 4, md: 8 },
          flexWrap: 'wrap',
          '& > svg': {
            fill: `${theme.palette.secondary.main}!important`,
            height: `70px!important`,
            width: `70px!important`,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start!important',
            flexBasis: { xs: '30%', md: 'initial' }
          },
          display: 'flex'
        }}
      >
        {isMobile ? (
          <>
            <CPlain />
            <CplusplusPlain />
            <JavascriptPlain />
            <TypescriptPlain />
          </>
        ) : (
          <>
            <JavascriptPlain />
            <CPlain />
            <CplusplusPlain />
            <TypescriptPlain />
          </>
        )}
      </Stack>
    </Stack>
  )
}

export default Languages
