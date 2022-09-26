/**
 * Form Elemets
 */
// import React, { Component } from "react";
// // import { getAllNestedCategories } from "../../../redux/actions/Category/Category.actions";
// // import { BrandGet } from "../../../redux/actions/Brand/brand.actions";
// // import { PRODUCTAdd } from "../../../redux/actions/Product/Product.actions";
// // import { ATTRIBUTEGet } from "../../../redux/actions/Attribute/Attribute.actions";
// import ReactQuill from "react-quill"; // ES6
// import { AddModal } from "../Utility/Modal";
import {
  quotationAdd,
  get,
  deleteQuotation,
  update,
} from "../../../../redux/features/quotation/quotationSlice";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../../../_components/Utility/Button";
import React, { useState, useEffect, Component } from "react";
import Select from "react-select";

const Basicinputs = () => {
  const dispatch = useDispatch();
  const [destinationName, setDestinationName] = useState("");
  const [durationOfTour, setDurationOfTour] = useState(0);
  const [numberOfGuest, setNumberOfGuest] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  /////
  const [childWithoutBed, setChildWithoutBed] = useState(0);
  const [childWithBed, setChildWithBed] = useState(0);
  // const [hotelDetail, setHotelDetail] = useState([]); //

  const [visaRequired, setVisaRequired] = useState(false);
  const [visaOnArrival, setVisaOnArrival] = useState("");
  ///////warehouse address
  // const [airportTransfer, setAirportTransfer] = useState("");
  const [tour, setTour] = useState("");
  const [leadId, setLeadId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  ///////Country of Origin
  const [termAndCondition, setTermAndCondition] = useState("");
  //////product details
  const [amount, setAmount] = useState(0);
  const [tax, setTax] = useState(0);
  const [amountWithTax, setAmountWithTax] = useState(0);
  const [dayOfItinerary, setDayOfItinerary] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [numberOfNight, setNumberOfNight] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkout, setCheckout] = useState("");
  const [rating, setRating] = useState(0);
  const [hotelAddress, setHotelAddress] = useState(0);
  const [airportTransfer, setAirportTransfer] = useState("");
  //traveller details
  const [nameOfGuest, setNameOfGuest] = useState("");
  const [age, setAge] = useState(0);
  /////
  // const [otherTraveller, setOtherTraveller] = useState(false);
  const [formValues, setFormValues] = useState([{ nameOfGuest: "", age: "" }]);
  const [inputList, setinputList] = useState([{ nameOfGuest: "", age: "" }]);
  //////

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { firstName: "", lastName: "" }]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (destinationName == "") {
    //   throw "destinationName name is mandatory";
    // }
    // if (numberOfGuest == "") {
    //   throw "number Of Guest is mandatory";
    // }
    // if (adultCount == "") {
    //   throw "adult Count is mandatory";
    // }
    // if (visaRequired == "") {
    //   throw "visa Required is mandatory";
    // }
    // if (tour == "") {
    //   throw "tour is mandatory";
    // }
    // if (startDate == "") {
    //   throw "start Date is mandatory";
    // }
    // if (amount == "") {
    //   throw "amount is mandatory";
    // }
    let obj = {
      destinationName,
      durationOfTour,
      numberOfGuest,
      adultCount,
      childWithoutBed,
      childWithBed,
      travellersDetails: [
        {
          name: nameOfGuest,
          age,
        },
      ],
      // hotelDetail,
      hotelDetail: [
        {
          hotelName,
          roomType,
          numberOfNight,
          checkIn,
          checkout,
          rating,
          hotelAddress,
        },
      ],
      visaRequired,
      visaOnArrival,
      airportTransfer,
      tour,
      leadId,
      startDate,
      expirationDate,
      termAndCondition,
      amount,
      tax,
      amountWithTax,
      dayOfItinerary,
    };

    dispatch(quotationAdd(obj));
    console.log(obj, "send Obj9");
    // console.log("send you data ");
  };

  let array = [];
  // const addDiv = () => {
  //   <div className="row">
  //     <div className="col-sm-6">
  //       <div className="form-group row">
  //         <label className="col-form-label col-md-4">
  //           Name Of Guest
  //           <span className="text-danger">*</span>
  //         </label>
  //         <div className="col-sm-8">
  //           <input
  //             type="text"
  //             className="form-control"
  //             value={nameOfGuest}
  //             onChange={(e) => setNameOfGuest(e.target.value)}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="col-sm-6">
  //       <div className="form-group row">
  //         <label className="col-form-label col-md-4">
  //           Age <span className="text-danger">*</span>
  //         </label>
  //         <div className="col-sm-8">
  //           <input
  //             type="number"
  //             className="form-control"
  //             value={age}
  //             onChange={(e) => setAge(e.target.value)}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>;
  // };
  return (
    //
    // http://localhost:8080/app/quotation/forms
    <div className="page-wrapper">
      <Helmet>
        <title>Form Basic Input - CRM created by Fliptrip Holidays</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Quotation Create</h3>
            </div>
          </div>
        </div>

        {/* /Page Header */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0">Neccessary Details</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* <form action="#"> */}
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Destination Name <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={destinationName}
                        onChange={(e) => setDestinationName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Duration Of Tour <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={durationOfTour}
                        onChange={(e) => setDurationOfTour(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group row">
                        <label className="col-form-label col-md-4">
                          Number Of Guest <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            value={numberOfGuest}
                            onChange={(e) => setNumberOfGuest(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group row">
                        <label className="col-form-label col-md-4">
                          Adult Count <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            value={adultCount}
                            onChange={(e) => setAdultCount(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group row">
                        <label className="col-form-label col-md-4">
                          Child Without Bed
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            value={childWithoutBed}
                            onChange={(e) => setChildWithoutBed(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group row">
                        <label className="col-form-label col-md-4">
                          Child With Bed <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            value={childWithBed}
                            onChange={(e) => setChildWithBed(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*
                   http://localhost:8080/app/quotation/forms
                   */}

                  <div className="form-group row">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Traveller Details</h4>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group row">
                          <label className="col-form-label col-md-4">
                            Name Of Guest
                            {/* <span className="text-danger">*</span> */}
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              value={nameOfGuest}
                              onChange={(e) => setNameOfGuest(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group row">
                          <label className="col-form-label col-md-4">
                            Age
                            {/* <span className="text-danger">*</span> */}
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="number"
                              className="form-control"
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 
                     http://localhost:8080/app/quotation/forms
                    */}
                    <div>
                      {/* {
            (
                      <Container className="content">
                       <div className="row">
                         <div className="col-sm-12">
                           <h5 className="mt-3 mb-4 fw-bold">Dynamically add/remove inputs fields reactjs </h5>
                             
                              { 
                              inputList.map( (x,i)=>{
                                return(
                                <div className="row mb-3">
                                   <div class="form-group col-md-4">
                                   <label >First Name</label>
                                    <input type="text"  name="firstName" class="form-control"  placeholder="Enter First Name" onChange={ e=>handleinputchange(e,i)} />
                                 </div>
                                 <div class="form-group col-md-4">
                                 <label >Last Name</label>
                                    <input type="text"  name="lastName" class="form-control"   placeholder="Enter Last Name" onChange={ e=>handleinputchange(e,i) }/>
                                 </div>
                                 <div class="form-group col-md-2 mt-4">
                                 {
                                    inputList.length!==1 &&
                                    <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)}>Remove</button>
                                 }
                                 { inputList.length-1===i &&
                                 <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
                                 }
                                 </div>
                              </div>
                                );
                               } )} 
                  
                                 
                         </div>
                       </div>
                      </Container>
                    );
    ); */}
                    </div>

                    {/* <div>
                      {otherTraveller && (
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group row">
                              <label className="col-form-label col-md-4">
                                Name Of Guest
                                <span className="text-danger">*</span>
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={nameOfGuest}
                                  onChange={(e) =>
                                    setNameOfGuest(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group row">
                              <label className="col-form-label col-md-4">
                                Age <span className="text-danger">*</span>
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="number"
                                  className="form-control"
                                  value={age}
                                  onChange={(e) => setAge(e.target.value)}
                                />
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      )}                    }
                    </div> }
                          {/* <div>
                            <button
                              onClick={() => {
                                setOtherTraveller(true);
                              }}
                              // onclick={addDiv}
                            >
                              <h2>+</h2>
                            </button>
                          </div> */}
                  </div>

                  {/* 


                    
                    */}
                  <div className="form-group row">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Hotel details</h4>
                    </div>
                    {/* <h2 className="col-form-label col-md-2">Hotel details</h2> */}
                    {/*  */}
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">
                        Hotel Name
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          value={hotelName}
                          onChange={(e) => setHotelName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group row">
                          <label className="col-form-label col-md-4">
                            Number Of Night
                            <span className="text-danger">*</span>
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="number"
                              className="form-control"
                              value={numberOfNight}
                              onChange={(e) => setNumberOfNight(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group row">
                          <label className="col-form-label col-md-4">
                            Room Type <span className="text-danger">*</span>
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              value={roomType}
                              onChange={(e) => setRoomType(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group row">
                          <label className="col-form-label col-md-4">
                            checkIn
                            <span className="text-danger">*</span>
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="number"
                              className="form-control"
                              value={checkIn}
                              onChange={(e) => setCheckIn(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group row">
                          <label className="col-form-label col-md-4">
                            checkout<span className="text-danger">*</span>
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              value={checkout}
                              onChange={(e) => setCheckout(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">rating</label>
                      <div className="col-md-4">
                        <input
                          type="number"
                          className="form-control"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">
                        hotelAddress
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          value={hotelAddress}
                          onChange={(e) => setHotelAddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-4">
                      Visa Required
                      <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-8">
                      <select
                        // className="col-md-8"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">true</option>
                        <option value="2">false</option>
                        {/* <option value="3">Three</option> */}
                      </select>
                    </div>
                    {/* <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={visaRequired}
                        onChange={(e) => setVisaRequired(e.target.value)}
                      />
                    </div> */}
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Visa On Arrival
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={visaOnArrival}
                        onChange={(e) => setVisaOnArrival(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Airport Transfer
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={airportTransfer}
                        onChange={(e) => setAirportTransfer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Lead name</label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={leadId}
                        onChange={(e) => setLeadId(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      tour<span className="text-danger">*</span>
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={tour}
                        onChange={(e) => setTour(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Start Date
                      <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Expiration Date
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Term And Condition
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={termAndCondition}
                        onChange={(e) => setTermAndCondition(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Airport Transfer
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={airportTransfer}
                        onChange={(e) => setAirportTransfer(e.target.value)}
                      />
                    </div>
                  </div> */}
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      amount <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Tax</label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={tax}
                        onChange={(e) => setTax(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Amount With Tax
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={amountWithTax}
                        onChange={(e) => setAmountWithTax(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Day Of Itinerary
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={dayOfItinerary}
                        onChange={(e) => setDayOfItinerary(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <CustomButton isBtn btnName="Save" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basicinputs;
//

// import { useSelector, useDispatch } from "react-redux";
// // // import { getAllNestedCategories } from "../../../redux/actions/Category/Category.actions";
// // // import { BrandGet } from "../../../redux/actions/Brand/brand.actions";
// // // import { PRODUCTAdd } from "../../../redux/actions/Product/Product.actions";
// // // import { ATTRIBUTEGet } from "../../../redux/actions/Attribute/Attribute.actions";

// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// // import ReactQuill from "react-quill"; // ES6
// // import { AddModal } from "../Utility/Modal";
// import CustomButton from "../Utility/Button";
// // import Attribute from "./Attribute";
// import { DashboardBox } from "../Utility/DashboardBox";
// // import FileUpload from "../Utility/FileUpload";

// // function GeneralProduct() {
// //     const dispatch = useDispatch();
// //     const [destinationName, setDestinationName] = useState("");
// //     const [durationOfTour, setDurationOfTour] = useState(0);

// function Quotation() {
//   // const dispatch = useDispatch();
//   const [destinationName, setDestinationName] = useState("");
//   const [durationOfTour, setDurationOfTour] = useState(0);
//   const [numberOfGuest, setNumberOfGuest] = useState(0);
//   const [adultCount, setAdultCount] = useState(0);
//   /////
//   const [childWithoutBed, setChildWithoutBed] = useState(0);
//   const [childWithBed, setChildWithBed] = useState(0);
//   const [hotelDetail, setHotelDetail] = useState([]); ////////////

//   const [visaRequired, setVisaRequired] = useState("");
//   const [visaOnArrival, setVisaOnArrival] = useState("");
//   ///////warehouse address
//   const [airportTransfer, setAirportTransfer] = useState("");
//   const [tour, setTour] = useState("");
//   const [leadId, setLeadId] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [expirationDate, setExpirationDate] = useState("");
//   ///////Country of Origin
//   const [termAndCondition, setTermAndCondition] = useState("");
//   //////product details
//   const [amount, setAmount] = useState(0);
//   const [tax, setTax] = useState(0);
//   const [amountWithTax, setAmountWithTax] = useState(0);
//   const [dayOfItinerary, setDayOfItinerary] = useState("");

//   const [Type, setType] = useState("single");

//   const [despcription, setdespcription] = useState("");
//   const [Specifications, setSpecifications] = useState("");
//   const [ModalBox, setModalBox] = useState(false);
//   const [ModalType, setModalType] = useState("");
//   const [ModalName, setModalName] = useState("");
//   const [IsPhysicalProduct, setIsPhysicalProduct] = useState(false);
//   console.log("quotation alled ");
//   return (
//     <form action="#" className="form">
//       <div className="row">
//         <div className="col-12 col-md-8">
//           <DashboardBox>
//             <div className="border-bottom pb-3 mb-4 row">
//               <h5 className="blue-1 mb-4">QUOTATION Information</h5>
//               <div className="col-12 mb-3">
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Destination Name <span className="red">*</span>
//                   </label>
//                   <input
//                     value={destinationName}
//                     onChange={(event) => setDestinationName(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 {Type === "single" && (
//                   <div className="col-12 col-md-6 mb-3">
//                     <label>
//                       Duration Of Tour <span className="red">*</span>
//                     </label>
//                     <input
//                       value={durationOfTour}
//                       onChange={(event) =>
//                         setDurationOfTour(event.target.value)
//                       }
//                       type="text"
//                       className="form-control"
//                     />
//                   </div>
//                 )}

//                 <div className="col-12 col-md-4 mb-3">
//                   <label>
//                     Number Of Guest <span className="red">*</span>
//                   </label>
//                   <input
//                     value={numberOfGuest}
//                     onChange={(event) => setNumberOfGuest(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-4 mb-3">
//                   <label>
//                     adult Count <span className="red">*</span>
//                   </label>
//                   <input
//                     value={adultCount}
//                     onChange={(event) => setAdultCount(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Child Without Bed <span className="red">*</span>
//                   </label>
//                   <input
//                     value={childWithoutBed}
//                     onChange={(event) => setChildWithoutBed(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Child With Bed<span className="red">*</span>
//                   </label>
//                   <input
//                     value={childWithBed}
//                     onChange={(event) => setChildWithBed(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Visa Required <span className="red">*</span>
//                   </label>
//                   <input
//                     value={visaRequired}
//                     onChange={(event) => setVisaRequired(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Visa On Arrival <span className="red">*</span>
//                   </label>
//                   <input
//                     value={visaOnArrival}
//                     onChange={(event) => setVisaOnArrival(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Airport Transfer <span className="red">*</span>
//                   </label>
//                   <input
//                     value={airportTransfer}
//                     onChange={(event) => setAirportTransfer(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 {/* /////////// ..................................... */}
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     tour <span className="red">*</span>
//                   </label>
//                   <input
//                     value={tour}
//                     onChange={(event) => setTour(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Lead Id <span className="red">*</span>
//                   </label>
//                   <input
//                     value={leadId}
//                     onChange={(event) => setLeadId(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Start Date <span className="red">*</span>
//                   </label>
//                   <input
//                     value={startDate}
//                     onChange={(event) => setStartDate(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Expiration Date <span className="red">*</span>
//                   </label>
//                   <input
//                     value={expirationDate}
//                     onChange={(event) => setExpirationDate(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Term And Condition <span className="red">*</span>
//                   </label>
//                   <input
//                     value={termAndCondition}
//                     onChange={(event) =>
//                       setTermAndCondition(event.target.value)
//                     }
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Amount <span className="red">*</span>
//                   </label>
//                   <input
//                     value={amount}
//                     onChange={(event) => setAmount(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 {/* setDayOfItinerary */}
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Tax<span className="red">*</span>
//                   </label>
//                   <input
//                     value={tax}
//                     onChange={(event) => setTax(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Amount With Tax <span className="red">*</span>
//                   </label>
//                   <input
//                     value={amountWithTax}
//                     onChange={(event) => setAmountWithTax(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12 col-md-6 mb-3">
//                   <label>
//                     Day Of Itinerary <span className="red">*</span>
//                   </label>
//                   <input
//                     value={dayOfItinerary}
//                     onChange={(event) => setDayOfItinerary(event.target.value)}
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col-12">
//                   <CustomButton
//                     btntype="button"
//                     // ClickEvent={handleSubmit}
//                     isBtn
//                     iconName="fa-solid fa-check"
//                     btnName="Save"
//                   />
//                 </div>
//               </div>
//             </div>
//           </DashboardBox>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default Quotation;
