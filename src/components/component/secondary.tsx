import { Button } from "@/components/ui/button";

import { Archive, Trash2, X } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";

import FilterIcon from "./secondaryComponents/FilterIcon";
import ListOrderedIcon from "./secondaryComponents/ListOrderedIcon";
import SideBar from "./secondaryComponents/SideBar";
import MainTable from "./secondaryComponents/MainTable";
import NavBar from "./secondaryComponents/NavBar";

export function Secondary() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <SideBar />

        <div className="flex-1 p-4">
          <NavBar />
          <div className="bg-white  shadow rounded-lg p-4">
            <div className="flex justify-between">
              <div className="flex space-x-4 mb-4">
                <Button variant="outline" className="rounded-xl">
                  All brands
                </Button>
                <Button variant="outline" className="rounded-xl">
                  Desk
                </Button>
                <Button variant="outline" className="rounded-xl">
                  Tags
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <ListOrderedIcon className="text-gray-400" />
                  Sort
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <FilterIcon className="text-gray-400" />
                  Filter
                </Button>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline">Meeting</Button>
                <Button variant="outline">Import / Export</Button>
              </div>
            </div>
            <MainTable />
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center border-b border-gray-300 rounded-lg p-4">
              <Button>
                <span className="bg-black text-white p-1 px-2 rounded-lg mr-1  font-semibold">
                  3
                </span>{" "}
                selected
              </Button>
              <Button variant="outline" className="ml-2 p-1 font-semibold ">
                <span className="pr-1.5">
                  <Archive />
                </span>
                Archive
              </Button>
              <Button
                variant="outline"
                className="ml-2 text-red-800 font-semibold"
              >
                <span className="pr-1.5">
                  <Trash2 />{" "}
                </span>
                Delete
              </Button>
              <Button variant="outline" className="ml-2 p-1 font-semibold">
                More
                <span className="text-gray-500 pr-1.5 pl-1.5 pb-0.5 ">
                  <FaCaretDown />
                </span>
              </Button>
              <Button className="ml-2 p-1 font-semibold text-gray-400">
                <X />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
