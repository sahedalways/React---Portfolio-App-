import React from "react";
import "./profile.style.css";



class Profile extends React.Component {
    render () {
        return <section className="container">
            <div className="bio">
                <h3>Sahed Ahmed</h3>
                <p>I want to be a React and Laravel developer.</p>
            </div>

            <div className="skills">
                <h3>Skills :</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>Php</li>
                    <li>Python</li>
                </ul>
            </div>

            <div className="links">
                <h3>Social Network :</h3>
             <ul>
                    <li><a href="www.facebook.com">Facebook</a></li>
                    <li><a href="www.twitter.com">Twitter</a></li>
                   <li><a href="www.instagram.com">Instagram</a></li>
                   <li><a href="www.github.com">Github</a></li>
            </ul>
            </div>
        </section>
    }
}



export default Profile;