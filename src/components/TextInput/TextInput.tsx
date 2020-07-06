import React, { FC } from 'react'
import useTextInput from '../../hooks/useTextInput'

interface TextInputProps {
  isValidInput?: (input: string) => boolean
  onEnter: (input: string) => void
  placeholderText?: string
}

const TextInput: FC<TextInputProps> = ({
  isValidInput,
  onEnter,
  placeholderText = 'Game Name',
}) => {
  const { currentText, onTextChange } = useTextInput()

  const handleChange = (event: any) => {
    if (isValidInput) {
      const isValid = isValidInput(event.currentTarget.value)
      if (isValid) {
        onTextChange(event.currentTarget.value)
      } else {
        return
      }
    } else {
      onTextChange(event.currentTarget.value)
    }
  }

  const submitEnabled = currentText.length > 0

  const onSubmit = (currentText: string) => {
    onEnter(currentText)
    onTextChange('')
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
      />
      <input type="submit" value="Submit" disabled={!submitEnabled} />
    </form>
  )
}

export default TextInput
