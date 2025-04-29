import { IMG_BASE_URL } from '~/query/constants/api';

export const getImgUrl = (url: string) => `${IMG_BASE_URL}${url}`;
