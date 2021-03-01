import News from "./News";
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    news: state.news
})

export default connect(mapStateToProps)(News);
