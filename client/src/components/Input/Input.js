import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  fluid: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.bool,
  meta: PropTypes.object,
  input: PropTypes.object
}

const Input = ({
  input,
  meta: { error, touched },
  fluid,
  icon,
  iconPosition,
  placeholder,
  required,
  label,
  type
}) => {
  return (
    <Form.Input
      fluid={fluid}
      type={type}
      error={touched && error}
      icon={icon}
      label={label}
      required={required}
      iconPosition={iconPosition}
      placeholder={placeholder}
      {...input}
    />
  )
}

Input.propTypes = propTypes

export default Input
