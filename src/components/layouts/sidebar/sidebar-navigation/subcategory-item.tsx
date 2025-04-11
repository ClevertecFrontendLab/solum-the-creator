import { Box, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router';

type SubcategoryItemProps = {
    to: string;
    name: string;
    isActive: boolean;
};

export const SubcategoryItem: React.FC<SubcategoryItemProps> = ({ to, name, isActive }) => (
    <ListItem>
        <Link to={to}>
            <Box
                px={3}
                py={1}
                bg={isActive ? 'gray.100' : 'transparent'}
                _hover={{ bg: 'gray.50' }}
            >
                {name}
            </Box>
        </Link>
    </ListItem>
);
