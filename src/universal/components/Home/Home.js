import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';

import styles from './Home.css';

class Home extends Component {
  render () {
    return (
      <div className={styles.home}>
        <h1 className={styles.title}>Django React Redux SSR</h1>

        <div>
          <h2>What is it?</h2>
          <ul>
            <li>
              <b>Django REST api</b><br />
              <p>Django REST handles the authentication and Postgresql database</p>
            </li>

            <li>
              <b>React Redux Client</b><br />
              <p>Django Will Serve a gzipped React Redux App</p>
            </li>

            <li>
              <b>Waggle: Server Side Rendering</b><br />
              <p>An intermediate "waggle" server will handle the server side Rendering to Increase initial page load and SEO</p>
            </li>
          </ul>
        </div>


        <div>
          <h2>Why?</h2>
          <ul>
            <li>Blazing Fast</li>
            <li>Organized</li>
            <li>Easy to build on top of</li>
          </ul>
        </div>

        <div>
          <h2>How?</h2>

          <p>The Basic setup goes like this...</p>

          <ol>
            <li><p>Nginx will reverse proxy to django at port 8000 and served static assets gzipped</p></li>
            <li><p>Django will send a post request to an express server on port 3000 that will return the html as a string</p></li>
            <li><p>Django will serve that string and once the JavaScript is loaded the application state will be handed over</p></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
