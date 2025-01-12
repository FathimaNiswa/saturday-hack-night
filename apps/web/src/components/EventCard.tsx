import { VStack, Image, Box, Text, HStack, Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { ResultsModal } from '../modal';

const EventCard = ({ event }: EventCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { about, results, image, moreInfo, projectCount } = event.data();
    return (
        <>
            {isOpen && <ResultsModal id={event.id} onClose={onClose} isOpen={isOpen} />}
            <VStack
                maxWidth="300px"
                backgroundColor="rgba(255,255,255,.15)"
                alignItems="flex-start"
                borderRadius="10px"
            >
                <Box backgroundColor="white" padding="30px" width="100%" borderTopRadius="10px">
                    <Image height="120px" src={image} objectFit="cover" />
                </Box>
                <VStack paddingInline="16px" alignItems="flex-start" flexGrow="1">
                    <Box backgroundColor="rgba(219,247,44,.15)" borderRadius="15px">
                        <Text
                            paddingBlock="5px"
                            paddingInline="10px"
                            fontSize="12px"
                            textColor="#DBF72C"
                            fontFamily="Clash Display"
                            fontWeight="medium"
                        >
                            ✅ {projectCount} Submissions
                        </Text>
                    </Box>
                    <Text
                        fontSize="12px"
                        textColor="white"
                        flexGrow="1"
                        fontFamily="Clash Display"
                        fontWeight="medium"
                    >
                        {about}
                    </Text>
                    <HStack
                        width="100%"
                        borderEndRadius="10px"
                        justifyContent="space-between"
                        paddingBlock="8px"
                    >
                        <Button
                            display={results ? 'block' : 'none'}
                            _hover={{
                                boxShadow: '0px 8px 16px rgba(255, 255, 255, 0.15)',
                                backgroundColor: '#DBF72C',
                            }}
                            _active={{
                                textColor: '#DBF72C',
                                background: 'rgba(219, 247, 44, 0.15)',
                                boxShadow: '0px 8px 16px rgba(219, 247, 44, 0.15)',
                                backdropFilter: 'blur(25px)',
                            }}
                            onClick={onOpen}
                        >
                            View Projects
                        </Button>
                        <Button
                            _hover={{
                                boxShadow: '0px 8px 16px rgba(255, 255, 255, 0.15)',
                                backgroundColor: '#DBF72C',
                            }}
                            _active={{
                                textColor: '#DBF72C',
                                background: 'rgba(219, 247, 44, 0.15)',
                                boxShadow: '0px 8px 16px rgba(219, 247, 44, 0.15)',
                                backdropFilter: 'blur(25px)',
                            }}
                            onClick={() => window.open(moreInfo, '_blank')}
                        >
                            More Info
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </>
    );
};
interface EventCardProps {
    event: QueryDocumentSnapshot<DocumentData>;
}

export default EventCard;
