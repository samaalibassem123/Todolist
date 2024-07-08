"use client"
import React from "react";

export default function AddForm({ AddTolist }) {

  const HandleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target;
    const text = form.text.value
    const date = form.date.value
    AddTolist(text, date)
    console.log(process.env.BACKEND_API_KEY)
    try {
      await fetch(process.env.BACKEND_API_KEY+"/SaveToDo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({ text: text, date: date })
        }
      );
    } catch (error) {
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
        className="hover:bg-black hover:text-white text-lg  p-2 rounded-lg w-[100px] outline-none border border-black cursor-pointer transition-all "
      />
    </form>
  );
}
