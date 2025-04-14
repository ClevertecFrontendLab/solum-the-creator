import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';

import { getCurrentCategory } from '~/utils/categories';

export const CategoryTabs = () => {
    const { category, subcategory } = useParams();
    const navigate = useNavigate();

    const currentCategory = getCurrentCategory(category);

    if (!currentCategory || !currentCategory.children) {
        return null;
    }

    const handleTabChange = (index: number) => {
        const sub = currentCategory.children?.[index];
        if (sub) {
            navigate(`/${category}/${sub.path}`);
        }
    };

    const currentIndex = currentCategory.children.findIndex((child) => child.path === subcategory);

    return (
        <Tabs
            index={currentIndex === -1 ? 0 : currentIndex}
            onChange={handleTabChange}
            w='100%'
            isLazy={true}
            variant='line'
            colorScheme='lime'
            pb={3}
            mb={3}
        >
            <Box
                overflowX='auto'
                w='100%'
                css={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <TabList
                    whiteSpace='nowrap'
                    display='flex'
                    justifyContent='center'
                    w='100%'
                    gap={0}
                    borderBottom='1px solid'
                    borderColor='blackAlpha.200'
                >
                    {currentCategory.children.map((child) => (
                        <Tab
                            key={child.path}
                            flexShrink={0}
                            fontSize={{ base: 'sm', md: 'md' }}
                            fontWeight='500'
                            py={1}
                            _selected={{
                                borderBottom: '4px solid',
                                color: 'lime.600',
                                borderColor: 'lime.600',
                            }}
                        >
                            {child.name}
                        </Tab>
                    ))}
                </TabList>
            </Box>
        </Tabs>
    );
};
