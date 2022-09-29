/**
 * Form Elemets
 */
import React, { Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CustomButton from "../../../../_components/Utility/Button";
import { useSelector, useDispatch } from "react-redux";

import { TOURAdd, tourGet } from "../../../../redux/features/tour/tourSlice";

const Basicinputs = () => {
  const dispatch = useDispatch();
  const [tourName, setTourName] = useState("");
  const [description, setDescription] = useState("");
  // console.log(description, "description");
  // console.log(tourName, "tournae");

  const handleInit = () => {
    dispatch(tourGet());
  };

  useEffect(() => {
    handleInit();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tourName == "") {
      throw "tour name is mandatory";
    }
    let obj = {
      tourName,
      description,
    };
    console.log(obj, "send Obj");

    // dispatch(tourSlice.);
    dispatch(TOURAdd(obj));
  };
  {
    /*
                  http://localhost:8080/app/tour/forms
                   */
  }
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Form Basic Input - CRM created by Fliptrip Holidays</title>
          {/* <meta name="description" content="Login page" /> */}
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Tour Details</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">
                        Tour Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          value={tourName}
                          onChange={(e) => setTourName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">
                        Description
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <CustomButton
                        isBtn
                        // iconName="fa-solid fa-check"
                        // ClickEvent={handleSubmit}
                        btnName="Save"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // // //


    </>
  );
};
export default Basicinputs;
//
