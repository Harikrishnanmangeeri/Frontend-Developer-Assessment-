import { BarChartIcon, BuildingIcon, CodeIcon, Command, CommandIcon, FolderIcon, MapIcon, MegaphoneIcon, PaletteIcon, PieChartIcon, TextIcon, UsersIcon } from 'lucide-react'
import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-100 p-4">
    <div className="flex items-center space-x-2">
      <BuildingIcon className="h-6 w-6" />
      <span className="font-bold">InnovateHub</span>
    </div>
    <nav className="mt-4">
      <ul>
        <li className="flex items-center justify-between py-1">
          <a className="flex items-center space-x-1" href="#">
            <PaletteIcon className="h-4 w-4" />
            <span>Design team</span>
          </a>
          <Badge variant="secondary">1</Badge>
        </li>
        <li className="flex items-center justify-between py-1">
          <a className="flex items-center space-x-1" href="#">
            <MegaphoneIcon className="h-4 w-4" />
            <span>Marketing Team</span>
          </a>
          <Badge variant="secondary">2</Badge>
        </li>
        <li className="flex items-center justify-between py-1">
          <a className="flex items-center space-x-1" href="#">
            <CodeIcon className="h-4 w-4" />
            <span>Development Team</span>
          </a>
          <Badge variant="secondary">3</Badge>
        </li>
        <li className="py-1">
          <Button variant="ghost">Create a team</Button>
        </li>
      </ul>
      <div className="mt-4">
        <span className="font-bold">FOLDERS</span>
        <ul className="mt-2">
          <li className="py-1">
            <a className="flex items-center space-x-1" href="#">
              <FolderIcon className="h-4 w-4" />
              <span>Products</span>
            </a>
          </li>
          <li className="py-1">
            <a className="flex items-center space-x-1" href="#">
              <MapIcon className="h-4 w-4" />
              <span>Roadmap</span>
            </a>
          </li>
          <li className="py-1">
            <a className="flex items-center space-x-1" href="#">
              <TextIcon className="h-4 w-4" />
              <span>Feedback</span>
            </a>
          </li>
          <li className="py-1">
            <a className="flex items-center space-x-1" href="#">
              <BarChartIcon className="h-4 w-4" />
              <span>Performance</span>
            </a>
          </li>
          <li className="py-1">
            <a className="flex items-center space-x-1" href="#">
              <UsersIcon className="h-4 w-4" />
              <span>Team</span>
            </a>
          </li>
          <li className="py-1">
            <a className="flex items-center space-x-1" href="#">
              <PieChartIcon className="h-4 w-4" />
              <span>Analytics</span>
            </a>
          </li>
          <li className="py-1">
            <Button variant="ghost">Add new sub</Button>
          </li>
        </ul>
      </div>
    </nav>
    <div className="mt-4">
      <Button variant="ghost">Invite teammates</Button>
      <Button variant="ghost">Help and first steps</Button>
      <Button variant="outline">Add billing</Button>
    </div>
  </aside>
  )
}

export default Sidebar

