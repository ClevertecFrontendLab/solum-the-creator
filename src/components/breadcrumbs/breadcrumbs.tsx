import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center } from '@chakra-ui/react';
import { Link } from 'react-router';

import { useBreadcrumbs } from '~/hooks/use-breadcrumbs';

export const Breadcrumbs: React.FC = () => {
    const breadcrumbs = useBreadcrumbs();

    const separator = (
        <Center>
            <ChevronRightIcon boxSize={5} />
        </Center>
    );

    const breadcrumbsItems = breadcrumbs.map((crumb, index) => {
        const isCurrent = index === breadcrumbs.length - 1;
        return (
            <BreadcrumbItem key={crumb.href} isCurrentPage={isCurrent}>
                <BreadcrumbLink as={Link} to={crumb.href}>
                    {crumb.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
        );
    });

    return (
        <Breadcrumb spacing='0' separator={separator}>
            {breadcrumbsItems}
        </Breadcrumb>
    );
};
