import React from 'react';
import './menu.css';
import { Link , Outlet } from 'react-router-dom';

class Menu extends React.Component {
    // constructor(props){
    //     super(props);
        
    // };

    render() {
        return (
            <div className="menu">
               <h1>APP</h1>
        {/* INDISE NAVIGATION , USING LINK TO LINK TO PAGES */}
        <nav style={{ 
              paddingBottom: "solid 1px",
              borderTop: "solid 1px solid red"
              }}>
              <Link to="/bloglist">BLOG LIST</Link>      
              <Link to="/contact">CONTACT US</Link>
              <Link to="/views">VIEWS</Link>
        </nav>
        {/* OUTLET TELLS US THAT WE NEED TO RENDER SUBPATH LINK HERE BELOW  */}
        <Outlet />    

            </div>
        )
    }
}

export default Menu;