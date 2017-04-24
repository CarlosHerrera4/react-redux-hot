import { connect } from 'react-redux';
import { decreaseCounter, incrementCounter } from '../../../modules/counter';
import Counter from '../components/Counter';

const mapDispatchToprops = {
  decreaseCounter,
  incrementCounter,
};

const mapStateToProps = state => ({
  counter: state.counter,
});

export default connect(mapStateToProps, mapDispatchToprops)(Counter);
