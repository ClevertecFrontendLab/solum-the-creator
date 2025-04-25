import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useScrollToTab } from '~/hooks/use-scroll-to-tab';
import { getCurrentCategory } from '~/utils/categories';

export const CategoryTabs = () => {
    const { category, subcategory } = useParams();
    const navigate = useNavigate();

    const currentCategory = getCurrentCategory(category);
    const children = useMemo(() => currentCategory?.children ?? [], [currentCategory]);

    const currentIndex = children.findIndex((child) => child.path === subcategory);

    const tabRefs = useScrollToTab(currentIndex, children);

    const handleTabChange = (index: number) => {
        const sub = children[index];
        if (sub) {
            navigate(`/${category}/${sub.path}`);
        }
    };

    if (!currentCategory || children.length === 0) {
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
            <Box
                overflowX='auto'
                w='100%'
                sx={{
                    '::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <TabList
                    display='inline-flex'
                    w='100%'
                    flexWrap={{ base: 'nowrap', lg: 'wrap' }}
                    gap={0}
                >
                    {children.map((child, index) => (
                        <Tab
                            key={child.path}
                            ref={(el) => {
                                tabRefs.current[index] = el;
                            }}
                            flexShrink={0}
                            py={{ base: 1, md: 2 }}
                            fontSize={{ base: 'sm', md: 'md' }}
                            fontWeight='500'
                        >
                            {child.name}
                        </Tab>
                    ))}
                </TabList>
            </Box>
        </Tabs>
    );
};
