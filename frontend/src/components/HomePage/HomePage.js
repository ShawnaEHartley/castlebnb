// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChessRook, faSearch, faArrowAltCircleUp, faCaretSquareDown, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid'
import { Link } from 'react-router-dom';
import icon from '../../assets/images/castle_icon.png';
import github from '../../assets/images/icons8-github-30.png';
import linkedin from '../../assets/images/icons8-linkedin-circled-30.png';
import angellist from '../../assets/images/icons8-angellist-30.png';


function HomePage() {

  return (
  <>
    <section id="header">
      <div id='header_left'>
        <img src={icon} alt="" />
        <span>castlebnb</span>
      </div>
      <div id='header_center'>
        <button>Anywhere</button>
        <button>Any week</button>
        <input type="text" placeholder='Add guests' />
        <div id='search_circle'>
          <div id='search'>
            {/* <FontAwesomeIcon icon={faSearch} />  */}
          </div>
        </div>
      </div>
      <div id='header_right'>
        <div id='personal_pages'>
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={angellist} alt="" />
        </div>
        <div id='main_nav_menu'>
          <Link to={'/signup'}>Sign Up</Link>
          <br />
          <Link to={'/login'}>Login</Link>
        </div>
      </div>
    </section>
    <section id='categories'>
      <p>carousel of GoT houses</p>
    </section>
    <section id='index'>
      <p>listing index</p>
    </section>
    <section id=''>
      <button>Map</button>
    </section>
  </>
  )


}

export default HomePage