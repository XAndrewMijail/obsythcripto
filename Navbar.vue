<template>
  <nav class="fixed w-full glass-effect border-b border-zinc-800 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-3xl font-bold gradient-text">
        OBSYTH
      </div>
      <div class="hidden md:flex gap-6">
        <a href="#planes" class="text-gray-400 hover:text-white transition-colors duration-300">
          Planes
        </a>
        <a href="#testimonios" class="text-gray-400 hover:text-white transition-colors duration-300">
          Testimonios
        </a>
        <a href="#faq" class="text-gray-400 hover:text-white transition-colors duration-300">
          FAQ
        </a>
      </div>
      <button 
        @click="toggleMenu"
        class="md:hidden text-white"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

```
<!-- Mobile Menu -->
<div 
  v-if="menuOpen"
  class="md:hidden border-t border-zinc-800 animate-fadeIn"
>
  <div class="px-6 py-4 space-y-3">
    <a 
      href="#planes" 
      class="block text-gray-400 hover:text-white transition-colors"
      @click="closeMenu"
    >
      Planes
    </a>
    <a 
      href="#testimonios" 
      class="block text-gray-400 hover:text-white transition-colors"
      @click="closeMenu"
    >
      Testimonios
    </a>
    <a 
      href="#faq" 
      class="block text-gray-400 hover:text-white transition-colors"
      @click="closeMenu"
    >
      FAQ
    </a>
  </div>
</div>
```

  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>