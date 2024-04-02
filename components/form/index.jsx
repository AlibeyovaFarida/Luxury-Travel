'use client'
import React, { useRef } from 'react'
import { DatePicker, Form, Input, Select, Button } from "antd";
import './style.scss'
import { useTranslations } from 'next-intl';
const FormComponent = () => {
    const t = useTranslations("FormComponent");
    const formRef = useRef();
    const validatePhoneNumber = (_, value) => {
      return new Promise((resolve, reject) => {
        const phoneNumberRegex = /^\+\d{3} \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        if (!phoneNumberRegex.test(value)) {
          reject(t("phoneInputShortValidation"));
        } else {
          resolve();
        }
      });
    };
    const validateCountry = (_, value) => {
      if (!value) {
        return Promise.reject(t("countryInputValidation"));
      }
      return Promise.resolve();
    };
    const validateDate = (_, value) => {
      if (!value) {
        return Promise.reject(t("dateInputValidation"));
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
        className="desktop"
      >
        <Form.Item
          label={t("phoneLabel")}
          name="Input"
          rules={[
            {
              validator: validatePhoneNumber,
            },
          ]}
        >
          <Input placeholder="+000 (00) 000-00-00" />
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
          label={t("countryLabel")}
          name="Select"
          rules={[
            {
              validator: validateCountry,
            },
          ]}
        >
          <Select placeholder={t("countryPlaceholder")}>
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
          label={t("dateLabel")}
          name="DatePicker"
          className=''
          rules={[
            {
              validator: validateDate,
            },
          ]}
        >
          <DatePicker placeholder={t("datePlaceholder")} />
        </Form.Item>
        <Form.Item style={{ paddingTop: "0 !important" }}>
          <Button type="primary" htmlType="submit">
            {t("submit")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default FormComponent;