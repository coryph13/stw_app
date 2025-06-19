// src/components/auth/RegisterForm.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { IoEye, IoEyeOff } from 'react-icons/io5';

export default function RegisterForm() {
  const t = useTranslations('auth');
  const locale = useLocale();
  const { register, loading, error, setError } = useAuth(locale);
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Очищаем ошибку при изменении полей
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

    try {
      const result = await register({
        name: formData.name,
        login: formData.login,
        password: formData.password
      });
      
      // Показываем сообщение об успешной регистрации
      if (result.message) {
        alert(result.message);
      }
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

      {/* Логин */}
      <div>
        <label htmlFor="login" className="block text-sm font-medium mb-2">
          {t('fields.login')} *
        </label>
        <input
          type="text"
          id="login"
          name="login"
          value={formData.login}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
          placeholder={t('placeholders.login')}
        />
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

      {/* Кнопка отправки */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? t('buttons.registering') : t('buttons.register')}
      </button>
    </form>
  );
}