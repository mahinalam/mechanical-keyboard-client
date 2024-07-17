/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mechanical-keyboard-back-end.vercel.app/api/v1",
  }),
  tagTypes: ["product", "cart"],
  endpoints: (build) => ({
    getProducts: build.query({
      providesTags: ["product"],
      query: () => `/products`,
    }),
    getSingleProduct: build.query({
      providesTags: ["product"],
      query: (id) => `/products/${id}`,
    }),
    addProduct: build.mutation({
      query(data: any) {
        console.log(data);
        return {
          url: `/products/create-product`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: build.mutation({
      query({ id, data }) {
        console.log("id", id);
        console.log("data", data);
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProductQuantity: build.mutation({
      query({ id, data }) {
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    removeProduct: build.mutation({
      query(id: string) {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: ["product"],
    }),

    //   createUserCart: build.mutation({
    //     query: (data) => ({
    //       url: "/carts/create-cart",
    //       method: "POST",
    //       body: data,
    //     }),
    //   }),

    //   getUserCart: build.query({
    //     providesTags: ["cart"],
    //     query: () => `/carts`,
    //   }),
  }),
});
export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  // useGetUserCartQuery,
  // useCreateUserCartMutation,
  useAddProductMutation,
  useRemoveProductMutation,
  useUpdateProductMutation,
  useUpdateProductQuantityMutation,
} = baseApi;
