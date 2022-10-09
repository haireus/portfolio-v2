import { Tag, Tooltip } from '@chakra-ui/react'

export const TextTranslate = ({ text, textTranslate }) => {
  return (
    <Tooltip label={textTranslate}>
      <Tag>{text}</Tag>
    </Tooltip>
  )
}
