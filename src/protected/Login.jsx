import { Button, Form, Input } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../apiconfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const loginFu = async (values) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/login/access-token`,
        {
          username: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      localStorage.setItem("token", res.data.access_token);
      console.log(res);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (values) => {
    loginFu(values);
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
