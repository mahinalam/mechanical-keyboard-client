import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  selectKeyboards,
  useAddProductMutation,
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";
import "./ProductTable.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

interface Product {
  key: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  rating: number;
  image: string;
  brand: string;
}

// const initialProducts: Product[] = [
//   {
//     key: "1",
//     name: "Mechanical Keyboard 1",
//     price: 99.99,
//     description: "A high-quality mechanical keyboard.",
//     quantity: 10,
//     rating: 4.5,
//     image: "https://via.placeholder.com/150",
//     brand: "Brand A",
//   },
//   {
//     key: "2",
//     name: "Mechanical Keyboard 2",
//     price: 79.99,
//     description: "A reliable mechanical keyboard.",
//     quantity: 20,
//     rating: 4.0,
//     image: "https://via.placeholder.com/150",
//     brand: "Brand B",
//   },
// ];

console.log("alam");

const ProductTable = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const data1 = data?.data || [];
  const keyboards = useAppSelector(selectKeyboards);
  const initialProducts = data1;
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  const [addProduct, { data: productData, isLoading: ProductLoading }] =
    useAddProductMutation();
  const [removeProduct, { data: deletedData }] = useRemoveProductMutation();
  const [
    updateProduct,
    { data: updatedProductData, isLoading: updatedProductLoading },
  ] = useUpdateProductMutation();
  const [deletingProductKey, setDeletingProductKey] = useState<string | null>(
    null
  );
  const [form] = Form.useForm();
  console.log(form);
  useEffect(() => {
    if (data) {
      setProducts(data.data); // Assuming your API response structure has a 'data' property
    }
  }, [data]);
  if (isLoading) {
    return <Loader />;
  }

  console.log("Deleteddata", deletedData);

  // add product
  const handleAddProduct = () => {
    setIsEdit(false);
    setEditingProduct(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  // edit product
  const handleEditProduct = (record) => {
    setIsEdit(true);
    setEditingProduct(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
    // if(record._id){

    // }
  };

  // delete product
  const handleDeleteProduct = () => {
    if (deletingProductKey) {
      console.log(deletingProductKey);
      try {
        removeProduct(deletingProductKey);
        message.success("Product deleted successfully");
      } catch (err) {
        message.error("Something went wrong!");
      }

      setProducts(products.filter((item) => item.key !== deletingProductKey));
      setDeletingProductKey(null);
      setIsDeleteModalVisible(false);
    }
  };

  const handleSave = async (values: any) => {
    console.log(values);
    if (isEdit && editingProduct) {
      const updatedProduct = {
        id: values._id,
        data: { ...values },
      };

      console.log("updatedProduct", updatedProduct);
      setProducts(
        products.map((item) =>
          item.key === editingProduct.key
            ? { ...values, key: editingProduct.key }
            : item
        )
      );
    } else {
      const { title, description, image, price, quantity, rating, brand } =
        values;
      const newProduct = {
        title,
        description,
        image,
        price,
        availableQuantity: quantity,
        rating,
        brand,
      };

      try {
        addProduct(newProduct);
        message.success("Product added successfully");
      } catch (err) {
        message.error("Product added successfully");
      }

      //   setProducts([...newProduct, { ...values, key: Date.now().toString() }]);
    }
    setIsModalVisible(false);
  };

  const columns: ColumnsType<Product> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEditProduct(record)}>
            Edit
          </Button>
          <Button
            type="link"
            onClick={() => {
              setDeletingProductKey((record as any)._id);
              setIsDeleteModalVisible(true);
            }}
            style={{ marginLeft: 20 }} // Adjust the margin as needed
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      {isLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <div>
            <Button type="primary" onClick={handleAddProduct}>
              Add Product
            </Button>
            <Table columns={columns} dataSource={products} rowKey="key" />
            <Modal
              title={isEdit ? "Edit Product" : "Add Product"}
              visible={isModalVisible}
              onCancel={() => setIsModalVisible(false)}
              footer={null}
            >
              <Form form={form} layout="vertical" onFinish={handleSave}>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{ width: "100%" }}
                  name="price"
                  label="Price"
                  rules={[{ required: true }]}
                >
                  <InputNumber min={0} />
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name="availableQuantity"
                  label="Available Quantity"
                  rules={[{ required: true }]}
                >
                  <InputNumber min={0} />
                </Form.Item>
                <Form.Item
                  name="rating"
                  label="Rating"
                  rules={[{ required: true }]}
                >
                  <InputNumber min={0} max={5} step={0.1} />
                </Form.Item>
                <Form.Item
                  name="image"
                  label="Image URL"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="brand"
                  label="Brand"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {isEdit ? "Update" : "Add"}
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
            <Modal
              title="Delete Product"
              visible={isDeleteModalVisible}
              onOk={handleDeleteProduct}
              onCancel={() => setIsDeleteModalVisible(false)}
              okText="Delete"
              cancelText="Cancel"
            >
              <p>Are you sure you want to delete this product?</p>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductTable;
