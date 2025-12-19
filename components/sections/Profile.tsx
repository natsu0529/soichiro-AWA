'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export function Profile() {
  const t = useTranslations('profile');

  // Sample fighter data - replace with real data
  const fighterData = {
    age: '28',
    height: '175 cm',
    weight: '70 kg',
    weightClass: 'Lightweight',
    fightingStyle: 'Mixed Martial Arts',
    team: 'Red Dragon Gym',
  };

  return (
    <section id="profile" className="py-20 bg-dark-900">
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/fighter/profile.png"
                  alt="Maha Lycopene"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Card>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>{t('fighterName')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">{t('age')}</p>
                    <p className="text-lg font-semibold">{fighterData.age}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('height')}</p>
                    <p className="text-lg font-semibold">{fighterData.height}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('weight')}</p>
                    <p className="text-lg font-semibold">{fighterData.weight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('weightClass')}</p>
                    <p className="text-lg font-semibold">{fighterData.weightClass}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('fightingStyle')}</p>
                  <p className="text-lg font-semibold">{fighterData.fightingStyle}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('team')}</p>
                  <p className="text-lg font-semibold">{fighterData.team}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('bio')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {t('bioContent')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
