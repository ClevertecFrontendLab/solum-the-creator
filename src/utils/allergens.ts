import { Option } from '~/components/shared/selects/multi-select-menu/multi-select-menu';

export const mergeOptionsWithValues = (values: string[], baseOptions: Option[]): Option[] => {
    const base = [...baseOptions];
    const custom = values
        .filter((val) => !baseOptions.some((opt) => opt.value === val))
        .map((val) => ({ label: val, value: val }));
    return [...base, ...custom];
};
