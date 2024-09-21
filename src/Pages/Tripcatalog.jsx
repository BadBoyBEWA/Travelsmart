import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import Images from '../assets/img.jsx';
import "../Pages/Tripcatalog.css"
import Modal from '../Components/Modal.jsx';

const TripCatalog = () => {
  const [activeTab, setActiveTab] = useState('destinations');
  const [destinations, setDestinations] = useState([]);
  const [packageTours, setPackageTours] = useState([]);
  const [activities, setActivities] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [transportOptions, setTransportOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openSelectedTrip = (index) => {
    setOpenModal(true);
    
    setSelectedIndex(index);
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/info.json');
        console.log(data);
    
        if (Array.isArray(data.destinations)) {
          setDestinations(data.destinations);
        } else {
          console.error('Expected destinations to be an array, got:', data.destinations);
          setDestinations([]);
        }
    
        setPackageTours(data.packageTours || []);
        setActivities(data.activities || []);
        setAccommodations(data.accommodations || []);
        setTransportOptions(data.transportOptions || []);
      } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  let newDestination = destinations.destinations

  console.log(newDestination);

  const filteredDestinations = destinations.filter(destination => destination.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredPackageTours = packageTours.filter(packageTour => packageTour.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredActivities = activities.filter(activity => activity.name.toLowerCase().includes(searchQuery.toLowerCase()));


  const handleTabChange = (value) =>{
    setActiveTab(value)
  console.log(`Tab changed to: ${value}`)};

  return (
    <>
    <div className="container">
      {/* Header */}
      <h1 className="header">Trip Catalog</h1>

      {/* Search Bar */}
      <div className="search-sort">
        <input type="search" className="search-input" value={searchQuery} onChange={handleSearch} placeholder="Search destinations, tours, and activities" />
        <button className="search-button">Search</button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={activeTab === 'destinations' ? 'active' : ''} onClick={() => handleTabChange('destinations')}>Destinations</button>
        <button className={activeTab === 'package-tours' ? 'active' : ''} onClick={() => handleTabChange('package-tours')}>Package Tours</button>
        <button className={activeTab === 'activities' ? 'active' : ''} onClick={() => handleTabChange('activities')}>Activities</button>
        <button className={activeTab === 'accommodations' ? 'active' : ''} onClick={() => handleTabChange('accommodations')}>Accommodations</button>
        <button className={activeTab === 'transport' ? 'active' : ''} onClick={() => handleTabChange('transport')}>Transport Options</button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'destinations' && (
          <div className="card">
            <ul>
            {filteredDestinations.map((destinations, idx) => {
                const {id , name, sub, description,price,images} = destinations
                return(
                  <div key={id} style={{padding:"30px", borderRadius:"20px", border:"none", marginTop:"20px", boxShadow: "3px 6px 7px 2px rgba(0, 0, 0, 0.2)"}}>
                    <div>
                      <div>
                        {/* <img src={images} alt={"Europe"} style={{width:"40%" , borderRadius:"10px"}} /> */}
                        <div>
                          {images && images.length > 0 && (
                            <img
                              src={images[0]} // Assuming `images` is an array and you want to display the first image
                              alt={name}
                              style={{ width: "40%", borderRadius: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                      <h2 style={{fontSize:" 20px"}}>{name}</h2>
                      <p>{sub}</p>
                      <i>{description}</i>
                      <h4>${price}</h4>
                      <button onClick={() => openSelectedTrip(idx )} style={{background:"linear-gradient(to right, #0075FF , #5AA6FF)", marginTop:"20px",width:"50%",padding:"20px", borderRadius:"20px", border:"none", color:"white"}}>View Details</button>
                    </div>
                  </div>
                )
               })}
            </ul>
          </div>
        )}
        {activeTab === 'package-tours' && (
          <div className="card">
            <ul className="products">
              {filteredPackageTours.map((packageTour, idx) => {
                const {id , name, sub, description,price,images} = packageTour
                return(
                  <div key={id} style={{ padding:"30px", borderRadius:"20px", border:"none", marginTop:"20px", boxShadow: "3px 6px 7px 2px rgba(0, 0, 0, 0.2)"}}>
                    <div>
                      <div>
                        {/* <img src={images} alt={"Europe"} style={{width:"40%" , borderRadius:"10px"}} /> */}
                        <div>
                          {images && images.length > 0 && (
                            <img
                              src={images[0]}
                              alt={name}
                              style={{ width: "40%", borderRadius: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                      <h2 style={{fontSize:" 20px"}}>{name}</h2>
                      <p>{sub}</p>
                      <i>{description}</i>
                      <h4>${price}</h4>
                      <button onClick={() => openSelectedTrip(idx )} style={{backgroundColor:" black", marginTop:"20px",width:"50%",padding:"20px", borderRadius:"20px", border:"none", color:"white"}}>View Details</button>
                    </div>
                  </div>
                )
               })}
            </ul>
          </div>
        )}
        {activeTab === 'activities' && (
          <div className="card">
            <ul>
              {filteredActivities.map(activity => (
                <li key={activity.id}>{activity.name}</li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'accommodations' && (
          <div className="card">
              <ul>
                {accommodations.map(accommodation => (
                  <li key={accommodation.id}>{accommodation.name}</li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === 'transport' && (
          <div className="card">
            <ul>
              {transportOptions.map(transportOption => (
                <li key={transportOption.id}>{transportOption.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Feedback Form */}
      <div className="form-container">
        <h2 className="form-header">Leave Feedback</h2>
        <textarea className="form-textarea" placeholder="Your feedback..."></textarea>
        <button className="form-submit">Submit Feedback</button>
      </div>

      {/* Package Tour Review Form */}
      <div className="form-container">
        <h2 className="form-header">Write a Review</h2>
        <select className="form-select">
          <option>Select Package Tour</option>
          <option value="european-delight">European Delight</option>
          <option value="asian-adventure">Asian Adventure</option>
        </select>
        <div className="rating">
          Rating:
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="star">★</span>
          ))}
        </div>
        <textarea className="form-textarea" placeholder="Your review..."></textarea>
        <button className="form-submit">Submit Review</button>
      </div>
    </div>
      <Modal selectedIndex={selectedIndex} setOpenModal={setOpenModal}  openModal={openModal} />
      </>

  );
};

export default TripCatalog;
