import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        This is a sample About Us page for our restaurant application. Here you can find information about our mission, values, and the team behind the scenes.
      </p>
      <User name={"Priya D functional componant"}/>
      <UserClass name = {"Priya D using Class component"}/>
    </div>
  );
}

export default About;