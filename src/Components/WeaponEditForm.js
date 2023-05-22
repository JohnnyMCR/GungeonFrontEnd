import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function WeaponEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

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

    const updateWeapon = (updatedWeapon) => {
        axios
            .put(`${API}/weapons/${id}`, updatedWeapon)
            .then(
                () => {
                    navigate(`/weapons/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };


    // const handleTextChange = (event) => {
    //     setWeapon({ ...weapon, [event.target.id]: event.target.value });
    // };
    const handleTextChange = (event) => {
        const { id, value } = event.target;
        setWeapon((prevWeapon) => ({
          ...prevWeapon,
          [id]: value,
        }));
      };
      
    useEffect(() => {
        axios.get(`${API}/weapons/${id}`).then(
            (response) => setWeapon(response.data),
            (error) => navigate(`/not-found`)
        );
    }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateWeapon(weapon, id);
    };

    return (
        <div className="Edit">
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
                    required
                />
                <br />

                <label htmlFor="quote">Quote:</label>
                <input
                    id="quote"
                    type="text"
                    value={weapon.quote}
                    onChange={handleTextChange}
                    placeholder="Quote"
                    required
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
            <Link to={`/weapons/${id}`}>
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default WeaponEditForm;