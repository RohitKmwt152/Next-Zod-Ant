'use client'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Input, Button } from 'antd';

// Zod schema for validation
const userSchema = z.object({
  name: z.string().min(3, "Name must be greater than 2 characters").max(50, "Name must be less than 50 characters"),
  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .min(18, "You must be at least 18 years old")
    .max(100, "Age must be less than or equal to 100"),
});

// Type inferred from Zod schema
type UserFormData = z.infer<typeof userSchema>;

export default function UserForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema), // Integrate Zod with react-hook-form
  });

  const onSubmit = (data: UserFormData) => {
    console.log("User Data12:", data);
    // Handle data submission logic (e.g., API call)
  };
  return (
    <>
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}
    >
      {/* Name Input */}
      <Form.Item
        label="Name"
        validateStatus={errors.name ? 'error' : ''}
        help={errors.name?.message}
      >
        <Input {...register('name')} placeholder="Enter your name" onChange={(e) => setValue('name', e.target.value)}/>
      </Form.Item>

      {/* Age Input */}
      <Form.Item
        label="Age"
        validateStatus={errors.age ? 'error' : ''}
        help={errors.age?.message}
      >
        <Input
          type="number"
          {...register('age', { valueAsNumber: true })}
          placeholder="Enter your age" onChange={(e) => setValue('age', Number(e.target.value))}
        />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}