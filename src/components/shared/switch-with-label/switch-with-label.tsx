import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

type SwitchWithLabelProps = {
    id: string;
    label: string;
    dataTestId?: string;
    isChecked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SwitchWithLabel: React.FC<SwitchWithLabelProps> = ({
    id,
    label,
    dataTestId,
    ...props
}) => (
    <FormControl
        display='flex'
        alignItems='center'
        justifyContent='center'
        pl={2}
        py={1.5}
        w='auto'
    >
        <FormLabel htmlFor={id} mb='0' cursor='pointer'>
            {label}
        </FormLabel>
        <Switch id={id} colorScheme='lime' data-test-id={dataTestId} {...props} />
    </FormControl>
);
