import { useState } from 'react'

const useTextInput = (initialState: string = '') => {
  const [currentText, updateTextInput] = useState(initialState)

  const onTextChange = (value: string) => {
    updateTextInput(value)
  }

  return { currentText, onTextChange }
}

export default useTextInput
