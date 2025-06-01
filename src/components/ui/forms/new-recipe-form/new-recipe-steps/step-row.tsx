import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Grid, GridItem, HStack, IconButton, VStack } from '@chakra-ui/react';
import { useFormContext, UseFormRegister } from 'react-hook-form';

import { StepBadge } from '~/components/shared/badges/step-badge/step-badge';
import { FormTextarea } from '~/components/shared/form-textarea/form-textarea';
import { ImageField } from '~/components/shared/image-field/image-field';

import { RecipeFormData } from '../recipe-schema';

type StepRowProps = {
    index: number;
    onRemove: () => void;
    register: UseFormRegister<RecipeFormData>;
};

export const StepRow: React.FC<StepRowProps> = ({ index, onRemove, register }) => {
    const {
        watch,
        formState: { errors },
    } = useFormContext<RecipeFormData>();

    const imageFieldName = `steps.${index}.image` as const;
    const imageValue = watch(imageFieldName) ?? null;

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
                        error={errors.steps?.[index]?.image}
                        dataTestId={`recipe-steps-image-block-${index}`}
                        dataTestIdInput={`recipe-steps-image-block-${index}-input-file`}
                        dataTestIdPreview={`recipe-steps-image-block-${index}-preview-image`}
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
                            data-test-id={`recipe-steps-remove-button-${index}`}
                        />
                    </HStack>

                    <FormTextarea
                        placeholder='Шаг'
                        showErrorText={false}
                        {...register(`steps.${index}.description`)}
                        error={errors.steps?.[index]?.description}
                        minH='5.25rem'
                        data-test-id={`recipe-steps-description-${index}`}
                    />
                </VStack>
            </GridItem>
        </Grid>
    );
};
