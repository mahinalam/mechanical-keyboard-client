import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface IInputProps {
  label: string;
  id: string;
  placeholder: string;
  type: string; // "text" or "number" or "email" etc.  Default is "text"
  title: string;
}

const CheckoutInput = ({
  label,
  id,
  placeholder,
  type,
  title,
}: IInputProps) => {
  return (
    <div className="grid w-full  items-center gap-1.5 my-4">
      <Label htmlFor={label}>{title}</Label>
      <Input type={type} className="w-full" id={id} placeholder={placeholder} />
    </div>
  );
};

export default CheckoutInput;
