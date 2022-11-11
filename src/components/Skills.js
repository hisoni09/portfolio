import React from 'react';
import "./Skills.css";
import Typewriter from "typewriter-effect";

const SKILLS_LIST = [
    {
      label: 'Python',
      percentage: '100%',
    },
    {
      label: 'Machine Learning',
      percentage: '90%',
    },
    {
      label: 'JavaScript',
      percentage: '95%',
    },
    {
      label: 'Django',
      percentage: '95%',
    },
    {
      label: 'XML',
      percentage: '95%',
    },
    {
      label: 'C',
      percentage: '80%',
    },
    {
      label: 'C++',
      percentage: '90%',
    },
    {
      label: 'Css',
      percentage: '95%',
    },
    {
      label: 'HTML',
      percentage: '95%',
    },
    {
      label: 'Angular',
      percentage: '80%',
    },
  ];


  const SKILLS_LIST_2 = [
    {
      label: 'Pentesting',
      percentage: '90%',
    },
    {
      label: 'Networking',
      percentage: '90%',
    },
    {
      label: 'Linux',
      percentage: '95%',
    },
    {
      label: 'SQL/ Web/ AD/ Exchange Servers',
      percentage: '95%',
    },
    {
      label: 'Office 365',
      percentage: '95%',
    },
    {
      label: 'Powershell/ Bash Scripting',
      percentage: '95%',
    },
    {
      label: 'Wireshark/ Netmon',
      percentage: '90%',
    },
    {
      label: 'Metasploit',
      percentage: '90%',
    },
    {
      label: 'Nmap',
      percentage: '90%',
    },
    {
      label: 'Cryptography',
      percentage: '95%',
    },
  ];

const SKILLS_CARDS = ["Objective - C", "C#", "Java", "Ruby", "PHP", "React.js", "SQL", "Swift"];
const INFRA_SKILLS_CARDS = ["Azure", "AWS", "Google Cloud", "Exclaimer Cloud", "Global Relay", "Windows Sysinternals"]

const ProgressLine = ({ label, percentage, barBg, progresBg, barHeight }) => {
const [widths, setWidths] = React.useState(0);

React.useEffect(() => {
    requestAnimationFrame(() => setWidths(percentage));
}, [percentage]);

return (
    <section className="progress-line">
        <span className="progress-line__label">{ label }</span>
        <div 
            className="progress-line__outer"
            style={ {
                background: barBg,
                height: `${barHeight}px`,
            }}>
            <div 
                className="progress-line__inner" 
                style={ {
                    width: widths,
                    background: progresBg,
                    transition: 'width 15s',
                } } /> 
        </div>
    </section>
);
};


const Skills = ()=> (
    <section className="container">
       <div className="skillsheader">
       <Typewriter
          options={{
            strings: ['Skills_'],
            autoStart: true,
            delay: 100,
            loop: true,
          }}
        />
       </div>
       <div className="row">
          <div className="col-12 pt-5">
              <h4>Proficient_</h4>
             </div>
         </div>
        <div className="skills">
           <div className="col-6 py-5">
            {
                SKILLS_LIST.map((skill, index) => ( 
                    <ProgressLine
                        key={ index }
                        barHeight="12"
                        barBg="#efefef"
                        progresBg="rgba(192, 206, 54, 1)"
                        label={ skill.label }
                        percentage={ skill.percentage } 
                        /> 
                ))
             }
          </div>
          <div className="col-6 py-5">
            {
                SKILLS_LIST_2.map((skill, index) => ( 
                    <ProgressLine
                        key={ index }
                        barHeight="12"
                        barBg="#efefef"
                        progresBg="rgba(182, 202, 1, .7)"
                        label={ skill.label }
                        percentage={ skill.percentage } /> 
                ))
             }
          </div>
        </div>
        <div>
            <h4>Familiar_</h4>
            <div className="skills__cards">
            {
               SKILLS_CARDS.map((item) => (
                <p className="skills__cards__per">{ item }</p>
               ))
             }
            </div>
            <div className="skills__cards__infra"> 
            {
               INFRA_SKILLS_CARDS.map((item) => (
                <p className="skills__cards__per">{ item }</p>
               ))
             }
            </div>
        </div>
      </section>
  );

export default Skills;