import styled from 'styled-components';
import {
  colors
} from '@/constants';

export const ButtonPrimary = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid #6725f4;
  background: #6725f4;
  color: #fff;
  display: flex;
  align-items: center;
  max-width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 10px;
    filter: brightness(100);
  }

  span {
    font-size: 14px;
    color: inherit;
  }

  &:hover {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    color: #6725f4;
    background: #fff;

    img {
      filter: unset;
    }
  }
`;

export const ButtonOutlined = styled(ButtonPrimary)`
  color: #6725f4;
  background: transparent;

  img {
    height: 15px;
    filter: unset;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ButtonWarning = styled(ButtonOutlined)`
  border-color: ${colors.DarkOrange};
  color: ${colors.DarkOrange};

  &:hover {
    color: ${colors.DarkOrange};
  }
`;

export const ButtonDanger = styled(ButtonOutlined)`
  border-color: red;
  color: red;

  &:hover {
    color: red;
  }
`;

export const Badge = styled.div`
  border-radius: 5px;
  background-color: ${colors.Magnolia};
  font-size: 12px;
  padding: 5px 15px;
  border: 1px solid ${colors.PaveLavender};
`;
