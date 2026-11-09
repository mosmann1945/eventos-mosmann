// Service worker mínimo — apenas o necessário para o app ser instalável (PWA).
// Não faz cache de nada; todo conteúdo é buscado normalmente da rede.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Sem estratégia de cache — apenas deixa a requisição seguir normalmente.
});
