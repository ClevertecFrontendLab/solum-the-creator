import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';

type FilterTagProps = {
    label: string;
    value: string;
    onRemove: (value: string) => void;
};

export const FilterTag: React.FC<FilterTagProps> = ({ label, value, onRemove }) => (
    <Tag size='md' variant='brand' data-test-id='filter-tag'>
        <TagLabel>{label}</TagLabel>
        <TagCloseButton onClick={() => onRemove(value)} />
    </Tag>
);
