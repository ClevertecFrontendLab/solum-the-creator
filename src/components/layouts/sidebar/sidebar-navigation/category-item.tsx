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
import { categoryIcons } from '~/constants/category-icons';
import { RouteNode } from '~/constants/route-tree';
import { getSubcategoryPath, isCategoryActive, isCategoryKey } from '~/utils/categories';

import { SubcategoryItem } from './subcategory-item';

type CategoryItemProps = {
    category: RouteNode;
    pathname: string;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, pathname }) => {
    const isActive = isCategoryActive(category.path, pathname);
    const icon = isCategoryKey(category.path) ? categoryIcons[category.path] : undefined;

    return (
        <AccordionItem key={category.path} border='none'>
            <Link to={category.path}>
                <AccordionButton
                    py={3}
                    px={2}
                    bg={isActive ? 'lime.100' : 'transparent'}
                    fontWeight={isActive ? '700' : '500'}
                >
                    <Box as='span' boxSize={6} mr={3}>
                        <Image src={icon} alt={category.name} boxSize={6} />
                    </Box>
                    <Box as='span' flex={1} textAlign='left'>
                        {category.name}
                    </Box>
                    <AccordionIcon boxSize={4} as={ChevronDownIcon} />
                </AccordionButton>
            </Link>

            <AccordionPanel>
                <List ml={10}>
                    {category.children?.map((child) => {
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
