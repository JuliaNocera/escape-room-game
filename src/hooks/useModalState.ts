import { useState } from 'react';

const useModalState = (initialState: boolean = false) => {
  const [ isOpen, setIsOpen ] = useState(initialState);

  return { isOpen, setIsOpen }
}

export default useModalState;