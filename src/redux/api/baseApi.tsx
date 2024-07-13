import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductState } from "../features/products/productsSlice";
import { IProducts } from "@/pages/products/Products";
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
      query(data: IProducts) {
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
      // note: an optional `queryFn` may be used in place of `query`
      // query: ({ id, ...data }) => ({
      //   url: `/products/${id}`,
      //   method: "PATCH",
      //   body: data,
      // }),
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

    createUserCart: build.mutation({
      query: (data) => ({
        url: "/carts/create-cart",
        method: "POST",
        body: data,
      }),
    }),

    getUserCart: build.query({
      providesTags: ["cart"],
      query: () => `/carts`,
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetUserCartQuery,
  useCreateUserCartMutation,
  useAddProductMutation,
  useRemoveProductMutation,
  useUpdateProductMutation,
} = baseApi;

export const selectKeyboards = (state) => state.api?.queries?.getProducts;
