//about
// import React from 'react';
import { Box, Flex, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react';

export const About = () => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      py={12}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box
        maxW={'3xl'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack spacing={6}>
          <Box>
            <Heading
              fontSize={'3xl'}
              color={'black'}
              textAlign={'center'}
            >
               Hear Clearly Always
            </Heading>
          </Box>
          <Box>
            <Heading fontSize={'xl'} color={'blue.400'}>
              About This Project
            </Heading>
            <Text mt={4} color={'gray.600'}>
            Unlock the richness of sound with our state-of-the-art hearing aid. Designed for clarity, comfort, and reliability, it ensures you hear every detail, from conversations to music. With advanced technology and a sleek design, experience life with enhanced hearing, stay connected, and embrace every moment with confidence and ease
            </Text>
          </Box>
          <Box>
            <Heading fontSize={'xl'} color={'blue.400'}>
              Developer Info
            </Heading>
            <Flex mt={4} align={'center'}>
              <Avatar
                size={'xl'}
                src={'https://static-00.iconduck.com/assets.00/web-developer-illustration-503x512-mega3xxj.png'}
                alt={'Developer'}
                mr={4}
              />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>Aman Chaubey</Text>
                <Text color={'gray.600'}>Full-Stack Developer</Text>
                <Text color={'gray.600'}>amanchaubey86@gmail.com</Text>
              </Stack>
            </Flex>
          </Box>
          <Box>
            <Heading fontSize={'xl'} color={'blue.400'}>
              Technologies Used
            </Heading>
            <Text mt={4} color={'gray.600'}>
              The backend is built using Node.js and Express, with MongoDB for data storage. Passwords are hashed using bcrypt, and JWT is used for authentication. The frontend is created with React and styled using Chakra UI.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

