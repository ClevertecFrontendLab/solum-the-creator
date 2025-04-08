import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router';

import { useBreadcrumbs } from '~/hooks/use-breadcrumbs';

export const Breadcrumbs: React.FC = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <Breadcrumb>
            {breadcrumbs.map((crumb) => (
                <BreadcrumbItem key={crumb.href}>
                    <BreadcrumbLink as={Link} to={crumb.href}>
                        {crumb.label}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};
