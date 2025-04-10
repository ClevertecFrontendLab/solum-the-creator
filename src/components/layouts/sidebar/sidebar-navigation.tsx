import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    List,
    ListItem,
} from '@chakra-ui/react';
import { Link } from 'react-router';

import { VEGAN_CATEGORY_PATH } from '~/constants/pathes';
import { routeTree } from '~/constants/route-tree';
import { getCategories, getSubcategoryPath } from '~/utils/get-categories';

export const SidebarNavigation: React.FC = () => {
    const categories = getCategories(routeTree);
    return (
        <Accordion>
            {categories.map((category) => (
                <AccordionItem key={category.path}>
                    <Link to={VEGAN_CATEGORY_PATH}>
                        <AccordionButton>{category.name}</AccordionButton>
                    </Link>

                    <AccordionPanel>
                        <List>
                            {category.children?.map((child) => (
                                <ListItem key={child.path}>
                                    <Link to={getSubcategoryPath(VEGAN_CATEGORY_PATH, child.path)}>
                                        {child.name}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
