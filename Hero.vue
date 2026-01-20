<template>
  <section class="relative pt-32 pb-20 px-6 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-black opacity-50"></div>
    <div 
      class="absolute inset-0" 
      :style="{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        transform: `translateY(${scrollY * 0.5}px)`
      }"
    ></div>

```
<div class="max-w-6xl mx-auto relative z-10">
  <!-- Hero Content -->
  <div class="text-center mb-16 animate-fadeIn">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 gradient-text">
      Descubre Wallets Perdidas
    </h1>
    <p class="text-xl md:text-2xl text-gray-400 mb-4">
      Comando CMD profesional para búsqueda de wallets inactivas con saldo
    </p>
    <p class="text-2xl md:text-3xl font-bold text-blue-400 mb-8">
      🚀 Ganancias Jugosas Esperándote
    </p>
    <a 
      href="#planes"
      class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
    >
      Ver Planes
    </a>
  </div>

  <!-- Features Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
    <div 
      v-for="(feature, index) in features" 
      :key="index"
      class="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-blue-500 transition-all transform hover:scale-105 animate-slideUp"
      :style="{ animationDelay: `${index * 100}ms` }"
    >
      <component :is="feature.icon" class="w-12 h-12 text-blue-400 mb-4" />
      <h3 class="text-lg font-bold mb-2">{{ feature.title }}</h3>
      <p class="text-gray-400 text-sm">{{ feature.desc }}</p>
    </div>
  </div>
</div>
```

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

const features = [
  {
    icon: 'IconWallet',
    title: 'Búsqueda Automática',
    desc: 'Escaneo continuo 24/7'
  },
  {
    icon: 'IconShield',
    title: 'Seguro y Legal',
    desc: 'Datos públicos de blockchain'
  },
  {
    icon: 'IconZap',
    title: 'Rápido y Eficiente',
    desc: 'Algoritmos optimizados'
  },
  {
    icon: 'IconTrendingUp',
    title: 'ROI Elevado',
    desc: 'Recupera tu inversión rápido'
  }
]

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Iconos SVG inline como componentes */
</style>

<!-- Componentes de iconos inline -->

<template v-if="false">
  <svg id="IconWallet" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <svg id="IconShield" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <svg id="IconZap" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <svg id="IconTrendingUp" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M23 6l-9.5 9.5-5-5L1 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 6h6v6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>