import { ElementType } from 'react'

import {
  Icon,
  Link as ChackraLink,
  LinkProps as ChackraLinkProps,
  Text,
} from '@chakra-ui/react'

import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChackraLinkProps {
  icon: ElementType
  href: string
  children: string
}

export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink display="flex" align="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChackraLink>
    </ActiveLink>
  )
}
