<template>
  <div class="bg-black text-white min-h-screen">
    <Navbar />
    <Hero />
    <Pricing />
    <Testimonials />
    <FAQ />
    <Footer />
  </div>
</template>

<script setup>
// No necesitas importar los componentes en Nuxt 3, se auto-importan
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #000;
  color: #fff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.8s ease-out forwards;
}

.gradient-text {
  background: linear-gradient(to right, #60a5fa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass-effect {
  background: rgba(24, 24, 27, 0.7);
  backdrop-filter: blur(10px);
}
</style>