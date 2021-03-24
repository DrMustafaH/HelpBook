import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import "./NewsLog.scss";

const data = [
  {
    news:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit aliquam metus et tristique. Pellentesque.",
    avatar:
      "https://i.pinimg.com/originals/d7/e6/fe/d7e6fe6c4e540f6468d8638f5008c1d9.jpg",
  },
  {
    news:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec neque non magna interdum iaculis.",
    avatar: "https://1000logos.net/wp-content/uploads/2017/01/GSK-Logo.png",
  },
  {
    news:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus metus, aliquet quis dolor vitae.",
    avatar:
      "https://mosaicbc.org/wp-content/uploads/2016/05/MOSAIC-icon-F-square.png",
  },
  {
    news:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec neque non magna interdum iaculis.",
    avatar:
      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  },
  {
    news:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit aliquam metus et tristique. Pellentesque.",
    avatar:
      "https://images.squarespace-cdn.com/content/v1/56d1fe3ed210b8b23f16d059/1570556718932-WIJCJYKJFXOVONOG9O42/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/UNHCR%2Blogo.jpg",
  },
];

// withstyles method to style the Paper MUI react component and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    width: "100%",
    color: "#0E212F",
    display: "flex",
    flexDirection: "column",
    fontFamily: "adobe-caslon-pro, serif",
    fontWeight: "700",
    maxHeight: 200,
    overflow: "auto",
  },
})(Paper);

export default function NewsLog() {
  return (
    <div className="newslog-section">
      <StyledPaper>
        <h1 className="newslog-heading">News Log</h1>
        <div className="news-items">
          <div className="newslog-item">
            <p className="newslog-news">
              <img
                className="newslog-avatar"
                alt="avatar"
                src={data[0].avatar}
              ></img>
              {data[0].news}
            </p>
          </div>
          <div className="newslog-item">
            <p className="newslog-news">
              <img
                className="newslog-avatar"
                alt="avatar"
                src={data[1].avatar}
              ></img>
              {data[1].news}
            </p>
          </div>
          <div className="newslog-item">
            <p className="newslog-news">
              <img
                className="newslog-avatar"
                alt="avatar"
                src={data[2].avatar}
              ></img>
              {data[2].news}
            </p>
          </div>
          <div className="newslog-item">
            <p className="newslog-news">
              <img
                className="newslog-avatar"
                alt="avatar"
                src={data[3].avatar}
              ></img>
              {data[3].news}
            </p>
          </div>
          <div className="newslog-item">
            <p className="newslog-news">
              <img
                className="newslog-avatar"
                alt="avatar"
                src={data[4].avatar}
              ></img>
              {data[4].news}
            </p>
          </div>
        </div>
      </StyledPaper>
    </div>
  );
}
