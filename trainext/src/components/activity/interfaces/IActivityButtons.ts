import React from 'react';

export interface IActivityButtons {
  id: string;
  status?: string;
  onStatusChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
