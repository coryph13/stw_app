// src/hooks/useAuth.ts
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createGraphQLClient } from '@/lib/graphql-client';
import {
  REGISTER_MUTATION,
  VERIFY_REGISTRATION_CODE_MUTATION,
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
  RESEND_CODE_MUTATION,
  RESET_PASSWORD_MUTATION,
  REQUEST_PASSWORD_RESET_MUTATION
} from '@/graphql/mutations/auth';
import {
  RegisterInput,
  RegisterResponse,
  VerifyRegistrationCodeInput,
  VerifyRegistrationCodeResponse,
  LoginInput,
  LoginResponse,
  LogoutResponse,
  ResendCodeInput,
  ResendCodeResponse,
  ResetPasswordResponse,
  ResetPasswordInput,
  RequestPasswordResetResponse,
  RequestPasswordResetInput
} from '@/types/auth';

export function useAuth(locale: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const graphqlClient = createGraphQLClient(locale);

  // Сохранение токена
  const saveToken = (token: string) => {
    localStorage.setItem('access_token', token);
    // Можно также установить токен в заголовки для будущих запросов
    // graphqlClient.setHeader('Authorization', `Bearer ${token}`);
  };

  // Удаление токена
  const removeToken = () => {
    localStorage.removeItem('access_token');
  };

  // Регистрация (шаг 1)
  const register = async (input: RegisterInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<RegisterResponse>(
        REGISTER_MUTATION,
        input
      );

      // После успешной регистрации перенаправляем на страницу верификации
      if (response.user) {
        // Сохраняем логин для страницы верификации
        sessionStorage.setItem('pendingVerificationLogin', input.login);
        router.push('/verify-code');
      }

      return response;
    } catch (err: any) {
      const errorMessage = err.response?.errors?.[0]?.message || 'Ошибка регистрации';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Верификация кода (шаг 2)
  const verifyCode = async (input: VerifyRegistrationCodeInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<VerifyRegistrationCodeResponse>(
        VERIFY_REGISTRATION_CODE_MUTATION,
        input
      );

      // Сохраняем токен и перенаправляем
      if (response.access_token) {
        saveToken(response.access_token);

        // Очищаем временные данные
        sessionStorage.removeItem('pendingVerificationLogin');

        // Перенаправляем на главную или профиль
        router.push('/');
      }

      return response;
    } catch (err: any) {
      const errorMessage = err.response?.errors?.[0]?.message || 'Неверный код';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Повторная отправка кода
  const resendCode = async (input: ResendCodeInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<ResendCodeResponse>(
        RESEND_CODE_MUTATION,
        input
      );

      return response;
    } catch (err: any) {
      const errorMessage = err.response?.errors?.[0]?.message || 'Ошибка отправки кода';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Вход в систему
  const login = async (input: LoginInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<LoginResponse>(
        LOGIN_MUTATION,
        input
      );

      // Сохраняем токен
      if (response.access_token) {
        saveToken(response.access_token);
        router.push('/');
      }

      return response;
    } catch (err: any) {
      const errorMessage = err.response?.errors?.[0]?.message || 'Ошибка входа';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Выход из системы
  const logout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<LogoutResponse>(
        LOGOUT_MUTATION
      );

      // Удаляем токен
      removeToken();

      // Перенаправляем на главную
      router.push('/');

      return response;
    } catch (err: any) {
      const errorMessage = err.response?.errors?.[0]?.message || 'Ошибка выхода';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const requestPasswordReset = async (input: RequestPasswordResetInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<RequestPasswordResetResponse>(
        REQUEST_PASSWORD_RESET_MUTATION,
        input
      );

      // После успешного сброса перенаправляем на страницу входа
      router.push('/login');

      return response;
    } catch (err: any) {
      const errorMessage = err.response?.errors?.[0]?.message || 'Ошибка запроса сброса пароля';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (input: ResetPasswordInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<ResetPasswordResponse>(
        RESET_PASSWORD_MUTATION,
        input
      );

      return response;
    } catch (err: any) {
      const errorMessage = err.response?.errors?.[0]?.message || 'Ошибка сброса пароля';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Проверка авторизации
  const isAuthenticated = () => {
    return !!localStorage.getItem('access_token');
  };

  // Получение токена
  const getToken = () => {
    return localStorage.getItem('access_token');
  };

  return {
    register,
    verifyCode,
    resendCode,
    login,
    logout,
    requestPasswordReset,
    resetPassword,
    isAuthenticated,
    getToken,
    loading,
    error,
    setError
  };
}