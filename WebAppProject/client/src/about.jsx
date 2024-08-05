import rothchild from '../src/assets/avatar3.jpg';
import arvin from '../src/assets/avatar4.jpeg';
import jamela from '../src/assets/avatar2.jpg';
import eunseo from '../src/assets/avatar1.jpg';
import '../src/index.css';
import '../src/about.css';

export default function About() {
     return (
          <>

               <section id="team">
                    <span className="teamTitle">Our Team</span>

                    <div className="teamMember">
                         <img src={rothchild} alt="Rothchild Shyne Tabing" className="teamMemberImg" />
                         <div className="teamMemberInfo">
                              <h3>Rothchild Shyne Tabing</h3>
                              <h4>Project Manager</h4>

                              <p>I am responsible to:</p>
                              <ul>
                                   <li>Develop and maintain the project plan.</li>
                                   <li>Monitor project progress and adjust plans as necessary.</li>
                                   <li>Facilitate communication between team members and stakeholders.</li>
                                   <li>Manage risks and resolve issues that arise.</li>
                                   <li>Ensure the project meets its goals and objectives.</li>
                              </ul>
                         </div>
                    </div>

                    <div className="teamMember">
                         <img src={arvin} alt="Arvin Christian Estella" className="teamMemberImg" />
                         <div className="teamMemberInfo">
                              <h3>Arvin Christian Estella</h3>
                              <h4>Lead Developer</h4>
                              
                              <p>I am responsible to:</p>
                              <ul>
                                   <li>Design and implement the app’s architecture.</li>
                                   <li>Write clean, efficient, and maintainable code.</li>
                                   <li>Lead code reviews and ensure adherence to coding standards.</li>
                                   <li>Troubleshoot and debug issues.</li>
                                   <li>Collaborate with the UI/UX Designer to integrate design elements.</li>
                              </ul>
                         </div>
                    </div>

                    <div className="teamMember">
                         <img src={jamela} alt="Jamela Mosende Sanchez" className="teamMemberImg" />
                         <div className="teamMemberInfo">
                              <h3>Jamela Mosende Sanchez</h3>
                              <h4>UI/UX Designer</h4>
                              
                              <p>I am responsible to:</p>
                              <ul>
                                   <li>Design the app&apos;s user interface, including layouts, colors, and typography.</li>
                                   <li>Create wireframes, mockups, and prototypes.</li>
                                   <li>Conduct user research and usability testing.</li>
                                   <li>Collaborate with the Lead Developer to implement design elements.</li>
                                   <li>Ensure the app is intuitive and easy to navigate.</li>
                              </ul>
                         </div>
                    </div>

                    <div className="teamMember">
                         <img src={eunseo} alt="Eunseo Park" className="teamMemberImg" />
                         <div className="teamMemberInfo">
                              <h3>Eunseo Park</h3>
                              <h4>Content Specialist</h4>
                              
                              <p>I am responsible to:</p>
                              <ul>
                                   <li>Develop and acurate content for the app, including recipes, descriptions, and tutorials.</li>
                                   <li>Ensure content is SEO-friendly and optimized for user engagement.</li>
                                   <li>Collaborate with the UI/UX Designer to integrate content seamlessly.</li>
                                   <li>Monitor user feedback and update content as needed.</li>
                                   <li>Maintain a consistent tone and style across all content.</li>
                              </ul>
                         </div>
                    </div> <br/><br/><br/>
               </section>
          </>
     );
}