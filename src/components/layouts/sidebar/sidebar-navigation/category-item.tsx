import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    List,
} from '@chakra-ui/react';
import { Link } from 'react-router';

import ChevronDownIcon from '~/assets/icons/chevron-down-icon.svg?react';
import { pathes } from '~/constants/navigation/pathes';
import { RouteNode } from '~/constants/navigation/route-tree';
import { categoryIcons } from '~/constants/ui/category-icons';
import { getSubcategoryPath, isCategoryActive, isCategoryKey } from '~/utils/categories';
import { getFirstSubcategoryPath } from '~/utils/get-first-subcategory';

import { SubcategoryItem } from './subcategory-item';

type CategoryItemProps = {
    category: RouteNode;
    pathname: string;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, pathname }) => {
    const isActive = isCategoryActive(category.path, pathname);
    const icon = isCategoryKey(category.path) ? categoryIcons[category.path] : undefined;

    const subcategories = category.children ?? [];
    const dataTestId = category.path === 'vegan' ? 'vegan-cuisine' : undefined;

    const bgColor = isActive ? 'lime.100' : 'transparent';
    const fontWeight = isActive ? '700' : '500';

    const firstSubcategoryPath = getFirstSubcategoryPath(category.path);

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
                <List ml={10}>
                    {subcategories.map((child) => {
                        const subPath = getSubcategoryPath(category.path, child.path);
                        return (
                            <SubcategoryItem
                                key={child.path}
                                to={subPath}
                                name={child.name}
                                isActive={subPath === pathname}
                            />
                        );
                    })}
                </List>
            </AccordionPanel>
        </AccordionItem>
    );
};
