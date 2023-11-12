import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";
import { SidebarNavItem } from "@/types";
import { Link } from "react-router-dom";

interface SidebarProps {
    items: SidebarNavItem[];
}

export const Sidebar = ({ items }: SidebarProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-40" : "w-60 "
                    } flex flex-col h-screen p-3 bg-black shadow duration-300`}
            >
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">MFLIX</h2>
                        <button onClick={() => setOpen(!open)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
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
                            </button>
                        </span>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {items.map((item) => {
                                return (
                                    <li className="rounded-sm">
                                        <Link
                                            to={item.href}
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            {item.icon}
                                            <span className="text-gray-100">{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
