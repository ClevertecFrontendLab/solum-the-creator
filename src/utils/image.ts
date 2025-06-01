import { IMG_BASE_URL } from '~/query/constants/api';
import { Recipe } from '~/types/recipe';

export const getImgUrl = (url?: string | null): string | null => {
    if (!url || typeof url !== 'string') return null;

    const cleaned = url.trim();
    if (!cleaned || cleaned === 'undefined' || cleaned === 'null') return null;

    if (
        cleaned.startsWith('http://') ||
        cleaned.startsWith('https://') ||
        cleaned.startsWith(IMG_BASE_URL)
    ) {
        return cleaned;
    }

    return `${IMG_BASE_URL}${cleaned}`;
};

export function transformRecipeResponse(raw: Recipe): Recipe;
export function transformRecipeResponse(raw: Recipe[]): Recipe[];
export function transformRecipeResponse(raw: Recipe[] | Recipe): Recipe[] | Recipe {
    if (Array.isArray(raw)) {
        return raw.map((r) => transformRecipeResponse(r));
    }

    return {
        ...raw,
        image: getImgUrl(raw.image) ?? '',
        steps: raw.steps.map((s) => ({
            ...s,
            image: getImgUrl(s.image) ?? undefined,
        })),
    };
}
