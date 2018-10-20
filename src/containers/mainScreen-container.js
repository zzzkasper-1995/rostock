import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, pure } from 'recompose';
import MainScreen from '../components/mainScreen';

function stateToProps(state) {
    return {
    };
}

function dispatchToProps(dispatch) {
    return {
    };
}
export default compose(
    setDisplayName('MainScreen'),
    connect(stateToProps, dispatchToProps),
    pure,
)(MainScreen);
