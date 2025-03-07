import { Button, Form, Input } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../apiconfig";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    <Navigate to="/home" />;
  }
  const registerInfo = async (values) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/register`,
        {
          full_name: values.name,
          phone_number: values.phone,
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (values) => {
    registerInfo(values);
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
            name="name"
            rules={[{ required: true, message: "Please input your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
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
