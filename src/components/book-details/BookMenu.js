import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
list-style:none;
padding:0;
li {
padding:4px;
margin: 5px;
background-color:#f0f0f0;
display: inline-block;
`;

function BookMenu({ url }) {
  const location = useLocation();
  console.log(location);

  return (
    <StyledUl>
      <nav>
        <ul>
          <li>
            <Link to={""}>일반정보</Link>
          </li>
          <li>
            <Link to={"authors"}>작가정보</Link>
          </li>
          <li>
            <Link to={"photos"}>작가사진</Link>
          </li>
        </ul>
      </nav>
    </StyledUl>
  );
}

export default BookMenu;
