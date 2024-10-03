import { Card, CardBody, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';

export default function CustomCard() {
    return (
        <Card maxW='sm' borderWidth='10px' borderColor='blue.500' borderRadius='md' p={4} backgroundColor='white' boxSize={210}>
            <CardBody >
                <Image
                    src='https://miro.medium.com/v2/resize:fit:1001/1*cK5QyqkNFwl8uwo4EYucJw.png' 
                    alt='Card image'
                    borderRadius='md'
                    boxSize='200px' 
                />
                <Stack mt='4' spacing='2' align='center'>
                    <Heading size='xs' color='blue.600' textAlign='center'>
                        REACT GRAHQL DEVELOP FOR ANY DEVELOPMENT
                    </Heading>
                    <Text fontSize='sm' textAlign='center' color='pink.500'>
                        Best one bars to take friends and relatives, one bars to take friends and relatives.
                    </Text>
                </Stack>
            </CardBody>
            <Divider borderColor='gray.300' />
        </Card>
    );
}
