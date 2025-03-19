"use client";

import React from "react";

const CreateTask = () => {
  return (
    <>
      <section className="w-screen absolute top-0 left-0 h-screen backdrop-blur-md z-50 flex justify-center items-center">
        <form
          className="w-[90%] md:w-[70%] h-[80%] bg-black/50 overflow-hidden border p-6 rounded-lg flex flex-col justify-center items-center gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <section className="w-full h-1/6 flex flex-col justify-around items-center ">
            <label htmlFor="taskTitle">Task Title</label>
            <input
              type="text"
              placeholder="Task Title"
              name="taskTitle"
              className="w-full h-full p-4 border rounded-lg focus:outline-none"
            />
          </section>
          <section className="w-full h-2/3 flex flex-col justify-around items-center ">
            <label htmlFor="taskDescription">Task Description</label>
            <textarea
              name="taskDescription"
              placeholder="Task Description"
              className="w-full h-full p-4 border rounded-lg focus:outline-none resize-none"
            />
          </section>
          <button className="w-full p-4 bg-blue-500 hover:bg-blue-900 transition-all text-white rounded-lg cursor-pointer">
            Add Task
          </button>
        </form>
      </section>
    </>
  );
};

export default CreateTask;
