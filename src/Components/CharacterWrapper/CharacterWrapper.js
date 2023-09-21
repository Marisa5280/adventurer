// import all components that go in wrapper, css, error comp
import Race from "../Race/Race";
import Class from "../Class/Class";

// Comp function // pass props?
function CharacterWrapper({ endpoints }) {
  return (
    <div>
      {/* <fav button></fav> */}
      {/* //detail components */}
      <Race endpoint={endpoints.races} />
      <Class endpoint={endpoints.classes} />
    </div>
  );
}

export default CharacterWrapper;
