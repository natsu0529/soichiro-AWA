'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { Card, CardContent } from '../ui/Card';

export function SocialMedia() {
  const t = useTranslations('social');

  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      label: t('twitter'),
      url: 'https://twitter.com/your-handle',
      color: 'hover:bg-gray-700',
      iconColor: 'text-white',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      label: t('youtube'),
      url: 'https://youtube.com/@your-channel',
      color: 'hover:bg-red-600',
      iconColor: 'text-red-500',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      label: t('instagram'),
      url: 'https://instagram.com/your-handle',
      color: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600',
      iconColor: 'text-pink-500',
    },
  ];

  return (
    <section id="social" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block"
            >
              <Card className={`text-center cursor-pointer transition-all duration-300 ${social.color} group`}>
                <CardContent className="py-12">
                  <social.icon className={`w-16 h-16 mx-auto mb-4 ${social.iconColor} group-hover:text-white transition-colors duration-300`} />
                  <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {social.label}
                  </p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
