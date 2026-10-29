import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Calendar, MapPin, X, CheckCircle2 } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import FormField from '../ui/FormField'
import { upcomingEvents } from '../../data/events'
import { useScrollReveal } from '../../hook/useScrollReveal'
import { useFormValidation } from '../../hook/useFormValidation'
import { gsap } from '../../lib/gsapSetup'

function RegisterModal({ event, onClose }) {
    const overlayRef = useRef(null)
    const panelRef = useRef(null)
    const [submitting, setSubmitting] = useState(false)
    const [sent, setSent] = useState(false)

    const { values, errors, touched, handleChange, handleBlur, validateAll } = useFormValidation(
        { name: '', email: '', guests: '1' },
        {
            name: ['required'],
            email: ['required', 'email'],
        }
    )

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        gsap.fromTo(
            panelRef.current,
            { scale: 0.92, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' }
        )
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    const closeModal = () => {
        gsap.to(panelRef.current, { scale: 0.92, opacity: 0, duration: 0.25, ease: 'power2.in' })
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.25,
            delay: 0.05,
            onComplete: onClose,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateAll()) return
        setSubmitting(true)
        await new Promise((r) => setTimeout(r, 1000))
        setSubmitting(false)
        setSent(true)
    }

    return createPortal(
        <div
            ref={overlayRef}
            className="fixed top-0 left-0 w-screen h-screen z-[999] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => e.target === overlayRef.current && closeModal()}
        >
            <div
                ref={panelRef}
                className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative p-6 sm:p-8"
            >
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                {sent ? (
                    <div className="flex flex-col items-center text-center py-8">
                        <CheckCircle2 size={40} className="text-emerald-500 mb-3" />
                        <p className="font-semibold text-slate-900">You're registered!</p>
                        <p className="text-sm text-slate-500 mt-1">
                            A confirmation email is on its way for {event.title}.
                        </p>
                        <Button variant="outline" className="mt-6" onClick={closeModal}>
                            Close
                        </Button>
                    </div>
                ) : (
                    <>
                        <p className="text-xs uppercase tracking-wide text-slate-400">Register for</p>
                        <h2 className="font-display text-xl font-semibold text-slate-900 mt-1">
                            {event.title}
                        </h2>
                        <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                            <Calendar size={14} />
                            {event.date}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 mt-6" noValidate>
                            <FormField
                                label="Full Name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && errors.name}
                                placeholder="Your name"
                            />
                            <FormField
                                label="Email"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && errors.email}
                                placeholder="you@example.com"
                            />
                            <FormField
                                label="Number of Guests"
                                name="guests"
                                as="select"
                                value={values.guests}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Select"
                                options={[
                                    { value: '1', label: 'Just me' },
                                    { value: '2', label: '2 people' },
                                    { value: '3', label: '3 people' },
                                    { value: '4', label: '4+ people' },
                                ]}
                            />
                            <Button type="submit" className="w-full" disabled={submitting}>
                                {submitting ? 'Registering...' : 'Confirm Registration'}
                            </Button>
                        </form>
                    </>
                )}
            </div>
        </div>,
        document.body
    )
}

function EventCard({ event, onRegister }) {
    return (
        <div className="reveal-item rounded-xl border border-slate-200 overflow-hidden bg-white h-full flex flex-col">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-slate-900 text-lg leading-snug">{event.title}</h3>
                <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
                    <Calendar size={15} />
                    <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 mt-1.5 text-sm text-slate-500">
                    <MapPin size={15} />
                    <span>{event.location}</span>
                </div>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed flex-1">{event.description}</p>
                <Button variant="outline" className="mt-5 w-full" onClick={() => onRegister(event)}>
                    Register
                </Button>
            </div>
        </div>
    )
}

export default function UpcomingEvents() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 30 })
    const [activeEvent, setActiveEvent] = useState(null)

    return (
        <section ref={containerRef} className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <SectionHeading
                    title="Upcoming Events"
                    subtitle="Join us for exhibitions, artist talks, and special programs"
                />

                <div className="hidden md:grid grid-cols-3 gap-8">
                    {upcomingEvents.map((event) => (
                        <EventCard key={event.id} event={event} onRegister={setActiveEvent} />
                    ))}
                </div>

                <div className="md:hidden">
                    <Swiper spaceBetween={20} slidesPerView={1.1}>
                        {upcomingEvents.map((event) => (
                            <SwiperSlide key={event.id}>
                                <EventCard event={event} onRegister={setActiveEvent} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {activeEvent && (
                <RegisterModal event={activeEvent} onClose={() => setActiveEvent(null)} />
            )}
        </section>
    )
}