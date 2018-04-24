import React from "react";
import styled from "styled-components";

const GitHubIcon = styled.svg`
  width: 19px;
  transition: all .3s ease-in-out;
  &:hover {
    > path {
      fill: #6882E0;
    }
  }
`;

const Link = styled.a``;

const Github = () => (
  <Link target="_blank" href="https://github.com/GuidovdRiet">
    <GitHubIcon viewBox="0 0 11.87 9.1">
      <path d="M8.67,0a2.06,2.06,0,0,1,.11,1.36A3,3,0,0,1,9.3,4.18a10.24,10.24,0,0,1,2.57.24,11.66,11.66,0,0,0-2.28-.18c-0.15,0-.38,0-0.37.21a12.51,12.51,0,0,1,2.63.39,19.34,19.34,0,0,0-2.63-.34A2.51,2.51,0,0,1,7,5.72a1.93,1.93,0,0,1,.39.76,9.15,9.15,0,0,0,.08,1.91,3.35,3.35,0,0,0,.37.37c-0.27.31-.92,0-1-0.37C6.67,7.82,7,6.94,6.65,6.56a9.35,9.35,0,0,0,0,2,0.94,0.94,0,0,1,.21.5C5.65,9.22,6.16,7.5,6,6.48c-0.19,0-.1.28-0.11,0.39,0,1,.2,2.35-0.87,2.22A0.93,0.93,0,0,1,5.2,8.62a13,13,0,0,0,.05-2.06c-0.41.31,0,1.38-.21,1.93a0.79,0.79,0,0,1-1,.31,2.09,2.09,0,0,1,.39-0.42,4.81,4.81,0,0,0,.05-1.2,1.44,1.44,0,0,1-1.63-.5A5,5,0,0,0,2.57,6,1.42,1.42,0,0,1,2.1,5.57c0.94-.23,1,1,1.81,1a2,2,0,0,0,.63-0.13A1.11,1.11,0,0,1,5,5.75,2.79,2.79,0,0,1,2.65,4.49,14.31,14.31,0,0,0,0,4.86a8.69,8.69,0,0,1,2.6-.39C2.57,4.13,2.07,4.22,1.76,4.23A14.39,14.39,0,0,0,0,4.42a8.24,8.24,0,0,1,2.5-.21,3,3,0,0,1,.42-2.74A1.88,1.88,0,0,1,3,0a2.73,2.73,0,0,1,1.5.6A5.23,5.23,0,0,1,6.3.42c0.3,0,.61.15,0.84,0.13A2.94,2.94,0,0,0,7.83.18,2.11,2.11,0,0,1,8.67,0h0Zm0,0" />
    </GitHubIcon>
  </Link>
);

export default Github;
