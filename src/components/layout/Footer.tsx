import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';
import { ACCENT, NAV_LINKS, COMPANY } from '@/lib/data';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-[#0e0c08] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={COMPANY.name}
                width={160}
                height={48}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              All-inclusive intimate event venue in Webster, Texas — bridal
              showers, baby showers, and celebrations for up to {COMPANY.maxGuests}{' '}
              guests.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="text-white text-xs tracking-[0.25em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#da8990] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-[0.25em] uppercase mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 hover:text-[#da8990] transition-colors"
                >
                  <Phone size={14} style={{ color: ACCENT }} className="flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 hover:text-[#da8990] transition-colors"
                >
                  <Mail size={14} style={{ color: ACCENT }} className="flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  style={{ color: ACCENT }}
                  className="flex-shrink-0 mt-0.5"
                />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <p>{COMPANY.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
