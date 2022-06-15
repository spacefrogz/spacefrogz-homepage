import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Greetings, I&apos;m a developer based in Cluj-Napoca, România!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Crișan Horea
          </Heading>
          <p>Digital creator under Space Frogz (Mobile Apps / Photography / Design)</p>
        </Box>

      </Box>
    </Container>
  )
}

export default Page;