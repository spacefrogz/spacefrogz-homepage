import { Box, useColorModeValue } from "@chakra-ui/react"

const GreetingsBox = () => {
  return (
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      Hi, I code and shoot 📷 - based in Cluj-Napoca - for the moment.
    </Box>
  )
}

export default GreetingsBox
