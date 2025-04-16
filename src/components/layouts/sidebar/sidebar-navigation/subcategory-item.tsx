import { Tab, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router';

type SubcategoryItemProps = {
    to: string;
    name: string;
};

export const SubcategoryItem = React.memo(({ to, name }: SubcategoryItemProps) => (
    <Tab position='relative' as={Link} to={to} pl={3} pr={0} py={1.5} justifyContent='flex-start'>
        <Text as='span' isTruncated={true}>
            {name}
        </Text>
    </Tab>
));
