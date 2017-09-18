import React, { PureComponent } from 'react'

import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Input extends PureComponent {
  static propTypes = {
    fluid: PropTypes.bool,
    icon: PropTypes.string,
    iconPosition: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.bool,
    meta: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string
  }
  render() {
    const {
      input,
      meta: { error, touched },
      fluid,
      icon,
      iconPosition,
      placeholder,
      required,
      label,
      type
    } = this.props
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
}
