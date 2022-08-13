import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { MdMusicNote, MdMusicOff } from 'react-icons/md'
import useAudio from './hooks/useAudio'

const url =
  'https://firebasestorage.googleapis.com/v0/b/spotify-upload.appspot.com/o/mp3%2Ffrad%20%20luv%20letters%20out%20on%20spotify.mp3?alt=media&token=d68605f3-6e08-4237-8832-1f7a2249f957'
export const ButtonMusic = () => {
  const [playing, toggle] = useAudio(url)

  return (
    <IconButton
      icon={playing ? <MdMusicNote /> : <MdMusicOff />}
      colorScheme="teal"
      variant="solid"
      onClick={toggle}
      mr="1"
    />
  )
}
