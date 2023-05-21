import axios from "axios";
import { useState, useEffect } from "react";
import Weapon from "./Weapon";
const API = process.env.REACT_APP_API_URL;

function Weapons() {
    const [weapons, setWeapons] = useState([]);
    const [originalWeapons, setOriginalWeapons] = useState([])

    useEffect(() => {
        axios.get(`${API}/weapons`)
            .then((response) => {
                setWeapons(response.data);
                setOriginalWeapons(response.data);
            })
            .catch((e) => console.warn("catch", e));
    }, []);

    const sortByType = (type) => {
        if (type) {
            const filteredWeapons = originalWeapons.filter((weapon) => weapon.type === type);
            setWeapons(filteredWeapons);
        } else {
            setWeapons(originalWeapons);
        }
    };
    

    return (
        <div>
            <section>
                <div className="Sort">
                    <button onClick={() => sortByType('Quality')}>Sort by Quality</button>
                    <button onClick={() => sortByType('Type')}>Sort by Type</button>
                    <button onClick={() => sortByType('Class')}>Sort by Class</button>
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
                        {weapons.map((weapon) => {
                            return <Weapon key={weapon.id} weapon={weapon} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
};

export default Weapons;