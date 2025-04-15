import { Box, chakra, ListItem, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

type SubcategoryItemProps = {
    to: string;
    name: string;
    isActive: boolean;
};

const LinkBox = chakra(RouterLink);

export const SubcategoryItem: React.FC<SubcategoryItemProps> = ({ to, name, isActive }) => (
    <ListItem position='relative'>
        <LinkBox to={to} display='block' py={1.5} pl={3} position='relative'>
            <Box
                position='absolute'
                right='100%'
                top='50%'
                transform='translateY(-50%)'
                w={isActive ? 2 : '1px'}
                h={isActive ? 7 : 6}
                bg='lime.300'
                transition='all 0.2s ease'
            />
            <Text as='span' fontWeight={isActive ? '700' : '500'} isTruncated={true}>
                {name}
            </Text>
        </LinkBox>
    </ListItem>
);
