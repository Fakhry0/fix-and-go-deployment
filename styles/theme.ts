/**
 * ملف تكوين السمات والألوان لمشروع Fix & Go
 * يحتوي على الألوان الرئيسية والثانوية وألوان النص والخلفية
 */

export const theme = {
  colors: {
    primary: {
      50: '#e6f0f9',
      100: '#cce0f3',
      200: '#99c2e7',
      300: '#66a3db',
      400: '#3385cf',
      500: '#0056b3', // اللون الأساسي
      600: '#00458f',
      700: '#00346b',
      800: '#002247',
      900: '#001123',
    },
    secondary: {
      50: '#fff0e6',
      100: '#ffe0cc',
      200: '#ffc299',
      300: '#ffa366',
      400: '#ff8533',
      500: '#ff6b00', // اللون الثانوي
      600: '#cc5500',
      700: '#994000',
      800: '#662b00',
      900: '#331500',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  fonts: {
    heading: 'Tajawal, sans-serif',
    body: 'Cairo, sans-serif',
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #0056b3 0%, #00346b 100%)',
    secondary: 'linear-gradient(135deg, #ff6b00 0%, #994000 100%)',
    blue: 'linear-gradient(135deg, #3385cf 0%, #0056b3 100%)',
    orange: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)',
  },
}

// أنماط الخطوط المستخدمة في المشروع
export const fontStyles = {
  heading: {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary[700],
  },
  subheading: {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.primary[600],
  },
  body: {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.gray[700],
  },
}

// أنماط الأزرار المستخدمة في المشروع
export const buttonStyles = {
  primary: {
    backgroundColor: theme.colors.primary[500],
    color: '#ffffff',
    hoverBackgroundColor: theme.colors.primary[600],
    activeBackgroundColor: theme.colors.primary[700],
  },
  secondary: {
    backgroundColor: theme.colors.secondary[500],
    color: '#ffffff',
    hoverBackgroundColor: theme.colors.secondary[600],
    activeBackgroundColor: theme.colors.secondary[700],
  },
  outline: {
    backgroundColor: 'transparent',
    color: theme.colors.primary[500],
    borderColor: theme.colors.primary[500],
    hoverBackgroundColor: theme.colors.primary[500],
    hoverColor: '#ffffff',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: theme.colors.primary[500],
    hoverBackgroundColor: theme.colors.primary[50],
  },
}

// التكوينات المخصصة للهوية البصرية
export const brandSettings = {
  logoSettings: {
    primaryColor: theme.colors.primary[500],
    secondaryColor: theme.colors.secondary[500],
    fontFamily: theme.fonts.heading,
  },
  cardBorderRadius: theme.borderRadius.xl,
  buttonBorderRadius: theme.borderRadius.md,
  inputBorderRadius: theme.borderRadius.md,
  containerPadding: {
    mobile: '1rem',
    tablet: '2rem',
    desktop: '5%',
  }
}