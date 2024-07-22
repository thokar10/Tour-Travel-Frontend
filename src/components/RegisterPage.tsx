import { Button, Form, Input, InputNumber, message } from "antd";
import axios from "axios";

const RegisterPage = () => {
  const onFinish = async (values: object) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        values
      );
      console.log(response.data);
      if (!response.data.userAccessToken) throw "unable to create a token";
      localStorage.setItem("userAccessToken", response.data.userAccessToken);
      message.success("Register successfully");
    } catch (e: any) {
      console.log(e.response.data);

      const errorMessage = e.response.data.errorMessage;
      if (errorMessage) {
        message.error(errorMessage);
      } else {
        message.error("failed");
      }
    }
  };
  return (
    <>
      <div className="flex justify-center items-center  bg-gradient-to-r from-indigo-400 to-pink-500  w-[100vw] h-[100vh]">
        <div className="md:w-[30%]  border-2 border-gray-300   w-[50%] md:p-2 p-4 md:gap-4 gap-4  h-auto md:h-[20%] shadow-gray-300 shadow-md rounded-2xl bg-[whitesmoke] font-[Montserrat] flex flex-col items-center">
          <p className="md:text-2xl text-xl font-bold text-gray-700 md:tracking-wide ">
            Register
          </p>
          <div>
            <Form
              layout="horizontal"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="userName"
                rules={[{ required: true, message: "Please input your name!" }]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input  email!" }]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 0, span: 24 }} className="pt-2">
                <Button
                  type="primary"
                  className="bg-gradient-to-r w-full from-indigo-400 to-pink-500"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
