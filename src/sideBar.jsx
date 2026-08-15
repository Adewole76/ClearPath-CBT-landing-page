const SideBar = ({active}) =>{
   return <div className={active?"sidebar-container active":"sidebar-container"}>
     <ul>
        <li><a href="#home">Home</a></li>
                <li><a href="#Feats">About</a></li>
                <li><a href="#prices">Pricing</a></li>
                <li><a href="#contactMe">Contact</a></li>
     </ul>

     <button className="get-btn">Get Started</button>
   </div>
}
export default SideBar