import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorNotification } from './base-query';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithErrorNotification,
    endpoints: () => ({}),
});
