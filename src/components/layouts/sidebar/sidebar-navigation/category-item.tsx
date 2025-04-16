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
import { RouteNode } from '~/constants/navigation/route-tree';
import { categoryIcons } from '~/constants/ui/category-icons';
import {
    getActiveSubcategoryIndex,
    getSubcategoryPath,
    isCategoryActive,
    isCategoryKey,
} from '~/utils/categories';
import { getFirstSubcategoryPath } from '~/utils/get-first-subcategory';

import { SubcategoryItem } from './subcategory-item';

type CategoryItemProps = {
    category: RouteNode;
    pathname: string;
};

export const CategoryItem = React.memo(
    ({ category, pathname }: CategoryItemProps) => {
        const isActive = useMemo(
            () => isCategoryActive(category.path, pathname),
            [category.path, pathname],
        );
        const icon = useMemo(
            () => (isCategoryKey(category.path) ? categoryIcons[category.path] : undefined),
            [category.path],
        );

        const subcategories = useMemo(() => category.children ?? [], [category.children]);

        const firstSubcategoryPath = useMemo(
            () => getFirstSubcategoryPath(category.path),
            [category.path],
        );
        const activeTabIndex = useMemo(
            () => getActiveSubcategoryIndex(category, subcategories, pathname),
            [category, subcategories, pathname],
        );

        const dataTestId = category.path === 'vegan' ? 'vegan-cuisine' : undefined;

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
                    data-test-id={dataTestId}
                >
                    <Box as='span' boxSize={6} mr={3}>
                        <Image src={icon} alt={category.name} boxSize={6} />
                    </Box>
                    <Box as='span' flex={1} textAlign='left'>
                        {category.name}
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
                                {subcategories.map((child) => {
                                    const subPath = getSubcategoryPath(category.path, child.path);

                                    return (
                                        <SubcategoryItem
                                            key={child.path}
                                            to={subPath}
                                            name={child.name}
                                        />
                                    );
                                })}
                            </TabList>
                        </Tabs>
                    )}
                </AccordionPanel>
            </AccordionItem>
        );
    },
    (prev, next) =>
        prev.pathname === next.pathname &&
        prev.category.path === next.category.path &&
        JSON.stringify(prev.category.children) === JSON.stringify(next.category.children),
);
