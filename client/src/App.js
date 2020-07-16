import React from 'react';
import 'materialize-css';

function App() {
  return (
    <>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card teal darken-1">
            <div className="card-content white-text">
              <span className="card-title">Form</span>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card teal darken-1">
            <div className="card-content white-text">
              <span className="card-title">List</span>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card teal darken-1">
            <div className="card-content white-text">
              <span className="card-title">Versions</span>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default App;
