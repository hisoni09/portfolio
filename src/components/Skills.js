import React from 'react';
import "./Skills.css";
import Typewriter from "typewriter-effect";

// const SKILLS_LIST = [
//     {
//       label: 'ReactJs',
//       percentage: '100%',
//     },
//     {
//       label: 'JavaScript',
//       percentage: '100%',
//     },
//     {
//       label: 'Redux',
//       percentage: '95%',
//     },
//     {
//       label: 'NextJs',
//       percentage: '95%',
//     },
//     {
//       label: 'Css',
//       percentage: '95%',
//     },
//     {
//       label: 'Bootstrap',
//       percentage: '95%',
//     },
//     {
//       label: 'Jest',
//       percentage: '95%',
//     },
//     {
//       label: 'MySQL',
//       percentage: '80%',
//     },
//     {
//       label: 'Webpack',
//       percentage: '95%',
//     },
//     {
//       label: 'C',
//       percentage: '70%',
//     },
//     {
//       label: 'Python',
//       percentage: '70%',
//     },
//     {
//       label: 'Angular',
//       percentage: '90%',
//     },
//     {
//       label: 'Django',
//       percentage: '75%',
//     },
//     {
//       label: 'SASS',
//       percentage: '95%',
//     },
//     {
//       label: 'XML',
//       percentage: '95%',
//     },
//     {
//       label: 'PHP',
//       percentage: '95%',
//     },
//     {
//       label: 'Wordpress',
//       percentage: '95%',
//     },
//     {
//       label: 'Swagger',
//       percentage: '95%',
//     },
//     {
//       label: 'Git',
//       percentage: '95%',
//     },
//   ];

const SKILLS_LIST = [
  {
    label: 'JavaScript',
    percentage: '100%',
  },
  {
    label: 'Css',
    percentage: '95%',
  },
  {
    label: 'PHP',
    percentage: '95%',
  },
  {
    label: 'ReactJs',
    percentage: '100%',
  },
  {
    label: 'Redux',
    percentage: '95%',
  },
  {
    label: 'NextJs',
    percentage: '95%',
  },
  {
    label: 'Bootstrap',
    percentage: '95%',
  },
  {
    label: 'Jest',
    percentage: '95%',
  },
  {
    label: 'MySQL',
    percentage: '80%',
  },
  {
    label: 'Webpack',
    percentage: '95%',
  },
  {
    label: 'C',
    percentage: '70%',
  },
  {
    label: 'Python',
    percentage: '70%',
  },
  {
    label: 'Angular',
    percentage: '90%',
  },
  {
    label: 'Django',
    percentage: '75%',
  },
  {
    label: 'SASS',
    percentage: '95%',
  },
  {
    label: 'XML',
    percentage: '95%',
  },
  {
    label: 'Wordpress',
    percentage: '95%',
  },
  {
    label: 'Swagger',
    percentage: '95%',
  },
  {
    label: 'Git',
    percentage: '95%',
  },
];

const SKILLS_LIST_2 = [
  {
    label: 'HTML',
    percentage: '90%',
  },
  {
    label: 'Node.js',
    percentage: '90%',
  },
  {
    label: 'TypeScript',
    percentage: '90%',
  },
  {
    label: 'Redux Saga/Thunk',
    percentage: '95%',
  },
  {
    label: 'React Hooks',
    percentage: '95%',
  },
  {
    label: 'Java',
    percentage: '95%',
  },
  {
    label: 'Enzyme',
    percentage: '95%',
  },
  {
    label: 'Bootstrap',
    percentage: '95%',
  },
  {
    label: 'Docker',
    percentage: '95%',
  },
  {
    label: 'C++',
    percentage: '75%',
  },
  {
    label: 'Machine Learning',
    percentage: '75%',
  },
  {
    label: 'Vue',
    percentage: '90%',
  },
  {
    label: 'Material UI/Ant Design',
    percentage: '90%',
  },
  {
    label: 'LESS',
    percentage: '95%',
  },{
    label: 'JSON',
    percentage: '95%',
  },
  {
    label: 'JQuery',
    percentage: '95%',
  },
  {
    label: 'Media Queries',
    percentage: '95%',
  },
  {
    label: 'Postman',
    percentage: '95%',
  },

];


  // const SKILLS_LIST_2 = [
  //   {
  //     label: 'Node.js',
  //     percentage: '90%',
  //   },
  //   {
  //     label: 'TypeScript',
  //     percentage: '90%',
  //   },
  //   {
  //     label: 'Redux Saga/Thunk',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'React Hooks',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'HTML',
  //     percentage: '90%',
  //   },
  //   {
  //     label: 'Java',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'Enzyme',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'Bootstrap',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'Docker',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'C++',
  //     percentage: '75%',
  //   },
  //   {
  //     label: 'Machine Learning',
  //     percentage: '75%',
  //   },
  //   {
  //     label: 'Vue',
  //     percentage: '90%',
  //   },
  //   {
  //     label: 'Material UI/Ant Design',
  //     percentage: '90%',
  //   },
  //   {
  //     label: 'LESS',
  //     percentage: '95%',
  //   },{
  //     label: 'JSON',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'JQuery',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'Media Queries',
  //     percentage: '95%',
  //   },
  //   {
  //     label: 'Postman',
  //     percentage: '95%',
  //   },

  // ];

const SKILLS_CARDS = ["Objective - C", "C#", "Ruby", "Swift","Azure", "AWS"];

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
    <section className="container" id="skills">
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
        </div>
      </section>
  );

export default Skills;