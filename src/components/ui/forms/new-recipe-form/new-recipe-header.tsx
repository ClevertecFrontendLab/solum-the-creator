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
import { selectAllCategories } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const NewRecipeHeader = () => {
    const maxVisibleTags = useBreakpointValue({ base: 1, md: 2 });
    const categories = useAppSelector(selectAllCategories);

    const categoryOptions: Option[] = useMemo(
        () =>
            categories.map((cat) => ({
                label: cat.title,
                value: cat._id,
            })),
        [categories],
    );

    const { control, register, watch } = useFormContext();

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
                    <ImageField name='cover' register={register('cover')} value={watch('cover')} />
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
                                name='categories'
                                render={({ field, fieldState }) => (
                                    <MultiSelectMenu
                                        options={categoryOptions}
                                        selected={field.value ?? []}
                                        onChange={field.onChange}
                                        isInvalid={!!fieldState.error}
                                        maxVisibleTags={maxVisibleTags}
                                        placeholder='Выберите из списка...'
                                    />
                                )}
                            />
                        </Box>
                    </HStack>

                    <FormInput type='text' placeholder='Название рецепта' name='title' />

                    <FormTextarea
                        placeholder='Краткое описание рецепта'
                        name='description'
                        minH='5rem'
                    />

                    <Flex gap={{ base: 4, md: 6 }} justify='start' align='center'>
                        <Box w='auto'>
                            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='600'>
                                На сколько человек ваш рецепт?
                            </Text>
                        </Box>

                        <Box maxW='5.625rem'>
                            <FormNumberInput name='portions' />
                        </Box>
                    </Flex>

                    <Flex gap={{ base: 4, md: 6 }} justify='start' align='center'>
                        <Box w='auto'>
                            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='600'>
                                Сколько времени готовить в минутах?
                            </Text>
                        </Box>

                        <Box maxW='5.625rem'>
                            <FormNumberInput name='time' />
                        </Box>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    );
};
