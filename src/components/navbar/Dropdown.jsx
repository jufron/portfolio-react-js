import React, { useState, useRef, useEffect } from "react";
import { DROPDOWN_BUTTON_CLASS, DROPDOWN_ITEM_CLASS } from "../../utils";

function Dropdown({ items, selectedItem, onItemSelected, renderItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    onItemSelected(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button 
          type="button" 
          className={DROPDOWN_BUTTON_CLASS} 
          onClick={toggleDropdown}
          >
          <div className="flex items-center justify-start w-full">{renderItem(selectedItem)}</div>
          <svg
            className="-mr-1 h-5 w-5 text-gray-400 dark:text-gray-100"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900 dark:text-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {items.map((item) => (
              <a
                key={item.value}
                href="#"
                className={DROPDOWN_ITEM_CLASS}
                role="menuitem"
                tabIndex="-1"
                onClick={() => handleItemClick(item)}
              >
                {renderItem(item)}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
