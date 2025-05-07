export type Valuable<T> = {
    [K in keyof T as T[K] extends null | undefined | [] ? never : K]: T[K];
};

export function getValuable<T extends NonNullable<unknown>, V = Valuable<T>>(obj: T): V {
    return Object.fromEntries(
        Object.entries(obj).filter(
            ([, v]) =>
                !(
                    (typeof v === 'string' && !v.length) ||
                    v === null ||
                    typeof v === 'undefined' ||
                    (typeof v === 'object' && Array.isArray(v) && !v.length)
                ),
        ),
    ) as V;
}
