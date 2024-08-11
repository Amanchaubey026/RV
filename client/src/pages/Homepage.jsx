import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function Homepage() {
  const navigate = useNavigate();
  const direction = useBreakpointValue({ base: 'column-reverse', md: 'row' });
  const handleLoginClick = () => {
    navigate('/auth');
  };
// mahalakshmi
  const handleSignUpClick = () => {
    navigate('/auth');
  };
  return (
    <Stack minH={'100vh'} direction={direction}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              RV
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
            Hear Clearly Always
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Rediscover the joy of sound with our cutting-edge hearing aid. Experience crystal-clear audio, comfort, and reliability. Empowering you to stay connected to the world around you, every moment matters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={handleLoginClick}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Login
            </Button>
            <Button onClick={handleSignUpClick} rounded={'full'}>SignUp</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={'center'} justify={'center'} p={8}>
        <video
          width="100%"
          height="auto"
          controls
          autoPlay
          muted
          loop
          style={{ borderRadius: '15px', maxWidth: '600px', maxHeight: '400px' }}
        >
          <source src={`https://media.istockphoto.com/id/1610176399/video/a-senior-man-with-hearing-aid-enjoys-the-fresh-air-in-winter.mp4?s=mp4-640x640-is&k=20&c=_U1dnzekzE0TNMI2LzQpIZbiNT-SXKtcbFFqgDzGB_o=`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Flex>
    </Stack>
  );
}
