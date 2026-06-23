# O Homem Inteiro

Landing page de venda do ebook **O Homem Inteiro**, construída com Next.js.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Publicar no Cloudflare Workers

O projeto usa exportação estática do Next.js e Workers Static Assets. No painel do Cloudflare, configure:

- Build command: `pnpm build`
- Deploy command: `npx wrangler deploy`
- Preview deploy command: `npx wrangler versions upload`
- Production branch: `main`

A pasta `out` é gerada automaticamente durante o build e publicada pelo `wrangler.jsonc`.

## Configurar oferta

Copie `.env.example` para `.env.local` e ajuste:

- `NEXT_PUBLIC_CHECKOUT_URL`: URL final do checkout.
- `NEXT_PUBLIC_OFFER_PRICE`: preço exibido na oferta.
- `NEXT_PUBLIC_ORIGINAL_PRICE`: preço anterior exibido.
- `NEXT_PUBLIC_GUARANTEE_DAYS`: prazo da garantia.

Todos os botões usam a URL definida em `NEXT_PUBLIC_CHECKOUT_URL`. Na ausência da variável, o projeto utiliza o checkout da Kiwify configurado no código.
