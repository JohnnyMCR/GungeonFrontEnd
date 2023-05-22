export default function NavBar() {
    return (
        <nav>
            <div className="logo">
                <a href="/weapons">Welcome to the Breach</a>
            </div>
            <div className="button-container">
                <a href="/weapons/new" className="Add">Add A Weapon/Item</a>
            </div>
        </nav>
    )
};