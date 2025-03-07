import { Button, Form, Input } from "antd";

function Register() {
  const registerInfo = async () => {};

  const submit = (values) => {
    console.log(values);
  };
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col p-10 w-100 justify-centeritems-center shadow-lg mt-30">
        <Form onFinish={submit} layout="vertical">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>
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
          <Button type="primary" htmlType="submit" className="w-full">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
