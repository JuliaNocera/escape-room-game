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
  const { currentText, onTextChange } = useTextInput()

  const handleChange = (event: any) => {
    if (validate) {
      validate(event.currentTarget.value)
    }
    onTextChange(event.currentTarget.value)
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
