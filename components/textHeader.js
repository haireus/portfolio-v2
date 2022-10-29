import { Text } from '@chakra-ui/react'

export default function TextHeader({ title }) {
  return (
    <Text mt="10" fontWeight={'bold'} fontSize="3xl">
      {title}
    </Text>
  )
}
