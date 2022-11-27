import styled from 'styled-components';
import TimeLine from './Timeline';
import Animation from './Animation';
import Skills from './Skills';
import Awards from './Awards';
import ContactMe from './Contact';
import './Home.css';

const Home = (props) => {
    return (
        <Container>
            <UserField>
                <img src="images/Picture111.png" alt="logo">
                </img>
                <Title>
                    <Designation>Software Engineer/Full Stack Developer </Designation>
                    <Name>Himanshu Soni</Name>
                    <hr className="green-line"/>
                    <Description>
                    Graduate Student in CS @ Colorado State University | Seeking Summer '23 Internships. Currently, I'm working as Corporate Webmaster in Rocky Mountain Student Media Corp.
                    </Description>
                    <Description>
                        My specialties are in ReactJs, Nodejs and Java application development
                    </Description>
                    <Controls>
                        <DownloadCV href="/files/Himanshu_resume_n5.pdf" target="_blank">Download CV</DownloadCV>
                        <a href='#about'>
                            <Contact>About</Contact>
                        </a>
                    </Controls>
                </Title>
            </UserField>
            <TimeLine />
            <Skills />
            {/* <Awards /> */}
            <Animation />
            <ContactMe /> 
            <Temp />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 50px);
    overflow-x: hidden;
    display: block;
    // top: 75px;
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;

    &:after {
        // background-image: radial-gradient(circle, #3b3636, #2e2a2b, #211f20, #151415, #040404);
        // background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        height: 100vh;
        width: 100%;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

const UserField = styled.div`
    margin-top: 18vh;
    z-index: 3;
    display: grid;
    grid-gap: 50px;
    gap: 50px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 18vh;
    // max-width: calc(100vh - 7);

    // img {
    //     border-radius: 4px;
    //     margin-top: -24vh;
    //     min-height: 110vh;
    //     min-width: 75vh;
    //     max-height: 45vh;
    //     margin-left: -4vw;
    //     max-width: 35vh;
    //     // border: 10px solid #cdc9c3;
    //     object-fit: cover;
    //     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    // }

    img {
        border-radius: 20%;
        min-height: 45vh;
        max-height: 45vh;
        max-width: 45vw;
        margin-top: 12vh;
        margin-left: 5vw;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }

    @media(max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        
        img {
            min-height: 45vh;
            max-height: 45vh;
            max-width: 95%;
            margin-left: 5%;
            margin-right: 5%;
        }
    }
`;

const Title = styled.div`
    margin-left: -12vw;
    margin-top: 15vh;
    color: #b2aca2;
    font-size: 18px;
    letter-spacing: 1.10px;
    
    @media(max-width: 731px) {
        font-size: 14px;
        margin-left: 4%;
        max-width: 90%;
        margin-top: 50px;
    }

    @media(max-width: 768px) {
        max-width: 90%;
        margin-left: 6%;
    }
`;

const Designation = styled.div`
    font-size: 22px;

    @media(max-width: 731px) {
        font-size: 16px;
    }
`;

const Name = styled.div`
    padding: 10px 0 0 0;
    font-size: 65px;
    color: #FFF;
    // text-decoration: underline solid white;

    @media(max-width: 731px) {
        font-size: 35px;
    }
`;

const Description = styled.div`
    font-family: 'Poppins', Helvetica, sans-sarif !important;
    margin-top: 20px;
    font-style: normal;
    line-height: 1.65em;
    max-width: 45vw;
    font-size: 18px;
    letter-spacing: 1.5px;

    @media(max-width: 731px) {
        font-size: 16px;
        max-width: 100%;
    }
`;

const Controls = styled.div`
    margin-top: 35px;
`;

const DownloadCV = styled.a`
    max-width: 130px;
    color: rgb(232, 230, 227);
    background-color: rgb(38, 42, 43);
    box-shadow: rgb(0 0 0 / 78%) 0px 10px 10px -8px;
    display: inline-block;
    position: relative;
    padding: .8em 2.1em;
    margin-bottom: .75em;
    margin-right: .75em;
    font-size: 1em;
    line-height: 1.2;
    border: 0;
    outline: 0;
    border: 2px solid rgb(196, 216, 1);
    color: #fff;
    text-shadow: none;
    background-color: #333;
    border-radius: 30px;
    font-family: 'Poppins', Helvetica, sans-serif;
    transition: all 0.3s ease-in-out;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    &:hover {
        background-color:  #1f2020;
        // color: #fff;
    }
`;

const Contact = styled.a`
    max-width: 130px;
    border-color: rgb(60, 65, 67);
    color: rgb(232, 230, 227);
    background-color: rgb(38, 42, 43);
    box-shadow: rgb(0 0 0 / 78%) 0px 10px 10px -8px;
    display: inline-block;
    position: relative;
    padding: .8em 2.1em;
    margin-bottom: .75em;
    margin-right: .25em;
    font-size: 1em;
    line-height: 1.2;
    border: 0;
    outline: 0;
    border: 2px solid rgb(102, 94, 83);
    // border: 2px solid rgb(196, 216, 1);
    color: #fff;
    text-shadow: none;
    background-color: #333;
    border-radius: 30px;
    font-family: 'Poppins', Helvetica, sans-serif;
    transition: all 0.3s ease-in-out;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    &:hover {
        background-color:  #1f2020;
    }
`;

const Temp = styled.div`
    margin-bottom: 220px;
`;

export default Home;