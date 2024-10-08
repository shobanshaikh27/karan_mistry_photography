module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	fontFamily: {
  		primary: 'Playfair Display',
  		secondary: 'Inherit'
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1192px'
  	},
  	extend: {
  		colors: {
  			primary: '#0E1112',
  			grey: '#484B4B',
  			accent: '#EEF7F9'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
