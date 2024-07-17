// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type TCart = {
//   id: string;
//   productId: string;
//   quantity: number;
//   price: number;
//   title: string;
//   image: string;
//   description: string;
// };

// // const initialState: TCart[] = [];

// export interface CartItem {
//   id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   availableQuantity: number;
//   image: string;
//   description: string;
// }

// interface CartState {
//   items: CartItem[];
//   totalQuantity: number;
//   totalAmount: number;
// }

// const initialState: CartState = {
//   items: [],
//   totalQuantity: 0,
//   totalAmount: 0,
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     // addToCart: (state, action: PayloadAction<TCart>) => {
//     //   state.push(action.payload);
//     // },
//     // addToCart: (state, action: PayloadAction<CartItem>) => {
//     //   const newItem = action.payload;
//     //   const existingItem = state.items.find((item) => item.id === newItem.id);
//     //   console.log("existingItem", existingItem);
//     //   state.totalQuantity += newItem.quantity;
//     //   state.totalAmount += newItem.price;

//     //   if (!existingItem) {
//     //     state.items.push(newItem);
//     //   } else {
//     //     existingItem.quantity += newItem.quantity; // Assuming price is the unit price and not the total price
//     //   }
//     // },
//     // incrementQuantity: (state, action: PayloadAction<string>) => {
//     //   const id = action.payload;
//     //   const item = state.items.find((item) => item.id === id);
//     //   if (item && item.quantity < (item as any).availableQuantity) {
//     //     item.quantity++;
//     //     state.totalQuantity++;
//     //     state.totalAmount += item.price; // Adjust price calculation
//     //   }
//     // },
//     // decrementQuantity: (state, action: PayloadAction<string>) => {
//     //   const id = action.payload;
//     //   const item = state.items.find((item) => item.id === id);
//     //   if (item && item.quantity > 1) {
//     //     item.quantity--;
//     //     state.totalQuantity--;
//     //     state.totalAmount -= item.price; // Adjust price calculation
//     //   }
//     // },

//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item.id === newItem.id);

//       if (existingItem) {
//         // Update the quantity if the item already exists in the cart
//         if (existingItem.quantity < existingItem.availableQuantity) {
//           existingItem.quantity++;
//           state.totalQuantity++;
//           state.totalAmount += newItem.price;
//         }
//       } else {
//         // Add new item to the cart
//         state.items.push({ ...newItem, quantity: 1 });
//         state.totalQuantity++;
//         state.totalAmount += newItem.price;
//       }
//     },
//     incrementQuantity: (state, action: PayloadAction<id: string>) => {
//       const id= action.payload;
//       const item = state.items.find((item) => item.id === id);
//       if (item && item.quantity < item.availableQuantity) {
//         item.quantity = quantity;
//         state.totalQuantity++;
//         state.totalAmount += item.price;
//       }
//     },
//     decrementQuantity: (state, action: PayloadAction<string>) => {
//       const id = action.payload;
//       const item = state.items.find((item) => item.id === id);
//       if (item && item.quantity > 1) {
//         item.quantity--;
//         state.totalQuantity--;
//         state.totalAmount -= item.price;
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<string>) => {
//       const id = action.payload;
//       const existingItem = state.items.find((item) => item.id === id);

//       if (existingItem) {
//         state.totalQuantity -= existingItem.quantity;
//         state.totalAmount -= existingItem.price * existingItem.quantity;
//         state.items = state.items.filter((item) => item.id !== id);
//       }
//     },
//     // updateCartQuantity: (state, action: PayloadAction<TCart>) => {
//     //   const newCarts = state.filter(
//     //     (item) => item.productId === action.payload.productId
//     //   );

//     //   const newArr = [...state, newCarts];
//     //   if (newCarts.length > 0) {
//     //     state = newArr;
//     //   }
//     //   return state
//     //   // state.push(action.payload);
//     // },
//   },
// });
// console.log(cartSlice);
// export const { addToCart, incrementQuantity, decrementQuantity } =
//   cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCart = {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  title: string;
  image: string;
  description: string;
};

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  availableQuantity: number;
  image: string;
  description: string;
}
// const cartItem = {
//   id: "",
//   title: "",
//   price: 0,
//   quantity: 0,
//   availableQuantity: 0,
//   image: "",
//   description: "",
// };

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Update the quantity if the item already exists in the cart
        if (existingItem.quantity < existingItem.availableQuantity) {
          existingItem.quantity++;
          state.totalQuantity++;
          state.totalAmount += newItem.price;
        }
      } else {
        // Add new item to the cart
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity++;
        state.totalAmount += newItem.price;
      }
    },
    incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity < item.availableQuantity) {
        item.quantity++;
        state.totalQuantity++;
        state.totalAmount += item.price;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalAmount -= item.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
