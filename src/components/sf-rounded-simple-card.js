import { Box, useColorModeValue } from "@chakra-ui/react"

const SFRoundedSimpleCard = ({
    children,
    textAlign = "center",
    ...rest
  }) => {
  return (
    <Box
      borderRadius="lg"
      textAlign={textAlign}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default SFRoundedSimpleCard
