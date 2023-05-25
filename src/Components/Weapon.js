import { Link } from "react-router-dom";

export default function Weapon({ weapon }) {

  const isPowerful = (weapon) => {
    if(weapon.dps >= 35.0 && weapon.class >= "C") {
      return true
    } else {
      return false
    }
  };

return (
    <tr>
      <td>
        {isPowerful(weapon) ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
        
      </td>
      <td>
        <Link to={`/weapons/${weapon.id}`}><p>{weapon.name}</p></Link>
      </td>
      <td>
          {weapon.type}
      </td>
      <td>{weapon.dps}</td>
    </tr>
  );
}