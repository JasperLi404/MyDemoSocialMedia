import classes from "./News.module.css"


const Sensation = ({photo, text, link}) => {
    return <div className={classes.wrapper} >
        <img className={classes.picture} src={photo} />
        <h4 className={classes.theme}  >{text}</h4>
        <a href={link} >
            <div className={classes.link}>MORE DETAILS</div>
        </a>
    </div>
}
export default Sensation;