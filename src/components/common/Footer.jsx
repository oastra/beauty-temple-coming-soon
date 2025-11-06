import Link from "next/link";
import BeautyTempleLogo from "@/components/ui/BeautyTempleLogo";

const BOOKING_URL =
  "https://squareup.com/appointments/book/REPLACE_WITH_YOUR_SQUARE_LINK";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-grey-100 to-primary-100 text-white pt-12 pb-10 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1400px] mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand + about */}
          <div>
            <Link href="/" className="inline-flex items-center mb-4">
              <BeautyTempleLogo size={120} />
            </Link>
            <p className="font-text text-sm text-white/85 leading-relaxed mt-3">
              A welcoming, elegant salon in Kogarah with 20+ years of expertise
              in hair colouring, precision cuts, nails, and brows.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg font-medium mb-3 tracking-wide">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                className="font-text text-sm text-white/85 hover:text-primary-20 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="font-text text-sm text-white/85 hover:text-primary-20 transition-colors"
              >
                Services
              </a>
              <a
                href="#rent"
                className="font-text text-sm text-white/85 hover:text-primary-20 transition-colors"
              >
                Rent a Space
              </a>
              <a
                href="#contact"
                className="font-text text-sm text-white/85 hover:text-primary-20 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-medium mb-3 tracking-wide">
              Get in Touch
            </h3>
            <div className="space-y-2 font-text text-sm text-white/85">
              <p>📍 1/46 Montgomery Street, Kogarah NSW 2217</p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:beautytemple2024@gmail.com"
                  className="hover:text-primary-20 transition-colors"
                >
                  beautytemple2024@gmail.com
                </a>
              </p>
              <p>
                ☎️{" "}
                <a
                  href="tel:+61407777179"
                  className="hover:text-primary-20 transition-colors"
                >
                  0407 777 179
                </a>
              </p>
              <p>
                📸{" "}
                <a
                  href="https://www.instagram.com/beautytempleau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-20 transition-colors"
                >
                  @beautytempleau
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70 font-text">
          <p>© {currentYear} Beauty Temple. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="hover:text-primary-20 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-primary-20 transition-colors"
            >
              Terms of Use
            </a>
          </div>
          <p>
            Website by{" "}
            <a
              href="https://olhachernysh.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-20 transition-colors font-medium"
            >
              Olha Chernysh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
