import { connect } from 'react-redux';
import Sitebar from './Sitebar.jsx';

const mapStateToProps = state => ({
    sitebar: state.sitebar.friends
})

const SitebarContainer = connect(mapStateToProps)(Sitebar);

export default SitebarContainer;