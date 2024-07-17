/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useRemoveProductMutation } from "../../../src/redux/api/baseApi";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
export const DeleteModal = ({ open, onClose, productId }: any) => {
  const [removeProduct] = useRemoveProductMutation();
  const navigate = useNavigate();
  const handleDeleteProduct = async () => {
    try {
      await removeProduct(productId).unwrap();
      message.success("Product deleted successfully.");
      onClose();
      navigate("/");
    } catch (err) {
      message.error("Something went wrong");
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 font-bold text-[#9CA2AE]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
        <p className="my- text-lg">
          Are you sure you want to delete this product?
        </p>

        <DialogFooter>
          <div className="flex justify-center items-center h-[40px] gap-5">
            <DialogClose asChild>
              <button className="btn border-1 text-black font-semibold px-4 py-2 rounded-md border-[#96A2AE]">
                No, cancel
              </button>
            </DialogClose>

            <DialogClose asChild>
              <button
                onClick={handleDeleteProduct}
                className="bg-[#C81E1E] text-white btn px-4 py-2 rounded-md"
              >
                Yes, I'm sure
              </button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
