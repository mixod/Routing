import { Form, Input } from "antd";

function Login() {
  return (
    <div>
      <Form>
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
      </Form>
    </div>
  );
}

export default Login;
