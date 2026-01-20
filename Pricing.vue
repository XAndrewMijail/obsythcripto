<template>
  <section id="planes" class="py-20 px-6 bg-gradient-to-b from-black to-zinc-900">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">Planes de Acceso</h2>
      <p class="text-xl text-gray-400 text-center mb-16">Elige el plan que se adapte a tus necesidades</p>

```
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div
      v-for="(plan, index) in plans"
      :key="index"
      class="relative bg-zinc-900 border-2 rounded-2xl p-8 transition-all transform hover:scale-105"
      :class="plan.popular ? 'border-blue-500 md:scale-105' : 'border-zinc-800 hover:border-blue-500'"
    >
      <!-- Popular Badge -->
      <div 
        v-if="plan.popular"
        class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold"
      >
        MÁS POPULAR
      </div>
      
      <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
      <div class="text-blue-400 text-sm font-semibold mb-4">{{ plan.blockchain }}</div>
      <div class="mb-6">
        <span class="text-5xl font-bold">${{ plan.price }}</span>
        <span class="text-gray-400"> USDT</span>
      </div>
      
      <ul class="space-y-3 mb-8">
        <li 
          v-for="(feature, i) in plan.features" 
          :key="i"
          class="flex items-start gap-3"
        >
          <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="text-gray-300">{{ feature }}</span>
        </li>
      </ul>
      
      <button
        @click="selectPlan(plan)"
        class="w-full py-4 rounded-lg font-bold transition-all"
        :class="plan.popular 
          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50' 
          : 'bg-zinc-800 hover:bg-zinc-700 text-white'"
      >
        Obtener Acceso
      </button>
    </div>
  </div>
</div>

<!-- Payment Modal -->
<Teleport to="body">
  <div 
    v-if="selectedPlan"
    class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn"
    @click="closeModal"
  >
    <div 
      class="bg-zinc-900 border border-blue-500 rounded-2xl p-8 max-w-md w-full"
      @click.stop
    >
      <h3 class="text-2xl font-bold text-white mb-6">
        Plan {{ selectedPlan.name }} - ${{ selectedPlan.price }} USDT
      </h3>
      
      <!-- Network Selector -->
      <div class="mb-6">
        <label class="block text-gray-400 mb-3">Selecciona la red:</label>
        <div class="grid grid-cols-3 gap-3">
          <button
            v-for="net in networks"
            :key="net"
            @click="selectedNetwork = net"
            class="py-2 px-4 rounded-lg font-semibold transition-all"
            :class="selectedNetwork === net 
              ? 'bg-blue-600 text-white' 
              : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'"
          >
            {{ net.toUpperCase() }}
          </button>
        </div>
      </div>

      <!-- QR and Wallet -->
      <div class="bg-zinc-800 p-4 rounded-xl mb-4">
        <!-- QR Code -->
        <div class="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
          <div class="text-center">
            <img 
              :src="`/qr-${selectedPlan.name.toLowerCase()}-${selectedNetwork}.png`"
              :alt="`QR ${selectedPlan.name}`"
              class="w-48 h-48 rounded-lg mx-auto mb-2"
              @error="showQRPlaceholder"
            />
            <p class="text-xs text-gray-600">Escanea para pagar</p>
          </div>
        </div>
        
        <!-- Wallet Address -->
        <div>
          <p class="text-gray-400 text-sm mb-2">
            Dirección de wallet ({{ selectedNetwork.toUpperCase() }}):
          </p>
          <div class="bg-zinc-900 p-3 rounded-lg break-all">
            <code class="text-blue-400 text-xs">
              {{ selectedPlan.wallets[selectedNetwork] }}
            </code>
          </div>
          <button
            @click="copyWallet"
            class="mt-2 w-full bg-zinc-700 hover:bg-zinc-600 text-white py-2 rounded-lg text-sm transition-all"
          >
            {{ copied ? '✓ Copiado' : 'Copiar dirección' }}
          </button>
        </div>
      </div>

      <p class="text-gray-400 text-sm mb-6">
        Envía exactamente <span class="text-white font-bold">${{ selectedPlan.price }} USDT</span> a la dirección de arriba.
        Una vez confirmado el pago, recibirás acceso inmediato.
      </p>

      <button
        @click="closeModal"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
      >
        Cerrar
      </button>
    </div>
  </div>
</Teleport>
```

  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedPlan = ref(null)
const selectedNetwork = ref('tron')
const copied = ref(false)

const networks = ['tron', 'bsc', 'polygon']

const plans = [
  {
    name: 'Básico',
    price: '70',
    blockchain: 'BTC',
    features: [
      'Búsqueda en blockchain Bitcoin',
      'Comando CMD optimizado',
      'Soporte técnico básico',
      'Actualizaciones incluidas'
    ],
    wallets: {
      tron: 'TXXXXXXXXXXXXXXXXXXXXXXXXXXXXx',
      bsc: '0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      polygon: '0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    }
  },
  {
    name: 'Pro',
    price: '120',
    blockchain: 'BTC + ETH',
    popular: true,
    features: [
      'Búsqueda en Bitcoin y Ethereum',
      'Algoritmos de búsqueda avanzados',
      'Soporte prioritario 24/7',
      'Base de datos optimizada',
      'Actualizaciones automáticas'
    ],
    wallets: {
      tron: 'TYYYYYYYYYYYYYYYYYYYYYYYYYYYYy',
      bsc: '0xYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
      polygon: '0xYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY'
    }
  },
  {
    name: 'Premium',
    price: '200',
    blockchain: 'BTC + ETH + BNB',
    features: [
      'Búsqueda en Bitcoin, Ethereum y BNB',
      'Máxima velocidad de escaneo',
      'Soporte VIP dedicado',
      'Acceso a todas las funciones premium',
      'Actualizaciones de por vida',
      'Consultoría personalizada'
    ],
    wallets: {
      tron: 'TZZZZZZZZZZZZZZZZZZZZZZZZZZZZz',
      bsc: '0xZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ',
      polygon: '0xZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ'
    }
  }
]

const selectPlan = (plan) => {
  selectedPlan.value = plan
  selectedNetwork.value = 'tron'
  copied.value = false
}

const closeModal = () => {
  selectedPlan.value = null
  copied.value = false
}

const copyWallet = async () => {
  try {
    await navigator.clipboard.writeText(selectedPlan.value.wallets[selectedNetwork.value])
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Error al copiar:', err)
  }
}

const showQRPlaceholder = (e) => {
  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23e5e7eb"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%236b7280" font-family="Arial" font-size="16">QR Code</text></svg>'
}
</script>