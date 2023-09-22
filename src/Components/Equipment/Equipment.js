// import { useState } from "react";

function Equipment({ classData }) {
  const startingEquipment = classData["starting_equipment"];

  //class data props? : equipment
  // .starting_equipment
  // .starting_equipment_options.(forEach?)/(math.random),
  // for each option: Math.floor(Math.random() * option.options.length)
  // console.log('StateEq', equipmentData)
  return (
    <div className="equipment-container">
      <h2 className="equipment-title">Equipment:</h2>
      <ul className="equipment-details">
        {startingEquipment?.map((equip) => (
          <li
            key={equip.equipment.index}
          >{`${equip.equipment.name}, Quantity: ${equip.quantity}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;
