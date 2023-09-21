// import all components that go in wrapper, css, error comp
import Race from "../Race/Race";

// Comp function // pass props?
function CharacterWrapper({ endpoints }) {
  return (
    <div>
      {/* <fav button></fav> */}
      {/* //detail components */}
      <Race endpoint={endpoints.races} />
    </div>
  );
}

export default CharacterWrapper;
