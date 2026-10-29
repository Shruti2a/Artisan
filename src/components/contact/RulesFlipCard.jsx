import { useState } from 'react'
import { MessageSquare, CheckCircle, RotateCcw } from 'lucide-react'

const companyRules = [
    'Responses are typically sent within 24-48 hours',
    'Please provide accurate contact details for follow-up',
    'Group bookings require at least 2 weeks advance notice',
    'Press inquiries are handled by our communications team',
    'All submissions are reviewed by our gallery staff',
]

export default function RulesFlipCard() {
    const [flipped, setFlipped] = useState(false)

    return (
        <div className="mb-6" style={{ perspective: '1200px' }}>
            <div
                onClick={() => setFlipped((f) => !f)}
                className="relative w-full h-40 cursor-pointer transition-transform duration-700"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 rounded-2xl bg-slate-900 text-white p-6 flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="flex items-center gap-2.5">
                        <MessageSquare size={20} />
                        <h3 className="font-display text-lg font-semibold">Before You Reach Out</h3>
                    </div>
                    <p className="text-sm text-slate-300">
                        Tap to view our contact guidelines & response policy
                    </p>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 rounded-2xl bg-white border-2 border-slate-900 pl-6  pt-2 overflow-y-auto"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="flex items-center pr-6 justify-between mb-3">
                        <h3 className="font-semibold text-slate-900 text-sm">Our Guidelines</h3>
                        <RotateCcw size={18} className="text-slate-400"/>
                    </div>
                    <ul className="space-y-1.5">
                        {companyRules.map((rule) => (
                            <li key={rule} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                                {rule}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}