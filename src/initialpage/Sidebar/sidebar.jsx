
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import { admin, rolesObj } from "../../utils/roles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Accordion from "react-bootstrap/Accordion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
const Sidebar = (props) => {
  const role = useSelector((state) => state.auth.role);

  const [isSideMenu, setSideMenu] = useState("");
  const [level2Menu, setLevel2Menu] = useState("");
  const [level3Menu, setLevel3Menu] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };

  const toggleLvelTwo = (value) => {
    setLevel2Menu(value);
  };
  const toggleLevelThree = (value) => {
    setLevel3Menu(value);
  };






  let pathname = props?.location?.pathname;
  return (
    <div className="sidebar" id="sidebar">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="95vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded={true}
      >
        {role == admin && (
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="submenu">
                  <a
                    href="#"
                    className={isSideMenu == "dashboard" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "dashboard" ? "" : "dashboard"
                      )
                    }
                  >
                    <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  {isSideMenu == "dashboard" ? (
                    <ul>
                      <li>
                        <Link
                          className={
                            pathname?.includes("main/dashboard") ? "active" : ""
                          }
                          to="/app/main/dashboard"
                        >
                          Admin Dashboard
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="submenu">
                  <a
                    href="#"
                    className={isSideMenu == "employee" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "employee" ? "" : "employee")
                    }
                  >
                    <i className="la la-user" />{" "}
                    <span className="noti-dot"> Employees</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  {isSideMenu == "employee" ? (
                    <ul>
                      <li>
                        <Link
                          className={
                            pathname?.includes("allemployees")
                              ? "active"
                              : pathname?.includes("employees-list")
                              ? "active"
                              : ""
                          }
                          to="/app/employee/allemployees"
                        >
                          All Employees
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className={pathname?.includes("clients") ? "active" : ""}>
                  <Link to="/app/employees/clients">
                    <i className="la la-users" /> <span>Clients</span>
                  </Link>
                </li>

                <li
                  className={
                    pathname?.includes("Leads")
                      ? "active"
                      : pathname?.includes("Lead-view")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/app/employees/Leads">
                    <i className="la la-ticket" /> <span>Leads</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {role == rolesObj.TEAMLEAD && (
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="submenu">
                  <a
                    href="#"
                    className={isSideMenu == "dashboard" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "dashboard" ? "" : "dashboard"
                      )
                    }
                  >
                    <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  {isSideMenu == "dashboard" ? (
                    <ul>
                      <li>
                        <Link
                          className={
                            pathname?.includes("main/employee-") ? "active" : ""
                          }
                          to="/app/main/employee-dashboard"
                        >
                          Employee Dashboard
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="submenu">
                  <a
                    href="#"
                    className={isSideMenu == "employee" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "employee" ? "" : "employee")
                    }
                  >
                    <i className="la la-user" />{" "}
                    <span className="noti-dot"> Employees</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  {isSideMenu == "employee" ? (
                    <ul>
                      <li>
                        <Link
                          className={
                            pathname?.includes("allemployees")
                              ? "active"
                              : pathname?.includes("employees-list")
                              ? "active"
                              : ""
                          }
                          to="/app/employee/allemployees"
                        >
                          All Employees
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className={pathname?.includes("clients") ? "active" : ""}>
                  <Link to="/app/employees/clients">
                    <i className="la la-users" /> <span>Clients</span>
                  </Link>
                </li>

                <li
                  className={
                    pathname?.includes("Leads")
                      ? "active"
                      : pathname?.includes("Lead-view")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/app/employees/Leads">
                    <i className="la la-ticket" /> <span>Leads</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("create-quote") ? "active" : ""}
                >
                  <Link to="/app/employees/create-quote">
                    <i className="la la-file" />{" "}
                    <div className="textblock2">
                      {" "}
                      <span>Create Quote</span>{" "}
                      <span className="textsmall">PENDING TASKS</span>
                    </div>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("QuotationFollowup") ? "active" : ""
                  }
                >
                  <Link to="/app/employees/QuotationFollowup">
                    <i className="la la-file-text-o" />{" "}
                    <div className="textblock2">
                      {" "}
                      <span>Quotation Followup</span>{" "}
                      <span className="textsmall">PENDING TASKS</span>{" "}
                    </div>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("VoucherPayment") ? "active" : ""
                  }
                >
                  <Link to="/app/employees/VoucherPayment">
                    <i className="la la-gift" />{" "}
                    <div className="textblock2">
                      {" "}
                      <span>Voucher & Payment </span>{" "}
                      <span className="textsmall">PENDING TASKS</span>{" "}
                    </div>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("DuringStay") ? "active" : ""}
                >
                  <Link to="/app/employees/DuringStay">
                    <i className="la la-hotel" />{" "}
                    <div className="textblock2">
                      {" "}
                      <span>During Stay</span>{" "}
                      <span className="textsmall">PENDING TASKS</span>{" "}
                    </div>
                  </Link>
                </li>
                <li className={pathname?.includes("PostStay") ? "active" : ""}>
                  <Link to="/app/employees/PostStay">
                    <i className="la la-thumbs-o-up" />{" "}
                    <div className="textblock2">
                      {" "}
                      <span> Post Stay</span>{" "}
                      <span className="textsmall">PENDING TASKS </span>
                    </div>
                  </Link>
                </li>
                <li className="submenu">
                  <a
                    href="#"
                    className={isSideMenu == "userinfo" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "userinfo" ? "" : "userinfo")
                    }
                  >
                    <i className="la la-user" /> <span>Traveler Detail</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  {isSideMenu == "userinfo" ? (
                    <ul>
                      <li>
                        <div className="user_name_details">
                          <div className="user_img">
                            <img
                              src={"../../../src/assets/img/profilepic.webp"}
                              width={90}
                              height={90}
                              alt=""
                            />
                          </div>
                          <div className="usr_name">
                            <h4>Rahul Ghunavat</h4>
                            <i className="fa fa-user"></i>
                          </div>
                          <div className="trav-basic-details">
                            <ul>
                              <li>
                                <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                                <span> 8233882595 </span>
                              </li>
                              <li>
                                <i
                                  class="fa fa-envelope"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>Quote@reply.traveltriangle.com</span>{" "}
                              </li>
                              <li>
                                <i
                                  class="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>NA</span>
                              </li>
                              <li>
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>NA</span>
                              </li>
                            </ul>

                            <div className="travelerDocDetails mt-4">
                              <ul>
                                <li>
                                  <div className="box_child">
                                    <div className="adlt_adddetls">
                                      <p>Adult 1</p>
                                      <p onClick={handleShow}>Add Details</p>
                                    </div>
                                    <p className="mt-2">
                                      <span>Passport missing</span>,{" "}
                                      <span>PAN missing</span>
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="box_child">
                                    <div className="adlt_adddetls">
                                      <p>Adult 2</p>
                                      <p onClick={handleShow}>Add Details</p>
                                    </div>
                                    <p className="mt-2">
                                      <span>Passport missing</span>,{" "}
                                      <span>PAN missing</span>
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li className="submenu">
                  <Link
                    className={isSideMenu == "leadprogress" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "leadprogress" ? "" : "leadprogress"
                      )
                    }
                  >
                    <i className="fa fa-line-chart" />{" "}
                    <span> Lead Progress</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "leadprogress" ? (
                    <div className="trav-basic-details">
                      <div className="leadStatgeHead">
                        <p>
                          Simpler way to keep a track by adding relevant notes.{" "}
                          <Link to="/"> Know More! </Link>
                        </p>
                        <p>Ph. No.: +910000000000</p>
                      </div>
                      <div className="sub_accrodion">
                       <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Quoting
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="adlt_adddetls">
                                      <p>Lead Received2</p>
                                     <span>over 3 years ago</span>
                                    </div>
                                    <div className="adlt_adddetls">
                                      <p>Phone Number Unlocked </p>
                                      <span>over 3 years ago </span>
                                    </div>
                                    <div className="number_panelarea">
                                      + 91 0000000000
                                    </div>
                                    <div className="focsuedligh"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Tip: Ask for best time to contact on Whatsapp </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Contacting
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  <div className="contact_share">
                                    <p><i class="fa fa-check" aria-hidden="true"></i> +910000000000 <Link to='/'>Report if incorrect</Link></p>
                                    <div>
                                      <ul>
                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                              <i class="fa fa-phone" aria-hidden="true"></i></div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Call not picked?</span>
                                              <span className="pfc2" onClick={handleShow1}>Mark unable to reach customer</span>
                                            </div> 
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-whatsapp" ></i></div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Share quote on Whatsapp?</span>
                                            </div> 
                                          </div>
                                        </li>

                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                            </div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Quote not seen?</span>
                                              <span className="pfc2" onClick={handleShow1}>Resend quote set a reminder</span>
                                              
                                            </div> 
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-hourglass-end"></i>
                                            </div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Quote not seen?</span>
                                              <span className="pfc2" onClick={handleShow1}>Resend quote set a reminder</span>
                                              
                                            </div> 
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    
                                  </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Customizing
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                <div className="contact_share">
                                    <p><i class="fa fa-check" aria-hidden="true"></i> +910000000000 <Link to='/'>Report if incorrect</Link></p>
                                    <div>
                                      <ul>
                                      <li>
                                          <div className="flex-row">
                                            <div className="icon whatappicon">
                                            <i class="fa fa-whatsapp" ></i></div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Share quote on Whatsapp?</span>
                                            </div> 
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-hourglass-end"></i></div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Talk in progress?</span>
                                              <span className="pfc2" onClick={handleShow1}>Set reminder for when to call next</span>
                                            </div> 
                                          </div>
                                        </li>
                                       

                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                            </div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Call not picked?</span>
                                              <span className="pfc2" onClick={handleShow1}>Mark unable to reach customer</span>
                                              
                                            </div> 
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                            </div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Booking Soon?</span>
                                              <span className="pfc2" onClick={handleShow1}>Mark as my priority</span>
                                              
                                            </div> 
                                          </div>
                                        </li>
                                      </ul>
                                      <div class="focsuedligh"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Tip: Ask for best time to contact on Whatsapp </div>
                                    </div>
                                    
                                  </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Finalizing
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                <div className="contact_share">
                              
                                    <div>
                                      <ul>
                                      <li>
                                          <div className="flex-row">
                                            <div className="icon whatappicon">
                                            <i class="fa fa-whatsapp" ></i></div> 
                                            <div className="datanumber">
                                              <span className="pfc3"> Already customised?</span>
                                              <span className="pfc2">Send WhatsApp confirmation</span>

                                            </div> 
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                            </div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Call not picked?</span>
                                              <span className="pfc2" onClick={handleShow1}>Mark unable to reach customer</span>
                                            </div> 
                                          </div>
                                        </li>
                                       

                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-money" aria-hidden="true"></i>

                                            </div> 
                                            <div className="datanumber">
                                              <span className="pfc3"> Traveler going to pay soon?</span>
                                              <span className="pfc2" onClick={handleShow1}>Set reminder for when to follow up next</span>
                                              
                                            </div> 
                                          </div>
                                        </li>
                                        <li>
                                          <div className="flex-row">
                                            <div className="icon">
                                            <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                                            </div> 
                                            <div className="datanumber">
                                              <span className="pfc3">Booked with someone else?</span>
                                              <span className="pfc2" onClick={handleShow1}>Remove Lead</span>
                                              
                                            </div> 
                                          </div>
                                        </li>
                                      </ul>
                                      <div class="focsuedligh"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Tip: Ask for best time to contact on Whatsapp </div>
                                    </div>
                                    
                                  </div>
                                </AccordionItemPanel>
                            </AccordionItem>  
                            <AccordionItem>
                              <AccordionItemHeading>
                                  <AccordionItemButton>
                                  Converted
                                  </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                              <div className="adlt_adddetls">
                                  <p>Lead Received2</p>
                              </div>
                                <p className="leadperagrph"> Congratulations! We have received the payment from the traveler. We trust you with providing the best service. </p>
                              </AccordionItemPanel>
                            </AccordionItem> 

                            <AccordionItem>
                              <AccordionItemHeading>
                                  <AccordionItemButton>
                                  Trip Completed
                                  </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <p className="leadperagrph">Good reviews help in improving your ratings and get more business.</p>
                              <div className="btn-block snp100">
                                  <button className="btn btn-danger btn-sm btn-block">ASK FOR REVIEW</button>
                                </div>
                              </AccordionItemPanel>
                            </AccordionItem>  


                        </Accordion>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
                <li className="submenu">
                  <a
                    href="#"
                    className={isSideMenu == "notes" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "notes" ? "" : "notes")
                    }
                  >
                   <i class="fa fa-sticky-note-o" />{" "}
                    <span > NOTES </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  {isSideMenu == "notes" ? (
                    <div className="notes_body">
                      <div className="col-lg-12">
                      <div className="notes_heading">
                        <label> <input type="checkbox" className="radbtn" /> My Notes  </label> &nbsp; 
                        <label> <input type="checkbox" className="radbtn" /> TT Admin</label> &nbsp;
                        <label><input type="checkbox" className="radbtn" /> System</label> 
                      </div>
                      </div>
                        <span className="adnotes" onClick={handleShow2}>add Notes</span>
                        <div className="note_added_by_agent mt-4">
                         <div className="textnote">
                         <div class="alignright mb8">
                            <span className=" flexfull" >12:02 hrs, 10 Jan 2019</span>
                          </div>
                          <div className="noteMessage">
                            <p className="post-heading  f12">Talk in progress with traveler</p>
                            <p className=" post-text-new pfc3 f12 m0">Getting Quote/package customized</p>
                            <p className="post-heading  f12">Cna@geetanjali</p>
                            </div>
                         </div>
                          <span className="notesImageCorner">
                            <img src={"../../../src/assets/img/NotesImageCorner.webp"}  alt=""/>
                          </span>
                        </div>

                        <div className="note_added_by_agent">
                         <div className="textnote">
                         <div class="alignright mb8">
                            <span className=" flexfull" >12:02 hrs, 10 Jan 2019</span>
                          </div>
                          <div className="noteMessage">
                            <p className="post-heading  f12">Talk in progress with traveler</p>
                            <p className=" post-text-new pfc3 f12 m0">Getting Quote/package customized</p>
                            <p className="post-heading  f12">Cna@geetanjali</p>
                            </div>
                         </div>
                          <span className="notesImageCorner">
                          <img src={"../../../src/assets/img/NotesImageCorner.webp"}  alt=""/></span>
                        </div>

                        <div className="note_added_by_agent">
                         <div className="textnote">
                         <div class="alignright mb8">
                            <span className=" flexfull" >12:02 hrs, 10 Jan 2019</span>
                          </div>
                          <div className="noteMessage">
                            <p className="post-heading  f12">Talk in progress with traveler</p>
                            <p className=" post-text-new pfc3 f12 m0">Getting Quote/package customized</p>
                            <p className="post-heading  f12">Cna@geetanjali</p>
                            </div>
                         </div>
                          <span className="notesImageCorner">
                          <img src={"../../../src/assets/img/NotesImageCorner.webp"}  alt=""/></span>
                        </div>

                         <div className="note_added_by_agent">
                         <div className="textnote">
                         <div class="alignright mb8">
                            <span className=" flexfull" >12:02 hrs, 10 Jan 2019</span>
                          </div>
                          <div className="noteMessage">
                            <p className="post-heading  f12">Talk in progress with traveler</p>
                            <p className=" post-text-new pfc3 f12 m0">Getting Quote/package customized</p>
                            <p className="post-heading  f12">Cna@geetanjali</p>
                            </div>
                         </div>
                          <span className="notesImageCorner">
                          <img src={"../../../src/assets/img/NotesImageCorner.webp"}  alt=""/></span>
                        </div>
                    </div>
                  ) : (
                    ""
                  )}



                </li>
                <li className={pathname?.includes("RequestedTrips") ? "active" : ""}>
                  <Link to="/app/employees/RequestedTrips">
                    <i className="la la-hotel" />{" "}
                    <div className="textblock2">{" "}
                        <span>Requested Trips</span>{" "}
                      
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {role == rolesObj.SPOKE && (
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="submenu">
                  <a
                    href="#"
                    className={isSideMenu == "dashboard" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "dashboard" ? "" : "dashboard"
                      )
                    }
                  >
                    <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  {isSideMenu == "dashboard" ? (
                    <ul>
                      <li>
                        <Link
                          className={
                            pathname?.includes("main/employee-") ? "active" : ""
                          }
                          to="/app/main/employee-dashboard"
                        >
                          Employee Dashboard
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li
                  className={
                    pathname?.includes("Leads")
                      ? "active"
                      : pathname?.includes("Lead-view")
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/app/employees/Leads">
                    <i className="la la-ticket" /> <span>Leads</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/*--------------------------------------------- modal area------------------------ */}
        {/*--------------------------------------------- modal area------------------------ */}
        <Modal show={show} onHide={handleClose} className="add_details_modal">
          <Modal.Header>
            <Modal.Title> Add Details </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid add_detail_frm">
              <div className="row">
                <div className="col-lg-12">
                  <p>Traveler Details</p>
                </div>
                <div className="col-lg-5 col-sm-6">
                  <div className="form-group">
                    <label>
                      Full Name <span>*</span>{" "}
                    </label>
                    <input type="text" name="name" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-4">
                  <div className="form-group">
                    <label>
                      age <span>*</span>{" "}
                    </label>
                    <input type="text" name="name" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label>Passport Number </label>
                    <input type="text" name="" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label>Issued Date DD/MM/YY</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label>Expiry Date DD/MM/YY</label>
                    <DatePicker
                      selected={startDate1}
                      onChange={(date) => setStartDate1(date)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                  <div className="form-group">
                    <label>Issued place</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>Passport Front Page </label>
                    <input type="file" name="file" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>Pancard Number </label>
                    <input type="text" name="file" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>Pancard Front Page </label>
                    <input type="file" name="file" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>Other Documents </label>
                    <input type="file" name="file" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="foter-modal">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <p>
                      Note: Please select multiple files to upload in one go.
                    </p>
                  </div>
                  <div className="col-lg-6 text-end">
                    <Button className="btn-cancle" onClick={handleClose}>
                      {" "}
                      Cancel{" "}
                    </Button>{" "}
                    &nbsp;
                    <Button className="btn-submit" onClick={handleClose}>
                      {" "}
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

{/* sedasdfasdfdddddddddddddddddddddddddddddddddddddd */}
        <Modal show={show1} onHide={handleClose1} className="add_note">
          <Modal.Header>
            <Modal.Title>Add Note<span>TRIP ID 3852943</span> </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="section_progress ">
              <div className="icon_note">
              <i class="fa fa-volume-up" aria-hidden="true"></i>
              </div>

              <div className="icon_text">
                <p>Talk in progress with traveler</p>
                <p>Traveler interested, but will book after few weeks </p>
              </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Your Note</label>
                      <textarea name="" className="form-control" rows="100" placeholder="Enter additional information..."></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <label>Set Reminder </label>
                      <DatePicker
                      selected={startDate1}
                      onChange={(date) => setStartDate1(date)}
                      className="form-control"
                    />
                    </div>
                  </div>
                </div>
              </div>
            <div className="foter-modal">
              <div className="container">
                <div className="row">
                 
                  <div className="col-lg-12 text-end">
                    <Button className="btn-cancle" onClick={handleClose1}>
                      {" "}
                      Cancel{" "}
                    </Button>{" "}
                    &nbsp;
                    <Button className="btn-submit" onClick={handleClose1}>
                      {" "}
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
{/*------------------------------------------- addddddd notsssss-------------------------------------- */}
{/*------------------------------------------- addddddd notsssss-------------------------------------- */}
<Modal show={show2} onHide={handleClose2} className="add_note">
          <Modal.Header>
            <Modal.Title>Add Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
            <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Your Note</label>
                      <textarea name="" className="form-control" cols="1000" rows="100" placeholder="Your Notes"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <label>Set Reminder </label>
                      <DatePicker
                      selected={startDate1}
                      onChange={(date) => setStartDate1(date)}
                      className="form-control"
                    />
                    </div>
                  </div>
                </div>
              </div>
            <div className="foter-modal">
              <div className="container">
                <div className="row">
                 
                  <div className="col-lg-12 text-end">
                    <Button className="btn-cancle" onClick={handleClose2}>
                      {" "}
                      Cancel{" "}
                    </Button>{" "}
                    &nbsp;
                    <Button className="btn-submit" onClick={handleClose2}>
                      {" "}
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

      </Scrollbars>

    </div>
  );
};

export default withRouter(Sidebar);
