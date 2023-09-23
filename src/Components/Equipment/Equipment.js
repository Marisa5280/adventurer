import PropTypes from "prop-types";

function Equipment({ classData }) {
  const startingEquipment = classData["starting_equipment"];
  const startingEquipmentOptions = classData["starting_equipment_options"];

  return (
    <div className="equipment-container details-card">
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
        {startingEquipmentOptions?.map((option, index) => (
          <li key={index}>{`Choose ${option.choose}: ${option.desc}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;

Equipment.propTypes = {
  starting_equipment: PropTypes.arrayOf(PropTypes.object),
  starting_equipment_options: PropTypes.arrayOf(PropTypes.object),
};
