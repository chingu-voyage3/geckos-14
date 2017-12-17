import React from 'react';
import { Link } from 'react-router-dom';

const CatchyPhrase = () => {
   return (
        <div className="footer-catchyphrase">
          <p><strong>DashThings.io - An easy way to build <Link to="/dashboards">Dashboards</Link> for your things.</strong></p>
        </div>
    );
};

export default CatchyPhrase;
