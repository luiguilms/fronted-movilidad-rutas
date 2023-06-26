import NavBar from "./navbar"
import SideBar from "./sidebar"

function Layout({children}){
    return(
        <>
        <NavBar/>
        <div id="layoutSidenav">
            <SideBar/>
            <div id="layoutSidenav_content">
                <main>
                    {children}
                </main>
                
            </div>
        </div>
        </>
    )
}
export default Layout