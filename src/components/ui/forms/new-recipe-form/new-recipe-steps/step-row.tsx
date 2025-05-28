import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Grid, GridItem, HStack, IconButton, VStack } from '@chakra-ui/react';
import { FieldValues, useFormContext, UseFormRegister } from 'react-hook-form';

import { StepBadge } from '~/components/shared/badges/step-badge/step-badge';
import { FormTextarea } from '~/components/shared/form-textarea/form-textarea';
import { ImageField } from '~/components/shared/image-field/image-field';

type StepRowProps = {
    index: number;
    onRemove: () => void;
    register: UseFormRegister<FieldValues>;
};

export const StepRow: React.FC<StepRowProps> = ({ index, onRemove, register }) => {
    const { watch } = useFormContext();

    const imageFieldName = `steps.${index}.image`;
    const imageValue = watch(imageFieldName) as File | null;

    return (
        <Grid
            w='100%'
            templateColumns={{ base: '1fr', sm: '21.625rem 1fr' }}
            border='1px solid'
            borderColor='blackAlpha.200'
            rounded='lg'
            alignItems='stretch'
            gridAutoRows='1fr'
            minH='10rem'
        >
            <GridItem>
                <Box h='100%' overflow='hidden' position='relative'>
                    <ImageField
                        name={imageFieldName}
                        value={imageValue}
                        register={register(imageFieldName)}
                    />
                </Box>
            </GridItem>

            <GridItem p={5}>
                <VStack align='stretch' spacing={4} h='100%'>
                    <HStack justify='space-between'>
                        <StepBadge step={index + 1} />
                        <IconButton
                            aria-label='Удалить'
                            icon={<DeleteIcon boxSize={4} />}
                            onClick={onRemove}
                            size='xs'
                            w='2rem'
                            h='2rem'
                            variant='clear'
                            color='lime.600'
                        />
                    </HStack>

                    <FormTextarea
                        placeholder='Шаг'
                        register={register(`steps.${index}.description`)}
                        minH='5.25rem'
                    />
                </VStack>
            </GridItem>
        </Grid>
    );
};
