import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/constants';

const Toggler = ({
  onClick,
  toggled
}) => (
  <ToggleBar onClick={onClick} className={toggled ? 'toggledBar' : ''} />
);

const ToggleBar = styled.div`
  cursor: pointer;
  position: relative;
  width: 54px;
  height: 23px;
  background: rgba(103, 37, 244, 0.07);
  border: 1px solid #6725F4;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  &::after, &::before {
    position: absolute;
    content: '';
    border-radius: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
    transition: all 0.2s ease-in-out;
  }
  &::after {
    height: 17px;
    width: 17px;
    background-color: ${colors.PaveLavender};
    left: 3px;
  }
  &::before {
    height: 5px;
    width: 5px;
    background-color: #fff;
    left: 9px;
    z-index: 1;
  }

  @media (max-width: 576px) {
    width: 39px;
    height: 16px;
    &::after {
      height: 13px;
      width: 13px;
    }
    &::before {
      left: 7px;
    }
  }

  &.toggledBar {
    &::after {
      left: calc(100% - 3px);
      transform: translateX(-100%);
      background-color: ${colors.HanPurple};
    }
    &::before {
      left: calc(100% - 9px);
      transform: translateX(-100%);
    }
  }
`;

export default Toggler;
