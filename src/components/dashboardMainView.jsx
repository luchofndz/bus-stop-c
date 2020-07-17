import React from 'react';
import PaymentView from './paymentView' 
import { CheckCircle, Smile, ThumbsUp, Feather, CheckSquare } from 'react-feather';
import { Dropdown, DropdownButton, ButtonGroup, ProgressBar } from 'react-bootstrap';
import '../styles/dashboardMainViewStyles.css';

export default function DashboardMainView(props) {
  const { loading, setLoading } = props;
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   event.target.dropdown();
  // };
  console.log("loading: ", loading);

  setLoading(true);

  console.log("loading2: ", loading);
  
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

     
      <div className="position-relative overflow-hidden text-center bg-light header__background-image-secondary" >
        <div className="col-md-5 p-lg-5 mx-auto my-5 d-flex">
          <h1 className="display-4 font-weight-bold">Donate</h1>
          <CheckCircle size={54} color='green' />
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100">
        <div className="bg-warning p-6 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">How your money helps</h2>
            <Smile size={54} color='green' />
            <p className="lead">As a not-for-profit, we rely on the kind donations we receive from our supporters, all of which are put towards supporting the bus stops for users. All donations are tax deductible.</p>
            <div>
              <ProgressBar striped variant="success" now={40} />
              <p className="text-uppercase">Bus Stop A</p>
              <ProgressBar striped variant="success" now={70} />
              <p className="text-uppercase">Bus Stop B</p>
              <ProgressBar striped variant="success" now={40} />
              <p className="text-uppercase">Bus Stop C</p>
              <ProgressBar striped variant="success" now={20} />
              <p className="text-uppercase">Bus Stop D</p>
              <ProgressBar striped variant="success" now={80} />
              <p className="text-uppercase">Bus Stop E</p>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative overflow-hidden text-center bg-light header__background-image-main" >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-bold">Donate</h1>
          <CheckCircle size={54} color='green' />
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100">
        <div className="bg-secondary p-6 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <div className="d-flex justify-content-center">
              <h2 className="display-5 pr-3">Taking action, changing lives.</h2>
              <CheckSquare size={54} color='green' />
            </div>
            <p className="lead">We value all donations big and small! Every cent donated helps us to change lives. Think about supporting Bus Stop!</p>
            <DropdownButton
              as={ButtonGroup}
              key={'Secondary'}
              id={`dropdown-variants-Secondary`}
              variant={'secondary'}
              title={'Bus Stop'}
            >
              <Dropdown.Item eventKey="1">Bus Stop A</Dropdown.Item>
              <Dropdown.Item eventKey="2">Bus Stop B</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Bus Stop C 
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Bus Stop D</Dropdown.Item>
            </DropdownButton>
            <PaymentView />   
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