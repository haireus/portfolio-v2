import { useEffect, useState } from 'react'

const useAudio = url => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setAudio(new Audio(url))
  }, [])

  const toggle = () => {
    if (!playing) {
      audio?.play()
      setPlaying(true)
    } else setPlaying(!playing)
  }

  useEffect(() => {
    playing ? audio?.play() : audio?.pause()
  }, [audio, playing])

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false))
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false))
      }
    }
  }, [audio])

  const onScroll = () => {
    if (audio && playing) return
    if (!playing) {
      audio?.play()
      setPlaying(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [audio])

  // const toggle = () => {
  //   if (!playing) {
  //     new Audio(url).play().then(() => setPlaying(!playing))
  //   } else {
  //     new Audio(url).pause().then(() => setPlaying(!playing))
  //   }
  // }

  return [playing, toggle]
}

export default useAudio
