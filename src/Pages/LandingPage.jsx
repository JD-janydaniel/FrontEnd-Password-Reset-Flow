import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = ({ token }) => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://backend-password-reset-flow.onrender.com/api/user/get-user", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setResData(res.data.result);
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div>
      <div className="containe rounded-3 signup mt-5">
        <div className="row">
          {resData.map((ele, index) => {
            return (
              <div key={index}>
                <div className="col-12 col-md-6 p-5 mt-5">
                  <div className="card border-0 shadow-lg" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h4 className="card-title">{ele.userName}</h4>
                      <h5 className="card-subtitle mb-2 text-body-secondary">
                        {ele.email}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })} 
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
