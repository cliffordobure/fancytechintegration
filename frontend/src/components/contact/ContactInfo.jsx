// components/contact/ContactInfo.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="3" />
    <line x1="18" y1="6" x2="17.5" y2="6.5" />
  </svg>
);

const ContactInfo = () => {
  const socialLinks = [
    {
      icon: FacebookIcon,
      href: "https://www.facebook.com/share/1C5boUNkPB/?mibextid=wwXIfr&ref=share",
      label: "Facebook",
    },
    {
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@fancy_tech_integration?_r=1&_t=ZS-94BqRrCsEm9",
      label: "TikTok",
    },
    {
      icon: YouTubeIcon,
      href: "https://youtube.com/@fancytechintegration?si=Co4IE5-BIU5EW-Cx",
      label: "YouTube",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/fancy_tech_juba?igsh=cWI2c3QxYjJjZWpp&utm_source=qr_code_scanner",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/0929097920",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h2 className="text-2xl font-bold mb-6">
        <span className="bg-gradient-to-r from-orange-400 to-blue-400 text-transparent bg-clip-text">
          Connect With Us
        </span>
      </h2>

      <p className="text-gray-400 mb-6">
        Follow us on social media for the latest updates, tech news, and
        exclusive offers.
      </p>

      {/* Minimal social row – icons with labels, no card backgrounds */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <div className="w-10 h-10 flex items-center justify-center text-current group-hover:scale-110 transition-transform duration-200">
              <social.icon />
            </div>
            <span className="text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      {/* Quick response message – more subtle and integrated */}
      <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 justify-center text-sm text-gray-500">
        <span className="text-orange-400">⚡</span>
        <span>
          We typically reply within{" "}
          <span className="text-orange-300 font-medium">2-4 hours</span> on all
          platforms
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
