import React from 'react';

function SectionTitle(props) {
    return (
        <React.Fragment>
            <div className="card-body d-flex justify-content-center align-items-center" data-aos="fade-up">
                <hr className="bg-color-03 sectiontitle-hr mx-3"/>
                <h1 className="text-color-03">{props.SectionName}</h1>
                <hr className="bg-color-03 sectiontitle-hr mx-3"/>
            </div>
        </React.Fragment>
    );
}

export default SectionTitle;