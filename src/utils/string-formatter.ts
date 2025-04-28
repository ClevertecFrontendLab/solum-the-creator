export const normalizeValue = (value: string): string =>
    value.trim().toLowerCase().replace(/\s+/g, '-');
