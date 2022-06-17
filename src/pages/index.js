import { Container, Box, Heading } from '@chakra-ui/react'
import SFRoundedSimpleCard from '../components/sf-rounded-simple-card';
import GreetingsBox from '../components/greetings-box';

const Page = () => {
  return (
    <Container>
      <GreetingsBox />

      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <SFRoundedSimpleCard mb={6} p={3}>
          🚧
        </SFRoundedSimpleCard>
        <SFRoundedSimpleCard mb={6} p={3}>
          this webpage is under construction
        </SFRoundedSimpleCard>
        <SFRoundedSimpleCard mb={6} p={3}>
          🚧
        </SFRoundedSimpleCard>
      </Box>

      <SFRoundedSimpleCard mb={6} p={3}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            🧑🏻‍🚀
          </Heading>
          <p>Digital creator under Space Frogz</p>
        </Box>
      </SFRoundedSimpleCard>

    </Container>
  )
}

export default Page;