import { ElementType } from 'react'

import { Button, Icon, IconButton } from '@chakra-ui/react'

interface ResponsiveIconButtonProps {
  isWideVersion?: boolean
  icon: ElementType
  children: string
}

export function ResponsiveIconButton({
  isWideVersion = true,
  icon,
  children,
}: ResponsiveIconButtonProps) {
  if (isWideVersion) {
    return (
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="whiteAlpha"
        leftIcon={<Icon as={icon} fontSize="16" />}
      >
        {children}
      </Button>
    )
  }

  return (
    <IconButton
      aria-label={`${children} button`}
      as="a"
      size="sm"
      fontSize="sm"
      colorScheme="whiteAlpha"
      icon={<Icon as={icon} fontSize="16" />}
    />
  )
}
