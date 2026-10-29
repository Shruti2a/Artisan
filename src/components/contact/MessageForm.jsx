import { useState } from 'react'
import { MessageSquare, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import FormField from '../ui/FormField'
import RulesFlipCard from './RulesFlipCard'
import { useFormValidation } from '../../hook/useFormValidation'

export default function MessageForm() {
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const { values, errors, touched, handleChange, handleBlur, validateAll, reset } =
    useFormValidation(
      { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' },
      {
        firstName: ['required'],
        lastName: ['required'],
        email: ['required', 'email'],
        phone: ['phone'],
        subject: ['required'],
        message: ['required', (v) => (v?.trim().length >= 10 ? '' : 'Message must be at least 10 characters')],
      }
    )

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateAll()) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSubmitting(false)
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div className="reveal-item rounded-2xl border border-slate-200 bg-white p-8">
      <div className="flex items-center gap-2.5 mb-6">
        <MessageSquare size={20} className="text-slate-900" />
        <h2 className="font-display text-xl font-semibold text-slate-900">Send Us a Message</h2>
      </div>
      <RulesFlipCard />

      {sent ? (
        <div className="flex flex-1 flex-col items-center min-h-[560px] justify-center text-center bg-emerald-50 border border-emerald-200 rounded-xl">
          <CheckCircle2 size={40} className="text-emerald-500 mb-3" />
          <p className="font-semibold text-emerald-700">Message sent successfully!</p>
          <p className="text-sm text-emerald-600 mt-1">We'll get back to you within 24-48 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <FormField
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && errors.firstName}
              placeholder="John"
            />
            <FormField
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && errors.lastName}
              placeholder="Doe"
            />
          </div>

          <FormField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            placeholder="john@example.com"
          />

          <FormField
            label="Phone (Optional)"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone}
            placeholder="(555) 123-4567"
          />

          <FormField
            label="Subject"
            name="subject"
            as="select"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.subject && errors.subject}
            placeholder="Select a subject"
            options={[
              { value: 'general', label: 'General Inquiry' },
              { value: 'exhibitions', label: 'Exhibitions' },
              { value: 'artists', label: 'Artist Submission' },
              { value: 'press', label: 'Press' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <FormField
            label="Message"
            name="message"
            as="textarea"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message && errors.message}
            placeholder="Tell us how we can help..."
          />

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  )
}