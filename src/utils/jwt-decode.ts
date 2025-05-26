import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
    userId: string;
    login: string;
    iat: number;
    exp: number;
};

export const getUserIdFromJwt = (token: string): string | null => {
    try {
        const payload = jwtDecode<JwtPayload>(token);

        console.log(payload);

        return payload.userId ?? null;
    } catch (_error) {
        return null;
    }
};
