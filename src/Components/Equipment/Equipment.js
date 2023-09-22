
function Equipment({ classData }) {
  const startingEquipment = classData["starting_equipment"];
  const startingEquipmentOptions = classData["starting_equipment_options"]
  startingEquipmentOptions?.forEach((option) => {
    // const randomIndex = Math.floor(Math.random() * option.from.options.length);
    console.log('options', option);
    // {<li
    //   key={equip.equipment.index}
    // >{`${equip.equipment.name}, Quantity: ${equip.quantity}`}</li>}
  })
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
