import React, { useEffect, useState } from "react";
import { getEmployeeMonth } from "../../../../../helpers/EmployeeMonth";
import placeholderImage from "./../../../../../argus website/PNG/IMG_0118.png";
import { API } from "../../../../../api";
import { isAuthenticated } from "../../../../../helpers/auth";
import axios from "axios";

export const EmpOfMonTable = ({ seteomRefresh, eomRefresh }) => {
  const [eom, seteom] = useState([]);
  const [token, settoken] = useState();
  useEffect(() => {
    settoken(isAuthenticated());
    getEmployeeMonth(isAuthenticated().token).then((res) => {
      seteom(res);
    });
  }, [eomRefresh]);

  return (
    <div className="mx-8 my-8 p-4 bg-white shadow-lg rounded-xl">
      {/* Card of table */}
      {eom.map((data) => {
        const arr = new Uint8Array(data?.empImage?.data?.data);
        const b64 = btoa(
          arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
        );
        return (
          <div className="flex flex-col md:flex-row border-2 text-lg items-center">
            <div className="flex flex-col items-center text-center w-full md:w-2/12">
              <img
                src={`data:image/jpeg;base64,${b64}`}
                alt=""
                className="w-24 h-24 rounded-full p-2"
              />
              <h1 className="px-3 py-1 text-red-1 font-bold">{data.empName}</h1>
            </div>
            <h1 className="px-3 py-1 border-b-2 border-t-2 md:border-0 md:border-r-2 md:border-l-2 w-full md:w-8/12">
              {data.empDesc}
            </h1>
            <div className="flex flex-col items-center mx-auto">
              <button
                onClick={() => {
                  axios
                    .delete(`${API}/eom/delete/${data._id}`, {
                      headers: {
                        Accept: "application/JSON",
                        "Content-Type": "application/JSON",
                        Authorization: `Bearer ${token.token}`,
                      },
                    })
                    .then((res) => {
                      seteomRefresh(res);
                    });
                }}
                className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-red-1 hover:bg-opacity-20"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
