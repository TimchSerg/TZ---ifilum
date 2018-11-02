import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../css/bootstrap.css';

class Notfound extends Component {
  constructor(props) {
    super();
  }

  render(){
    return (
      <div >
        <style type="text/css">
          {`
        .jumbotron-custom {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .jumbotron-custom h1{
            font-size: 128px;
            color: red;
        }
        .jumbotron-custom p{
            font-size: 64px;
        }
        .btn-primary{
          padding: 20px 64px;
          font-size: 24px;
        }
        `}
        </style>
        <Jumbotron bsStyle="custom">
          <h1>404</h1>
          <p>
            Not Found
          </p>
          <p>
            <Link to='/'>
              <Button bsStyle="primary">To main</Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Notfound;
