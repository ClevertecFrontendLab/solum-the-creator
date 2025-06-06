export enum ApiEndpoints {
    POSTS = '/posts/',
    CATEGORY = '/category',
    RECIPE = '/recipe',
    RECIPE_DRAFT = '/recipe/draft',
    RECIPE_CATEGORY = '/recipe/category/',

    AUTH_LOGIN = '/auth/login',
    AUTH_REFRESH = '/auth/refresh',
    AUTH_CHECK_AUTH = '/auth/check-auth',
    AUTH_SIGNUP = '/auth/signup',
    AUTH_FORGOT_PASSWORD = '/auth/forgot-password',
    AUTH_VERIFY_OTP = '/auth/verify-otp',
    AUTH_RESET_PASSWORD = '/auth/reset-password',

    FILE_UPLOAD = '/file/upload',

    MEASURE_UNITS = '/measure-units',
}

export const API_BASE_URL = 'https://marathon-api.clevertec.ru';
export const IMG_BASE_URL = 'https://training-api.clevertec.ru';
