import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          
          <div className="greeting-image-div">
            <img
							alt="Tarak Siddhanta"
              width="711.1879"
              height="669.68268"
							src={require("../../assets/images/tarak.png")}
						></img>
            
          </div>

          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                  <div className="button-greeting-div">
                  <Button
                    text="Github"
                    newTab={true}
                    href={greeting.portfolio_repository}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                  <Button
                    text="Contact me"
                    newTab={false}
                    href="/contact"
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                  <Button
                    text="My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                  </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
