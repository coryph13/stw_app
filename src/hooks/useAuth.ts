// src/hooks/useAuth.ts
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createGraphQLClient } from '@/lib/graphql-client';
import {
  REGISTER_MUTATION,
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
  REQUEST_PASSWORD_RESET_MUTATION,
  RESET_PASSWORD_MUTATION,
} from '@/graphql/mutations/auth';
import {
  RegisterInput,
  RegisterResponse,
  LoginInput,
  LoginResponse,
  LogoutResponse,
  RequestPasswordResetInput,
  RequestPasswordResetResponse,
  ResetPasswordInput,
  ResetPasswordResponse,
} from '@/types/auth';

export function useAuth(locale: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const graphqlClient = createGraphQLClient(locale);

  const register = async (input: RegisterInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<RegisterResponse>(
        REGISTER_MUTATION,
        input
      );

      // После успешной регистрации можно перенаправить на страницу входа
      if (response.user) {
        router.push('/login');
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

  const login = async (input: LoginInput) => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<LoginResponse>(
        LOGIN_MUTATION,
        input
      );

      // Сохраняем токен в localStorage или cookies
      if (response.access_token) {
        localStorage.setItem('authToken', response.access_token);
        // Или используйте cookies для большей безопасности
        // document.cookie = `authToken=${response.login.token}; path=/; secure; samesite=strict`;

        // Перенаправляем на главную или профиль
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

  const logout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await graphqlClient.request<LogoutResponse>(
        LOGOUT_MUTATION
      );

      // Удаляем токен
      localStorage.removeItem('authToken');
      // document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

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

  // const updateProfile = async (input: UpdateProfileInput) => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await graphqlClient.request<UpdateProfileResponse>(
  //       UPDATE_PROFILE_MUTATION,
  //       input
  //     );

  //     return response.updateProfile;
  //   } catch (err: any) {
  //     const errorMessage = err.response?.errors?.[0]?.message || 'Ошибка обновления профиля';
  //     setError(errorMessage);
  //     throw new Error(errorMessage);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const requestPasswordReset = async (input: RequestPasswordResetResponse) => {
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

  return {
    register,
    login,
    logout,
    requestPasswordReset,
    resetPassword,
    loading,
    error,
    setError
  };
}