import './Header.css'
import styles from './Header.module.css';
function Header()
{
    const mystyle={
        color:"red",
        backgroundColor:"lightgreen",
        fontSize:"69px",
        padding:"34px"
    }
    return(
        <>
        <h1 style={mystyle}>Hello styling</h1>
        <h2 className={styles.bigBlue}>Kaaviyan</h2>
        <p>Add a little style</p>
    </>
    )
}

export default Header;