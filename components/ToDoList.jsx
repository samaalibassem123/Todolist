import React from 'react'

export default function ToDoList({ text, date , DeletIt, id }) {

  return (
    <div className="flex flex-col w-full gap-5 py-5">
      <div className="flex items-center gap-2  justify-between bg-white w-full p-5 rounded-lg sm:text-lg ">
        <span className="underline ">{text}</span>
        <div className=" flex items-center gap-3">
          <span className="text-gray-500">{date}</span>
          <button className="border border-red-500 text-red-500 px-5 p-2 rounded-xl outline-none sm:hover:bg-red-500 sm:hover:text-white" onClick={()=>DeletIt(id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
