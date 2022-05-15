import { makeStyles } from "@material-ui/core";
import banner from '../components/assets/banner.jpg';

export const useStyles = makeStyles({
    container:{
        height: "450px",
        width: '1133px',
        margin:'auto',
        borderRadius: '0px',
        backgroundImage: `url(${banner})` , 
        backgroundSize: 'cover'
    },
    text:{
        position: 'absolute',
        height: '92px',
        left: '196px',
        top: '405px',

        /* wf-Heading 1 */

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '54px',
        lineHeight: '63px',
        display: 'flex',
        alignItems: 'center',

        color: 'white'
    },
    subText:{
        color:'#ff5774'
    }
})