import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function WeaponDetails() {
    const [singleWeapon, setSingleWeapon] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/weapons/${id}`)
            .then((response) => {
                setSingleWeapon(response.data)
            }).catch((e) => {
                console.warn("catch", e)
            })
    }, [id]);

    const deleteWeapon = () => {
        axios.delete(`${API}/weapons/${id}`)
            .then(() => {
                navigate(`/weapons`);
            }, (error) => console.error(error))
            .catch((c) => console.warn("catch", c))
    };

    const handleDelete = () => {
        setShowConfirmation(true)
    };

    return (
        <article>
            <h4>Weapon Name: {singleWeapon.name}</h4>
            <h4>Weapon Notes: {singleWeapon.notes}</h4>
            <h4>Quote: {singleWeapon.quote}</h4>
            <h4>Quality: {singleWeapon.quality}</h4>
            <h4>Type: {singleWeapon.type}</h4>
            <h4>dps: {singleWeapon.dps}</h4>
            <h4>Class: {singleWeapon.class}</h4>
            <img src={singleWeapon.img} alt={singleWeapon.name} />

            <br />

            <div className="EditButton">
                <Link to="/weapons">
                    <div>
                        <button>Back</button>
                    </div>
                </Link>

                <br />
                <Link to={`/weapons/${id}/edit`}>
                    <div>
                        <button>Edit</button>
                    </div>
                </Link>

                <br />
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>

                {showConfirmation && (
                    <div>
                        <p>Are you sure you want to delete this resource?</p>
                        <button onClick={() => {
                            deleteWeapon();
                            setShowConfirmation(false);
                        }}>Yes</button>
                        <button onClick={() => setShowConfirmation(false)}>No</button>
                    </div>
                )}
            </div>
        </article>
    )
};