import React from 'react';

export interface GeneralButtonProps {
  data: {
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: string;
  };
}
