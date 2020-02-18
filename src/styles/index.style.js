import styled, { createGlobalStyle } from "styled-components";
import { device } from "./devices";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  * {
      box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background: #f6f5f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: -20px 0 50px;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`;

export const Overlay = styled.div`
  background: #31b4a1;
  background: linear-gradient(to right, #31b4a8, #31b4a1) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  /* Move signin to right */
  &.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }
  /* Move overlay to left */
  &.right-panel-active ${OverlayContainer} {
    transform: translateX(-100%);
  }
  /* Move signup over signin */
  &.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  }
  /* Move overlay back to right */
  &.right-panel-active ${Overlay} {
    transform: translateX(50%);
  }

  &.right-panel-active .overlay-left {
    transform: translateX(0);
  }
  &.right-panel-active .overlay-rigth {
    transform: translateX(20%);
  }
`;

export const Head = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const Link = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const Span = styled.span`
  font-size: 12px;
`;

export const Form = styled.form`
  background: #fff;
  text-align: center;
`;

export const Input = styled.input`
  background: #eee;
  border: none;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  form {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  input {
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
  &.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }
  &.sign-up-container {
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
  }
`;

export const SocialContainer = styled.div`
  margin: 20px;
  a {
    border: 1px solid #ddd;
    border-radius: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 40px;
    height: 40px;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #31b4a8;
  background: #31b4a8;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 800ms ease-in;
  cursor: pointer;
  &.ghost {
    background: transparent;
    border-color: #fff;
  }
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const OverlayPanel = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  &.overlay-right {
    right: 0;
    transform: translateX(0);
  }
  &.overlay-left {
    transform: translateX(-20%);
  }
`;
