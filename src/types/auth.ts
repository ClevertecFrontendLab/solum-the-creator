export type SignUpRequest = {
    email: string;
    login: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type SignUpResponse = {
    message: string;
    statusText: string;
};

export type AuthError = {
    status: number;
    data: {
        error: string;
        message: string;
        statusCode: number;
    };
};
