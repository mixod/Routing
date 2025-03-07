import { Button, Form, Input } from "antd";

function Login() {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form onFinish={submit}>
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
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
