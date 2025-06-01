export const emptyRecipeFormStep = {
    description: '',
    image: null,
};

export const emptyRecipeFormValues = {
    categoriesIds: [],
    ingredients: [{ title: '', count: 0, measureUnit: '' }],
    steps: [emptyRecipeFormStep],
};
