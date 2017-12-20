import React from 'react';
import { Link } from 'react-router-dom';

const SupportMail = () => {
   return (
       <div className="footer-supportmail">
        <Link to="/contact"><i className="fab fa-github fa-2x"></i> support@dashthings.io</Link>
       </div>
    );
};

export default SupportMail;
