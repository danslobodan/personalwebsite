import React from 'react';
import CvSection from './CvSection';

const About: React.FC = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <img
                        src='CV2.jpg'
                        width='200'
                        style={{ borderRadius: '50px' }}
                        alt='CV'
                    />
                </div>
                <div className='col-lg-8'>
                    <h3>Full Stack Developer</h3>
                    <h1>Slobodan</h1>
                    <h1>Dan</h1>
                    <div>Contact</div>
                    <div className='ui list'>
                        <div className='item'>
                            <i className='users icon' />
                            <div className='content'>Slobodan Dan</div>
                        </div>
                        <div className='item'>
                            <i className='mail icon' />
                            <div className='content'>
                                <a href='mailto:danastroman@gmail.com'>
                                    danastroman@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className='item'>
                            <i className='linkedin icon' />
                            <div className='content'>
                                <a href='https://www.linkedin.com/in/slobodan-dan-05b2631b9/'>
                                    Slobodan Dan
                                </a>
                            </div>
                        </div>
                        <div className='item'>
                            <i className='github icon' />
                            <div className='content'>
                                <a href='https://github.com/danslobodan'>
                                    danslobodan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-md-4'>
                    <CvSection title='Personal Profile'>
                        Developer with 8 years of professional experience, and a
                        history of excellence.
                    </CvSection>
                    <CvSection title='Areas of Expertise'>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>C#</li>
                            <li>.NET Framework</li>
                        </ul>
                    </CvSection>
                    <CvSection title='Other Skills'>
                        <ul>
                            <li>English Language - Proficient Speaker</li>
                            <li>Understanding of team psychology</li>
                            <li>
                                Good understanding of software architecture and
                                enterprise solutions
                            </li>
                            <li>Very strong soft skills</li>
                        </ul>
                    </CvSection>
                </div>
                <div className='col-md-8'>
                    <CvSection title='Work Experience'>
                        <div>
                            <h3>Tech Lead</h3>
                            <h4>
                                <b>efiport GmbH | 2021-Present</b>
                            </h4>
                            <div>
                                <ul>
                                    <li>
                                        Development of business management
                                        software platform
                                    </li>
                                    <li>Team Leading</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3>Tech Lead / Department Manager</h3>
                            <h4>
                                <b>Levi9 Global Sourcing | 2017-2020</b>
                            </h4>
                            <div>
                                <ul>
                                    <li>
                                        Development of an enterprise banking
                                        solution by Five Degrees including:{' '}
                                        <ul>
                                            <li>ASP.NET MVC website</li>
                                            <li>WCF Services</li>
                                            <li>Windows Services</li>
                                            <li>SQL Server Database</li>
                                            <li>Azure Pipelines</li>
                                            <li>Octopus Deploy projects</li>
                                            <li>TFVC Source Control</li>
                                        </ul>
                                    </li>
                                    <li>Team-leading</li>
                                    <li>Department management</li>
                                    <li>
                                        <b>Special contribution: </b>stabilizing
                                        the development life-cycle of two of
                                        Five Degrees' biggest customers, by
                                        applying SCRUM and Agile methodologies,
                                        introducing code standards, unit
                                        testing, integration testing, build and
                                        deployment automation, team coherence
                                        and trust
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3>Game Developer</h3>
                            <h4>
                                <b>Eipix Entertainment | 2012-2017</b>
                            </h4>
                            <div>
                                <ul>
                                    <li>Development of a game engine</li>
                                    <li>Development of game-play logic</li>
                                    <li>Development of automation tools</li>
                                    <li>
                                        <b>Special contribution: </b>:
                                        development of a project template, upon
                                        which more than 50 games were built
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CvSection>
                    <CvSection title='Education History'>
                        <h4>Singidunum University, Novi Sad</h4>
                        <div>
                            Bachelor of Software Engineering, 2018-Present
                        </div>
                        <h4>University of Novi Sad, Novi Sad</h4>
                        <div>Bachelor of Physics, 2007-2012</div>
                        <h4>School Of Technical Sciences, Sombor</h4>
                        <div>Computer Technician, 2002-2007</div>
                    </CvSection>
                </div>
            </div>
        </div>
    );
};

export default About;
