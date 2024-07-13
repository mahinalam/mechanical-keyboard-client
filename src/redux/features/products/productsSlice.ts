import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProductState {
  _id: string;
  title: string;
  image: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
  inStock: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
[];
