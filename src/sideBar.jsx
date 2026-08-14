const SideBar = ({active}) =>{
   return <div className={active?"sidebar-container":"sidebar-container hidden"}>
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