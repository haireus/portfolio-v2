import { useEffect, useState } from 'react'

const useAudio = url => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setAudio(new Audio(url))
  }, [])

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio?.play() : audio?.pause()
  }, [audio, playing])

  // useEffect(() => {
  //   if (audio) {
  //     audio.addEventListener('ended', () => setPlaying(false))
  //     return () => {
  //       audio.removeEventListener('ended', () => setPlaying(false))
  //     }
  //   }
  // }, [audio])

  return [playing, toggle]
}

export default useAudio
