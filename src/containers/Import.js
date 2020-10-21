import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchMakes, deleteMake } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    deleteMake: (idx) => dispatch(deleteMake(idx)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Import);
