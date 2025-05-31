'use client'

import { styled, useTheme } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import contactLinks from '@/config/contactLinks'
import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'

const Btn = styled(IconButton)(({ theme }) => ({
  width: '72px',
  aspectRatio: 1,
  flexBasis: '22%',
  padding: 0,
  '&  a': {
    display: 'flex',
    alignItems: 'center'
  },
  [theme.breakpoints.up('md')]: {
    flexBasis: '10%'
  }
}))

const Contact = () => {
  const theme = useTheme()
  const t = useTranslations('Contact')

  return (
    <Stack spacing={4} pb={24}>
      <Typography fontSize="1.8rem" textAlign="center">
        {t('title')}
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          px: 2,
          gap: { xs: 1, md: 2 },
          flexWrap: 'wrap',
          '& .MuiSvgIcon-root': {
            color: theme.palette.secondary.main,
            fontSize: '2.6rem'
          },
          display: 'flex'
        }}
      >
        {contactLinks.map(({ icon: Icon, link }, i) => (
          <Btn key={i}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Icon />
            </Link>
          </Btn>
        ))}
      </Stack>
    </Stack>
  )
}

export default Contact
