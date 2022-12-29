import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const NotMutedLink = styled.a`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  padding-top: 1rem;
  color: #5f5d5d;
`;

export const MutedLink = styled.a`
  font-size: 0.9rem;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  padding-top: 1rem;
  color: #5f5d5d;
  cursor: default;
`;

export const BoldLink = styled.a`
  font-size: 1.1rem;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.6rem;
  outline: none;
  border: 1px solid #7a7878;
  padding: 0px 0.7rem;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: #808080;
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid #7a7878;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #999696;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  padding-top: 2rem;
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
    background-color: #39b54a;
  }
`;
