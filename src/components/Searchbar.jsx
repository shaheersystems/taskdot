import React from "react";
import avatar from "./avatar.jpg";
function Searchbar() {
  return (
    <div className="search-bar h-24 flex px-4 justify-between items-center">
      <div className="flex items-center flex-1 bg-black space-x-2 px-2 bg-slate-100 py-1 rounded-xl">
        <label htmlFor="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          autoComplete="off"
          className="bg-slate-100 py-1 outline-none w-full rounded-xl"
        />
      </div>
      <div className="flex-1 flex justify-end items-center space-x-5">
        <h3 className="text-lg font-black hidden sm:block">Shaheer.</h3>
        <img
          className="h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-zinc-800"
          src={avatar}
          alt="shaheer-avatar"
        />
        <div className="p-2 hover:bg-zinc-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
