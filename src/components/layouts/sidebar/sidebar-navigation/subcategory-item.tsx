import { Tab, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router';

type SubcategoryItemProps = {
    to: string;
    name: string;
    subcategory: string;
    isActive?: boolean;
};

export const SubcategoryItem = React.memo(
    ({ to, name, subcategory, isActive }: SubcategoryItemProps) => (
        <Tab
            position='relative'
            as={Link}
            to={to}
            pl={3}
            pr={0}
            py={1.5}
            justifyContent='flex-start'
            data-test-id={isActive ? `${subcategory}-active` : undefined}
        >
            <Text as='span' isTruncated={true}>
                {name}
            </Text>
        </Tab>
    ),
);
