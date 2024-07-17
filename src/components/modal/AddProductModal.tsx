/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddProductMutation } from "@/redux/api/baseApi";
import { message } from "antd";
import { useState } from "react";

const AddProductModal = ({ open, onClose }: any) => {
  const [addProduct] = useAddProductMutation();

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    brand: "",
    price: 0,
    rating: 0,
    description: "",
    availableQuantity: 0,
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Add logic to submit the form data to your backend or state management
    try {
      await addProduct(formData).unwrap();
      message.success("Product added successfully!");
      onClose();
    } catch (err) {
      console.log(err);
      message.error("Failed to Add Product!");
      onClose();
    }

    console.log("formData", formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="brand">Brand</Label>
            <Input
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="rating">Rating</Label>
            <Input
              id="rating"
              name="rating"
              type="number"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="availableQuantity">AvailableQuantity</Label>
            <Input
              id="availableQuantity"
              name="availableQuantity"
              type="number"
              value={formData.availableQuantity}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <DialogFooter className="flex justify-end space-x-2">
            <DialogClose asChild>
              <Button type="button" onClick={onClose} className="">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" size="default">
              Add Product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
