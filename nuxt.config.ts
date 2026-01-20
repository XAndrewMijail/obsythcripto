// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
devtools: { enabled: true },

app: {
head: {
title: ‘Obsyth - Descubre Wallets Perdidas’,
meta: [
{ charset: ‘utf-8’ },
{ name: ‘viewport’, content: ‘width=device-width, initial-scale=1’ },
{
name: ‘description’,
content: ‘Comando CMD profesional para búsqueda de wallets inactivas con saldo en Bitcoin, Ethereum y BNB’
},
{ name: ‘theme-color’, content: ‘#000000’ }
],
link: [
{ rel: ‘icon’, type: ‘image/x-icon’, href: ‘/favicon.ico’ }
]
}
},

css: [’~/assets/css/main.css’],

modules: [],

compatibilityDate: ‘2025-01-20’
})