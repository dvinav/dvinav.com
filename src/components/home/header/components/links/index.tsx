'use client'

import Stack from '@mui/material/Stack'
import Link from './link'

export interface LinkProps {
  navOpen: boolean
}

const Links: FC<LinkProps> = ({ navOpen }) => {
  return (
    <Stack
      sx={{
        flexBasis: { xs: 'auto', lg: '54%' },
        gap: { xs: 3, md: 6, lg: 8 },
        alignItems: 'center',
        alignSelf: 'center',
        mt: { xs: navOpen ? 1.8 : 0, md: 0 },
        transition: 'all 300ms cubic-bezier(.17,.67,.14,1)'
      }}
      direction="row"
    >
      <Link name="aboutMe" navOpen={navOpen} scrollTo={770} />
      {/* <Link name="mySkills" navOpen={navOpen} scrollTo={} /> */}
      <Link name="contact" navOpen={navOpen} />
    </Stack>
  )
}

export default Links
