import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  fluid: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  placeholder: PropTypes.string,
}

const Input = ({ fluid, icon, iconPosition, placeholder }) => {
  return (
    <Form.Input
      fluid={fluid}
      icon={icon}
      iconPosition={iconPosition}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = propTypes

export default Input
