
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, pure } from 'recompose';
import Main from '../components/main';

function stateToProps(state) {
    return {
    };
}

function dispatchToProps(dispatch) {
    return {
    };
}
export default compose(
    setDisplayName('Main'),
    connect(stateToProps, dispatchToProps),
    pure,
)(Main);
