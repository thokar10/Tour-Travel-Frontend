// import type { MenuProps } from "antd";
import { Button, Dropdown, Input, Modal, Popover } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../pictures/background.jpg";

const HeaderPart = () => {
  const navigate = useNavigate();
  const [showLoginIcon, setShowLoginIcon] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBelowLine1, setBelowLine1] = useState(false);
  const [showBelowLine2, setBelowLine2] = useState(false);
  const [showBelowLine3, setBelowLine3] = useState(false);
  const [showBelowLine4, setBelowLine4] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
  ];

  // It shows details about user login (contents shown while hover login icon)
  const content = (
    <div className="flex flex-col items-center w-[10rem]   md:gap-3 gap-1">
      <p>user profile</p>
      <Button
        type="primary"
        onClick={() => {
          localStorage.removeItem("userAccessToken");
          window.location.reload();
        }}
      >
        Sign out
      </Button>
    </div>
  );

  useEffect(() => {
    if (localStorage.getItem("userAccessToken")) {
      setShowLoginIcon(true);
    }
  }, []);
  return (
    <>
      <div
        className="bg-custom h-[30rem] text-white "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex  justify-center  pt-3 ">
          <div className="md:w-[75%] font-[Montserrat]  w-[90%] items-center  flex justify-between">
            <p
              style={{ fontFamily: "cursive" }}
              className="md:text-5xl text-2xl font-bold "
            >
              Tour Travel
            </p>
            {/* to show header part if you are login */}
            <div className="menuOptions">
              {" "}
              <Dropdown menu={{ items }} placement="bottomLeft">
                <IoMenu />
              </Dropdown>
            </div>
            <div className="anchorLinks flex md:gap-[40px] items-center text-md font-semibold   ">
              <div
                className="cursor-pointer"
                onMouseOver={() => {
                  setBelowLine1(true);
                }}
                onMouseLeave={() => {
                  setBelowLine1(false);
                }}
              >
                <p>Home</p>
                {showBelowLine1 && (
                  <>
                    <div className="border-2 border-red-500   "></div>
                  </>
                )}
              </div>

              <div
                className="cursor-pointer"
                onMouseOver={() => {
                  setBelowLine2(true);
                }}
                onMouseLeave={() => {
                  setBelowLine2(false);
                }}
              >
                <p>Contact us</p>
                {showBelowLine2 && (
                  <>
                    <div className="border-2 border-red-500   "></div>
                  </>
                )}
              </div>

              {showLoginIcon ? (
                <>
                  <div className="anchorLinks flex md:gap-[15px] items-center font-semibold ">
                    <p>Follow us</p>
                    <FaInstagram className="cursor-pointer " />
                    <FaFacebook className="cursor-pointer" />
                  </div>

                  <Popover content={content}>
                    <div className="w-[35px] h-[35px] hover:cursor-pointer hover:border-red-400 rounded-[50%] border-2 flex justify-center items-center border-gray-300">
                      <p>S</p>
                    </div>
                  </Popover>
                </>
              ) : (
                <>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/login");
                    }}
                    onMouseOver={() => {
                      setBelowLine3(true);
                    }}
                    onMouseLeave={() => {
                      setBelowLine3(false);
                    }}
                  >
                    <p>Login</p>
                    {showBelowLine3 && (
                      <>
                        <div className="border-2 border-red-500   "></div>
                      </>
                    )}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/register");
                    }}
                    onMouseOver={() => {
                      setBelowLine4(true);
                    }}
                    onMouseLeave={() => {
                      setBelowLine4(false);
                    }}
                  >
                    <p>Register</p>
                    {showBelowLine4 && (
                      <>
                        <div className="border-2 border-red-500   "></div>
                      </>
                    )}
                  </div>
                  <div className="anchorLinks flex md:gap-[15px] items-center font-semibold ">
                    <p>Follow us</p>
                    <FaInstagram className="cursor-pointer " />
                    <FaFacebook className="cursor-pointer" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className=" flex  justify-center">
          <div className="md:w-[75%] w-[95%]  flex flex-col gap-2 pt-[5rem]">
            <p className="text-orange-500 font-semibold md:text-xl text-sm">
              let's
            </p>
            <div>
              <p className="md:text-6xl text-3xl font-[Roboto] font-bold tracking-wide">
                Planning your
              </p>
              <p className="text-3xl  font-[Roboto] font-bold  tracking-wide">
                own travel
              </p>
            </div>

            <Button
              onClick={showModal}
              type="primary"
              className="md:w-max md:mt-6 w-max mt-4 font-[Montserrat] "
            >
              Book a trip
            </Button>
            <Modal
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={"60%"}
            >
              <div className="flex gap-9 pt-9">
                <img
                  className="w-[60%]"
                  src="https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                ></img>
                <div className="w-[40%] flex flex-col gap-3  items-center">
                  <Input placeholder="Where To" className="text-gray-400" />
                  <Input placeholder="How Many" className="text-gray-400" />
                  <input
                    type="date"
                    className="w-[100%] border-2 border-gray-100 text-gray-400 p-1 rounded-md"
                  />
                  <TextArea
                    rows={4}
                    placeholder="enter a name and details"
                    className="text-gray-400"
                  />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPart;
