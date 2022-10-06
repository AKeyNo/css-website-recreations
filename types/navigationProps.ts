import React, { MouseEventHandler } from 'react';

export interface NavigationProps {
  data: {
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: string;
  };
}
