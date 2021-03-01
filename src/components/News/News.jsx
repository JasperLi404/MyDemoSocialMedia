import Preloader from '../common/Preloader/Preloader';
import classes from './News.module.css';
import Sensation from './Sensation';
const News = ({news}) => {
    debugger
    if(!news.news){
        return <Preloader />
    }
let newsItems = news.news
    .map(item => <Sensation photo={item.url} text={item.theme}  link={item.link} />)

    return(
        <div className={classes.mainNews} >
            {newsItems}
        </div>
    );
}
export default News;