
import React, { useEffect, useState } from "react";
import "../Component/styles.css";
import { ReactSVG } from "react-svg";


function Todo() {

const [input,setInput] = useState("")
const [todo,setTodo] = useState([])
const [editIndex,setEditIndex] = useState(null)

function handleChange(event) {
  setInput(event.target.value)
}

function handleAdd() {
  if (editIndex!==null) {
    const newTodo = [...todo]
    newTodo[editIndex] =input
    setTodo(newTodo)
    setEditIndex(null)
  }else{
    setTodo([...todo,input])
  }
  setInput("")
}

function handleClear(index) {
  setTodo((prevData)=>{
    return prevData.filter((_,id)=>{
     return  index!==id
    })
  })
}
function handleEdit(index) {
  setInput(todo[index])
  setEditIndex(index)
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do</h1>
      </div>
      <input type="text" value={input} onChange={handleChange}  />
      <button  className="add" onClick={handleAdd}  >
        <span>
         
          {editIndex !== null ? (
           <ReactSVG src={require("../assets/svg/Plus.svg").default}alt="" />
          ) : (
         <ReactSVG src={require("../assets/svg/edit.svg").default}alt="" />
            // <ReactSVG src={require("../assets/svg/edit.svg")} />
          )}
        </span>
      </button>

      <ul>
     {todo.map((item,index)=>{
      return(
        <div className="list" key={index}>
        <li>{item}</li>
        <button className="delete-button" onClick={()=>handleClear(index)}>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 7H20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button className="edit-button" onClick={()=>handleEdit(index)}>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H9M15 5H17C18.1046 5 19 5.89543 19 7V9"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M14.902 20.3343L12.7153 20.7716L13.1526 18.585C13.1914 18.3914 13.2865 18.2136 13.4261 18.074L17.5 14L19.5 12L21.4869 13.9869L19.4869 15.9869L15.413 20.0608C15.2734 20.2004 15.0956 20.2956 14.902 20.3343Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
         
        </button>
      </div>
      )
     })}
      </ul>
    </div>
  );
}

export default Todo;
