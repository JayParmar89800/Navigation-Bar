import React ,{ useState ,useEffect } from 'react'
import NewsItems from './NewsItems';
import { useParams,Link, useLocation } from 'react-router-dom';

function News() {
 
  
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const fetchedEmployees = await response.json();
      setEmployees(fetchedEmployees);
    }

    fetchEmployees();
  }, []);

  let filteredData = employees;
  const { id } = useParams();
  if(id)
  {
    filteredData = employees.filter(item => item.id === parseInt(id));
  }

  const{pathname}=useLocation();

  const showNavbar=pathname==='/';


  
  return (
    <>
{showNavbar && (
        <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
          <div className="container-fluid">
            <Link target="_blank"className="navbar-brand" to="/">
              Json Data
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {employees.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link
                    target='_blank'
                      className="nav-link"
                      to={`/${item.id}`}
                    >
                      {item.id}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>)}

          <h2 className="text-center text-danger fw-bold scroll-text py-3">
            Json Data Fetching
          </h2>
          <div className="container ">
          <div className="row row-gap-3">
            {filteredData && filteredData.map((element,index) => {
                return (
                  <div className="col-lg-3 col-md-4 col-12" key={index}>
                    <NewsItems
                        id={element.id }
                        name={element.name}
                        username={element.username}
                        email={element.email}
                        address={element.address.city}
                        phone={element.phone}
                        website={element.website}
                    />
                  </div>
                );
              })}
          </div>
      </div>

    </>
  )
}

export default News
