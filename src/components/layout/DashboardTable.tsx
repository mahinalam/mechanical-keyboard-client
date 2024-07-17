/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { DeleteModal } from "../modal/Deletemodal";
import { useState } from "react";
import { Button } from "antd";
import AddProductModal from "../modal/AddProductModal";
import UpdateProductModal from "../modal/UpdateProductModal";

// delete product
const DashboardTable = () => {
  const { data } = useGetProductsQuery(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdatedModalOpen, setIsUpdatedModalOpen] = useState(false);
  const [selectUpdatedProduct, setSelectUpdatedProduct] = useState(null);
  const [id, setId] = useState("");
  console.log("data", data);
  console.log("id", id);

  const updateModalOpen = (product: any) => {
    console.log("product", product);
    setSelectUpdatedProduct(product);
    setIsUpdatedModalOpen(true);
  };

  const closeUpdateModalOPen = () => {
    setSelectUpdatedProduct(null);
    setIsUpdatedModalOpen(false);
  };

  const handleAddProductClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full">
        <Button onClick={handleAddProductClick} type="primary" size="large">
          Add Product
        </Button>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>brand</TableHead>
              <TableHead className="text-left">Image</TableHead>
              <TableHead className="text-center">Update</TableHead>
              <TableHead className="text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.length > 0 &&
              data?.data?.map((product: any) => (
                <TableRow key={product?._id}>
                  <TableCell className="font-medium">
                    {product?.title}
                  </TableCell>
                  <TableCell>{product?.price}</TableCell>
                  <TableCell>{product?.brand}</TableCell>
                  <TableCell className="text-right">
                    <div>
                      <img
                        src={product?.image}
                        alt={product.title}
                        className="object-cover w-[70px] h-[70px] rounded-lg"
                      />
                    </div>
                  </TableCell>
                  <TableCell
                    onClick={() => updateModalOpen(product)}
                    className="text-right"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 text-blue-800 w-full text-right"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      setId(product._id);
                      setIsOpen(true);
                    }}
                    className="text-right "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 text-red-800  w-full text-right"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      {isOpen && (
        <DeleteModal
          productId={id}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}

      {isModalOpen && (
        <AddProductModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isUpdatedModalOpen && (
        <UpdateProductModal
          open={isUpdatedModalOpen}
          onClose={closeUpdateModalOPen}
          product={selectUpdatedProduct}
        />
      )}
    </>
  );
};

export default DashboardTable;
