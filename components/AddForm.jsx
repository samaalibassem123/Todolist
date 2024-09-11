"use client"
import { Ma_Shan_Zheng } from "next/font/google";
import React from "react";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function AddForm({ AddTolist }) {

  const ErrorPrompt = (msg)=>{
    toast.error(msg)
  }
  const successPrompt = (msg)=>{
    toast.success(msg)
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target;
    const text = form.text.value
    const date = form.date.value
    if(text === "" || date === ""){
      ErrorPrompt("Date or text is empty !")
    }else{
      successPrompt("Saved Succesfully !")
    }
    AddTolist(text, date)
    try {
      await fetch("http://localhost:8000/SaveToDo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({ text: text, date: date })
        }
      );
      console.log("heuu")
    } catch (error) {
      ErrorPrompt("Erreur in the server")
      console.log(error)
      throw (error)
    }

    form.reset()

  }
  return (
    <form
      action=""
      className="flex flex-col gap-5 bg-white rounded-b-lg p-5 shadow-2xl "
      onSubmit={HandleSubmit}
    >
       <ToastContainer/>
      <input
        name="text"
        type="text"
        placeholder="Write what u want to Do"
        className="bg-gray-100 p-2 rounded-lg w-full outline-none border "
      />
      <div>
        <label htmlFor="" className="text-sm text-gray-400 px-1">
          When u want to Do it
        </label>
        <input
          name="date"
          type="date"
          placeholder="When u want to Do it"
          className="bg-gray-100 p-2 rounded-lg w-full outline-none border "
        />
      </div>
      <input
        type="submit"
        value="submit"
        
        className="hover:bg-black hover:text-white text-lg  p-2 rounded-lg w-[100px] outline-none border border-black cursor-pointer transition-all "
      />
    </form>
  );
}
