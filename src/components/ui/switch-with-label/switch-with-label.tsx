import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

type SwitchWithLabelProps = {
    id: string;
    label: string;
    isChecked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SwitchWithLabel: React.FC<SwitchWithLabelProps> = ({ id, label, ...props }) => (
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
        <Switch id={id} colorScheme='lime' {...props} />
    </FormControl>
);
