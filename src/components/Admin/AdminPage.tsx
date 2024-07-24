import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import TripDetails from "./TripDetails";

function AdminPage() {
  const navigate = useNavigate();
  const [currentVisitedPage, setCurrentVisitedPage] = useState("Dashboard");
  const AdminItems = ["Dashboard", "Trip"];
  useEffect(() => {
    if (!localStorage.getItem("venderAccessToken")) {
      navigate("/admin/login");
    } else {
      navigate(`/admin/Dashboard`);
    }
  }, []);

  return (
    <>
      <div className="w-[100vw] flex h-[100vh] bg-gray-200 font-[Montserrat]">
        {/* left side of admin page */}
        <div className="w-[20%] flex  flex-col items-center md:pl-5 md:pr-5 md:pt-3 h-[100%] bg-blue-900 text-white">
          <p className="text-2xl font-bold tracking-wider">Hamro Travel</p>

          <div className="border-[1px] border-gray-400 w-[100%] md:mt-3"></div>

          <div className="md:mt-9  md:gap-5 flex flex-col items-center">
            {AdminItems.map((item) => {
              {
                currentVisitedPage == item && <></>;
              }
              return (
                <>
                  {currentVisitedPage == item ? (
                    <>
                      <p
                        className="text-xl   text-red-500 font-semibold tracking-wider hover:cursor-pointer hover:scale-105  "
                        onClick={() => {
                          navigate(`/admin/${item}`);
                          setCurrentVisitedPage(item);
                        }}
                      >
                        {item}
                      </p>
                    </>
                  ) : (
                    <>
                      <p
                        className="text-xl  tracking-wider hover:cursor-pointer hover:scale-105  "
                        onClick={() => {
                          navigate(`/admin/${item}`);
                          setCurrentVisitedPage(item);
                        }}
                      >
                        {item}
                      </p>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>

        {/* right side of admin page */}
        <div className="w-[80%] h-[100%]  border-2 border-black ">
          <NavBar />
          <div className="w-[100%] h-[90%] ">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Trip" element={<TripDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
