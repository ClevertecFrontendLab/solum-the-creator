export enum EndpointNames {
    GET_POSTS = 'getPosts',
    GET_CATEGORY = 'getCategories',
    GET_RECIPES = 'getRecipes',
    GET_JUICIEST_RECIPES = 'getJuiciestRecipes',
    GET_JUICIEST_RECIPES_PAGINATED = 'getJuiciestRecipesPaginated',
    GET_RECIPES_BY_SUBCATEGORY_IDS = 'getRecipesBySubcategoryIds',
    GET_RECIPES_BY_CATEGORY_ID_PAGINATED = 'getRecipesByCategoryIdPaginated',
    GET_RECIPE_BY_ID = 'getRecipeById',
    GET_FILTERED_RECIPES = 'getFilteredRecipes',
    GET_RELEVANT_RECIPES = 'getRelevantRecipes',

    CREATE_RECIPE = 'createRecipe',
    CREATE_RECIPE_DRAFT = 'createRecipeDraft',
    UPDATE_RECIPE = 'updateRecipe',
    DELETE_RECIPE = 'deleteRecipe',

    TOGGLE_LIKE_RECIPE = 'toggleLikeRecipe',
    TOGGLE_BOOKMARK_RECIPE = 'toggleBookmarkRecipe',

    GET_MEASURE_UNITS = 'getMeasureUnits',
}
