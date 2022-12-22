import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://assignment-api.piton.com.tr/api/v1'
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body: {email: string, password:string}) => {
                return {
                    url: '/user/login',
                    method: 'POST',
                    body
                };
            }
        })
    })
})

export const {useLoginMutation} = authApi;