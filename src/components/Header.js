import { Link } from 'react-router-dom';

function Header(props) {
    //inline style for the nav tag
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        border: '3px solid black',
        padding: '8px',
        width: '80%',
        margin: 'auto',
        textAlign: 'center',
      
    };

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to='/'>
                    <div>HOME</div>
                </Link>
                <Link to='/projects'>
                    <div>PROJECTS</div>
                </Link>
                <Link to='/about'>
                    <div>ABOUT</div>
                </Link>
            </nav>
        </header>
    )
}


export default Header;