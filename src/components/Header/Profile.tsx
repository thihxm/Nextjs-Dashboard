import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thiago Medeiros</Text>
        <Text color="gray.300" fontSize="small">
          thihxm@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Thiago Medeiros"
        src="https://github.com/thihxm.png"
      />
    </Flex>
  )
}
