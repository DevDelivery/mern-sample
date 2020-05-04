import React, { Component } from "react";
import styled from "styled-components";

import logo from "../icone.png";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper href="https://dev.delivery">
        <img src={logo} width="50" height="50" alt="devDelivery" />
      </Wrapper>
    );
  }
}

export default Logo;
