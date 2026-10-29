import { Link2, Mail } from 'lucide-react'

export default function TeamCard({ member}) {
    return (
        <div className="reveal-item group relative">
            {/* Number badge - creative sequence marker */}
            {/* <span className="absolute -top-15 -left-2 font-display text-6xl font-bold text-slate-900/[0.06] select-none z-0">
                {String(index + 1).padStart(2, '0')}
            </span> */}

            <div className="relative rounded-2xl overflow-hidden bg-slate-900">
                {/* Photo */}
                <div className="aspect-[4/5] overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>

                {/* Gradient overlay always present for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {/* Social icons - slide up on hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-y-[-12px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                    {member.social?.linkedin && (
                        <a
                            href={member.social.linkedin}
                            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white hover:text-slate-900 text-white flex items-center justify-center transition-colors duration-300"
                        >
                            <Link2 size={15} />
                        </a>
                    )}
                    {member.social?.email && (
                        <a
                            href={member.social.email}
                            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white hover:text-slate-900 text-white flex items-center justify-center transition-colors duration-300"
                        >
                            <Mail size={15} />
                        </a>
                    )}
                </div>

                {/* Text block - bio slides up into view on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl font-semibold text-white">
                        {member.name}
                    </h3>
                    <p className="text-sm text-slate-300 mt-0.5">{member.title}</p>

                    <p
                        className="text-sm text-slate-300 leading-relaxed mt-3 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden"
                    >
                        {member.bio}
                    </p>
                </div>
            </div>
        </div>
    )
}