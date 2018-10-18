
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, pure } from 'recompose';
import LogIn from '../components/logIn';

function stateToProps(state) {
    return {
    };
}

function dispatchToProps(dispatch) {
    return {
    };
}

export default compose(
    setDisplayName('LogIn'),
    connect(stateToProps, dispatchToProps),
    pure,
)(LogIn);
