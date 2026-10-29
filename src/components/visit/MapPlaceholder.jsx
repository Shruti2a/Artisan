import { MapPin } from 'lucide-react'
import Button from '../ui/Button'

export default function MapPlaceholder() {
    return (
        <div id="map" className="reveal-item rounded-xl overflow-hidden aspect-[16/7] relative">
            <iframe
                title="Gallery Location"
                src="https://www.google.com/maps?q=New+York,+NY,+USA&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
            />
        </div>
    )
}