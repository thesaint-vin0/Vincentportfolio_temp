import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle2, Loader2, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Spotlight } from '../components/ui/Spotlight';
import { MagneticButton } from '../components/ui/MagneticButton';
import { PERSON, EMAILJS_CONFIG } from '../constants';

type Status = 'idle' | 'loading' | 'success' | 'error';

const contactInfo = [
  { icon: Mail, label: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}` },
  { icon: Phone, label: 'Phone', value: PERSON.phone, href: `tel:${PERSON.phone}` },
  { icon: MapPin, label: 'Location', value: PERSON.location, href: null },
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_CONFIG.publicKey,
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const fields = [
    { name: 'name', type: 'text', placeholder: 'Your name', icon: User },
    { name: 'email', type: 'email', placeholder: 'Your email', icon: Mail },
    { name: 'subject', type: 'text', placeholder: 'Subject', icon: MessageSquare },
  ] as const;

  return (
    <section id="contact" className="relative section-pad py-28 sm:py-36">
      <div className="absolute inset-0 bg-dot opacity-15" />
      <div className="section-max relative">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="gradient-text">work together</span></>}
          subtitle="Have a project in mind or just want to say hi? Drop me a message and I'll get back within 24 hours."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Wrapper
                    {...(item.href ? { href: item.href, 'data-cursor': 'hover' as const } : {})}
                    className="glass-card glow-border flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1 block"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            <div className="glass-card glow-border rounded-2xl p-5">
              <p className="text-sm leading-relaxed text-muted">
                Currently accepting freelance projects and open to full-time opportunities.
                Let&apos;s create something exceptional together.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <Spotlight className="glass-card glow-border rounded-3xl p-6 sm:p-8" size={600}>
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.slice(0, 2).map((field) => (
                    <FieldInput
                      key={field.name}
                      field={field}
                      value={form[field.name]}
                      onChange={handleChange}
                    />
                  ))}
                </div>
                <FieldInput
                  field={fields[2]}
                  value={form.subject}
                  onChange={handleChange}
                />
                <div className="relative">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-muted/60 transition-colors focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>

                <MagneticButton
                  as="button"
                  type="submit"
                  className="relative w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' && (
                      <motion.span key="loading" className="flex items-center gap-2"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                      </motion.span>
                    )}
                    {status === 'success' && (
                      <motion.span key="success" className="flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                        <CheckCircle2 className="h-4 w-4" /> Message sent!
                      </motion.span>
                    )}
                    {status === 'error' && (
                      <motion.span key="error" className="flex items-center gap-2"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Something went wrong. Try again.
                      </motion.span>
                    )}
                    {status === 'idle' && (
                      <motion.span key="idle" className="flex items-center gap-2"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Send className="h-4 w-4" /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </MagneticButton>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl bg-accent-500/10 border border-accent-500/30 px-4 py-3 text-sm text-accent-300"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Thanks! Your message has been sent. I&apos;ll reply soon.
                  </motion.div>
                )}
              </form>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldInput({ field, value, onChange }: {
  field: { name: string; type: string; placeholder: string; icon: React.ElementType };
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const Icon = field.icon;
  return (
    <div className="relative">
      <label htmlFor={field.name} className="sr-only">{field.placeholder}</label>
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
      <input
        id={field.name}
        name={field.name}
        type={field.type}
        value={value}
        onChange={onChange}
        placeholder={field.placeholder}
        required
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-muted/60 transition-colors focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
      />
    </div>
  );
}
