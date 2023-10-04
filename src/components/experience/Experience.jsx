import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>what skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>frontend Development</h3>
          <div className="experience__content">
            <article className="experience_-details">
              <BsPatchCheckFill className="experience__datails-icon"/>
              <div>
                
                <h4>html</h4>
                <small className="text-light">experience</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill  className="experience__datails-icon"/>
              <div>
                <h4>css</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill className="experience__datails-icon"/>
              <div>
                <h4>javascript</h4>
                <small className="text-light">basic</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill  className="experience__datails-icon"/>
              <div>
                <h4>react</h4>
                <small className="text-light">basic</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill  className="experience__datails-icon"/>
              <div>
                <h4>tailwind</h4>
                <small className="text-light">basic</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill  className="experience__datails-icon"/>
              <div>
                <h4>bootstrap</h4>
                <small className="text-light">basic</small>
              </div>
            </article>
          </div>
        </div>
        {/****************** */}
        <div className="experience__backend">
          <h3>backend Development</h3>
          <div className="experience__content">
            <article className="experience_-details">
              <BsPatchCheckFill  className="experience__datails-icon"/>
              <div>
                <h4>node js</h4>
                <small className="text-light">experience</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill  className="experience__datails-icon"/>
              <div>
                <h4>python</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill  className="experience__datails-icon"/>
              <div>
                <h4>my sql</h4>
                <small className="text-light">basic</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill className="experience__datails-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience_-details">
              <BsPatchCheckFill className="experience__datails-icon" />

              <div>
                <h4>javascript</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
