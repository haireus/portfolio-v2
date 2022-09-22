import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" marginTop={10} opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} HaiDinh. All Rights Reserved.
    </Box>
  )
}

export default Footer
