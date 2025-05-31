'use client'

import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import { useTranslations } from 'next-intl'
import saasDash from './lottie/saasDash.json'
import ecommerce from './lottie/ecommerce.json'
import chatApp from './lottie/chatApp.json'
import blog from './lottie/blog.json'
import dynamic from 'next/dynamic'

const Thumbnail = dynamic(() => import('./components/thumbnail'), { ssr: false })

const PortfolioSection = () => {
  const t = useTranslations('PortfolioSection')

  return (
    <Stack my={{ xs: 6, md: 10 }}>
      <Typography component="h2" fontSize={{ xs: '1.6rem', md: '2rem' }} textAlign="center">
        {t('whatCanIBuild')}
      </Typography>
      <Grid container columns={{ xs: 1, md: 2 }} direction={{ xs: 'column', md: 'row' }} spacing={4} mt={6} width="100%">
        <Thumbnail anim={saasDash} label={t('saasDashboard')} mobileOffset={80} desktopOffset={30} />
        <Thumbnail anim={ecommerce} label={t('shoppingWebsite')} mobileOffset={120} desktopOffset={30} />
        <Thumbnail anim={chatApp} label={t('messenger')} mobileOffset={80} desktopOffset={90} />
        <Thumbnail anim={blog} label={t('blog')} mobileOffset={150} desktopOffset={130} />
      </Grid>
    </Stack>
  )
}

export default PortfolioSection
