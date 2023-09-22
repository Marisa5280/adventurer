function Equipment({ classData }) {
  const startingEquipment = classData["starting_equipment"];
  const startingEquipmentOptions = classData["starting_equipment_options"];

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
      <h3 className="equipment-options-title">Options:</h3>
      <ul className="equipment-options-details">
        {/* {startingEquipmentOptions?.forEach((option, index) => (
          <li key={index}>{`Choose ${option.choose}: ${option.desc}`}</li>
        ))} */}
        {/* console logging but not rendering🤬 */}
        {startingEquipmentOptions?.forEach((option, index) => {
          console.log("options", `Choose ${option.choose}: ${option.desc}`);
          {
            <li key={index}>{`Choose ${option.choose}: ${option.desc}`}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export default Equipment;
