// vuetify.config.ts
import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module'
import { ar, en } from 'vuetify/locale'
const light = {
    dark: false,
    colors: {
        "background": "#FFFFFF",
        "surface": "#EBF1F6",
        "on-surface": "#1C324A",
        "primary": "#1C324A",
        "primary-darken": "#CC5500",
        "secondary-lighten": "#ffffff",
        "secondary": "#EBF1F680",
        "secondary-darken": "#161417",
        "error": "#B00020",
        "info": "#2196F3",
        "success": "#4CAF50",
        "warning": "#FB8C00",
        "brand-text-color-default": "#1C324A",
        "brand-text-color-muted": "#1C324ACC",
        "brand-link-color-accent": "#0550ae",
        "brand-link-color-accent-muted": "#304d66",
    }
}
const dark = {
    dark: true,
    colors: {
        "background": "#000000",
        "surface": "#000000",
        "on-surface": "#ffffff",
        "primary": "#FFB200",
        "primary-darken": "#CC5500",
        "secondary-lighten": "#161b22",
        "secondary": "#2D2F32",
        "secondary-darken": "#161417",
        "error": "#B00020",
        "info": "#2196F3",
        "success": "#4CAF50",
        "warning": "#FB8C00",
        "brand-text-color-default": "#ffffff",
        "brand-text-color-muted": "#8b949e",
        "brand-link-color-accent": "#79c0ff",
        "brand-link-color-accent-muted": "#304d66",
    },
};


export default {
    /* vuetify options */
    locale: {
        messages: { en, ar },
        locale: 'ar',
        rtl: {
            ar: true
        }
    },
    localeMessages: ["ar", 'en'],
    theme: {
        defaultTheme: "light",
        themes: {
            dark,
            light,
        }
    },
    display: {
        thresholds: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400,
        },
    },
    defaults: {
        VBtn: {
            elevation: '0',
            // class: "text-body-1 font-weight-medium",
        },
        VContainer: {
            class: 'px-5 px-md-10 px-xl-16'
        },
        VSheet: {
            color: 'transparent'
        }
        
    }
} satisfies ExternalVuetifyOptions