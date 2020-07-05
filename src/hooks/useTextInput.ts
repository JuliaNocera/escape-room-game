import { useState } from 'react'

const useTextInput = (initialState: string = '') => {
  const [currentText, updateTextInput] = useState(initialState)

  const onChange = (value: string) => {
    updateTextInput(value)
  }

  return { currentText, onChange }
}

export default useTextInput
