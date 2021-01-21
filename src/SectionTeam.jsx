import React from 'react';
import SectionTitle from './components/SectionTitle';
import TeamCard from './components/TeamCard';

function SectionTeam() {
    return (
        <React.Fragment>
            <section id="TeamSection">
                <br/>
                <div className="container text-center">
                    <br/>
                    <SectionTitle SectionName="Team"/>
                    <br/>
                    <div className="container-fluid" align="center">
                        <h4 className="text-color-02">Meet our Team</h4>
                        <p className="text-color-02">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Quaerat molestiae sint dolores fugit? Officia necessitatibus cum sint sapiente, magni, odit consequuntur.</p>
                        <hr className="w-75"/>
                        <br/>
                        <div className="row">
                            <TeamCard TeamImg="images/team/team-1.jpg" TeamName="Walter White" TeamPosition="Founder and CEO" AosDelay="100"/>
                            <TeamCard TeamImg="images/team/team-2.jpg" TeamName="Sarah Jhonson" TeamPosition="Product Manager" AosDelay="200"/>
                            <TeamCard TeamImg="images/team/team-3.jpg" TeamName="William Anderson" TeamPosition="Senior Developer" AosDelay="300"/>
                            <TeamCard TeamImg="images/team/team-4.jpg" TeamName="Amanda Jepson" TeamPosition="Accountant" AosDelay="400"/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default SectionTeam;