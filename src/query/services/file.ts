import { ApiEndpoints } from '../constants/api';
import { Tags } from '../constants/tags';
import { apiSlice } from '../create-api';

type UploadFileResponse = {
    _id: string;
    name: string;
    url: string;
};

export const fileApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.FILES],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            uploadFile: builder.mutation<UploadFileResponse, File>({
                query: (file) => {
                    const formData = new FormData();
                    formData.append('file', file);

                    return {
                        url: ApiEndpoints.FILE_UPLOAD,
                        method: 'POST',
                        body: formData,
                    };
                },
            }),
        }),
    });

export const { useUploadFileMutation } = fileApiSlice;
