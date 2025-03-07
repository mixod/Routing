import { Button, Form, Input } from "antd";

function Register() {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form onFinish={submit} layout="vertical">
        <Form.Item
          label="Name"
          name="user_name"
          rules={[{ required: true, message: "Please input your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone_number"
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
