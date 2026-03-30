import { useState, useEffect } from 'react';

import type { WhatsAppContact } from '../../data/schema';

interface StickyBarProps{
    phone: string;
    email: string;
    whatsapp: WhatsAppContact
}
export const StickyBar = ({ phone, email, whatsapp }: StickyBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden rounded-2xl">
      <div className="flex justify-around items-center p-3">
        <a href={`tel:${phone}`} className="flex flex-col items-center text-blue-900">
          <span className="text-xl">📞</span>
          <span className="text-xs">Call</span>
        </a>
        <a href={`mailto:${email}`} className="flex flex-col items-center text-blue-900">
          <span className="text-xl">✉️</span>
          <span className="text-xs">Email</span>
        </a>
        <a 
          href={`https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-green-600"
        >
          <span className="text-xl">💬</span>
          <span className="text-xs">WhatsApp</span>
        </a>
        {/* <Button size="sm" variant="primary" className="text-xs">
          Register
        </Button> */}
      </div>
    </div>
  );
};