const acceptableCharactersForGameName = RegExp('[^A-Za-z0-9- ]+', 'g')

export const findUnacceptableCharsForGameName = (inputString: string) => {
  return inputString.match(acceptableCharactersForGameName)
}

export const trimSpaces = (str: string) => str.trim()

export const encodeString = (str: string) => {
  const trimmedString = trimSpaces(str)
  return encodeURIComponent(trimmedString)
}

export const decodeString = (str: string) => {
  return decodeURIComponent(str)
}
