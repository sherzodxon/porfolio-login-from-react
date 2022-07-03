import './port-body.scss'
const PortBody=()=>{
    return(
<section className='port-body'>
      <div className="container" >
        <div className="text-center">
          <h2 className="about-title">ABOUT <span className="about-span">ME</span></h2>
          <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam nihil voluptas iure obcaecati nobis nam placeat soluta numquam accusantium, officiis omnis quibusdam voluptate, tempore itaque praesentium maiores corporis earum odio ipsa dicta. Ab inventore debitis sed sit ullam quaerat.</p>
        </div>
      </div>

      <div className="container">
          <h2 className="about-title text-center">MY PROJECTS</h2>
        <div className="projects-wrapper wrapper-right">          
            <img className="project-img img-one" ></img>        
          <div className="project-text-wrapper">      
              <h3 className="project-title">Project One</h3>
              <p className="project-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. </p>
             <a className="body-button-see-live" target="_blank" href="">See
                  Live</a>
             <a className="body-button" target="_blank" href="https://github.com/sherzodxon">See Code</a>
          </div>
        </div>
        <div  className="projects-wrapper wrapper-left text-wrapper-two">
            <div className="project-text-wrapper ">
              <h3 className="project-title">Project Two</h3>
              <p className="project-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. </p>
              <a className="body-button-see-live" target="_blank" href="">See
                  Live</a>
              <a className="body-button" target="_blank" href="https://github.com/sherzodxon">See Code</a>
            </div>
            <div className="project-img img-two"></div>
        </div>
        <div className="projects-wrapper wrapper-right">
            <div className="project-img img-three"></div>     
          <div className="project-text-wrapper">
              <h3 className="project-title">Project Three</h3>
              <p className="project-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. </p>
              <a  className="body-button-see-live" target="_blank" href="https://github.com/sherzodxon">See
                  Live</a> 
              <a className="body-button" target="_blank" href="">See Code</a>
          </div>
        </div>
      </div>
    <section className="stars">
      <h3 className="stars-title">Rate the <span className="about-span">Portfolio</span></h3>
      <div className="ratingControl">
  <input id="score100" className="ratingControl__radio" type="radio" name="rating" value="100" /> 
  <label htmlFor="score100" className="ratingControl__star" title="Five Stars"></label>
  <input id="score90" className="ratingControl__radio" type="radio" name="rating" value="90" />
  <label htmlFor="score90" className="ratingControl__star" title="Four & Half Stars"></label>
  <input id="score80" className="ratingControl__radio" type="radio" name="rating" value="80" />
  <label htmlFor="score80" className="ratingControl__star" title="Four Stars"></label>
  <input id="score70" className="ratingControl__radio" type="radio" name="rating" value="70" />
  <label htmlFor="score70" className="ratingControl__star" title="Three & Half Stars"></label>
  <input id="score60" className="ratingControl__radio" type="radio" name="rating" value="60" />
  <label htmlFor="score60" className="ratingControl__star" title="Three Stars"></label>
  <input id="score50" className="ratingControl__radio" type="radio" name="rating" value="50" />
  <label htmlFor="score50" className="ratingControl__star" title="Two & Half Stars"></label>
  <input id="score40" className="ratingControl__radio" type="radio" name="rating" value="40" />
  <label htmlFor="score40" className="ratingControl__star" title="Two Stars"></label>
  <input id="score30" className="ratingControl__radio" type="radio" name="rating" value="30" />
  <label htmlFor="score30" className="ratingControl__star" title="One & Half Star"></label>
  <input id="score20" className="ratingControl__radio" type="radio" name="rating" value="20" />
  <label htmlFor="score20" className="ratingControl__star" title="One Star"></label>
  <input id="score10" className="ratingControl__radio" type="radio" name="rating" value="10" />
  <label htmlFor="score10" className="ratingControl__star" title="Half Star"></label>

</div>
</section>
      <footer className="footer">
        <div className="container footer__container">
        <div className="talk-wrapper">
          <h1 className="talk-title">Let's Talk!</h1>
         <a className="body-button-special" target="_blank" href="https://yarmatxonovsherzodxon@gmail.com">CONTACT ME</a>
        </div>
        <div className="links-wrapper">
          <ul className="links-list">
            <li className="links-item "><a href="https://instagram.com/sherxon_officia1" className="links-link instagram"></a></li>
            <li className="links-item"><a href="https://t.me/@sherxon_officia1" className="links-link telegram"></a></li>
            <li className="links-item"><a href="https://github.com/sherzodxon" className="links-link github"></a></li>
            <li className="links-item"><a href="https://www.linkedin.com/in/sherzodxon-yarmatxonov-14019a242/" className="links-link linkedin"></a></li>
          </ul>
          <small>COPYRIGHT SHERZODXON 2022</small>
        </div>
        </div>
      </footer>
</section>

    )
}
export default PortBody