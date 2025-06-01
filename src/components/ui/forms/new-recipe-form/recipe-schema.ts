import z from 'zod';

export const ingredientSchema = z.object({
    title: z.string().min(1).max(50),
    count: z.number().positive(),
    measureUnit: z.string().min(1).max(50),
});

export const stepSchema = z.object({
    stepNumber: z.number().int().min(1).optional(),
    description: z.string().min(1).max(300),
    image: z.union([z.string(), z.null()]).optional(),
});

export const recipeSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().min(1).max(500),
    time: z.number().int().positive().max(10000),
    portions: z.number().int().min(1).max(100),
    image: z.string().min(1),
    categoriesIds: z.array(z.string().min(1)).min(3),
    steps: z.array(stepSchema).min(1),
    ingredients: z.array(ingredientSchema).min(1),
});

export const ingredientDraftSchema = ingredientSchema.partial();

export const stepDraftSchema = stepSchema.partial();

export const recipeDraftSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().max(500).optional(),
    time: z.number().int().positive().max(10000).optional(),
    portions: z.number().int().min(1).max(100).optional(),
    image: z.string().optional(),
    categoriesIds: z.array(z.string()).optional(),
    ingredients: z.array(ingredientDraftSchema).optional(),
    steps: z.array(stepDraftSchema).optional(),
});

export type Ingredient = z.infer<typeof ingredientSchema>;

export type Step = z.infer<typeof stepSchema>;

export type RecipeFormData = z.infer<typeof recipeSchema>;

export type RecipeDraftFormData = z.infer<typeof recipeDraftSchema>;
