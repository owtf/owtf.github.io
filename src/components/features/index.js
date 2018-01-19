import React from 'react';

import './_features.scss';


const NewsListing = props =>
  (<section className="features" id="features">
      <div className="container">
      <div className="row">
          <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                  <div className="card-body">
                      <p className="card-text"><h3>Easy to Use</h3>
                          <li>Web UI: Now configure and monitor OWTF via a responsive and powerful interface accessible via your browser. </li>
                          <li>Exposes RESTful APIs to all core OWTF capabilties.</li>
                      </p>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                  <div className="card-body">
                      <p className="card-text"><h3>Unites popular tools</h3>
                          <li>Instead of implementing yet another spider (a hard job), <b>OWTF</b> will scrub the output of all tools/plugins run to gather as many URLs as possible.</li>
                          <li>Scan by various aggression levels: <b>OWTF</b> supports scans which are based on the <i>aggressiveness</i> of the plugins/tools invoked.</li>
                          <li> <strong>Extensible</strong> <b>OWTF</b> manages tools through <i>'plugins'</i> making it trivial to add new tools. </li>
                      </p>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                  <div className="card-body">
                      <p className="card-text"><h3>Use OWTF anywhere!</h3>
                        <li>OWTF provides a Dockerfile to run on any platform Docker supports!</li>
                          <li>A new Docker Compose version coming soon...</li>
                      </p>
                  </div>
              </div>
          </div>
          <div id="unique">
              <br/><br/><br/>
              <div className="row">
                  <div className="col-sm">
                      <h3> Fastest Python MiTM proxy yet!</h3>
                  </div>
                  <div className="col-sm">
                      <h3>Comprehensive interactive report at end of each scan</h3>
                  </div>
                  <div className="col-sm">
                      <h3>Easy plugin-based system; currently 100+ plugins!</h3>
                      <h3>CLI and web interface</h3>
                  </div>
              </div>
              <br/><br/><br/><br/>
              <div className='ten columns offset-by-one'>
                  <h3>Video: Release preview</h3>
                  <iframe src="https://player.vimeo.com/video/128008174" width="500" height="313" />
              </div>
              <br/><br/><br/><br/>
              <button type="button" className="btn btn-primary btn-lg"><a href="//imgur.com/a/ISOb9"><h2>Screenshots</h2></a></button>
              <h4>Tested on <img src="https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" height="100" width="200" alt="Browserstack" /></h4>
          </div></div>
            <br/><br/><hr/>
          <section className="download" id="download">
                  <h1>Getting started with <b>OWTF</b>!</h1>

              <p id="cmd"><code>pip install git+https://github.com/owtf/owtf#egg=owtf or clone the repo and python setup.py install</code></p>
              <p>To run OWTF on Windows or MacOS, use the Dockerfile (requires <strong>Docker</strong> installed) provided to try OWTF:</p>
              <ul id="cmd-lg">
                  <li><code>make docker-build && make docker-run</code></li>
                  <li>Open <code>~/.owtf/conf</code> and change <code>SERVER_ADDR: 127.0.0.1</code> to <code>SERVER_ADDR: 0.0.0.0</code>.</li>
                  <li>Create a virtualenv, <code>virtualenv env</code> and activate it <code>source env/bin/activate</code>.</li>
                  <li>Install and run OWTF.</li>
                  <li><code>cd owtf/; python setup.py develop && python -m owtf</code></li>
                  <li>Open <code>localhost:8009</code> for OWTF web interface.</li>
              </ul>
              </section></div>
      </section>);
export default NewsListing;
