import React, { useState } from "react";
import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";

function Accordion({ items, onDistribute }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (index) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === index ? null : index
    );
  };

  return (
    <div className="relative bg-white shadow-md rounded-md p-4 mb-4 md:flex md:flex-wrap">
      {items.length === 0 ? (
        <p className="text-gray-500">No active listings.</p>
      ) : (
        items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            expanded={expandedItem === index}
            onToggle={handleToggle}
            onDistribute={onDistribute}
          />
        ))
      )}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
  onDistribute: PropTypes.func.isRequired,
};

export default Accordion;
