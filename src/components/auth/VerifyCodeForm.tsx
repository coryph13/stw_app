// src/components/auth/VerifyCodeForm.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { IoArrowBack, IoRefresh } from 'react-icons/io5';

export default function VerifyCodeForm() {
  const t = useTranslations('auth');
  const locale = useLocale();
  const router = useRouter();
  const { verifyCode, resendCode, loading, error, setError } = useAuth(locale);
  
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [phone, setPhone] = useState('');
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Получаем номер телефона из sessionStorage
    const savedPhone = sessionStorage.getItem('pendingVerificationLogin');
    if (!savedPhone) {
      // Если нет сохраненного номера, возвращаем на регистрацию
      router.push('/register');
    } else {
      setPhone(savedPhone);
    }
  }, [router]);

  // Таймер для повторной отправки
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  // Форматирование номера телефона для отображения
  const formatPhoneDisplay = (phone: string) => {
    if (!phone) return '';
    return `+${phone.slice(0, 3)} ${phone.slice(3, 5)} ${phone.slice(5, 8)} ** **`;
  };

  const handleChange = (index: number, value: string) => {
    // Разрешаем только цифры
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Автоматический переход к следующему полю
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Очищаем ошибку при изменении
    if (error) setError(null);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Обработка Backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/\D/g, '').slice(0, 6);
    
    if (digits) {
      const newCode = digits.split('').concat(Array(6 - digits.length).fill(''));
      setCode(newCode.slice(0, 6));
      
      // Фокус на последнее заполненное поле или следующее пустое
      const lastFilledIndex = Math.min(digits.length - 1, 5);
      inputRefs.current[lastFilledIndex]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const fullCode = code.join('');
    if (fullCode.length !== 6) {
      setError(t('errors.incompleteCode'));
      return;
    }

    try {
      await verifyCode({
        login: phone,
        code: fullCode
      });
    } catch (err) {
      // Ошибка уже обработана в хуке
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    try {
      await resendCode({ login: phone });
      setCanResend(false);
      setResendTimer(60);
      // Можно показать уведомление об успешной отправке
    } catch (err) {
      // Ошибка уже обработана в хуке
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <button
        onClick={() => router.push('/register')}
        className="flex items-center gap-2 text-text-muted hover:text-foreground transition-colors mb-6"
      >
        <IoArrowBack size={20} />
        <span>{t('buttons.back')}</span>
      </button>

      <h1 className="text-2xl font-bold mb-2">{t('titles.verifyCode')}</h1>
      <p className="text-text-muted mb-6">
        {t('messages.codeSent')} {formatPhoneDisplay(phone)}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Поля для кода */}
        <div className="flex justify-between gap-2">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-12 h-12 text-center text-lg font-bold rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
              required
            />
          ))}
        </div>

        {/* Ошибка */}
        {error && (
          <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Повторная отправка */}
        <div className="text-center">
          {canResend ? (
            <button
              type="button"
              onClick={handleResend}
              className="inline-flex items-center gap-2 text-accent hover:underline"
              disabled={loading}
            >
              <IoRefresh size={16} />
              <span>{t('buttons.resendCode')}</span>
            </button>
          ) : (
            <p className="text-text-muted text-sm">
              {t('messages.resendIn')} {resendTimer} {t('messages.seconds')}
            </p>
          )}
        </div>

        {/* Кнопка подтверждения */}
        <button
          type="submit"
          disabled={loading || code.some(d => !d)}
          className="w-full py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? t('buttons.verifying') : t('buttons.verify')}
        </button>
      </form>

      {/* Информация */}
      <div className="mt-6 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-text-muted">
        <p>{t('info.didntReceiveCode')}</p>
        <p className="mt-1">{t('info.checkPhone')}</p>
      </div>
    </div>
  );
}