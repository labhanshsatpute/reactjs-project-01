import React from 'react';

function Preloader() {
    return (
        <React.Fragment>
            <div id="preloader-div">
                <div className="card-body w-100 h-100 d-flex justify-content-center align-items-center">
                    <div class="preloader" id="preloader"></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Preloader;