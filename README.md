# Betsharp Proxy

Tämä paketti sisältää valmiin backend-proxyn Vercelille, joka hakee dataa RapidAPI:n kautta Pinnacle Odds -API:sta.

## Sisältö

- `index.js` – Vercel serverless-funktio
- `package.json` – määrittelee riippuvuudet
- `.env.example` – lisää oma RapidAPI-avaimesi
- `vercel.json` – Vercel-reititys ja build-asetukset

## Käyttöohjeet

1. Vie nämä tiedostot GitHub-repoon.
2. Luo uusi Vercel-projekti siitä reposta.
3. Lisää environment variable:
   - Key: `RAPIDAPI_KEY`
   - Value: (oma RapidAPI key)
4. Deploy ja testaa: `https://<sun-projektin-nimi>.vercel.app/api`