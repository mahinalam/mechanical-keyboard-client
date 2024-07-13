// import * as React from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

type TProduct = {
  product: IProductState;
};

// const Cart = function CardWithForm({ product }: TProduct) {
//   console.log("products", product);
//   return (
//     <Card className="w-[350px]">
//       <CardHeader>
//         <img
//           src={product.image}
//           alt="Product"
//           className="w-full h-auto object-cover rounded-t-lg"
//         />
//         <CardTitle>{product.title}</CardTitle>
//         <CardDescription>Deploy your new project in one-click.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" placeholder="Name of your project" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Framework</Label>
//               <Select>
//                 <SelectTrigger id="framework">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent position="popper">
//                   <SelectItem value="next">Next.js</SelectItem>
//                   <SelectItem value="sveltekit">SvelteKit</SelectItem>
//                   <SelectItem value="astro">Astro</SelectItem>
//                   <SelectItem value="nuxt">Nuxt.js</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">Cancel</Button>
//         <Button>Deploy</Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default Cart;

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProductState } from "@/redux/features/products/productsSlice";
import { useGetUserCartQuery } from "@/redux/api/baseApi";
// import { Rate } from "@/components/ui/rate"

const Cart = ({ product }: TProduct) => {
  const { data, isLoading } = useGetUserCartQuery(undefined);
  // console.log("carts", data);
  return (
    <Card className="w-[350px] group">
      <CardHeader>
        <div className="object-cover">
          <img
            src={product.image}
            alt={product.title}
            className="w-[full] h-[full]  rounded-t-lg mb-5 group-hover:scale-110"
          />
        </div>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>Brand: {product.brand}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <p className="text-gray-700">
              Available Quantity: {product.quantity}
            </p>
            <p className="text-gray-700">Price: ${product.price.toFixed(2)}</p>
            <div className="flex items-center">
              {/* <Rate value={product.rating} disabled /> */}
              <span className="ml-2 text-gray-600">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">See Details</Button>
      </CardFooter>
    </Card>
  );
};

export default Cart;
