// src/utils.js
export const DROPDOWN_ITEM_CLASS =
  "text-gray-700 block px-4 py-2 text-sm items-center hover:text-green-400 transition duration-400 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-green-400";
export const DROPDOWN_BUTTON_CLASS =
  "inline-flex w-full justify-center gap-x-0 lg:gap-x-1.5 text-sm font-medium text-gray-900 hover:text-green-400 dark:hover:text-green-400 dark:text-slate-100 px-0 lg:px-3 py-2 rounded-md transition-colors duration-300 mr-0 md:mr-2 border-none focus:ring-0 focus:outline-none dark:text-gray-100";
export const NAVBAR_MENU_ITEM_CLASS =
  "text-sm font-medium text-gray-900 hover:text-green-400 px-0 md:px-2 py-2 rounded-md transition-colors duration-300 dark:text-gray-100 cursor-pointer";

export const LANGUAGES = [ 
  { value: "en", label: "EN" },
  { value: "id", label: "ID" }
];

export const THEMES = [
  { value: "system", label: "System", icon: "💻" },
  { value: "dark", label: "Dark", icon: "" },
  { value: "light", label: "Light", icon: "☀️" },
];