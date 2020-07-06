import React, { FC } from 'react'

import { DefaultSubmitDisabledState } from './types'

interface InvalidInputMessageProps {
  submitDisabled: DefaultSubmitDisabledState
}

const InvalidInputMessage: FC<InvalidInputMessageProps> = ({
  submitDisabled,
}) => (
  <div className="InvalidInputMessage">
    {submitDisabled.isDisabled && <span>{submitDisabled.disabledReason}</span>}
    {submitDisabled.invalidChars.length > 0 &&
      submitDisabled.invalidChars.map((char, index) => (
        <span className="Home-disabledReason" key={index}>
          {char}
        </span>
      ))}
  </div>
)

export default InvalidInputMessage
