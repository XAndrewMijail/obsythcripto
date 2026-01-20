<template>
  <div id="app">
    <!-- Header -->
    <header class="header">
      <h1 class="logo">Obsyth</h1>
      <nav>
        <a href="#home">Inicio</a>
        <a href="#plans">Planes</a>
        <a href="#faq">FAQ</a>
        <a href="#reviews">Reseñas</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <h2>Descubre Wallets Perdidas con Obsyth</h2>
      <p>Una herramienta CMD poderosa que escanea blockchains en busca de wallets perdidas con saldo. ¡Ganancias jugosas al alcance de tu mano!</p>
      <button @click="scrollToPlans" class="cta-button">Ver Planes</button>
    </section>

    <!-- Plans Section -->
    <section id="plans" class="plans">
      <h2>Nuestros Planes</h2>
      <div class="plan-cards">
        <div class="plan-card" v-for="plan in plans" :key="plan.name">
          <h3>{{ plan.name }}</h3>
          <p class="price">{{ plan.price }} USDT</p>
          <ul>
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
          <button @click="goToPayment(plan)" class="plan-button">Seleccionar Plan</button>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq">
      <h2>Preguntas Frecuentes</h2>
      <div class="faq-item" v-for="item in faq" :key="item.question">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </div>
    </section>

    <!-- Reviews Section -->
    <section id="reviews" class="reviews">
      <h2>Reseñas y Testimonios</h2>
      <div class="rating">
        <span>4.8 ⭐⭐⭐⭐⭐</span>
        <p>(Basado en 500+ usuarios)</p>
      </div>
      <div class="testimonials">
        <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.name">
          <p>"{{ testimonial.comment }}"</p>
          <span>- {{ testimonial.name }}</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <p>&copy; 2026 Obsyth. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      plans: [
        {
          name: 'Básico',
          price: 70,
          features: ['Búsqueda en Blockchain de BTC', 'Comando CMD simple', 'Soporte básico'],
        },
        {
          name: 'Estándar',
          price: 120,
          features: ['Búsqueda en BTC y ETH', 'Reportes detallados', 'Actualizaciones mensuales'],
        },
        {
          name: 'Premium',
          price: 200,
          features: ['Búsqueda en BTC, ETH y BNB', 'Análisis avanzado', 'Soporte prioritario 24/7'],
        },
      ],
      faq: [
        { question: '¿Cómo funciona la herramienta?', answer: 'Es un comando CMD que escanea blockchains públicas en busca de wallets inactivas con saldo positivo.' },
        { question: '¿Es legal?', answer: 'Sí, solo busca información pública. No accede a fondos privados.' },
        { question: '¿Cómo pago?', answer: 'Con USDT via QR en Tron, BSC o Polygon. Recibirás la herramienta tras confirmación.' },
        { question: '¿Hay reembolsos?', answer: 'No, todas las ventas son finales.' },
      ],
      testimonials: [
        { name: 'Juan P.', comment: '¡Encontré wallets con miles en saldo! Obsyth es oro puro.' },
        { name: 'Ana M.', comment: 'Fácil de usar y resultados rápidos. Recomendado 100%.' },
        { name: 'Carlos R.', comment: 'El plan Premium vale cada USDT. Soporte excelente.' },
        { name: 'Laura S.', comment: 'Ganancias jugosas en mi primera semana. ¡Increíble!' },
      ],
    };
  },
  methods: {
    scrollToPlans() {
      document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
    },
    goToPayment(plan) {
      // Abre una nueva página con pago (puedes usar router en Vue para páginas reales)
      const paymentWindow = window.open('', '_blank');
      paymentWindow.document.write(`
        <html>
          <head>
            <title>Pago para ${plan.name}</title>
            <style>
              body { background: #000; color: #fff; font-family: Arial; text-align: center; padding: 50px; }
              h1 { color: #007BFF; }
              img { max-width: 300px; }
              .address { margin-top: 20px; font-size: 18px; }
              .chain { margin: 10px; }
            </style>
          </head>
          <body>
            <h1>Pago para ${plan.name} - ${plan.price} USDT</h1>
            <p>Escanea el QR o copia la dirección para pagar en USDT.</p>
            <img src="https://your-qr-image-url.com/qr-placeholder.png" alt="QR Code"> <!-- Reemplaza con tu QR -->
            <div class="addresses">
              <div class="chain"><strong>Tron (TRC20):</strong> <span class="address">TRX_PLACEHOLDER_ADDRESS</span></div>
              <div class="chain"><strong>BSC (BEP20):</strong> <span class="address">0xBSC_PLACEHOLDER_ADDRESS</span></div>
              <div class="chain"><strong>Polygon:</strong> <span class="address">0xPOLYGON_PLACEHOLDER_ADDRESS</span></div>
            </div>
            <p>Envía exactamente ${plan.price} USDT. Confirma el pago y recibirás la herramienta por email.</p>
          </body>
        </html>
      `);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

body { margin: 0; font-family: Arial, sans-serif; background: #000; color: #fff; }
.header { display: flex; justify-content: space-between; align-items: center; padding: 20px; background: #000; border-bottom: 1px solid #007BFF; }
.logo { font-family: 'Orbitron', sans-serif; font-size: 2em; color: #007BFF; margin: 0; animation: fadeIn 1s; }
nav a { color: #fff; margin-left: 20px; text-decoration: none; transition: color 0.3s; }
nav a:hover { color: #007BFF; }

.hero { text-align: center; padding: 100px 20px; background: #000; animation: fadeIn 1s; }
.hero h2 { font-size: 3em; color: #fff; }
.hero p { font-size: 1.5em; }
.cta-button { background: #007BFF; color: #fff; padding: 15px 30px; border: none; cursor: pointer; transition: transform 0.3s; }
.cta-button:hover { transform: scale(1.05); }

.plans { padding: 50px 20px; text-align: center; animation: fadeIn 1s 0.5s backwards; }
.plan-cards { display: flex; justify-content: center; gap: 20px; }
.plan-card { background: #111; padding: 20px; border-radius: 10px; width: 300px; transition: transform 0.3s; }
.plan-card:hover { transform: translateY(-10px); }
.price { font-size: 2em; color: #007BFF; }
.plan-button { background: #007BFF; color: #fff; padding: 10px 20px; border: none; cursor: pointer; transition: background 0.3s; }
.plan-button:hover { background: #0056b3; }

.faq { padding: 50px 20px; background: #000; animation: fadeIn 1s 1s backwards; }
.faq-item { margin-bottom: 20px; }
.faq-item h3 { color: #007BFF; }

.reviews { padding: 50px 20px; text-align: center; animation: fadeIn 1s 1.5s backwards; }
.rating { font-size: 2em; color: #ffd700; }
.testimonials { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.testimonial { background: #111; padding: 20px; border-radius: 10px; width: 250px; }

footer { text-align: center; padding: 20px; background: #000; border-top: 1px solid #007BFF; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>