import React, { useState, useRef, useEffect } from "react";

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
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-green-500 dark:text-slate-200 dark:hover:text-green-400 transition-colors duration-200 focus:outline-none cursor-pointer"
          onClick={toggleDropdown}
          >
          <div className="flex items-center justify-start">{renderItem(selectedItem)}</div>
          <svg
            className="h-4 w-4 text-slate-400 dark:text-slate-400 transition-transform duration-200"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
          className="absolute right-0 z-50 mt-3 w-32 origin-top-right rounded-2xl bg-white/80 dark:bg-slate-950/85 backdrop-blur-md shadow-xl border border-white/30 dark:border-slate-800/50 p-1.5 focus:outline-none animate-in fade-in slide-in-from-top-1 duration-200"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="flex flex-col gap-0.5" role="none">
            {items.map((item) => (
              <button
                key={item.value}
                type="button"
                className="flex w-full items-center gap-2 px-3 py-2 rounded-xl text-left text-sm font-medium text-slate-700 hover:text-green-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-green-400 dark:hover:bg-slate-900 transition-all duration-150 cursor-pointer"
                role="menuitem"
                onClick={() => handleItemClick(item)}
              >
                {renderItem(item)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

