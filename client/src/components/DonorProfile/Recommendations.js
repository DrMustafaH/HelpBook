import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import "./Recommendations.scss";

const data = [
  {
    name: "Animal Life",
    avatar:
      "https://i.pinimg.com/originals/d7/e6/fe/d7e6fe6c4e540f6468d8638f5008c1d9.jpg",
  },
  {
    name: "GlaxoSmithKline",
    avatar: "https://1000logos.net/wp-content/uploads/2017/01/GSK-Logo.png",
  },
  {
    name: "Mosaic BC",
    avatar:
      "https://mosaicbc.org/wp-content/uploads/2016/05/MOSAIC-icon-F-square.png",
  },
  {
    name: "Mia Micheal",
    avatar:
      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  },
  {
    name: "The UN Refugee Agency",
    avatar:
      "https://images.squarespace-cdn.com/content/v1/56d1fe3ed210b8b23f16d059/1570556718932-WIJCJYKJFXOVONOG9O42/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/UNHCR%2Blogo.jpg",
  },
];

// withstyles method to style the Paper MUI react component and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    width: "50%",
    margin: "30px 0 30px 10px",
    color: "#0E212F",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "adobe-caslon-pro, serif",
    maxHeight: 350,
    overflow: "auto",
  },
})(Paper);

// Recommendation section
export default function Recommendations() {
  return (
    <StyledPaper>
      <div className="recommendations-section">
        <h1 className="recommendations-heading">Recommendations For You</h1>
        <div className="recommendations-items">
          <div>
            <img
              className="recommendation-avatar"
              alt="avatar"
              src={data[0].avatar}
            ></img>
            <p className="recommendation-name">{data[0].name}</p>
          </div>
          <div>
            <img
              className="recommendation-avatar"
              alt="avatar"
              src={data[1].avatar}
            ></img>
            <p className="recommendation-name">{data[1].name}</p>
          </div>
          <div>
            <img
              className="recommendation-avatar"
              alt="avatar"
              src={data[2].avatar}
            ></img>
            <p className="recommendation-name">{data[2].name}</p>
          </div>
          <div>
            <img
              className="recommendation-avatar"
              alt="avatar"
              src={data[3].avatar}
            ></img>
            <p className="recommendation-name">{data[3].name}</p>
          </div>
          <div>
            <img
              className="recommendation-avatar"
              alt="avatar"
              src={data[4].avatar}
            ></img>
            <p className="recommendation-name">{data[4].name}</p>
          </div>
        </div>
      </div>
    </StyledPaper>
  );
}
