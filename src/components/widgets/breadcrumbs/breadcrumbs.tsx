import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { useBreadcrumbs } from '~/hooks/use-breadcrumbs';

type BreadcrumbsProps = {
    onNavigate?: () => void;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ onNavigate }) => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();

    const separator = (
        <Center>
            <ChevronRightIcon boxSize={5} />
        </Center>
    );

    const breadcrumbsItems = breadcrumbs.map((crumb, index) => {
        const isCurrent = index === breadcrumbs.length - 1;

        const handleClick = () => {
            if (crumb.href !== location.pathname) {
                onNavigate?.();
            }
        };

        return (
            <BreadcrumbItem key={crumb.href} isCurrentPage={isCurrent}>
                <BreadcrumbLink as={Link} to={crumb.href} onClick={handleClick}>
                    {crumb.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
        );
    });

    return (
        <Breadcrumb
            spacing='0'
            separator={separator}
            display='flex'
            flexWrap='wrap'
            rowGap={1}
            listProps={{ flexWrap: 'wrap' }}
        >
            {breadcrumbsItems}
        </Breadcrumb>
    );
};
