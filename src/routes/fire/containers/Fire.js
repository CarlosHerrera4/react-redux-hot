import { connect } from 'react-redux';
import { decreaseFire, incrementFire } from '../../../modules/fire';
import Fire from '../components/Fire';

const mapDispatchToprops = {
  decreaseFire,
  incrementFire,
};

const mapStateToProps = state => ({
  fire: state.fire,
});

export default connect(mapStateToProps, mapDispatchToprops)(Fire);
