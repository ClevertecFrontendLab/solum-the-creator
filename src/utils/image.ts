import { IMG_BASE_URL } from '~/query/constants/api';
import { RawRecipe } from '~/query/services/recipe';

export const getImgUrl = (url: string) => `${IMG_BASE_URL}${url}`;

export const transformRecipeResponse = (raw: RawRecipe[]): RawRecipe[] =>
    raw.map((r) => ({
        ...r,
        image: getImgUrl(r.image),
        steps: r.steps.map((s) => ({
            ...s,
            image: s.image ? getImgUrl(s.image) : undefined,
        })),
    }));
