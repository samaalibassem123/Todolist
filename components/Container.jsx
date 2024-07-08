"use client";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddForm from "./AddForm";
import { motion } from "framer-motion";
import { React, useEffect, useState } from "react";
import ToDoList from "./ToDoList";

export default function Container() {
  const [show, setshow] = useState(false);
  const [todolist, setTodolist] = useState([]);
  const [index, setIndex] = useState(0);
  const [Loading, setLoading] = useState(true)
  const [textLoading, setTextLoading] = useState('Loading...')

  useEffect(() => {
    const fetchData = async () => {
      try{
        const req = await fetch("http://localhost:8000/GetData", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await req.json();
      setTodolist(data);
      setLoading(false)
      }catch(err){
        setLoading(true)
        setTextLoading('There is an erreur in the server try again !')
      }
  
    };
  
      fetchData();
 
  
  }, []);

  const AnimateContaianer = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  const AddTolist = (Text, DAte) => {
    setTodolist([...todolist, { id: index, text: Text, date: DAte }]);
    setIndex(index + 1);
  };
  const DeletIt =async (id) => {
    setTodolist(todolist.filter((item) => item.id != id));
    try{
      await fetch("http://localhost:8000/DeleteTODo/"+id,{
        method:"DELETE"
      })
    }catch(err){
      throw(err)
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-gray-200 w-full sm:p-10 p-5 rounded-xl shadow-xl transition-all">
      <div className=" flex justify-between items-center font-bold text-2xl bg-white p-5 rounded-t-xl shadow-xl">
        <p>To Do List</p>
        <IoIosAddCircleOutline
          className={`${
            show ? "rotate-45" : "rotate-0"
          } size-9 cursor-pointer hover:scale-110 transition-all`}
          onClick={() => setshow(!show)}
        />
      </div>
      {show && (
        <motion.div
          variants={AnimateContaianer}
          initial="hidden"
          animate="visible"
        >
          <AddForm AddTolist={AddTolist} />
        </motion.div>
      )}
      {Loading?<span className="m-2 text-xl animate-pulse">{textLoading}</span>:todolist.map((items) => (
        <ToDoList
          key={items.id}
          id={items.id}
          text={items.text}
          date={items.date}
          DeletIt={DeletIt}
        />
      ))}
    </div>
  );
}
