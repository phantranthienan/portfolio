'use client';

import React from 'react';
import SectionHeading from './common/SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './common/SubmitBtn';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

const Contact = () => {
    const t = useTranslations('Contact');
    const { ref } = useSectionInView('Contact');

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 max-w-[36rem] scroll-mt-24 text-center sm:mb-28"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{ once: true }}
        >
            <SectionHeading>{t('heading')}</SectionHeading>
            <p className="text-gray-700 sm:-mt-6">
                {t.rich('description', {
                    email: (chunks) => (
                        <a
                            className="underline"
                            href="mailto:phantranthienan1405@gmail.com"
                        >
                            {chunks}
                        </a>
                    ),
                })}
            </p>

            <form
                action={async (formData) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(t('form.errorMessage'));
                        return;
                    }

                    toast.success(t('form.successMessage'));
                }}
                className="mt-10 flex flex-col"
            >
                <input
                    type="email"
                    name="senderEmail"
                    required
                    placeholder={t('form.emailPlaceholder')}
                    className="h-14 rounded-lg border border-black/10 px-4"
                />
                <textarea
                    required
                    name="message"
                    maxLength={5000}
                    className="my-3 h-52 rounded-lg border border-black/10 p-4"
                    placeholder={t('form.messagePlaceholder')}
                />
                <SubmitBtn label={t('form.submitButton')} />
            </form>
        </motion.section>
    );
};

export default Contact;
