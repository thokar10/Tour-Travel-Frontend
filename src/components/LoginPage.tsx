import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values: object) => {
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8000/users/login",
        values
      );
      console.log(response.data);
      if (!response.data.userAccessToken)
        throw "unable to get user access token";
      localStorage.setItem("userAccessToken", response.data.userAccessToken);
      message.success("login successful");
      setTimeout(() => {
        navigate("/");
      }, 3000);
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
        <div className="md:w-[30%] w-[50%] md:p-5 rounded-lg p-4 md:gap-4 gap-3  h-auto  shadow-gray-300 shadow-md bg-[whitesmoke] font-[Montserrat] flex flex-col items-center">
          <p className="md:text-2xl text-xl font-bold text-gray-700 md:tracking-wide ">
            Login
          </p>
          <div className=" md:w-[7  0%] ">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ width: "100%" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  placeholder="enter Email"
                  prefix={<FaUser className="text-gray-400 mr-2 text-[13px]" />}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="enter password"
                  prefix={
                    <RiLockPasswordFill className="text-gray-400 mr-2 text-[15px] " />
                  }
                />
              </Form.Item>

              <p className="flex pb-3  justify-end  text-gray-600">
                forget password ?
              </p>
              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button
                  type="primary"
                  className="bg-gradient-to-r w-full from-indigo-400 to-pink-500"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
            <div className="flex flex-col md:gap-4 items-center">
              <p className="md:text-sm font-extrabold ">OR</p>
              <Link to="/register">
                <p className="font-medium cursor-pointer md:hover:scale-125  hover:scale-110  hover:text-red-500">
                  Sign Up !
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
