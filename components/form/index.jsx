'use client'
import React, { useState, useRef, useEffect } from 'react'
import { DatePicker, Form, Input, Select, Button, message } from "antd";
import './style.scss'
import { useTranslations } from 'next-intl';

const { Option } = Select;

const FormComponent = () => {
    const t = useTranslations("FormComponent");
    const formRef = useRef();
    const [countries, setCountries] = useState([]); 
    
    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            if (response.ok) {
                let data = await response.json();
                data = data.filter(country => country.name.common !== "Armenia");
                const sortedCountries = data.map(country => country.name.common).sort(); // Ülkeleri alfabetik olarak sırala
                setCountries(sortedCountries);
            } else {
                console.error('REST COUNTRİES APİSİNDƏ XƏTA');
            }
        } catch (error) {
            console.error('REST COUNTRİES APİSİNDƏ XƏTA', error);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);
    
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
      if (!countries.includes(value)) {
        return Promise.reject(t("countryInputSecondValidation"));
      }
      return Promise.resolve();
    };
    const validateDate = (_, value) => {
      if (!value) {
        return Promise.reject(t("dateInputValidation"));
      }
      const date = new Date(value)
      const today = new Date()
      if (today>date){
        return Promise.reject(t("AfterTodayValidation"));
      }
      return Promise.resolve();
    };
    const handleSubmit = async (values) => {
      try {
        const { Input, Select, DatePicker } = values;
    
        let date = new Date(DatePicker);
        date.setHours(date.getHours() + 4);
        const newDate = new Date(date.toISOString());
        
        const apiKey = process.env.API_KEY;
    
        const response = await fetch('/api/add-contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': apiKey 
          },
          body: JSON.stringify({
            phone: Input,
            country: Select,
            date: newDate,
          }),
        });
    
        if (response.ok) {
          message.success(t('mailSuccess'));
          formRef.current.resetFields();
          console.log('DAta uğurla əlavə edildi!');
        } else {
          console.error('Datalarda xəta');
        }
      } catch (error) {
        console.error('Datalarda xəta:', error);
      }
    };
    
    
  return (
    <>
      <Form
        ref={formRef}
        layout="vertical"
        onFinish={handleSubmit}
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
            {countries.map(country => (
              <Option key={country} value={country}>{country}</Option>
            ))}
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
