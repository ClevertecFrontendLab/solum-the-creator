import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauthAndNotify } from './base-query-notify';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauthAndNotify,
    endpoints: () => ({}),
});
