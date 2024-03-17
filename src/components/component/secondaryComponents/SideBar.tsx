import { Button } from "@/components/ui/button";
import {
  Code,
  CommandIcon,
  Folder,
  HelpCircle,
  PenTool,
  Plus,
  PlusSquare,
  UserPlus,
} from "lucide-react";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import SettingsIcon from "./SettingsIcon";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SideBar = () => {
  return (
    <div className="w-72 bg-white p-4 sticky top-0">
      <div className="p-3 rounded-2xl border border-gray-200 font-semibol ">
      <div className="mb-4">
        <div className="flex items-center justify-between pb-0.5">
          <CommandIcon />
          <div>
            <p className="text-slate-400 text-xs">NIC</p>
            <h2 className="text-lg font-semibold">InnovateHub</h2>
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
        </div>
        <div className="mt-2 space-y-4 pt-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex gap-2">
              <PenTool width={20} height={20} />
              Design team
            </span>
            <span className="text-xs text-center bg-gray-100 text-gray-500 p-0.5 rounded-lg border border-gray-500 font-semibold">

            <Badge variant="secondary">

              <CommandIcon width={12} height={12} />
              +1
            </Badge>

            </span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm font-medium flex gap-2">
              <GrAnnounce width={20} height={20} />
              Marketing Team
            </span>
            <span className="text-xs text-center bg-gray-100 text-gray-500 p-0.5 rounded-lg border border-gray-500 font-semibold">

            <Badge variant="secondary">
              <CommandIcon width={12} height={12} />
              +2
            </Badge>
            </span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm font-medium flex gap-2">
              <Code width={20} height={20} />
              Development Team
            </span>
            <span className="text-xs text-center bg-gray-100 text-gray-500 p-0.5 rounded-lg border border-gray-500 font-semibold">

            <Badge variant="secondary">
              <CommandIcon width={12} height={12} />
              +3
            </Badge>
            </span >

          </div>
          <div className=" border-y-2 border-gray-200">
          <Button className="mt-2" variant="ghost">
           <span className="text-gray-500"><div className="flex">
           <div> <PlusSquare className="text-slate-500 " /></div>
           <div className="pt-0.5 pl-1"> Create a team</div>
           </div>
           
        </span> 
          </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button className="text-slate-500" variant="ghost">
          FOLDERS
        </Button>
        <Plus className=" text-slate-500" width={15} height={15} />
      </div>

      <div className="flex flex-col ">
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="flex gap-1">
            <Folder width={15} height={15} />
            Products
          </Button>
          <span className="text-gray-500"> <FaCaretUp width={15} height={15} /></span>

        </div>

        <Button className="justify-start ml-7    text-left" variant="ghost">
          Roadmap
        </Button>
        <Button className="justify-start ml-7 text-left" variant="ghost">
          Feedback
        </Button>
        <Button className="justify-start ml-7 text-left" variant="ghost">
          Performance
        </Button>
        <Button className="justify-start ml-7 text-left" variant="ghost">
          Team
        </Button>
        <Button className="justify-start ml-7 text-left" variant="ghost">
          Analytics
        </Button>
        <Button className="mt-2" variant="ghost">
          <PlusSquare className="text-slate-500" /> <span className="text-slate-500">Add New Sub</span>
        </Button>
      </div>
      <div className="flex flex-col space-y-1 mt-1">
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="flex gap-1">
            <Folder width={15} height={15} />
            Sales
          </Button>
         <span className="text-gray-500"> <FaCaretDown width={15} height={15} /></span>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="flex gap-1">
            <Folder width={15} height={15} />
            Design
          </Button>
          <span className="text-gray-500"> <FaCaretDown width={15} height={15} /></span>

        </div>
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="flex gap-1">
            <Folder width={15} height={15} />
            Office
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="flex gap-1">
            <Folder width={15} height={15} />
            Legal
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <Button variant="ghost" className="flex gap-1">
          {" "}
          <UserPlus width={15} height={15} />
          Invite teammates
        </Button>
        <div className="flex  items-center justify-between">
          <div>
            <Button className="mt-2 flex gap-1" variant="ghost">
              <HelpCircle width={15} height={15} />
              Help and first steps
            </Button>
          </div>
          <div className="pt-3">
            <p className="text-xs text-center bg-gray-100 text-gray-500 p-1 px-2 rounded-lg border-gray-500 border-solid font-semibold">
              0/6
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 bg-slate-100 p-1 rounded-lg">
          <p className="text-xs text-center">
            <span className="bg-white text-black p-1 px-2 rounded-lg font-semibold">
              7
            </span>
            days left on Trial
          </p>
          <Button className=" bg-black text-white rounded-lg p-1.5 " size="sm">
            Add billing
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SideBar;
