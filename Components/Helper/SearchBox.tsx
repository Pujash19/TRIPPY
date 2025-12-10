import React from "react";
import { FaCalendarWeek, FaMap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

// Common CSS classes
const containerClass = "bg-white rounded-lg pl-9 pr-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]";
const fieldContainerClass = "flex items-center space-x-6";
const iconClass = "w-6 h-6 text-blue-600";
const labelClass = "text-2xl font-medium mb-1";
const inputBaseClass = "outline-none border-none h-6";

const SearchBox = () => {
  const fields = [
    {
      id: "location",
      label: "Location",
      icon: FaMap,
      inputType: "text",
      placeholder: "Where are you going?",
      inputClass: `${inputBaseClass} placeholder:text-gray-800`,
      hasCustomContent: false,
    },
    {
      id: "start-date",
      label: "Start Date",
      icon: FaCalendarWeek,
      inputType: "date",
      inputClass: inputBaseClass,
      hasCustomContent: false,
    },
    {
      id: "end-date",
      label: "End Date",
      icon: FaCalendarWeek,
      inputType: "date",
      inputClass: inputBaseClass,
      hasCustomContent: false,
    },
    {
      id: "guest",
      label: "Guest",
      icon: FaUserGroup,
      inputType: null,
      hasCustomContent: true,
      customContent: "1 Guest 1 Room",
    },
  ];

  return (
    <div className={containerClass}>
      {fields.map((field) => {
        const IconComponent = field.icon;
        return (
          <div key={field.id} className={fieldContainerClass}>
            <IconComponent className={iconClass} />
            <div>
              <p className={labelClass}>{field.label}</p>
              {field.hasCustomContent ? (
                <p className="text-base font-normal">{field.customContent}</p>
              ) : (
                <input
                  type={field.inputType || "text"}
                  placeholder={field.placeholder}
                  className={field.inputClass}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBox;
