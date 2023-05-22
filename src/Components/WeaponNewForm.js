import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function WeaponNewForm() {
    let navigate = useNavigate();

    const addWeapon = (newWeapon) => {
        axios
            .post(`${API}/weapons`, newWeapon)
            .then(
                () => {
                    navigate(`/weapons`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };


    const [weapon, setWeapon] = useState({
        name: "",
        notes: "",
        quote: "",
        quality: "",
        type: "",
        DPS: 0,
        class: "",
        img: ""
    });

    const handleTextChange = (event) => {
        setWeapon({ ...weapon, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addWeapon(weapon);
    };

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={weapon.name}
                    onChange={handleTextChange}
                    placeholder="Name of Weapon"
                    required
                />
                <br />

                <label htmlFor="notes">Notes:</label>
                <input
                    id="notes"
                    type="text"
                    value={weapon.notes}
                    onChange={handleTextChange}
                    placeholder="Notes"
                />
                <br />

                <label htmlFor="quote">Quote:</label>
                <input
                    id="quote"
                    type="text"
                    value={weapon.quote}
                    onChange={handleTextChange}
                    placeholder="Quote"
                />
                <br />

                <label htmlFor="quality">Quality:</label>
                <select id="quality" value={weapon.quality} onChange={handleTextChange}>
                    <option value="">Select a Quality</option>
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <br />

                <label htmlFor="type">Type:</label>
                <select id="type" value={weapon.type} onChange={handleTextChange}>
                    <option value="">Select a Weapon Type</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Beam">Beam</option>
                    <option value="Burst">Burst</option>
                    <option value="Charged">Charged</option>
                    <option value="Semiautomatic">Semiautomatic</option>
                    <option value="Varies">Varies</option>
                </select>

                <label htmlFor="dps">DPS:</label>
                <input
                    id="dps"
                    type="number"
                    value={weapon.dps}
                    onChange={handleTextChange}
                    placeholder="DPS"
                    required
                />
                <br />

                <label htmlFor="class">Class:</label>
                <select id="class" value={weapon.class} onChange={handleTextChange}>
                    <option value="">Select a Class</option>
                    <option value="None">NONE</option>
                    <option value="Pistol">PISTOL</option>
                    <option value="Shotgun">SHOTGUN</option>
                    <option value="FullAuto">FULLAUTO</option>
                    <option value="Rifle">RIFLE</option>
                    <option value="Beam">BEAM</option>
                    <option value="Poison">POISON</option>
                    <option value="Fire">FIRE</option>
                    <option value="Ice">ICE</option>
                    <option value="Charm">CHARM</option>
                    <option value="Explosive">EXPLOSIVE</option>
                    <option value="Silly">SILLY</option>
                    <option value="Charge">CHARGE</option>
                </select>

                <br />
                <br />

                <label htmlFor="img">Image:</label>
                <input
                    id="img"
                    type="text"
                    value={weapon.img}
                    onChange={handleTextChange}
                    placeholder="Image of Weapon"
                />

                <br />
                <input type="submit" />
            </form>
        </div>
    )
};

export default WeaponNewForm;

