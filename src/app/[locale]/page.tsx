import { Header, Hero, Intro, Content, PortfolioSection, Contact } from '@/components/home'
import { themeColor } from '@/config/theme'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'
import Languages from '@/components/home/langs'

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'fa' }]

export const viewport = {
  themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

interface Props {
  params: Promise<Params>
}

interface Params {
  locale: string
}

const Home: FC<Props> = ({ params }) => {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <>
      <Header />
      <Hero />
      <Content>
        <Intro />
        <PortfolioSection />
        <Languages />
      </Content>
      <Contact />
    </>
  )
}

export default Home
