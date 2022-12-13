let Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo">Chatter Box</span>
            <div className="user">
                <img src="https://as2.ftcdn.net/v2/jpg/01/51/99/39/1000_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg" alt="" />
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;