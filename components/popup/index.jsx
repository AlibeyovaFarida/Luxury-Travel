'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Button, Modal, message } from 'antd'; // message bileşenini ekleyin
import { DatePicker, Form, Input, Select } from 'antd';
import './style.scss';
import { useTranslations } from 'next-intl';

const { Option } = Select;

const Popup = ({ isModalOpen, setIsModalOpen, country }) => {
  const [selectedCountry, setSelectedCountry] = useState(country);
  const formRef = useRef();
  const [countries, setCountries] = useState([]);
  const t = useTranslations('FormComponent');
  
  const fetchCountries = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (response.ok) {
            let data = await response.json();
            data = data.filter(country => country.name.common !== "Armenia");
            const sortedCountries = data.map(country => country.name.common).sort();
            setCountries(sortedCountries);
        } else {
            console.error('ÖLKƏLƏR ALINAN API-də xəta');
        }
    } catch (error) {
        console.error('ÖLKƏLƏR ALINAN API-də xəta:', error);
    }
};

useEffect(() => {
    fetchCountries();
}, []);

  const validatePhoneNumber = (_, value) => {
    return new Promise((resolve, reject) => {
      const phoneNumberRegex = /^\+\d{3} \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
      if (!phoneNumberRegex.test(value)) {
        reject(t('phoneInputValidation'));
      } else {
        resolve();
      }
    });
  };

  const validateCountry = (_, value) => {
    if (!value) {
      return Promise.reject(t('countryInputValidation'));
    }
    if (!countries.includes(value)) {
      return Promise.reject(t("countryInputSecondValidation"));
    }
    return Promise.resolve();
  };

  const validateDate = (_, value) => {
    if (!value) {
      return Promise.reject(t('dateInputValidation'));
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
        formRef.current.resetFields();
        setIsModalOpen(false);
        message.success(t('mailSuccess'));
        console.log('Uğurlu');
      } else {
        message.error("Something Went Wrong, please try again...")
        console.error('Uğursuz mail göndərmək');
      }
    } catch (error) {
      console.error('Uğursuz mail göndərmək', error);
    }
  };
  

  const handleCancel = () => {
    formRef.current.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form
          ref={formRef}
          layout="vertical"
          onFinish={handleSubmit}
          style={{
            padding: '40px 70.4px',
          }}
        >
          <Form.Item
            label={t('phoneLabel')}
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
                width: '100%',
                backgroundColor: 'transparent',
                borderRadius: '10px',
                border: '1.5px solid rgba(0, 0, 0, 0.15)',
                height: '55px',
              }}
            />
          </Form.Item>

          <Form.Item
            label={t('countryLabel')}
            name="Select"
            initialValue={country}
            rules={[
              {
                validator: validateCountry,
              },
            ]}
          >
            <Select
              placeholder={t('countryPlaceholder')}
              value={selectedCountry}
              style={{
                width: '100%',
                height: '55px',
              }}
            >
              {countries.map((country) => (
                <Option key={country} value={country}>
                  {country}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label={t('dateLabel')}
            name="DatePicker"
            rules={[
              {
                validator: validateDate,
              },
            ]}
          >
            <DatePicker
              placeholder={t('datePlaceholder')}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                borderRadius: '10px',
                border: '1.5px solid rgba(0, 0, 0, 0.15)',
                height: '55px',
                outline: 'none',
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                color: 'white',
                width: '100%',
                borderRadius: '5px',
                height: '55px',
                border: 'none',
                background:
                  'linear-gradient(90deg, #694323 0%, #CCA44F 100%)',
              }}
            >
              {t('submit')}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Popup;
