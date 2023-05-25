import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const [originalWeapons, setOriginalWeapons] = useState([]);
  const [selectedType, setSelectedType] = useState("ShowAll");
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    const fetchWeaponsData = async () => {
      try {
        const response = await axios.get(`${API}/weapons`);
        const { data } = response;
        setWeapons(data);
        setOriginalWeapons(data);

        const uniqueTypes = [...new Set(data.map((weapon) => weapon.type))];
        setDropdownOptions(uniqueTypes);
      } catch (error) {
        console.warn("Error", error);
      }
    };
    fetchWeaponsData();
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    if (selectedType !== "ShowAll") {
      const filteredWeapons = originalWeapons.filter(
        (weapon) => weapon.type === selectedType
      );
      setWeapons(filteredWeapons);
    } else {
      setWeapons(originalWeapons);
    }
  }, [selectedType, originalWeapons]);

  return (
    <div className="weapons-container">
      <div className="sort-dropdown">
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="ShowAll">Show all Weapons</option>
          {dropdownOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="weapons-list">
        <div className="table-container">
          <table className="center-table">
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
                  <td>
                    <Link to={`/weapons/${weapon.id}`}>{weapon.name}</Link>
                  </td>
                  <td>{weapon.quote}</td>
                  <td>{weapon.quality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}