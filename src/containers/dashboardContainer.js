import { connect } from 'react-redux';
import DashboardMainView from '../components/dashboardMainView';
import { setLoading } from '../actions/userActions';
import { getAllBusStopsAction } from '../actions/busStopActions';
import { getLoading } from '../selectors/userSelectors';

const mapStateToProps = (state) => ({
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => {
  return {
    setLoading: value => {
      dispatch(setLoading(value));
    },
    getBusStops: () => {
      dispatch(getAllBusStopsAction());
    }
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardMainView);

export default DashboardContainer;
