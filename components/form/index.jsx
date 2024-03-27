'use client'
import React, { useRef } from 'react'
import { DatePicker, Form, Input, Select, Button } from "antd";
import './style.scss'
const FormComponent = () => {
    const formRef = useRef();
    const validatePhoneNumber = (_, value) => {
      return new Promise((resolve, reject) => {
        const phoneNumberRegex = /^\+\d{3} \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        if (!phoneNumberRegex.test(value)) {
          reject(
            "Please input"
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
      formRef.current.resetFields();
    };
  return (
    <>
      <Form
        ref={formRef}
        layout="vertical"
        onFinish={handleFinish}
        className='desktop'
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
          />
        </Form.Item>
        <div
          className="line"
          style={{
            backgroundColor: "#D9D9D9",
            width: "1px",
            height: "64px",
            marginRight: "16px",
          }}
        ></div>
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
          >
            <Select.Option value="Azerbaijan">Azerbaijan</Select.Option>
            <Select.Option value="Turkey">Turkey</Select.Option>
            <Select.Option value="Maldives">Maldives</Select.Option>
            <Select.Option value="Cuba">Cuba</Select.Option>
            <Select.Option value="Italy">Italy</Select.Option>
          </Select>
        </Form.Item>
        <div
          className="line"
          style={{
            backgroundColor: "#D9D9D9",
            width: "1px",
            height: "64px",
            marginRight: "16px",
            marginLeft: "16px",
          }}
        ></div>
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
          />
        </Form.Item>
        <Form.Item style={{ paddingTop: "0 !important" }}>
          <Button
            type="primary"
            htmlType="submit"
          >
            Göndər
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default FormComponent;