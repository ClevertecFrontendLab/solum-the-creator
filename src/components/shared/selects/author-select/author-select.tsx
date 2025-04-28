import { authors } from '~/constants/data/authors';

import { MultiSelectMenu, Option } from '../multi-select-menu/multi-select-menu';

type AuthorSelectProps = {
    selectedAuthors: Option[];
    onChange: (selected: Option[]) => void;
    isDisabled?: boolean;
};

export const AuthorSelect: React.FC<AuthorSelectProps> = ({
    selectedAuthors,
    onChange,
    isDisabled,
}) => {
    const initialAuthors: Option[] = authors.map((author) => ({
        label: author.fullName,
        value: author.id.toString(),
    }));

    return (
        <MultiSelectMenu
            options={initialAuthors}
            selected={selectedAuthors}
            onChange={onChange}
            isDisabled={isDisabled}
            placeholder='Поиск по автору'
        />
    );
};
