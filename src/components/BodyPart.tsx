import { Button } from "antd";

const BodyPart = () => {
  return (
    <>
      <div className="flex pt-4 justify-center">
        <p className="font-[Montserrat] font-bold md:text-4xl">Popular Tour</p>
      </div>

      <div className="flex  justify-center md:p-9">
        <div className="gridColumn  grid justify-items-center md:w-[90%] grid-cols-1 gap-4    ">
          <div className="bg-white flex flex-col font-[Montserrat] items-center justify-between w-max md:gap-2  p-2 border-2 border-gray-300  rounded-lg shadow-md">
            <div
              className="bg-custom h-[15rem] w-[20rem]"
              style={{
                backgroundImage: `url(
                  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                )`,
              }}
            />

            <p>Italy</p>
            <p>
              Price <span>Rs.40K</span>
            </p>
            <Button className="bg-orange-300 ">Book</Button>
          </div>
          <div className="bg-white flex flex-col font-[Montserrat] items-center justify-between w-max p-2 md:gap-2  rounded-lg border-2 border-gray-300 shadow-md">
            <div
              className="bg-custom h-[15rem] w-[20rem]"
              style={{
                backgroundImage: `url(
                  "https://images.unsplash.com/photo-1601589334680-fb14d7d574f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                )`,
              }}
            />

            <p>Germany</p>
            <p>
              Price <span>Rs.40K</span>
            </p>
            <Button className="bg-orange-300 ">Book</Button>
          </div>
          <div className="bg-white flex flex-col font-[Montserrat] items-center justify-between w-max p-2 md:gap-2   rounded-lg border-2 border-gray-300 shadow-md">
            <div
              className="bg-custom h-[15rem] w-[20rem]"
              style={{
                backgroundImage: `url(
                  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                )`,
              }}
            />

            <p>France</p>
            <p>
              Price <span>Rs.40K</span>
            </p>
            <Button className="bg-orange-300 ">Book</Button>
          </div>

          <div className="bg-white flex flex-col font-[Montserrat] items-center justify-between w-max p-2 md:gap-2  border-2 border-gray-300  rounded-lg shadow-md">
            <div
              className="bg-custom h-[15rem] w-[20rem]"
              style={{
                backgroundImage: `url(
                  "https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                )`,
              }}
            />

            <p>Spain</p>
            <p>
              Price <span>Rs.40K</span>
            </p>
            <Button className="bg-orange-300 ">Book</Button>
          </div>
          <div className="bg-white flex flex-col font-[Montserrat] items-center justify-between w-max p-2 border-2 border-gray-300  rounded-lg shadow-md">
            <div
              className="bg-custom h-[15rem] w-[20rem]"
              style={{
                backgroundImage: `url(
                  "https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                )`,
              }}
            />

            <p>Switzerland</p>
            <p>
              Price <span>Rs.40K</span>
            </p>
            <Button className="bg-orange-300 ">Book</Button>
          </div>
          <div className="bg-white flex flex-col font-[Montserrat] items-center justify-between w-max p-2 border-2 md:gap-2  border-gray-300  rounded-lg shadow-md">
            <div
              className="bg-custom h-[15rem] w-[20rem]"
              style={{
                backgroundImage: `url(
                  "https://plus.unsplash.com/premium_photo-1679582754365-c68b881bb201?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                )`,
              }}
            />

            <p>London</p>
            <p>
              Price <span>Rs.40K</span>
            </p>
            <Button className="bg-orange-300 ">Book</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyPart;
