import React from 'react';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';

function Tasks(props) {
    return (
        <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100 mt-5">

            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="card shadow-lg h-100">
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-4">Task 1</h1>
                            <Task1/>
                        </div>
                    </div>
            </div>        
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="card shadow-lg h-100">
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-4">Task 2</h1>
                            <Task2/>
                        </div>
                    </div>
            </div>        
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="card shadow-lg h-100">
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-4">Task 3</h1>
                            <Task3/>
                        </div>
                    </div>
            </div> 
          </div>
        </div>
      </section>
    );
}

export default Tasks;