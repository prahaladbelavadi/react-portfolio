import React, { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;
    return (
      <span>
        <a href={link}>
          <img
            src={image}
            alt="social-profile"
            style={{ width: 35, height: 35, margin: 10 }}
          />
        </a>
      </span>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        <div>
          {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
            return (
              <SocialProfile
                key={SOCIAL_PROFILE.id}
                socialProfile={SOCIAL_PROFILE}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// class SocialProfile extends Component {
//   render() {
//     console.log("this.props", this.props);

//     const { id, image, link } = this.props.profile;

//     // return <div>{this.props.project.title}</div>;
//     return (
//       <div style={{ display: "inline-block", width: 300, margin: 10 }}>
//         <h3>{id}</h3>
//         <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
//         {/* <p>{description}</p> */}
//         <a href={link}>{link}</a>
//       </div>
//     );
//   }
// }

// class Profiles extends Component {
//   render() {
//     return (
//       <div>
//         <h2> Highlighted Projects </h2>
//         <div>
//           {SOCIAL_PROFILES.map((PROFILE) => {
//             return <Profile key={PROFILE.id} profile={PROFILE} />;
//           })}
//           {/* <div>{Projects[0].title}</div>
//           <div>{Projects[1].title}</div>
//           <div>{Projects[2].title}</div> */}
//         </div>
//       </div>
//     );
//   }
// }

export default SocialProfiles;
