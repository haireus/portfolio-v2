import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { Box, Button } from '@chakra-ui/react'

export default function HeaderPostDetail() {
  return (
    <Box align="center" my={4}>
      <NextLink href="/" passHref scroll={false}>
        <Button
          rightIcon={<ChevronRightIcon />}
          marginRight={5}
          colorScheme="teal"
        >
          Home
        </Button>
      </NextLink>
      <NextLink href="/posts" passHref scroll={false}>
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Posts
        </Button>
      </NextLink>
    </Box>
  )
}
