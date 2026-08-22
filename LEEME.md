# ConsultaEC — Herramientas para Ecuador

Sitio web listo para publicar y monetizar con publicidad. HTML/CSS/JS puro, sin backend ni base de datos.

## 📄 Páginas incluidas
| Archivo | Herramienta | Palabra clave que ataca |
|---|---|---|
| `index.html` | Validador de **cédula y RUC** | "validar cédula / RUC Ecuador" |
| `calculadora-decimos.html` | **Décimo tercero y cuarto** | "calcular décimo tercero / cuarto" |
| `calculadora-iva.html` | **IVA 15%** (agregar/desglosar) | "calcular IVA Ecuador 15%" |
| `calculadora-finiquito.html` | **Finiquito / liquidación** | "calcular finiquito / liquidación" |
| `calculadora-sueldo-neto.html` | **Sueldo neto** (IESS 9,45%) | "calcular sueldo neto Ecuador" |
| `calculadora-horas-extra.html` | **Horas extra** (50% y 100%) | "calcular horas extra Ecuador" |
| `calculadora-iess.html` | **Aportes al IESS** (9,45% / 11,15%) | "calcular aportes IESS Ecuador" |
| `conversor-horas.html` | **Conversor de horas** (decimal ↔ h:min) | "convertir horas decimales a minutos" |

Cada página tiene su propio título, descripción y contenido → así cada una puede
posicionar por separado en Google (más tráfico = más ingresos).

Páginas legales: `politica-privacidad.html` y `contacto.html` (requisitos de AdSense).

Archivos de apoyo: `estilo.css` (diseño compartido), `analytics.js` (Google Analytics), `sitemap.xml`, `robots.txt`, `og-image.png`, `google9c3be8c96b88ff31.html` (verificación Search Console).

## ✉️ Formulario de contacto (Web3Forms)
La página `contacto.html` usa **Web3Forms** (gratis, sin backend). Los mensajes llegan
directo al correo asociado al Access Key configurado en el propio formulario.
- El Access Key está en `contacto.html` (campo oculto `access_key`).
- Plan gratuito: 250 mensajes/mes.
- No expone tu correo en la página.

## 📊 Google Analytics (GA4)
El seguimiento está centralizado en `analytics.js` y ya viene enlazado en todas las
páginas. Solo tienes que abrir `analytics.js` y reemplazar `G-XXXXXXXXXX` por tu
**ID de medición** (en Analytics: Admin → Flujos de datos → tu web → "ID de medición",
tiene el formato `G-XXXXXXXXXX`). Así el seguimiento se mantiene en cada publicación.

## 📢 Publicidad no intrusiva (ya integrada en todas las páginas)
4 espacios etiquetados "Publicidad", separados de los botones, sin pop-ups:
1. **Superior** (leaderboard 728×90)
2. **En contenido** (rectángulo 300×250)
3. **Lateral** (300×600, solo escritorio)
4. (En index) **Inferior** responsive

## 🧩 Cómo activar Google AdSense
1. Crea tu cuenta en https://adsense.google.com y agrega tu dominio.
2. Cuando te aprueben, copia el **script de AdSense** y pégalo en el `<head>` de
   **cada** archivo `.html` donde dice `ADSENSE — CARGADOR PRINCIPAL`.
3. Crea un bloque de anuncios por cada espacio. En el HTML busca los comentarios
   `PUBLICIDAD · ...` y reemplaza el `<div class="ad__box">…</div>` por tu
   `<ins class="adsbygoogle">…</ins>`.

## ✏️ Antes de publicar (importante)
- Reemplaza `TU-DOMINIO.com` por tu dominio real en:
  todos los `.html` (canonical y og:url/og:image), `sitemap.xml` y `robots.txt`.
- (Opcional) crea una imagen `og-image.png` de 1200×630 px para las redes sociales.
- Verifica el **SBU** vigente del año (se usa en Décimos y Finiquito).

## 🚀 Cómo publicarla (gratis)
- **Netlify Drop** (lo más fácil): https://app.netlify.com/drop → arrastra la
  carpeta `consulta-ec`. Queda online con HTTPS al instante.
- También sirve **Vercel**, **Cloudflare Pages**, **GitHub Pages** o tu hosting.

## 🔎 SEO
- Registra el sitio en Google Search Console y envía el `sitemap.xml`.
- Comparte en grupos de contadores, emprendedores y trámites del Ecuador.
- Con el tiempo agrega más herramientas (ej. calculadora de horas extra, sueldo neto).

## ⚖️ Legal
- El validador solo hace **cálculo matemático**; no consulta ni divulga datos
  personales (cumple la LOPDP).
- Las calculadoras laborales/tributarias muestran valores **referenciales**; el
  aviso ya está en cada página. No los presentes como oficiales.
- No es un sitio oficial del SRI ni del Ministerio del Trabajo.

## 🧪 Probar en tu PC
En la carpeta del proyecto:
```
python -m http.server 8000
```
Luego abre http://localhost:8000 en el navegador.
