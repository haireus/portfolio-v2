import { Text } from '@chakra-ui/react'

export default function TextHeader({ title }) {
  return (
    <Text mt="10" mb="5" fontWeight={'bold'} fontSize="3xl">
      {title}
    </Text>
  )
}

export const TextSubHeader = ({ title }) => {
  return (
    <Text mt="10" mb="5" fontWeight={'bold'} fontSize="2xl">
      {title}
    </Text>
  )
}
