// src/components/auth/RegisterForm.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { IoEye, IoEyeOff } from 'react-icons/io5';

export default function RegisterForm() {
  const t = useTranslations('аuth');
  const locale = useLocale();
  const { register, loading, error, setError } = useAuth(locale);
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
    confirmPassword: ''
  });

  // Форматирование номера телефона
  const formatPhoneNumber = (value: string) => {
    // Удаляем все нецифровые символы
    const numbers = value.replace(/\D/g, '');
    
    // Ограничиваем до 12 цифр (998 + 9 цифр)
    const limited = numbers.slice(0, 12);
    
    // Форматируем как +998 XX XXX XX XX
    if (limited.length <= 3) {
      return limited;
    } else if (limited.length <= 5) {
      return `${limited.slice(0, 3)} ${limited.slice(3)}`;
    } else if (limited.length <= 8) {
      return `${limited.slice(0, 3)} ${limited.slice(3, 5)} ${limited.slice(5)}`;
    } else if (limited.length <= 10) {
      return `${limited.slice(0, 3)} ${limited.slice(3, 5)} ${limited.slice(5, 8)} ${limited.slice(8)}`;
    } else {
      return `${limited.slice(0, 3)} ${limited.slice(3, 5)} ${limited.slice(5, 8)} ${limited.slice(8, 10)} ${limited.slice(10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, login: formatted }));
    if (error) setError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (formData.password !== formData.confirmPassword) {
      setError(t('errors.passwordMismatch'));
      return;
    }
    
    if (formData.password.length < 6) {
      setError(t('errors.passwordTooShort'));
      return;
    }

    // Проверка номера телефона (должен быть 12 цифр)
    const phoneDigits = formData.login.replace(/\D/g, '');
    if (phoneDigits.length !== 12 || !phoneDigits.startsWith('998')) {
      setError(t('errors.invalidPhone'));
      return;
    }

    try {
      await register({
        name: formData.name,
        login: phoneDigits, // Отправляем только цифры
        password: formData.password
      });
    } catch (err) {
      // Ошибка уже обработана в хуке
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Имя */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t('fields.name')} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
          placeholder={t('placeholders.name')}
        />
      </div>

      {/* Номер телефона */}
      <div>
        <label htmlFor="login" className="block text-sm font-medium mb-2">
          {t('fields.login')} *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray">+</span>
          </div>
          <input
            type="tel"
            id="login"
            name="login"
            value={formData.login}
            onChange={handlePhoneChange}
            required
            className="w-full pl-8 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
            placeholder="998 XX XXX XX XX"
          />
        </div>
        <p className="mt-1 text-xs text-text-muted">
          {t('helpers.phoneFormat')}
        </p>
      </div>

      {/* Пароль */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          {t('fields.password')} *
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full px-4 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
            placeholder={t('placeholders.password')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray hover:text-foreground transition-colors"
          >
            {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
          </button>
        </div>
      </div>

      {/* Подтверждение пароля */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
          {t('fields.confirmPassword')} *
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
          placeholder={t('placeholders.confirmPassword')}
        />
      </div>

      {/* Ошибка */}
      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Информация о коде подтверждения */}
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm">
        {t('info.smsCode')}
      </div>

      {/* Кнопка отправки */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? t('buttons.registering') : t('buttons.register')}
      </button>

      {/* Ссылка на вход */}
      <p className="text-center text-sm text-text-muted">
        {t('links.alreadyHaveAccount')}{' '}
        <a href="/login" className="text-accent hover:underline">
          {t('links.signIn')}
        </a>
      </p>
    </form>
  );
}