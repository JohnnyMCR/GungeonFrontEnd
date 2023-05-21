import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/weapons">Welcome to the Breach</Link>
            </h1>
            <button>
                <Link to="/weapons/new">Add A Weapon/Item</Link>
            </button>
        </nav>
    )
};