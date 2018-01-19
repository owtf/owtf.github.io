import React from 'react';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
              <a href='https://github.com/owtf/owtf'>Repository</a>
              <a href='http://owtf.readthedocs.org/'>Documentation</a>
              <a href='http://blog.7-a.org/search/label/OWTF'>Blog</a>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
