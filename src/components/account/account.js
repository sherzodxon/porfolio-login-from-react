import PortBody from "../port-body/port-body"
import "./account.scss"
const Account=({useData,className,loader})=>{
    const {
        code,
        status,
        message,
        user
    } = useData
    const {
        name,
        email,
        phone_number,
        created,
        uuid
    } = user?user:useData

    return(
        <section className={className}>
            <div className={loader?"account-wrapper--close":"account-wrapper"}>
             
             <input className='hide' type='checkbox' id='for_menu' />
             <label className="button-label" htmlFor='for_menu'>Menu</label>
            <section className="menu-section">
            <h2 className="menu-title">WELCOME {`${name}`}</h2>
            </section>
            <nav className="menu">
            <ul className="burger-list">
              <li className="burger-item">Home</li>
              <li className="burger-item">About</li>
              <li className="burger-item">Porfolio</li>
              <li className="burger-item last-item">
                  <div className="burger-wrapper">
                      <p className="burger-name">{name}</p>
                      <p className="burger-number"><span className="burger-span">Your-number</span>{phone_number}</p>
                      <a href={`https://${email}`} className="burger-email">{email}</a>
                  </div>
              </li>
            </ul>
           </nav>
           <PortBody/>
   </div>
            <div  className={loader?'gooey':'gooey--close'}>
              <span  className="dot"></span>
              <div className="dots">
               <span className="loader-span"></span>
               <span className="loader-span"></span>
               <span className="loader-span"></span>
               
              </div>
            </div>
          
        </section>
       
    )
}
export default Account;