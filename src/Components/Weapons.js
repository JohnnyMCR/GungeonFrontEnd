import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const [originalWeapons, setOriginalWeapons] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/weapons`)
      .then((response) => {
        setWeapons(response.data);
        setOriginalWeapons(response.data);
      })
      .catch((e) => console.warn("catch", e));
  }, []);

  const sortByType = (event) => {
    if (event.value) {
      const filteredWeapons = originalWeapons.filter(
        (weapon) => weapon.type === event.value
      );
      setWeapons(filteredWeapons);
    } else {
      setWeapons(originalWeapons);
    }
  };

  return (
    <div>
      <section>
        <div className="Sort">
          <button onClick={() => sortByType("Quality")}>Sort by Quality</button>
          <button onClick={() => sortByType()}>Sort by Type</button>
          <button onClick={() => sortByType("Class")}>Sort by Class</button>
          <button onClick={() => sortByType()}>Show all Weapons</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quote</th>
              <th>Quality</th>
            </tr>
          </thead>
          <tbody>
            {weapons.map((weapon) => (
              <tr key={weapon.id}>
                <td>
                  <img src={weapon.img} alt={weapon.name} />
                </td>
                <td>{weapon.name}</td>
                <td>{weapon.quote}</td>
                <td>{weapon.quality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Weapons;