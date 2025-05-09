import { IMG_BASE_URL } from '~/query/constants/api';
import { Recipe } from '~/query/services/recipe';

export const getImgUrl = (url: string) => `${IMG_BASE_URL}${url}`;

export function transformRecipeResponse(raw: Recipe): Recipe;
export function transformRecipeResponse(raw: Recipe[]): Recipe[];
export function transformRecipeResponse(raw: Recipe[] | Recipe): Recipe[] | Recipe {
    if (Array.isArray(raw)) {
        return raw.map((r) => transformRecipeResponse(r));
    }

    return {
        ...raw,
        image: getImgUrl(raw.image),
        steps: raw.steps.map((s) => ({
            ...s,
            image: s.image ? getImgUrl(s.image) : undefined,
        })),
    };
}
