import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

let Sidebar = () => {
    return(
        <div className="sidebar">
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar;