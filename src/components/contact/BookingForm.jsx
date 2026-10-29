import { useState } from 'react'
import { Users, Calendar } from 'lucide-react'
import Button from '../ui/Button'

export default function BookingForm() {
    const [form, setForm] = useState({
        orgName: '',
        contactPerson: '',
        email: '',
        phone: '',
        date: '',
        groupSize: '',
        visitType: '',
        notes: '',
    })
    const [sent, setSent] = useState(false)

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => setSent(false), 3000)
        setForm({
            orgName: '',
            contactPerson: '',
            email: '',
            phone: '',
            date: '',
            groupSize: '',
            visitType: '',
            notes: '',
        })
    }

    const inputClass =
        'w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-900/15 focus:border-slate-300'

    return (
        <div className="reveal-item rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex items-center gap-2.5 mb-2">
                <Users size={20} className="text-slate-900" />
                <h2 className="font-display text-xl font-semibold text-slate-900">Book a Visit</h2>
            </div>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Reserve a private tour, group visit, or special event. Perfect for schools, corporate
                groups, and art enthusiasts.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Organization/Group Name
                    </label>
                    <input
                        name="orgName"
                        value={form.orgName}
                        onChange={handleChange}
                        required
                        placeholder="Art Appreciation Society"
                        className={inputClass}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Contact Person
                    </label>
                    <input
                        name="contactPerson"
                        value={form.contactPerson}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                        className={inputClass}
                    />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="contact@example.com"
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            className={inputClass}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Preferred Date
                    </label>
                    <div className="relative">
                        <Calendar
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className={`${inputClass} pl-10`}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Group Size</label>
                    <select
                        name="groupSize"
                        value={form.groupSize}
                        onChange={handleChange}
                        className={inputClass}
                    >
                        <option value="">Select group size</option>
                        <option value="1-5">1–5 people</option>
                        <option value="6-15">6–15 people</option>
                        <option value="16-30">16–30 people</option>
                        <option value="30+">30+ people</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Visit Type</label>
                    <select
                        name="visitType"
                        value={form.visitType}
                        onChange={handleChange}
                        className={inputClass}
                    >
                        <option value="">Select visit type</option>
                        <option value="guided">Guided Tour</option>
                        <option value="self">Self-Guided</option>
                        <option value="private">Private Event</option>
                        <option value="school">School Program</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Additional Notes
                    </label>
                    <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any special requirements or questions..."
                        className={inputClass}
                    />
                </div>

                <Button type="submit" className="w-full">
                    {sent ? 'Request Sent ✓' : 'Submit Booking Request'}
                </Button>

                <p className="text-xs text-slate-400 leading-relaxed">
                    We'll confirm your booking within 24-48 hours. Group bookings require at least 2 weeks
                    advance notice.
                </p>
            </form>
        </div>
    )
}