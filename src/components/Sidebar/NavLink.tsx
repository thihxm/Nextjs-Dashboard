import { ElementType } from 'react'

import {
  Icon,
  Link,
  LinkProps as ChackraLinkProps,
  Text,
} from '@chakra-ui/react'

interface NavLinkProps extends ChackraLinkProps {
  icon: ElementType
  children: string
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" py="1" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
