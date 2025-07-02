import { Person, WebSite, WithContext } from 'schema-dts'

const me: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dvin Avanesian',
  url: 'https://dvinav.com',
  jobTitle: 'Full Stack Developer',
  email: 'dvinav@outlook.com',
  telephone: '+989020092004',
  identifier: 'dvin-avanesian-18-08-2004',
  gender: 'https://schema.org/Male',
  knowsLanguage: ['en', 'fa', 'hy-AM'],
  knowsAbout: [
    { '@type': 'Thing', name: 'React' },
    { '@type': 'Thing', name: 'TypeScript' },
    { '@type': 'Thing', name: 'MongoDB' },
    { '@type': 'Thing', name: 'Redis' },
    { '@type': 'Thing', name: 'Next.js' },
    { '@type': 'Thing', name: 'MySQL' },
    { '@type': 'Thing', name: 'Linux' },
    { '@type': 'Thing', name: 'Node.js' },
    { '@type': 'Thing', name: 'Express.js' },
    { '@type': 'Thing', name: 'NestJS' },
    { '@type': 'Thing', name: 'Hono.js' },
    { '@type': 'Thing', name: 'C' },
    { '@type': 'Thing', name: 'C++' },
    { '@type': 'Thing', name: 'JavaScript' },
    { '@type': 'Thing', name: 'Linux Administration' }
  ],
  sameAs: [
    'https://github.com/dvinav',
    'https://linkedin.com/in/dvinav',
    'https://t.me/dvinav',
    'https://instagram.com/dvin.av',
    'https://wa.me/989020092004'
  ]
}

const webSite: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dvin Avanesian',
  url: 'https://dvinav.com'
}

const jsonLd = [me, webSite]

export default jsonLd
