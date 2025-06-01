import { ApiEndpoints } from '../constants/api';
import { EndpointNames } from '../constants/endpoint-names';
import { apiSlice } from '../create-api';

export type MeasureUnit = {
    _id: string;
    name: string;
};

type GetMeasureUnitsResponse = Array<{ label: string; value: string }>;

export const measureUnitsApiSlice = apiSlice.enhanceEndpoints({}).injectEndpoints({
    endpoints: (builder) => ({
        [EndpointNames.GET_MEASURE_UNITS]: builder.query<GetMeasureUnitsResponse, void>({
            query: () => ({
                url: ApiEndpoints.MEASURE_UNITS,
                method: 'GET',
            }),
            transformResponse: (data: MeasureUnit[]) =>
                data.map(({ name }) => ({ value: name, label: name })),
        }),
    }),
});

export const { useGetMeasureUnitsQuery } = measureUnitsApiSlice;
