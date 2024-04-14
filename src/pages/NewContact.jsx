import React, { useState } from "react";
import Ellipse01 from "../assets/Ellipse 1.png";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";
import Logo from "../assets/02 1.png";
import TWC_Text from "../assets/TWC_Logo_Revamp_2021 1.png";
import ContactsPortal from "../assets/contacts portal.png";
import LogOut from "../assets/bx_log-out-circle.png";
import { Link } from "react-router-dom";
import axios from "axios";

function NewContact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUsers", {
        name,
        email,
        gender,
        phone,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-screen relative">
      <div className="relative w-full h-screen flex ">
        {/* bg image */}
        <img
          src={Ellipse01}
          alt=""
          className="  w-full h-full object-cover z-10"
        />
        <div className="absolute left-0 bottom-0">
          <img src={LeftImage} alt="" className="w-60 h-60" />
        </div>
        <div className="absolute right-0 top-0">
          <img src={RightImage} alt="" className="w-60 h-60" />
        </div>
        {/* end bg image */}

        {/* logo */}
        <div className="">
          <div className="absolute z-10 flex left-10 top-10">
            <img src={Logo} alt="" className="" />
            <img src={TWC_Text} alt="" className="" />
          </div>
          <div className="absolute z-10 flex left-16 top-16">
            <img src={ContactsPortal} alt="" className="" />
          </div>
        </div>
        {/* end logo */}

        {/* form */}
        <div className="absolute z-10 mt-60 m-40">
          <h1 className="text-white capitalize font-bold text-5xl">
            New Contact
          </h1>
          <div className="mt-14">
            <form onSubmit={Submit}>
              <div className="space-between text-primary items-center justify-between">
                <input
                  type="text"
                  placeholder="full name"
                  className="rounded-full my-2"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="e-mail"
                  className="rounded-full my-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="phone number"
                  className="rounded-full my-2"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="flex my-2 text-white">
                  <label htmlFor="">gender</label>
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-white dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="gender"
                      value="male"
                      id="radioDefault02"
                      defaultChecked
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="radioDefault02"
                    >
                      male
                    </label>
                  </div>
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-white dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="gender"
                      value="female"
                      id="radioDefault01"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="radioDefault01"
                    >
                      female
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <button className="border rounded-full border-solid my-auto py-1 px-8 text-white text-normal">
                  add your first contact
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* end form */}
        <div className="absolute z-10 right-14 bottom-12 flex text-center justify-items-center">
          <img src={LogOut} alt="" className="w-[43px] h-[43px]" />
          <Link to="/login" className="underline text-white font-normal ">
            logout
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

export default NewContact;
