import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    TabList,
    Tabs,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { Link } from 'react-router';

import ChevronDownIcon from '~/assets/icons/chevron-down-icon.svg?react';
import { pathes } from '~/constants/navigation/pathes';
import { SidebarCategory } from '~/types/category';
import { concatPath, getActiveSubcategoryIndex, isCategoryActive } from '~/utils/categories';

import { SubcategoryItem } from './subcategory-item';

type CategoryItemProps = {
    category: SidebarCategory;
    pathname: string;
};

export const CategoryItem = React.memo(
    ({ category, pathname }: CategoryItemProps) => {
        const isActive = useMemo(
            () => isCategoryActive(category.category, pathname),
            [category.category, pathname],
        );

        const subcategories = category.subCategories;

        const firstSubcategoryPath = useMemo(
            () =>
                subcategories?.[0]
                    ? concatPath(category.category, subcategories[0].category)
                    : undefined,
            [category.category, subcategories],
        );

        const activeTabIndex = useMemo(
            () => getActiveSubcategoryIndex(category, subcategories, pathname),
            [category, subcategories, pathname],
        );

        const bgColor = isActive ? 'lime.100' : 'transparent';
        const fontWeight = isActive ? '700' : '500';

        return (
            <AccordionItem border='none'>
                <AccordionButton
                    as={Link}
                    to={firstSubcategoryPath || pathes.home}
                    py={3}
                    px={2}
                    bg={bgColor}
                    fontWeight={fontWeight}
                    data-test-id={
                        category.category === 'vegan' ? 'vegan-cuisine' : category.category
                    }
                >
                    <Box as='span' boxSize={6} mr={3}>
                        <Image src={category.icon} alt={category.category} boxSize={6} />
                    </Box>
                    <Box as='span' flex={1} textAlign='left'>
                        {category.title}
                    </Box>
                    <AccordionIcon boxSize={4} as={ChevronDownIcon} />
                </AccordionButton>

                <AccordionPanel>
                    {subcategories.length > 0 && (
                        <Tabs
                            ml={10}
                            variant='subcategory'
                            index={activeTabIndex >= 0 ? activeTabIndex : 0}
                            isLazy={true}
                        >
                            <TabList display='flex' flexDirection='column'>
                                {subcategories.map((child, index) => (
                                    <SubcategoryItem
                                        key={child._id}
                                        isActive={activeTabIndex === index}
                                        to={concatPath(category.category, child.category)}
                                        subcategory={child.category}
                                        name={child.title}
                                    />
                                ))}
                            </TabList>
                        </Tabs>
                    )}
                </AccordionPanel>
            </AccordionItem>
        );
    },
    (prev, next) =>
        prev.pathname === next.pathname &&
        prev.category.category === next.category.category &&
        JSON.stringify(prev.category.subCategories) === JSON.stringify(next.category.subCategories),
);
