import { connect } from 'react-redux';
import DashboardMainView from '../components/dashboardMainView';
import { setLoading } from '../actions/userActions';
import { getAllBusStopsAction } from '../actions/busStopActions';
import { getLoading } from '../selectors/userSelectors';
import { getIfLoadingBusStops, getbusStops } from '../selectors/busStopSelectors';

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  isLoadingBusStops: getIfLoadingBusStops(state),
  busStops: getbusStops(state)
});

const mapDispatchToProps = dispatch => {
  return {
    setLoading: value => {
      dispatch(setLoading(value));
    },
    getBusStopsSaga: () => {
      dispatch(getAllBusStopsAction());
    }
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardMainView);

export default DashboardContainer;
