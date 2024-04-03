'use client'

import { Search as SearchIcon } from "lucide-react"
import { Input } from "./ui/input"

const Search = () => {
  return (
    <div className="relative sm:block hidden">
        <SearchIcon className="absolute h-4 w-4 top-3 left-4"/>
        <Input placeholder="Search" className="pl-10"/>
    </div>
  )
}

export default Search