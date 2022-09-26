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
      {/* <div className="page-wrapper">
        <div className="content container-fluid">
         <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Tour Data</h3>
              </div>
            </div>
          </div>
     
          <div className="row">
            <div className="col-lg-12"> 
              { <div className="card">
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
                      </div> */}
      {/* </div>

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
      </div> */}
    </>
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
