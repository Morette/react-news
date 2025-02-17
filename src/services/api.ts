import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { api } from '@/infra/axios-config'

/**
 * Generic request handler using Axios.
 * @template T - Expected response data type.
 * @param {InternalAxiosRequestConfig} config - Axios request configuration.
 * @returns {Promise<T>} - A promise resolving to the response data.
 */
async function request<T>(config: InternalAxiosRequestConfig): Promise<T> {
  const response: AxiosResponse<T> = await api.request<T>(config)
  return response.data
}

export const apiService = {
  /**
   * Sends a GET request.
   * @param {string} url - API endpoint.
   * @param {Record<string, unknown>} [params] - Query parameters.
   * @returns {Promise<T>} - A promise resolving to the response data.
   */
  get: <T>(url: string, params?: Record<string, unknown>): Promise<T> => request<T>({ method: 'GET', url, params } as InternalAxiosRequestConfig),

  /**
   * Sends a POST request.
   * @param {string} url - API endpoint.
   * @param {unknown} [data] - Request body.
   * @returns {Promise<T>} - A promise resolving to the response data.
   */
  post: <T>(url: string, data?: unknown): Promise<T> => request<T>({ method: 'POST', url, data } as InternalAxiosRequestConfig),

  /**
   * Sends a PUT request.
   * @param {string} url - API endpoint.
   * @param {unknown} [data] - Request body.
   * @returns {Promise<T>} - A promise resolving to the response data.
   */
  put: <T>(url: string, data?: unknown): Promise<T> => request<T>({ method: 'PUT', url, data } as InternalAxiosRequestConfig),

  /**
   * Sends a DELETE request.
   * @param {string} url - API endpoint.
   * @returns {Promise<T>} - A promise resolving to the response data.
   */
  delete: <T>(url: string): Promise<T> => request<T>({ method: 'DELETE', url } as InternalAxiosRequestConfig),
}
