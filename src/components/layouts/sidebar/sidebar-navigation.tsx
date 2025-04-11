import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    List,
    ListItem,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import ChevronDownIcon from '~/assets/icons/chevron-down-icon.svg?react';
import { categoryIcons } from '~/constants/category-icons';
import { routeTree } from '~/constants/route-tree';
import { getCategories, getSubcategoryPath, isCategoryActive } from '~/utils/categories';

export const SidebarNavigation: React.FC = () => {
    const categories = getCategories(routeTree);
    const location = useLocation();
    const pathname = location.pathname.slice(1);

    const getCurrentCategory = () => {
        const category = categories
            .map((c, i) => (isCategoryActive(c.path, pathname) ? i : -1))
            .filter((i) => i !== -1);
        return category;
    };

    return (
        <Accordion as='nav' py='10px' pl='10px' pr='16px' defaultIndex={getCurrentCategory()}>
            {categories.map((category) => {
                const isActive = isCategoryActive(category.path, pathname);

                return (
                    <AccordionItem key={category.path} border='none'>
                        <Link to={category.path}>
                            <AccordionButton
                                py={3}
                                px={2}
                                bg={isActive ? 'gray.100' : 'transparent'}
                            >
                                <Box as='span' boxSize={6} mr={3}>
                                    {categoryIcons[category.path] ?? null}
                                </Box>
                                <Box as='span' flex={1} textAlign='left'>
                                    {category.name}
                                </Box>
                                <AccordionIcon boxSize={4} as={ChevronDownIcon} />
                            </AccordionButton>
                        </Link>

                        <AccordionPanel>
                            <List>
                                {category.children?.map((child) => {
                                    const subPathname = getSubcategoryPath(
                                        category.path,
                                        child.path,
                                    );
                                    const isActive = subPathname === pathname;

                                    return (
                                        <ListItem key={child.path}>
                                            <Link to={subPathname}>
                                                <Box bg={isActive ? 'gray.100' : 'transparent'}>
                                                    {child.name}
                                                </Box>
                                            </Link>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </AccordionPanel>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};
