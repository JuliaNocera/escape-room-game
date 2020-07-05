import React, { FC } from 'react'
import useTextInput from '../../hooks/useTextInput'

interface TextInputProps {
  validate?: (input: string) => void
  onEnter: (input: string) => void
  placeholderText?: string
}

const TextInput: FC<TextInputProps> = ({
  validate,
  onEnter,
  placeholderText = 'Game Name',
}) => {
  const { currentText, onChange } = useTextInput()
  // TODO: sanitize input

  const handleChange = (event: any) => {
    if (validate) {
      // TODO: visualize validation errors
      validate(event.currentTarget.value)
    }
    onChange(event.currentTarget.value)
  }

  const submitEnabled = currentText.length > 0

  return (
    <form
      onSubmit={(event: any) => {
        event.preventDefault()
        onEnter(currentText)
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
