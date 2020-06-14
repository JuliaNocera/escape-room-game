import React, { PropsWithChildren } from 'react';

const PuzzleContainer = ({children}: PropsWithChildren<{}>) => (
  <div className="PuzzleContainer">
    {children}
  </div>
);

export default PuzzleContainer;