import { Tag, Tooltip } from '@chakra-ui/react'

export const TextTranslate = ({ text, textTranslate }) => {
  return (
    <Tooltip label={textTranslate}>
      <Tag borderRadius="full" variant="solid" colorScheme="green">
        {text}
      </Tag>
    </Tooltip>
  )
}
