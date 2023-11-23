import { create } from 'zustand'

interface useThemeStoreType {
  theme: 'light' | 'dark' | 'warm' | 'blue'
  setTheme: (t: useThemeStoreType['theme']) => void
}
export const useThemeStore = create<useThemeStoreType>((set, _get) => ({
  theme: 'light',
  setTheme: t => set({ theme: t }),
}))
