import React from 'react';
import { Link } from 'react-router-dom';

const SupportMail = () => {
   return (
       <div className="footer-supportMail">
        <Link to="/contact"><i className="fa fa-envelope fa-x2"></i> support@dashthings.io</Link>
       </div>
    );
};
//I would put the <i> element inside the Link so all is clickable
//You need to import the <Link> component...Where do you think it comes from??
export default SupportMail;
