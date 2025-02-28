import React,{useState} from 'react';
import '../App.css'

function Navbar(){
    const [dark,setDark]=useState(false);
    const toggle=()=>{
        setDark(!dark)
        document.body.style.backgroundColor=!dark?"#111":"white";
        document.body.style.color=!dark?"white":"#111";
    }

    return(
        <div style={styles.nav}>
            <div style={styles.sideNav}>
                <span style={styles.span}>MY NOTES</span>
            </div>
            <div style={styles.sideNav}>
                <span style={styles.span}>Home</span>
                <span style={styles.span}>About</span>
                <span style={styles.span}>Contact</span>
                <span style={styles.span}><button style={styles.btn} onClick={toggle}>{!dark?"Dark Mode":"Light Mode"}</button></span>
            </div>
        </div>
    )
}
export default Navbar;
const styles={
    nav:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'10px',
        backgroundColor:'rgb(100,255,100)',
    },
    sideNav:{
        fontFamily:'Impact',
    },
    span:{
        margin:'10px',
        cursor:'pointer',
        verticalAlign:'middle'
    },
    btn:{
        fontSize:'10px',
        borderRadius:'10px',
        padding:'5px',
        fontFamily:'monospace',
        border:'none',
        backgroundColor:'#ddd',
        width:'70px',
        color:'black',
    }
}