import { connect } from 'react-redux';
import DashboardMainView from '../components/dashboardMainView';
import { setDonation } from '../actions/userActions';
import { getAllBusStopsAction} from '../actions/busStopActions';
import { getLoading, getErrorDonation, getSuccessDonation } from '../selectors/userSelectors';
import { 
  getIfLoadingBusStops, 
  getbusStops, 
  getErrorGettingBusStop,
  getSuccessGetBusStops
} from '../selectors/busStopSelectors';

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  isLoadingBusStops: getIfLoadingBusStops(state),
  busStops: getbusStops(state),
  getBusStopError: getErrorGettingBusStop(state),
  successGetBusStops: getSuccessGetBusStops(state),
  donationError: getErrorDonation(state),
  donationSuccess: getSuccessDonation(state)
});

const mapDispatchToProps = dispatch => {
  return {
    setUserDonation: value => {
      dispatch(setDonation(value));
    },
    getBusStopsSaga: () => {
      dispatch(getAllBusStopsAction());
    }
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardMainView);

export default DashboardContainer;