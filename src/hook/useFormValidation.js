import { useState } from 'react'

const validators = {
  required: (value) => (value?.trim() ? '' : 'This field is required'),
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter a valid email address',
  phone: (value) =>
    !value || /^[\d\s()+-]{7,}$/.test(value) ? '' : 'Enter a valid phone number',
  minLength: (min) => (value) =>
    value?.trim().length >= min ? '' : `Must be at least ${min} characters`,
}

export function useFormValidation(initialValues, rules) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    const fieldRules = rules[name]
    if (!fieldRules) return ''

    for (const rule of fieldRules) {
      const validatorFn = typeof rule === 'function' ? rule : validators[rule]
      const error = validatorFn(value)
      if (error) return error
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
  }

  const validateAll = () => {
    const newErrors = {}
    const newTouched = {}
    Object.keys(rules).forEach((name) => {
      newTouched[name] = true
      newErrors[name] = validateField(name, values[name])
    })
    setErrors(newErrors)
    setTouched(newTouched)
    return Object.values(newErrors).every((err) => !err)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return { values, errors, touched, handleChange, handleBlur, validateAll, reset, setValues }
}