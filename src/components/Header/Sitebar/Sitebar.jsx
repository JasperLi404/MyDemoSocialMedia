import classes from './Sitebar.module.css';
const Sitebar = props => {
    // let friends = props.state.friends
    //     .map(inf => <Sitebar name={inf.name} src={inf.src} />
    return(
<div>
        {
            props.sitebar.map(inf => 
                
                    <img key={inf.id} className={classes.friendImg} src={inf.src} alt={inf.name}/>
                
                )
        }</div>
        // <div >
        // //     <img className={classes.friendImg} src={props.src} alt={props.name} />
        // </div>
    )
}
export default Sitebar;