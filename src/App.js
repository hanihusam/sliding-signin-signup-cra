import React, { Fragment, useState } from "react";
import {
  GlobalStyles,
  Head,
  Text,
  Span,
  Link,
  Input,
  Form,
  Container,
  FormContainer,
  SocialContainer,
  Button,
  OverlayContainer,
  OverlayPanel,
  Overlay
} from "./styles/index.style";

function App() {
  const [panelActive, setPanelActive] = useState(false);
  const onSignInEvent = () => {
    setPanelActive(false);
  };

  const onSignUpEvent = () => {
    setPanelActive(true);
  };

  return (
    <Fragment>
      <GlobalStyles />
      <Container
        id="container"
        className={`${panelActive ? "right-panel-active" : ""}`}
      >
        <FormContainer className="sign-up-container">
          <Form action="#" onSubmit={e => e.preventDefault()}>
            <Head>Create Account</Head>
            <SocialContainer>
              <Link href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </SocialContainer>
            <Span>or use your email for registration</Span>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Password" />
            <Button>Sign Up</Button>
          </Form>
        </FormContainer>
        <FormContainer className="sign-in-container">
          <Form action="#">
            <Head>Sign In</Head>
            <SocialContainer>
              <Link href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </SocialContainer>
            <Span>or use your account</Span>
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Password" />
            <Link href="#">Forgot your password?</Link>
            <Button>Sign In</Button>
          </Form>
        </FormContainer>
        <OverlayContainer>
          <Overlay>
            <OverlayPanel className="overlay-left">
              <Head>Welcome Back!</Head>
              <Text>
                To keep connected with us please login with your personal info
              </Text>
              <Button className="ghost" id="signIn" onClick={onSignInEvent}>
                Sign In
              </Button>
            </OverlayPanel>
            <OverlayPanel className="overlay-right">
              <Head>Hello, Friend!</Head>
              <Text>Enter your personal details and start journey with us</Text>
              <Button className="ghost" id="signUp" onClick={onSignUpEvent}>
                Sign Up
              </Button>
            </OverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </Fragment>
  );
}

export default App;
