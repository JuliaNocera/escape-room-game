import React, { FC } from 'react'
import useTextInput from '../../hooks/useTextInput'

interface TextInputProps {
  validateInput?: (input: string) => boolean
  onEnter: (input: string) => void
  disabled?: boolean
  placeholderText?: string
  autoFocus?: boolean
}

const TextInput: FC<TextInputProps> = ({
  validateInput,
  onEnter,
  disabled = false,
  placeholderText = 'Game Name',
  autoFocus = false,
}) => {
  const { currentText, onTextChange } = useTextInput()

  const handleChange = (event: any) => {
    if (validateInput) {
      validateInput(event.currentTarget.value)
    }
    onTextChange(event.currentTarget.value)
  }

  const clearInput = () => onTextChange('')

  const submitEnabled = currentText.length > 0

  const onSubmit = (currentText: string) => {
    onEnter(currentText)
    clearInput()
  }

  return (
    <form
      onSubmit={(event: any) => {
        event.preventDefault()
        onSubmit(currentText)
      }}
    >
      <input
        type="text"
        value={currentText}
        onChange={handleChange}
        placeholder={placeholderText}
        autoFocus={autoFocus}
      />
      <input
        type="submit"
        value="Submit"
        disabled={!submitEnabled || disabled}
      />
    </form>
  )
}

export default TextInput
