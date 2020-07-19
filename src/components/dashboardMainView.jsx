import React, { useEffect, useState } from 'react';
import PaymentView from './paymentView'
import { CheckCircle, Smile, ThumbsUp, Feather, CheckSquare } from 'react-feather';
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  ProgressBar,
  Image
} from 'react-bootstrap';
import '../styles/dashboardMainViewStyles.css';
import desktopPrimaryImage from '../assests/images/busStopMainDesktop.jpg';
import desktopSecondaryImage from '../assests/images/childrenBusStopDesktop.jpg';

export default function DashboardMainView(props) {
  const { 
    loading, 
    setLoading, 
    getBusStopsSaga, 
    busStops, 
    isLoadingBusStops,
    setUserDonation
  } = props;
  const [busStopSelected, selectBusStop] = useState('');

  const handleBusStopSelection = (value) => {
    selectBusStop(value);
  };

  useEffect( () => {
    // if (localStorage.getItem(localStorageKey)) {

    // } else {
    //   getBusStopsSaga();
    // }
    getBusStopsSaga();
  }, []);

  console.log("props", props);
  console.log("state1", busStopSelected);
  if (busStops){
    console.log("alf", busStops.busStops[2].amount);
  }
  

  return (
    <div>
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="#" aria-label="Product">
            <Feather color='blue' />
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
        </div>
      </nav>

      <div className="text-center">
        <Image className="body__desktopImage" src={desktopSecondaryImage} />
        <div className="body__donate-absolute-container">
          <h1 className="display-4 font-weight-bold">Donate</h1>
          <CheckCircle size={100} color='green' />
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100">
        {isLoadingBusStops ?
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          :
          <div className="bg-warning text-center overflow-hidden body__money-box-conatiner">
            <div className="my-3 p-3">
              <div className="d-flex justify-content-center align-items-center">
                <h2 className="body__title">How your money helps</h2>
                <Smile size={54} color='green' />
              </div>
              <p className="lead">As a non-profit organization, we rely on the kind donations we receive from 
                our supporters, all of which are put towards supporting the bus stops for users. 
                All donations are tax deductible. Objective is raise $700 for each bus stop.</p>
              <p className="text-uppercase dashboard__pregress-subtitle">Bus Stops</p>
              <div>
                {busStops && 
                  busStops.busStops.map((item, index) => {
                    const percentil = Math.round((item.amount*100) / 700);
                    return (
                      <div key={index}>
                        <div className="body__progressbar-container">
                          <ProgressBar 
                            className="dashboard__progressbar"
                            striped 
                            variant="success" 
                            now={percentil} 
                            min={0} 
                            max={100} 
                            label={`${percentil}%`}
                          />
                          <div className="dashboard__progressbar-bus-text-circle">
                            <p className="text-uppercase dashboard__progressbar-bus-text">{item.name}</p>
                          </div>
                        </div>
                        <p className="text-capitalized dashboard__last-donation-text">Last donation: ${item.lastAmount} / Total received: ${item.amount}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        }
      </div>

      <div className="position-relative text-center">
        <Image className="body__desktopImage" src={desktopPrimaryImage} />
        <div className="body__donate-absolute-container-centered">
          <h1 className="display-4 font-weight-bold">Donate</h1>
          <CheckCircle size={100} color='green' />
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100">
        <div className="bg-secondary p-6 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="body__title">Taking action, changing lives.</h2>
              <CheckSquare size={70} color='green' />
            </div>
            <p className="lead">We value all donations big and small! Every cent donated helps us to change lives. Think about supporting Bus Stop!</p>
            <p className="lead">Select a bus stop to which you would like to donate</p>
            {isLoadingBusStops ?
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              :
              <div>
                <DropdownButton
                  as={ButtonGroup}
                  key={'Info'}
                  id={'dropdown-variants-Info'}
                  variant={'info'}
                  title={'Bus Stop'}
                  onSelect={handleBusStopSelection}
                >
                  {busStops ?
                    busStops.busStops.map((item, index) => {
                      return (
                      <Dropdown.Item eventKey={`${index}`}>Bus Stop {item.name.toUpperCase()}</Dropdown.Item>
                      );
                    })
                    : <Dropdown.Item eventKey="1"> Not available yet </Dropdown.Item>
                  }
                </DropdownButton>
                <PaymentView busStop={busStopSelected} userDonationFunction={setUserDonation}/>
              </div>
            }
          </div>
        </div>
      </div>

      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
          <ThumbsUp size={54} color='blue' />
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Cool stuff</a></li>
              <li><a className="text-muted" href="#">Random feature</a></li>
              <li><a className="text-muted" href="#">Team feature</a></li>
              <li><a className="text-muted" href="#">Stuff for developers</a></li>
              <li><a className="text-muted" href="#">Another one</a></li>
              <li><a className="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Resource</a></li>
              <li><a className="text-muted" href="#">Resource name</a></li>
              <li><a className="text-muted" href="#">Another resource</a></li>
              <li><a className="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Business</a></li>
              <li><a className="text-muted" href="#">Education</a></li>
              <li><a className="text-muted" href="#">Government</a></li>
              <li><a className="text-muted" href="#">Gaming</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Team</a></li>
              <li><a className="text-muted" href="#">Locations</a></li>
              <li><a className="text-muted" href="#">Privacy</a></li>
              <li><a className="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
};