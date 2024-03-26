import { notifications } from "@mantine/notifications"
import axios from "axios"
import { base_url } from "../constants"
import { getCookie } from "cookies-next"
// API constants
const APIUrl = `https://c4be8f8c-2b98-48bc-a342-b360cb4afb06.mock.pstmn.io`

export let request = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "Application/json",
  },
})
request.interceptors.request.use((config) => {
  const token = getCookie("token")
  const lang = getCookie("lang")
  config.headers = Object.assign({
    ...config.headers,
    "Accept-Language": lang || "uz",
  })
  if (token) {
    config.headers = Object.assign({
      ...config.headers,
      Authorization: `Bearer ${token}`,
    })
  }
  return config
})

request.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error?.response?.status === 401) {
      // notifications.show({
      //   message: error?.response?.data?.message || "error",
      //   color: "red",
      // })
    } else {
      // notifications.show({
      //   message:
      //     error?.response?.data?.message ||
      //     error?.response?.data?.error ||
      //     "failed",
      //   color: "red",
      // })
    }
  }
)

export const requests = {
  auth: {
    login: (data) => request.post(`/public/auth/login`, data),
    me: () => request.get(`/user/me`),
  },
  Country: {
    getList: (page, limit) =>
      request.get(`/countries?page=${page}&limit=${limit}`),
  },
  Language: {
    getList: (page, limit) =>
      request.get(`/languages?page=${page}&limit=${limit}`),
  },
  Currency: {
    getList: (page, limit) =>
      request.get(`/currencies?page=${page}&limit=${limit}`),
  },
  Category: {
    getList: (page, limit) =>
      request.get(`/categories?page=${page}&limit=${limit}`),
    brands: (page, limit) =>
      request.get(`/categories/brands?page=${page}&limit=${limit}`),
    brands: (page, limit) =>
      request.get(`/categories/brands?page=${page}&limit=${limit}`),
  },
  Product: {
    recommended: (page, limit) =>
      request.get(`/products/recommended?page=${page}&limit=${limit}`),
  },
}
