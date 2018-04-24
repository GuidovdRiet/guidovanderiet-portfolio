import React from "react";
import styled from "styled-components";

const LinkedInIcon = styled.svg`
  width: 15px;
`;

const Link = styled.a``

const LinkedIn = () => (
  <Link target="_blank" href="https://www.linkedin.com/in/guido-van-de-riet-4a3246108/">
    <LinkedInIcon viewBox="0 0 9.92 9.48">
      <path
        d="M11,5.81V9.48H8.89V6.06c0-.86-0.31-1.45-1.08-1.45a1.16,1.16,0,0,0-1.09.78,1.46,1.46,0,0,0-.07.52V9.48H4.52s0-5.8,0-6.39H6.65V4h0V4A2.11,2.11,0,0,1,8.57,2.93C10,2.93,11,3.85,11,5.81h0ZM2.3,0a1.11,1.11,0,1,0,0,2.21h0A1.11,1.11,0,1,0,2.3,0h0ZM1.22,9.48H3.35V3.08H1.22V9.48Zm0,0"
        transform="translate(-1.1)"
      />
    </LinkedInIcon>
  </Link>
);

export default LinkedIn;
