import logo from "./logo.svg";
import headshot from "./assets/headshot.jpg";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { SocialInfo } from "./components/SocialInfo";
import WorkExperience from "./components/WorkExperience";
function App() {
  const info = {
    image: headshot,
    fullName: "Matthew Dvertola",
    bio: "Just a software engineer trying to take over the world",
    socialLinks: [
      "https://www.linkedin.com/in/matthewdvertola/",
      "https://www.twitter.com/@MattDvertola",
      "https://www.instagram.com/mattdvertola/",
      "https://github.com/mdvertola",
      "https://stackoverflow.com/users/13401636/matthew-dvertola?tab=profile",
      "mailto:matt.dvertola@gmail.com",
    ],
    education: [
      {
        institution: "University of Arizona",
        title: "MS Management Information Systems",
        location: "Tucson, AZ",
        start: "2020",
        end: "2021",
      },
      {
        institution: "University of Arizona",
        title: "BS Management Information Systems",
        location: "Tucson, AZ",
        start: "2016",
        end: "2020",
      },
      {
        institution: "University of Arizona",
        title: "BS Economics",
        location: "Tucson, AZ",
        start: "2016",
        end: "2020",
      },
    ],
    workExperience: [
      {
        start:"May 2019",
        end:"Present",
        company: "Hunter Strategy",
        title: "Sr. Consultant",
        bulletPoints: ["built serverless web apps", "devsecops consultant for dod client", "aws partnership management"],
      },
    ],
    projects: ["https://www.leadhuntpro.com","https://creator-finance.com","https://www.shopme.bio"],
    styles: {
      background: "bg-gray-50",
      backgroundDark: "dark:bg-gray-500",
      textColor: "text-gray-800",
      textColorDark: "dark:text-gray-50",
      iconColor: "bg-white",
    },
  };
  return (
    <div
      className={`h-screen ${info.styles.background} ${info.styles.textColor} ${info.styles.backgroundDark} ${info.styles.textColorDark}`}
    >
      <div className={`container mx-auto pb-10`}>
        <Header info={info}/>
        <SocialInfo info={info}/>
        <Projects info={info}/>
        {/* <WorkExperience info={info}/> */}
        <Education info={info}/>
      </div>
    </div>
  );
}

export default App;
