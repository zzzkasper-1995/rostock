
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, pure } from 'recompose';
import LogInConfirm from '../components/logInConfirm';

function stateToProps(state) {
    return {
    };
}

function dispatchToProps(dispatch) {
    return {
    };
}

export default compose(
    setDisplayName('LogInConfirm'),
    connect(stateToProps, dispatchToProps),
    pure,
)(LogInConfirm);
