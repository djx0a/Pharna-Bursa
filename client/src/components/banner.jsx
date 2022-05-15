
import { useStyles } from "./banner.style";
const Banner=()=>{
 
  const classes = useStyles();


    return(
        <div className={classes.container}>
            
            <h1 className={classes.text}>One Stop for All  <span className={classes.subText}>  your medical needs </span> </h1>
        </div>
    )
    


}

export default Banner;