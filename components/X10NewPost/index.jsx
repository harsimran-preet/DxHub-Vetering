import React from "react";
import Group from "../Group";
import Group8821 from "../Group8821";
import Fab from "../Fab";
import Button from "../Button";
import Button2 from "../Button2";
import "./X10NewPost.css";
import { Avatar, Grid } from "@nextui-org/react";
import { deepOrange } from "@mui/material/colors";

function X10NewPost(props) {
  const {
    newPost,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    groupProps,
    group8821Props,
    fabProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x10-new-post screen">
        <div className="overlap-group4-3">
          <div className="flex-row-4">
            <div className="try poppins-medium-daintree-24px">New Post</div>
          </div>
          <div className="overlap-group5-3">
            <Avatar
              size="xxl"
              src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
              color="gradient"
              bordered
            />
          </div>
          <div className="overlap-group-13">
            <img className="vector-10" src="/img/vector-5@2x.svg" />
            <div className="rectangle-2145-3"></div>
            <input
              className="job-type poppins-medium-black-14px"
              name="jobtype_"
              placeholder={inputPlaceholder1}
              type={inputType1}
            />
          </div>
          <div className="overlap-group2-6">
            <img className="vector-10" src="/img/vector-9@2x.svg" />
            <div className="rectangle-2145-4"></div>
            <textarea
              className="description poppins-medium-black-14px"
              name="description_"
              placeholder={inputPlaceholder2}
              type={inputType2}
            ></textarea>
          </div>
          <div className="overlap-group1-7">
            <div className="rectangle-2145-3"></div>
            <input
              className="location poppins-medium-black-14px"
              name="location_"
              placeholder={inputPlaceholder3}
              type={inputType3}
            />
          </div>
          <div className="button-container">
            <Button />
            <Button2 />
          </div>
          <div className="home-indicator-8"></div>
        </div>
      </div>
    </div>
  );
}

export default X10NewPost;