'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { contactFormSchema, type ContactFormData } from '@/lib/validators/contact';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export function ContactForm() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // メールアドレスを設定（実際のメールアドレスに変更してください）
      const recipientEmail = 'your-email@example.com';
      const subject = `Contact Form: ${data.name}`;
      const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;

      // mailto: URLを生成
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // メールクライアントを開く
      window.location.href = mailtoUrl;

      // 成功メッセージを表示
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle>{t('title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label={t('name')}
                  placeholder={t('namePlaceholder')}
                  error={errors.name ? t(errors.name.message as any) || t('nameRequired') : undefined}
                  {...register('name')}
                />

                <Input
                  type="email"
                  label={t('email')}
                  placeholder={t('emailPlaceholder')}
                  error={errors.email ? t(errors.email.message as any) || t('emailRequired') : undefined}
                  {...register('email')}
                />

                <Textarea
                  label={t('message')}
                  placeholder={t('messagePlaceholder')}
                  rows={6}
                  error={errors.message ? t(errors.message.message as any) || t('messageRequired') : undefined}
                  {...register('message')}
                />

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-900/20 border border-green-500 rounded-lg text-green-400">
                    {t('success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400">
                    {t('error')}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? t('sending') : t('submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
