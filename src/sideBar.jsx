const SideBar = ({active}) =>{
   return <div className={active?"sidebar-container active":"sidebar-container"}>
     <ul>
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact</li>
     </ul>

     <button className="get-btn">Get Started</button>
   </div>
}
export default SideBar