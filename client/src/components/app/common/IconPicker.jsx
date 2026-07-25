import { useMemo, useState } from "react";

import * as Icons from "lucide-react";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "cmdk";

import { Check, ChevronDown } from "lucide-react";

const ICONS = [
    "Sparkles",
    "Rocket",
    "Zap",
    "Shield",
    "Brain",
    "Bot",
    "Globe",
    "Monitor",
    "Play",
    "Image",
    "Upload",
    "Users",
    "Database",
    "FileText",
    "Code2",
    "Settings",
    "Search",
    "Layers",
    "LayoutDashboard",
    "Target",
    "Camera",
    "Video",
    "Mail",
    "Bell",
    "Lock",
    "Heart",
    "Star",
    "Folder",
    "Calendar",
    "BookOpen",
];

export default function IconPicker({
    label = "Icon",
    value,
    onChange,
}) {

    const [open, setOpen] = useState(false);

    const CurrentIcon =
        Icons[value] || Icons.Sparkles;

    const filteredIcons = useMemo(() => {

        return ICONS.filter(
            (name) => Icons[name]
        );

    }, []);

    return (

        <div className="space-y-2">
        
            <label className="text-sm font-medium text-zinc-300">
                {label}
            </label>
        
            <div className="relative">
        
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex w-full items-center justify-between radius-theme-sm border border-zinc-700 bg-zinc-800 px-4 py-3 text-left text-white transition hover:border-violet-500"
                >
        
                    <div className="flex items-center gap-3">
        
                        <CurrentIcon size={18} />
        
                        <span>{value}</span>
        
                    </div>
        
                    <ChevronDown
                        size={18}
                        className={`transition ${
                            open ? "rotate-180" : ""
                        }`}
                    />
        
                </button>
        
                {open && (
        
                    <div className="absolute z-50 mt-2 w-full overflow-hidden radius-theme-sm border border-zinc-700 bg-zinc-900 shadow-2xl">
        
                        <Command>
        
                            <CommandInput
                                placeholder="Search icon..."
                                className="border-b border-zinc-800 px-4 py-3 outline-none"
                            />
        
                            <CommandList className="max-h-72 overflow-y-auto">
        
                                <CommandEmpty>
                                    No icon found.
                                </CommandEmpty>
        
                                <CommandGroup>
        
                                    {filteredIcons.map((name) => {
        
                                        const Icon =
                                            Icons[name];
        
                                        return (
        
                                            <CommandItem
                                                key={name}
                                                value={name}
                                                onSelect={() => {
        
                                                    onChange(name);
        
                                                    setOpen(false);
        
                                                }}
                                                className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-zinc-800"
                                            >
        
                                                <div className="flex items-center gap-3">
        
                                                    <Icon size={18} />
        
                                                    {name}
        
                                                </div>
        
                                                {value === name && (
        
                                                    <Check size={16} />
        
                                                )}
        
                                            </CommandItem>
        
                                        );
        
                                    })}
        
                                </CommandGroup>
        
                            </CommandList>
        
                        </Command>
        
                    </div>
        
                )}
        
            </div>
        
        </div>
        
        );

}