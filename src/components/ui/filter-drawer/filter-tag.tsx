import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';

type FilterTagProps = {
    label: string;
    value: string;
    onRemove: (value: string) => void;
};

export const FilterTag: React.FC<FilterTagProps> = ({ label, value, onRemove }) => (
    <Tag size='md' variant='brand'>
        <TagLabel>{label}</TagLabel>
        <TagCloseButton onClick={() => onRemove(value)} />
    </Tag>
);
