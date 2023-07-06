import { HeroOneButton } from '@w/HeroOneButton';
import Link from 'next/link';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://kbve.com/project/rareicon/">
            <a>KBVE</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'All in One Media Solution for\n'}
            <span className="text-primary-500">Developers and Artists</span>
          </>
        }
        description="Search dozens of media files in seconds."
        button={
          <Link href="/">
            <a>
              <Button xl>Search Now</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
