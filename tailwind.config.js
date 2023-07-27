module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter-regular': 'Inter-Regular',
        'inter-medium': 'Inter-Medium',
        'inter-semibold': 'Inter-SemiBold',
        'inter-bold': 'Inter-Bold',
      },
      colors: {
        screen: '#1E1E1E',
        danger: '#F04835',
        warning: '#EF9533',
        primary: '#C111D5',
        secondary: '#AA5AFA',
        container: '#2E2E2E',
        gray: '#9F9E9F',
        'gray-secondary': '#383838',
      },
    },
  },
  plugins: [],
};
