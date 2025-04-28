import { Box, Card, CardBody, Image, Text, VStack } from '@chakra-ui/react';

import { StepBadge } from '~/components/shared/badges/step-badge/step-badge';

type RecipeStepCardProps = {
    stepNumber: number;
    description: string;
    image?: string;
    isLastStep?: boolean;
};

export const RecipeStepCard: React.FC<RecipeStepCardProps> = ({
    stepNumber,
    description,
    image,
    isLastStep = false,
}) => {
    const hasImage = Boolean(image);
    return (
        <Card
            variant='outline'
            maxH={{ base: '8rem', md: '15.25rem' }}
            overflow='hidden'
            w='100%'
            rounded='lg'
        >
            <CardBody display='flex' p={0} w='100%' h='100%'>
                {hasImage && (
                    <Box
                        maxW={{ base: '9.875rem', md: '21.625rem' }}
                        h={{ base: '8rem', md: '15.25rem' }}
                        w='100%'
                    >
                        <Image src={image} alt='Step image' w='100%' h='100%' objectFit='cover' />
                    </Box>
                )}

                <VStack
                    px={{ base: 2, md: 6 }}
                    py={{ base: 2, md: 5 }}
                    pb={{ base: 1, md: 5 }}
                    spacing={{ base: 3, md: 4 }}
                    align='flex-start'
                >
                    <StepBadge step={stepNumber} isLastStep={isLastStep} />
                    <Text fontSize='sm'>{description}</Text>
                </VStack>
            </CardBody>
        </Card>
    );
};
