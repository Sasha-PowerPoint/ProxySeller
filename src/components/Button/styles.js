import styled from 'styled-components';

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #0d172a;
  cursor: pointer;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
  padding: 1rem 1.6rem;
  font-family:"Ysabeau SC", sans-serif;
  text-align: center;
  text-decoration: none #0d172a solid;
  text-decoration-thickness: auto;
  transition: all .1s cubic-bezier(.4, 0, .2, 1);
  box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #1e293b;
    color: #fff;
  }
`;

