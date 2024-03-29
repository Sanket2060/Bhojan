//directly from volunteer
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import AccordionItem from "./AccordionItem";

// function Accordion({ items, onDistribute }) {
//   const [expandedItem, setExpandedItem] = useState(null);

//   const handleToggle = (index) => {
//     setExpandedItem((prevExpandedItem) =>
//       prevExpandedItem === index ? null : index
//     );
//   };
//   useEffect(() => {
//     console.log("Accordion items to be displayed are:", items);
//   }, [items]);

//   // const [searchLocationTerm, setSearchLocationTerm] = useState("");
//   // const visibleItems = [];
//   // const filteredItems = accordionItems.filter((item) => {
//   //   const itemLocation = item.address || (item.order && item.order.address);

//   //   if (!itemLocation) {
//   //     console.error("Invalid item location:", item);
//   //     return false;
//   //   }

//   //   return itemLocation
//   //     .toLowerCase()
//   //     .includes(searchLocationTerm.toLowerCase());
//   // });


//   return (
//     <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 col-span-2 lg:col-span-1">
//       {items.length === 0 ? (
//         <p className="text-gray-500 dark:text-grey-300 ">No active listings.</p>
//       ) : (
//         items.map((item, index) => (
          
//           <div>
          
//             <AccordionItem
//               key={index}
//               item={item}
//               index={index}
//               expanded={expandedItem === index}
//               onToggle={handleToggle}
//               onDistribute={onDistribute}
//               ariaControls={`accordion-item-${index}`}
//               ariaExpanded={expandedItem === index}
//             />
//           </div>
//         ))
//       )}
      
//     </div>
//   );
// }

// Accordion.propTypes = {
//   items: PropTypes.array.isRequired,
//   onDistribute: PropTypes.func.isRequired,
// };

// export default Accordion;
