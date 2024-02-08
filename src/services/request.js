import { notifications } from "@mantine/notifications"
import axios from "axios"
import { base_url } from "../constants"
import { getCookie } from "cookies-next"
// API constants
const APIUrl = `${base_url}/api`

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
      notifications.show({
        message: error?.response?.data?.message,
        color: "red",
      })
    } else {
      notifications.show({
        message:
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          "failed",
        color: "red",
      })
    }
  }
)

export const requests = {
  auth: {
    signUp: (data) => request.post(`/public/auth/register`, data),
    sendSMS: () => request.post(`/user/verify/send`),
    checkSMS: (data) => request.post(`/user/verify/check`, data),
    login: (data) => request.post(`/public/auth/login`, data),
    me: () => request.get(`/user/me`),
    get: () => request.get(`/get`),
    review: (data) => request.post(`/user/review`, data),
  },
  EcoObject: {
    getIndex: (id) => request.get(`/public/public/eco-objects/${id}`),
    getList: (path) => request.get(`/public${path}`),
    getAreaType: () => request.get(`/public/list/area-types`),
    getSeasons: () => request.get(`/public/list/seasons`),
    getSpecialFilter: () => request.get(`/public/list/special-filters`),
    getActivities: () => request.get(`/public/list/activities`),
    getRegions: () => request.get(`/public/list/regions`),
    getCategories: () => request.get(`/public/list/categories`),
    getForestries: () => request.get(`/public/list/forestries`),
  },
  Tour: {
    getIndex: (id) => request.get(`/public/public/tours/${id}`),
    getList: (path) => request.get(`/public${path}`),
    getCategories: () => request.get(`/public/tours/categories`),
  },
}
