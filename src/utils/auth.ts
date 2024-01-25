import { User } from 'src/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const getAccessTokenFromLocalStorage = () => localStorage.getItem('access_token') || ''

export const setAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const getProfileFromLS = () => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}

export const setProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}

export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
  LocalStorageEventTarget.dispatchEvent(new Event('clearLS'))
}
