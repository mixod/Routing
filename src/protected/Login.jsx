import { Button, Form, Input } from "antd";

function Login() {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col p-10 w-100 justify-centeritems-center shadow-lg mt-40">
        <Form onFinish={submit} layout="vertical">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
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
          <Button type="primary" htmlType="submit" className="w-full">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
