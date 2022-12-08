import React from 'react';
import { FaFileDownload, } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

const SearchHeader = () => {
    return (
        <div className="mt-10 flex justify-between">
            <div class="flex text-gray-600">
                <input
                    class="border-2 border-gray-300 bg-white h-10 px-5 pr-4 rounded-l-lg text-sm focus:outline-none"
                    type="search"
                    name="search order by name"
                    placeholder="Search"
                />
                <button
                    type="submit"
                    class=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                >
                    <FontAwesomeIcon icon={faSearch} className="text-white" />
                </button>
            </div>
            <div>
                <Menu>
                    <MenuHandler>
                        <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none flex items-center">Export<FaFileDownload className="text-2xl" /></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>
                            Export as CSV
                        </MenuItem>
                        <MenuItem >
                            Export as Excel
                        </MenuItem>
                        <MenuItem>
                            Export as PDF
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}

export default SearchHeader