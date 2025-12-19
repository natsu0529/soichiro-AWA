'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';

export function FightRecord() {
  const t = useTranslations('fightRecord');

  // Sample fight statistics - replace with real data
  const stats = {
    totalFights: 25,
    wins: 20,
    losses: 3,
    draws: 2,
    ko: 12,
    submission: 5,
    decision: 3,
  };

  const winRate = Math.round((stats.wins / stats.totalFights) * 100);

  const statCards = [
    { label: t('totalFights'), value: stats.totalFights, color: 'text-primary-400' },
    { label: t('wins'), value: stats.wins, color: 'text-green-400' },
    { label: t('losses'), value: stats.losses, color: 'text-red-400' },
    { label: t('draws'), value: stats.draws, color: 'text-yellow-400' },
    { label: t('ko'), value: stats.ko, color: 'text-orange-400' },
    { label: t('submission'), value: stats.submission, color: 'text-purple-400' },
    { label: t('decision'), value: stats.decision, color: 'text-blue-400' },
    { label: t('winRate'), value: `${winRate}%`, color: 'text-primary-500' },
  ];

  return (
    <section id="record" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="py-6">
                  <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
                  <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Win Rate Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <Card>
            <CardContent className="py-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">{t('winRate')}</span>
                <span className="text-2xl font-bold text-primary-500">{winRate}%</span>
              </div>
              <div className="w-full bg-dark-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${winRate}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                  className="bg-gradient-to-r from-primary-600 to-primary-400 h-full rounded-full"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
