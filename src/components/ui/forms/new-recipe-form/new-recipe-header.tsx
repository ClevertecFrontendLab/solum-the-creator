import { Box, Flex, HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormTextarea } from '~/components/shared/form-textarea/form-textarea';
import { ImageField } from '~/components/shared/image-field/image-field';
import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { FormNumberInput } from '~/components/shared/inputs/form-number-input/form-number-input';
import {
    MultiSelectMenu,
    Option,
} from '~/components/shared/selects/multi-select-menu/multi-select-menu';
import { selectFlatSubCategories } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

import { RecipeFormData } from './recipe-schema';

export const NewRecipeHeader = () => {
    const maxVisibleTags = useBreakpointValue({ base: 1, md: 2 });

    const subcategories = useAppSelector(selectFlatSubCategories);

    const categoryOptions: Option[] = useMemo(
        () =>
            subcategories.map((cat) => ({
                label: cat.title,
                value: cat._id,
            })),
        [subcategories],
    );

    const {
        control,
        register,
        watch,
        formState: { errors },
    } = useFormContext<RecipeFormData>();

    return (
        <Flex
            as='section'
            direction={{ base: 'column', sm: 'row', md: 'column', lg: 'row' }}
            mt={{ base: 4, lg: 14 }}
            gap={{ base: 4, lg: 6 }}
            width='100%'
        >
            <Box flex={{ base: 1, sm: 1, lg: 5 }} overflow='hidden' w='100%'>
                <Box h={{ base: '14rem', lg: '25.625rem' }} w='100%'>
                    <ImageField
                        name='image'
                        register={register('image')}
                        value={watch('image')}
                        error={errors.image}
                    />
                </Box>
            </Box>
            <Box flex={{ base: 1, sm: 2, lg: 8 }} maxW='41.75rem'>
                <VStack w='100%' align='stretch' spacing={{ base: 4, md: 6 }}>
                    <HStack justify='space-between' mb={{ base: 0, md: 2 }}>
                        <Text as='span' fontSize={{ base: 'sm', md: 'md' }} fontWeight='600'>
                            Выберите не менее 3-х тегов
                        </Text>
                        <Box w='100%' maxW={{ base: '12.25rem', sm: '14.5rem', md: '21.875rem' }}>
                            <Controller
                                control={control}
                                name='categoriesIds'
                                render={({ field }) => (
                                    <MultiSelectMenu
                                        options={categoryOptions}
                                        selected={categoryOptions.filter((opt) =>
                                            field.value.includes(opt.value),
                                        )}
                                        onChange={(opts) =>
                                            field.onChange(opts.map((opt) => opt.value))
                                        }
                                        isInvalid={!!errors.categoriesIds}
                                        maxVisibleTags={maxVisibleTags}
                                        placeholder='Выберите из списка...'
                                    />
                                )}
                            />
                        </Box>
                    </HStack>

                    <FormInput
                        type='text'
                        placeholder='Название рецепта'
                        {...register('title')}
                        error={errors.title}
                    />

                    <FormTextarea
                        placeholder='Краткое описание рецепта'
                        minH='5rem'
                        {...register('description')}
                        error={errors.description}
                    />

                    <Flex gap={{ base: 4, md: 6 }} justify='start' align='center'>
                        <Box w='auto'>
                            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='600'>
                                На сколько человек ваш рецепт?
                            </Text>
                        </Box>

                        <Box maxW='5.625rem'>
                            <FormNumberInput
                                name='portions'
                                register={register('portions', { valueAsNumber: true })}
                                error={errors.portions}
                            />
                        </Box>
                    </Flex>

                    <Flex gap={{ base: 4, md: 6 }} justify='start' align='center'>
                        <Box w='auto'>
                            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='600'>
                                Сколько времени готовить в минутах?
                            </Text>
                        </Box>

                        <Box maxW='5.625rem'>
                            <FormNumberInput
                                name='time'
                                register={register('time', { valueAsNumber: true })}
                                error={errors.time}
                            />
                        </Box>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    );
};
