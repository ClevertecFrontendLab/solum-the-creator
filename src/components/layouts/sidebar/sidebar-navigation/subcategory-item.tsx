import { Box, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

type SubcategoryItemProps = {
    to: string;
    name: string;
    isActive: boolean;
};

export const SubcategoryItem: React.FC<SubcategoryItemProps> = ({ to, name, isActive }) => (
    <ListItem position='relative'>
        <Link to={to}>
            <Box position='relative' py='6px' pl='12px' pr='8px'>
                <Box
                    position='absolute'
                    right='100%'
                    top='50%'
                    transform='translateY(-50%)'
                    w={isActive ? '8px' : '1px'}
                    h={isActive ? 7 : 6}
                    bg='lime.300'
                    transition='width 0.2s'
                />
                <Text as='span' fontWeight={isActive ? '700' : '500'}>
                    {name}
                </Text>
            </Box>
        </Link>
    </ListItem>
);
