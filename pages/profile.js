import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { userUpdate, userdetails } from "../services/apis";
function Profile() {
  const [cookies] = useCookies(["auth"]);
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const pwdFormik = useFormik({
    initialValues: { curpwd: "", newpwd: "", cnfpwd: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const profileformik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phoneno: "",
    },
    onSubmit: (values) => {
      handleUpdateUser({
        ...user,
        ...values,
        username: values.fullname.split(" ").join("").toLowerCase(),
      });
    },
  });

  function fetchPincodeAddr(pincode) {
    if (pincode.length >= 6) {
      axios
        .get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(({ data }) => {
          setAddresses(data[0].PostOffice);
        })
        .catch((err) => {});
    }
  }
  const [user, setUser] = useState(null);
  function getUserDetails(id) {
    setLoading(true);
    const url = userdetails(id);
    axios
      .get(url)
      .then(({ data }) => {
        const _data = data.data[0];
        delete _data["password"];
        setUser(_data);
        const newData = {
          fullname: _data.fullname,
          email: _data.email,
          phoneno: _data.phoneno,
        };
        profileformik.setValues(newData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  useEffect(() => {
    getUserDetails(cookies.auth.userId);
  }, []);

  const handleUpdateUser = (userDetails) => {
    setLoading(true);
    const url = userUpdate(cookies.auth.userId);
    axios
      .patch(url, { ...userDetails })
      .then(({ data }) => {
        getUserDetails(cookies.auth.userId);
      })
      .catch((err) => {
        setUser(null);
        setLoading(false);
      });
  };
  return (
    <section className="profile-sections m-t-30">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <div className="container">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 className="user-name">{user.fullname}</h5>
                      <h6 className="user-email">{user.email}</h6>
                    </div>
                    {/* <div className="about">
                    <h5>About</h5>
                    <p>
                      I&apos;m Yuki. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
                    </p>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <form onSubmit={profileformik.handleSubmit}>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-primary">Personal Details</h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="fullname">Full Name</label>

                          <input
                            name="fullname"
                            type="text"
                            className="form-control"
                            id="fullname"
                            placeholder="Enter full name"
                            onChange={profileformik.handleChange}
                            value={profileformik.values.fullname}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email ID"
                            onChange={profileformik.handleChange}
                            value={profileformik.values.email}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="phoneno">Phone</label>
                          <input
                            name="phoneno"
                            type="text"
                            className="form-control"
                            id="phoneno"
                            placeholder="Enter phone number"
                            onChange={profileformik.handleChange}
                            value={profileformik.values.phoneno}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="address">Addresses</label>
                          <select
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Select Addrress Block"
                          >
                            <option value={""} disabled>
                              Select One
                            </option>
                            {addresses.map((ele, idx) => (
                              <option key={idx} value={JSON.stringify(ele)}>
                                {ele.Name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="zIp">Zip Code</label>
                          <input
                            type="text"
                            className="form-control"
                            id="zIp"
                            placeholder="Zip Code"
                            onChange={(e) => {
                              fetchPincodeAddr(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="Street">Street</label>
                          <input
                            type="name"
                            className="form-control"
                            id="Street"
                            placeholder="Enter Street"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="ciTy">City</label>
                          <input
                            type="name"
                            className="form-control"
                            id="ciTy"
                            placeholder="Enter City"
                            disabled
                            value={""}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="sTate">State</label>
                          <input
                            type="text"
                            className="form-control"
                            id="sTate"
                            placeholder="Enter State"
                            disabled
                            value={""}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-secondary"
                          >
                            Cancel
                          </button>
                          &nbsp;
                          <button
                            onClick={profileformik.handleSubmit}
                            onSubmit={profileformik.handleSubmit}
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-primary"
                          >
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* Password changes */}
                  {/* <form onSubmit={profileformik.handleSubmit}>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-primary">Personal Details</h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="currentpwd">Current Password</label>
                          <input
                            name="curpwd"
                            type="password"
                            className="form-control"
                            id="currentpwd"
                            placeholder="Enter current password"
                            onChange={pwdFormik.handleChange}
                            value={pwdFormik.values.curpwd}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="newpwd">New password</label>
                          <input
                            name="newpwd"
                            type="password"
                            className="form-control"
                            id="newpwd"
                            placeholder="Enter new password"
                            onChange={pwdFormik.handleChange}
                            value={pwdFormik.values.newpwd}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="cnfpwd">Confirm Password</label>
                          <input
                            name="cnfpwd"
                            type="password"
                            className="form-control"
                            id="cnfpwd"
                            placeholder="Enter confirm password"
                            onChange={pwdFormik.handleChange}
                            value={pwdFormik.values.cnfpwd}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-secondary"
                          >
                            Cancel
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-primary"
                          >
                            Update Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "no user found"
      )}
    </section>
  );
}

export default Profile;
