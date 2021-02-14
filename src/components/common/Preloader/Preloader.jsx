import loader from '../../../assets/image/loading.svg';
import classes from './preloader.module.css';

const Preloader = () => {
    return(
        <div className={classes.load}><img className={classes.loader} src={loader}/></div>  
    )
}

export default Preloader;