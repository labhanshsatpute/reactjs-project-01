import React from 'react'

function ClientCard(props) {
    return (
        <React.Fragment>
            <div className="card w-auto d-inline-block m-2 bg-light border-0" data-aos="fade-up" data-aos-delay={props.AosDelay}>
                <div className="card-body">
                    <img src={props.ClientImg} alt="client-img" className="client-img"/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ClientCard;