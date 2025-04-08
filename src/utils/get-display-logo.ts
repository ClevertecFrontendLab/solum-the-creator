export const getDisplay = (isFull?: boolean, responsive?: boolean) => {
    if (!isFull) return 'none';
    if (responsive) return { base: 'none', sm: 'block' };
    return 'block';
};
