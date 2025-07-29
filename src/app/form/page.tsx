'use client';

import React, { useState } from 'react';
import { Form, Input, Select, Radio, Upload, Checkbox, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const formFields = [
  { name: 'username', label: 'Username', type: 'text', required: true },
  { name: 'bio', label: 'Bio', type: 'textarea' },
  { name: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Other'], required: true },
  { name: 'hobbies', label: 'Hobbies', type: 'select', options: ['Reading', 'Traveling', 'Gaming'], mode: 'multiple' },
  { name: 'agree', label: 'Accept Terms', type: 'checkbox', required: true },
  { name: 'resume', label: 'Upload Resume', type: 'file', required: true },
];

const DynamicForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form Submitted:', values);
    message.success('Form submitted successfully!');
  };

    const handleBlur = (name: string, e: any) => {
    // console.log('Blur triggered for:', name, e.target.value);
    form.validateFields([name]).then((res) => {
      console.log('Validation result:', res);
    }).catch((err) => {
      console.log('Validation error:', err);
    });
  };

  const renderField = (field: any) => {
    const commonProps = {
      name: field.name,
      label: field.label,
      rules: field.required ? [{ required: true, message: `${field.label} is required` }] : [],
    };
  
    switch (field.type) {
      case 'text':
        return (
          <Form.Item {...commonProps}>
            <Input onBlur={(e) => handleBlur(field.name,e)} />
          </Form.Item>
        );
  
      case 'textarea':
        return (
          <Form.Item {...commonProps}>
            <Input.TextArea onBlur={(e) => handleBlur(field.name,e)} />
          </Form.Item>
        );
  
      case 'select':
        return (
          <Form.Item {...commonProps}>
            <Select
              mode={field.mode}
              placeholder={`Select ${field.label}`}
              onChange={(e) => handleBlur(field.name,e)}
            >
              {field.options.map((opt: string) => (
                <Option key={opt} value={opt}>
                  {opt}
                </Option>
              ))}
            </Select>
          </Form.Item>
        );
  
      case 'radio':
        return (
          <Form.Item {...commonProps}>
            <Radio.Group onChange={(e) => handleBlur(field.name,e)}>
              {field.options.map((opt: string) => (
                <Radio key={opt} value={opt}>
                  {opt}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        );
  
      case 'checkbox':
        return (
          <Form.Item
            name={field.name}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(`${field.label} is required`),
              },
            ]}
          >
            <Checkbox onChange={(e) => handleBlur(field.name,e)}>{field.label}</Checkbox>
          </Form.Item>
        );
  
      case 'file':
        return (
          <Form.Item
            name={field.name}
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: `${field.label} is required` }]}
          >
            <Upload
              beforeUpload={() => false}
              onChange={(e) => handleBlur(field.name,e)}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        );
  
      default:
        return null;
    }
  };
  

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '2rem' }}>
      <h2>Dynamic Form with Ant Design</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {formFields.map((field) => (
          <React.Fragment key={field.name}>{renderField(field)}</React.Fragment>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Form
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DynamicForm;
