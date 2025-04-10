import React, { useState } from "react";

function ListForm() {
  const [userData, setUserData] = useState([
    { firstName: "Amaan", lastName: "Ali" },
    { firstName: "Sumbul", lastName: "Fatima" },
  ]);
  const [inputs, setInput] = useState({ firstName: "", lastName: "" });
  const [selectedIdx, setSelectedIdx] = useState(null);
//   console.log(inputs);
  return (
    <div className="flex flex-col justify-center h-screen gap-2 items-center ">
      <div className="flex  flex-col justify-start items-start border-2 border-slate-700 p-8 rounded-2xl bg-slate-50 gap-4 ">
        {/* Search Input */}
        <div className="w-full">
          <input
            className="border-1 rounded-sm px-2 bg-white w-full "
            type="text"
            name="search"
            placeholder="Search Here..."
          />
        </div>
        {/* Listing and Input */}
        <div className="flex gap-2 ">
          {/* For Listing */}
          <div className="border-2 py-2 h-[10em] w-[15em]">
            {/* Here will be all list */}
            {userData?.map((item) => {
              return (
                <div>
                  <p className="px-2 hover:bg-slate-200">{`${item.firstName} ${item.lastName}`}</p>
                </div>
              );
            })}
          </div>
          {/* Input form */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col ">
              <label>First Name</label>
              <input
                onChange={(e) =>
                  setInput({ ...inputs, [e.target.name]: e.target.value })
                }
                name="firstName"
                className="border-1  px-2 min-w-[20px] "
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col ">
              <label>Last Name</label>
              <input
                onChange={(e) =>
                  setInput({ ...inputs, [e.target.name]: e.target.value })
                }
                name="lastName"
                className="border-1  px-2 min-w-[20px] "
                placeholder="LastName"
              />
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex gap-2 w-full ">
          <button className="border-2 border-stone-700 bg-slate-300 hover:bg-slate-100 cursor-pointer px-2 rounded-sm px-4">
            Create
          </button>
          <button className="border-2 border-stone-700 bg-slate-300 hover:bg-slate-100 cursor-pointer px-2 rounded-sm px-4">
            Update
          </button>
          <button className="border-2 border-stone-700 bg-slate-300 hover:bg-slate-100 cursor-pointer px-2 rounded-sm px-4">
            Delete
          </button>
          <button className="border-2 border-stone-700 bg-slate-300 hover:bg-slate-100 cursor-pointer px-2 rounded-sm px-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListForm;
