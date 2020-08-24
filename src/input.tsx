import React from 'react'
import {Control, Controller} from 'react-hook-form'
import type {FieldName} from 'react-hook-form/dist/types/form'
import type { ControllerProps } from 'react-hook-form/dist/types/props'

type Props<T extends Record<string, any>> = Omit<React.HTMLAttributes<HTMLInputElement>, 'name' | 'onFocus' | 'value'> & {
  control: Control<T>
  name: FieldName<T>
  rules?: ControllerProps<'input', Control<T>>['rules']
  onFocus?: ControllerProps<'input', Control<T>>['onFocus']
}

export function Input<T extends Record<string, any>>({control, name, defaultValue, rules, onFocus, ...props}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      onFocus={onFocus}
      render={innerProps => (
        <input
          {...props}
          {...innerProps}
          onChange={(...args) => {
            innerProps.onChange(...args)
            props.onChange?.(...args)
          }}
          onBlur={(...args) => {
            innerProps.onBlur()
            props.onBlur?.(...args)
          }}
        />
      )}
    />
  )
}
