/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        globalBg: 'var(--global-bg)',
        mainBg: 'var(--main-bg)',
        mainText: 'var(--main-text)',
        headerBg: 'var(--header-bg)',
        headerText: 'var(--header-text)',
        headerTopHigh: 'var(--header-top-high)',
        headerBottomHigh: 'var(--header-bottom-high)',
        siderBg: 'var(--sider-bg)',
        siderText: 'var(--sider-text)',
        siderTextHigh: 'var(--sider-text-high)',
        siderChildHigh: 'var(--sider-child-high)',
        siderChildBg: 'var(--sider-child-bg)',
      },
    },
  },
  plugins: [],
}
