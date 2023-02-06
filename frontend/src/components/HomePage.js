import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessRook, faSearch, faArrowAltCircleUp, faCaretSquareDown, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid'
import { Link } from 'react-router-dom';


function HomePage() {

  return (
  <>
    <section id="header">
      <div id='header_left'>
        <FontAwesomeIcon icon={faChessRook} />
        <span>castlebnb</span>
      </div>
      <div id='header_center'>
        <button>Anywhere</button>
        <button>Any week</button>
        <input type="text" value='Add guests' />
        <div id='search_circle'>
          <div id='search'>
            <FontAwesomeIcon icon={faSearch} /> 
          </div>
        </div>
      </div>
      <div id='header_right'>
        <div id='personal_pages'>
          <FontAwesomeIcon icon={faArrowAltCircleUp} /> 
          <FontAwesomeIcon icon={faCaretSquareDown} /> 
          <FontAwesomeIcon icon={faExclamationTriangle} /> 
        </div>
        <div>
          <Link to={'/signup'}>Login / Sign Up</Link>
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