import { message, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function TripDetails() {
  const [venderId, setVenderId] = useState("");
  const [tripDetails, setTripDetails] = useState([]);

  //to extract vender ID
  const getVenderDetails = async () => {
    const venderAccessToken = localStorage.getItem("venderAccessToken");
    try {
      const response = await axios.get(
        "http://localhost:8000/venders/profile",
        {
          headers: {
            Authorization: `bearer ${venderAccessToken}`,
          },
        }
      );
      setVenderId(response.data.venderDetails._id);
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

  // to extract the all the trips registered by the vendor
  const getVenderTripDetails = async () => {
    const values = { venderId: `${venderId}` };
    console.log(values);

    const response = await axios.post(
      "http://localhost:8000/trips/details",
      values
    );
    console.log(response.data);
    setTripDetails(response.data.tripDetails);
  };
  useEffect(() => {
    getVenderDetails();
  }, []);

  useEffect(() => {
    getVenderTripDetails();
  }, [venderId]);

  const dataSource = tripDetails;

  const columns = [
    {
      title: (
        <p className="font-bold font-[Montserrat] text-2xl text-center ">
          Trip
        </p>
      ),
      dataIndex: "tripName",
      key: "tripName",
      render: (data: any, dataSource: any) => (
        <>
          <p className=" font-[Montserrat] text-center  text-lg ">{data}</p>
        </>
      ),
    },
    {
      title: (
        <p className="font-bold font-[Montserrat] text-2xl text-center ">
          Price
        </p>
      ),
      dataIndex: "tripPrice",
      key: "tripPrice",
      render: (data: any, dataSource: any) => (
        <>
          <p className=" font-[Montserrat] text-center text-lg text-red-500">
            {" "}
            Rs.&nbsp;&nbsp;{data}
          </p>
        </>
      ),
    },
    {
      title: (
        <p className="font-bold font-[Montserrat] text-2xl text-center ">
          Image
        </p>
      ),
      dataIndex: "tripImage",
      key: "tripImage",
      render: (data: any, dataSource: any) => (
        <>
          <div className="flex justify-center">
            <div
              className="h-[100px] w-[100px]  rounded-md flex  border-2 shadow-lg"
              style={{
                backgroundImage: `url(${data})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="flex justify-center md:p-6">
        <Table
          className="w-[80%] "
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </>
  );
}

export default TripDetails;
