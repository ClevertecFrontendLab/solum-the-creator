export enum ApiEndpoints {
    POSTS = '/posts/',
    CATEGORY = '/category',
    RECIPE = '/recipe',
    RECIPE_CATEGORY = '/recipe/category/',

    AUTH_LOGIN = '/auth/login',
    AUTH_REFRESH = '/auth/refresh',
    AUTH_CHECK_AUTH = '/auth/check-auth',
    AUTH_SIGNUP = '/auth/signup',
    AUTH_FORGOT_PASSWORD = '/auth/forgot-password',
    AUTH_VERIFY_OTP = '/auth/verify-otp',
    AUTH_RESET_PASSWORD = '/auth/reset-password',
}

export const API_BASE_URL = 'https://marathon-api.clevertec.ru';
export const IMG_BASE_URL = 'https://training-api.clevertec.ru';
