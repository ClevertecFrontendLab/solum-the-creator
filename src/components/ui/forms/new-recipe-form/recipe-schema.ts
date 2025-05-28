import z from 'zod';

export const ingredientSchema = z.object({
    title: z.string().min(1).max(50),
    count: z.number().positive(),
    measureUnit: z.string().min(1).max(50),
});

export const stepSchema = z.object({
    stepNumber: z.number().int().min(1).optional(),
    description: z.string().min(1).max(300),
    image: z.string().optional(),
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

export type Ingredient = z.infer<typeof ingredientSchema>;

export type Step = z.infer<typeof stepSchema>;

export type RecipeFormData = z.infer<typeof recipeSchema>;
