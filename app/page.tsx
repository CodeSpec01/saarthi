"use client";

import CreateTask from "@/components/CreateTask";
import { useState } from "react";

const data = {
  todo: [
    { title: "Todo1", description: "Description1" },
    { title: "Todo2", description: "Description2" },
  ],
  inProgress: [
    { title: "Todo1", description: "Description1" },
    { title: "Todo2", description: "Description2" },
  ],
  completed: [
    { title: "Todo1", description: "Description1" },
    { title: "Todo2", description: "Description2" },
  ],
};
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center gap-4 w-[95%] m-auto">
      <h1 className="text-center text-[5vw] ">Task Manager</h1>
      {isModalOpen ? (
        <CreateTask />
      ) : (
        <button onClick={() => setIsModalOpen(!isModalOpen)} className="text-white">Open Modal</button>
      )}
      {/* Todo Section */}
      <section className="flex flex-col flex-wrap justify-center gap-4 w-full">
        <h3 className="text-[3vw] font-bold">TODO : </h3>
        <section className="flex flex-wrap justify-center gap-4">
          {data.todo.map((key, i) => (
            <div
              key={`${key.title}${i}`}
              className="w-[18vw] h-[18vw] border rounded-lg shadow-md p-4"
            >
              <h4 className="text-center text-[1.5vw] font-bold">
                {key.title}
              </h4>
              <p className="text-[1vw]">{key.description}</p>
            </div>
          ))}
        </section>
      </section>

      {/* In progress Section */}
      <section className="flex flex-col flex-wrap justify-center gap-4 w-full">
        <h3 className="text-[3vw] font-bold">In Progress : </h3>
        <section className="flex flex-wrap justify-center gap-4">
          {data.inProgress ? (
            data.inProgress.map((key, i) => (
              <div
                key={`${key.title}${i}`}
                className="w-[18vw] h-[18vw] border rounded-lg shadow-md p-4"
              >
                <h4 className="text-[1.5vw] font-bold">{key.title}</h4>
                <p className="text-[1vw]">{key.description}</p>
              </div>
            ))
          ) : (
            <p>No Task in Progress</p>
          )}
        </section>
      </section>
      {/* Completed Section */}
      <section className="flex flex-col flex-wrap justify-center gap-4 w-full">
        <h3 className="text-[3vw] font-bold">Completed : </h3>
        <section className="flex flex-wrap justify-center gap-4">
          {data?.completed.map((key, i) => (
            <div
              key={`${key.title}${i}`}
              className="w-[18vw] h-[18vw] border rounded-lg shadow-md p-4"
            >
              <h4 className="text-center text-[1.5vw] font-bold">
                {key.title}
              </h4>
              <p className="text-[1vw]">{key.description}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
