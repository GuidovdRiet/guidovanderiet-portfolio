import React from "react";
import styled from "styled-components";

const CodepenIcon = styled.svg`
  width: 15px;
  &:hover {
    > path {
      fill: #6882e0;
    }
  }
`;

const Link = styled.a``;

const Codepen = () => (
  <Link target="_blank" href="https://codepen.io/GuidovdRiet/">
    <CodepenIcon viewBox="0 0 9.9 9.96">
      <path
        d="M1.08,3.51V3.34l0,0v0l0,0,0,0,0,0h0l4.53-3a0.42,0.42,0,0,1,.47,0l4.53,3h0l0,0,0,0,0,0v0l0,0V3.51a0.42,0.42,0,0,1,0,.06v3a0.42,0.42,0,0,1,0,.06V6.83l0,0v0l0,0,0,0,0,0h0L6.26,10a0.42,0.42,0,0,1-.47,0L1.26,7h0l0,0,0,0,0,0v0l0,0V6.66a0.45,0.45,0,0,1,0-.06v-3A0.44,0.44,0,0,1,1.08,3.51ZM5.6,1.33L2.27,3.57l1.49,1L5.6,3.33v-2Zm0.85,0v2L8.3,4.57l1.49-1Zm3.67,3-1.06.72L10.13,5.8V4.37ZM6.45,8.84L9.78,6.6,8.3,5.6,6.45,6.84v2ZM6,6.1l1.51-1L6,4.07l-1.5,1ZM5.6,8.84v-2L3.75,5.6l-1.49,1Zm-3.67-3L3,5.08,1.92,4.37V5.8Z"
        transform="translate(-1.07 -0.11)"
      />
    </CodepenIcon>
  </Link>
);

export default Codepen;
