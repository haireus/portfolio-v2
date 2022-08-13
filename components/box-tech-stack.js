import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { FaReact, FaAws } from 'react-icons/fa'
import {
  SiNestjs,
  SiMysql,
  SiSocketdotio,
  SiRedux,
  SiReacttable,
  SiAntdesign,
  SiMaterialui
} from 'react-icons/si'

const data = [
  { id: 1, tech: 'HTML', icon: <AiOutlineHtml5 color="red" /> },
  {
    id: 2,
    tech: 'CSS3',
    icon: <IoLogoCss3 color="blue" />
  },
  {
    id: 3,
    tech: 'Javascript',
    icon: <IoLogoJavascript color="yellow" />
  },
  {
    id: 4,
    tech: 'ReactJS',
    icon: <FaReact color="#61dafb" />
  },
  {
    id: 10,
    tech: 'Redux/toolkit',
    icon: <SiRedux color="violet" />
  },
  {
    id: 11,
    tech: 'React-query',
    icon: <SiReacttable color="#ef4444" />
  },
  {
    id: 12,
    tech: 'Ant Design',
    icon: <SiAntdesign color="#5468ff" />
  },
  {
    id: 13,
    tech: 'Material UI',
    icon: <SiMaterialui color="#0059B2" />
  },
  {
    id: 5,
    tech: 'Nodejs',
    icon: <IoLogoNodejs color="#026e00" />
  },
  {
    id: 6,
    tech: 'NestJs',
    icon: <SiNestjs color="#ea2845" />
  },
  {
    id: 7,
    tech: 'MySQL',
    icon: <SiMysql color="#3E6E93" />
  },
  {
    id: 8,
    tech: 'AWS',
    icon: <FaAws color="#fff" />
  },
  {
    id: 9,
    tech: 'SocketIO',
    icon: <SiSocketdotio color="#fff" />
  }
]

export default function BoxTechStack() {
  return (
    <>
      {data.map(el => (
        <Box
          key={el.id}
          p={2}
          display={'flex'}
          flexDirection="column"
          justifyContent="center"
          alignItems={'center'}
          shadow="md"
          width={'120px'}
          borderWidth="1px"
          m="1"
        >
          <Text fontSize="xl" textAlign={'center'}>
            {el.icon}
          </Text>
          <Text textAlign={'center'}>{el.tech}</Text>
        </Box>
      ))}
    </>
  )
}
