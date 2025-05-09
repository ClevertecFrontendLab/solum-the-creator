import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { useScrollToTab } from '~/hooks/use-scroll-to-tab';
import { selectCategoryBySlug } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const CategoryTabs = () => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const navigate = useNavigate();

    const currentCategory = useAppSelector(selectCategoryBySlug(category!));

    const subcategories = currentCategory?.subCategories ?? [];

    const currentIndex = subcategories.findIndex((child) => child.category === subcategory);

    const tabRefs = useScrollToTab(currentIndex);

    const hideScrollbar = {
        '::-webkit-scrollbar': {
            display: 'none',
        },
    };

    const handleTabChange = (index: number) => {
        if (!currentCategory) {
            return;
        }

        const sub = subcategories[index];
        if (sub) {
            navigate(pathes.subcategory(currentCategory.category, sub.category));
        }
    };

    const setTabRef = (el: HTMLButtonElement | null, index: number) => {
        if (el) {
            tabRefs.current[index] = el;
        }
    };

    if (!currentCategory || subcategories.length === 0) {
        return null;
    }

    return (
        <Tabs
            index={currentIndex === -1 ? 0 : currentIndex}
            onChange={handleTabChange}
            w='100%'
            variant='category-horizontal'
            pb={3}
            mb={3}
            align='center'
        >
            <Box overflowX='auto' w='100%' sx={hideScrollbar}>
                <TabList
                    display='inline-flex'
                    w='100%'
                    flexWrap={{ base: 'nowrap', lg: 'wrap' }}
                    gap={0}
                >
                    {subcategories.map((subcategory, index) => (
                        <Tab
                            key={subcategory._id}
                            ref={(el) => setTabRef(el, index)}
                            flexShrink={0}
                            py={{ base: 1, md: 2 }}
                            fontSize={{ base: 'sm', md: 'md' }}
                            fontWeight='500'
                            data-test-id={`tab-${subcategory.category}-${index}`}
                        >
                            {subcategory.title}
                        </Tab>
                    ))}
                </TabList>
            </Box>
        </Tabs>
    );
};
