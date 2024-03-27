"use client";
import React, { useRef, useState } from "react";
import { Button, Modal } from "antd";
import { DatePicker, Form, Input, Select } from "antd";
import "./style.scss";

const Popup = ({ isModalOpen, setIsModalOpen }) => {
  const formRef = useRef();

  const validatePhoneNumber = (_, value) => {
    return new Promise((resolve, reject) => {
      const phoneNumberRegex = /^\+\d{3} \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
      if (!phoneNumberRegex.test(value)) {
        reject(
          "Please input a valid phone number in the format +000 (00) 000-00-00"
        );
      } else {
        resolve();
      }
    });
  };

  const validateCountry = (_, value) => {
    if (!value) {
      return Promise.reject("Please select a country");
    }
    return Promise.resolve();
  };

  const validateDate = (_, value) => {
    if (!value) {
      return Promise.reject("Please select a date");
    }
    return Promise.resolve();
  };
  
  const handleFinish = (values) => {
    setIsModalOpen(false);
    formRef.current.resetFields();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    formRef.current.resetFields();
  };
  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form
          ref={formRef}
          layout="vertical"
          onFinish={handleFinish}
          style={{
            padding: "40px 70.4px",
          }}
        >
          <Form.Item
            label="Mobil nömrə"
            name="Input"
            rules={[
              {
                validator: validatePhoneNumber,
              },
            ]}
          >
            <Input
              placeholder="+000 (00) 000-00-00"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                borderRadius: "10px",
                border: "1.5px solid rgba(0, 0, 0, 0.15)",
                height: "55px",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Ölkə"
            name="Select"
            rules={[
              {
                validator: validateCountry,
              },
            ]}
          >
            <Select
              placeholder="Ölkəni seç"
              style={{
                width: "100%",
                height: "55px",
              }}
            >
              <Select.Option value="Azerbaijan">Azerbaijan</Select.Option>
              <Select.Option value="Turkey">Turkey</Select.Option>
              <Select.Option value="Maldives">Maldives</Select.Option>
              <Select.Option value="Cuba">Cuba</Select.Option>
              <Select.Option value="Italy">Italy</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Bu tarixdən"
            name="DatePicker"
            rules={[
              {
                validator: validateDate,
              },
            ]}
          >
            <DatePicker
              placeholder="Tarixi seç"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                borderRadius: "10px",
                border: "1.5px solid rgba(0, 0, 0, 0.15)",
                height: "55px",
                outline: "none",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                color: "white",
                width: "100%",
                borderRadius: "5px",
                height: "55px",
                border: "none",
                background: "linear-gradient(90deg, #694323 0%, #CCA44F 100%)",
              }}
            >
              Göndər
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Popup;