
function Class({ classData }) {

  //class data props? : equipment
  // .starting_equipment
  // .starting_equipment_options.(forEach?)/(math.random),
  // for each option: Math.floor(Math.random() * option.options.length)
  //proficiencies
  // proficiencies choices + proficiencies
  return (
    <div className="class-container">
      <h2 className="class-title">Class: {classData.name}</h2>
      <ul className="class-details"></ul>
    </div>
  );
}

export default Class;
