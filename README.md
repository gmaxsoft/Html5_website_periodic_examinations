# Badania Okresowe Leszno - Website

Website for medical practice specializing in occupational medicine and medical examinations in Leszno, Poland.

## 🌐 Live Website

https://badaniaokresowe.com.pl

## 📋 Description

Professional website for a medical practice offering:
- Pre-employment medical examinations
- Periodic medical examinations
- Control medical examinations
- Driver medical examinations
- Medical examinations for various professional groups (sanitary supervision, sailors, radiation workers, etc.)

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Styling and responsive design
- **JavaScript (ES5)** - Interactive functionality

### JavaScript Libraries & Plugins
- **jQuery** - DOM manipulation and event handling
- **jQuery Dropotron** - Dropdown menu functionality
- **jQuery Scrollex** - Scroll-based animations and effects
- **Font Awesome** - Icon library for medical and UI icons
- **Breakpoints.js** - Responsive breakpoint management
- **Browser.js** - Browser detection utilities

### SEO & Metadata
- **JSON-LD** - Structured data (Schema.org MedicalOrganization)
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter sharing optimization
- **Meta Tags** - Comprehensive SEO meta tags

### Development & Deployment
- **Git** - Version control
- **OVH VPS + nginx** - Production hosting (static files from `dist/`)
- **GitHub Actions / GitHub Pages** - Optional mirror / CI build
- **Webpack 5** - Module bundler and asset optimization
- **Babel** - JavaScript transpilation
- **Terser** - JavaScript minification
- **CSS Minimizer** - CSS compression
- **Gzip/Brotli Compression** - Prefabricated `.gz` / `.br` served by nginx (`gzip_static`)

### Web Standards
- **Web App Manifest** - PWA support
- **Robots.txt** - Search engine crawling directives
- **Sitemap.xml** - Site structure for search engines
- **Canonical URLs** - Duplicate content prevention

## 📁 Project Structure

```
www/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── assets/
│   ├── css/
│   │   └── main.css            # Main stylesheet
│   ├── images/                 # Images and icons
│   ├── js/                     # JavaScript files
│   └── webfonts/               # Font Awesome fonts
├── index.html                   # Homepage
├── oferta.html                  # Services/Offer page
├── kontakt.html                 # Contact page
├── polityka_prywatnosci.html    # Privacy policy
├── robots.txt                   # SEO robots file
├── sitemap.xml                  # SEO sitemap
├── site.webmanifest             # PWA manifest
└── README.md                    # This file
```

## 🚀 Features

- ✅ Fully responsive design
- ✅ SEO optimized (meta tags, structured data, canonical URLs)
- ✅ Social media sharing optimization (Open Graph, Twitter Cards)
- ✅ Accessible navigation
- ✅ Mobile-friendly menu
- ✅ Contact forms integration (Formspree)
- ✅ Fast loading times
- ✅ Valid HTML5 markup
- ✅ Gzip and Brotli compression
- ✅ Minified JavaScript and CSS
- ✅ Optimized assets

## 📱 Pages

1. **Homepage** (`index.html`) - Main landing page with services overview
2. **Offer** (`oferta.html`) - Detailed services and offerings
3. **Contact** (`kontakt.html`) - Contact information and details
4. **Privacy Policy** (`polityka_prywatnosci.html`) - GDPR compliance information

## 🔧 Setup & Development

### Prerequisites
- A web server (local or remote)
- Git (for version control)

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/gmaxsoft/Html5_website_periodic_examinations.git
```

2. Open the project in a web server or use a local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Open `http://localhost:8000` in your browser

## 🚢 Deployment

### Production (OVH VPS + nginx)

Produkcja działa na VPS OVH z **nginx** (bez Apache). Build Webpack (`dist/`) jest serwowany jako pliki statyczne.

1. Zbuduj stronę:
```bash
npm ci
npm run build
```

2. Wgraj zawartość `dist/` na serwer, np. do:
   `/var/www/badaniaokresowe.com.pl/html`

3. Konfiguracja nginx (HTTPS, przekierowanie na `www`, nagłówki bezpieczeństwa, `gzip_static` dla plików z Webpack) jest utrzymywana lokalnie w katalogu `deploy/` (nie jest w repozytorium).

DNS: rekordy `A`/`AAAA` dla `badaniaokresowe.com.pl` i `www` → IP VPS.  
SSL: Let's Encrypt (`certbot --nginx`).

Kanoniczny adres: `https://www.badaniaokresowe.com.pl` (HTTP i host bez `www` są przekierowywane).

### GitHub Pages (opcjonalnie)

Push na `main` / `master` nadal uruchamia GitHub Actions i może publikować mirror na GitHub Pages.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

© 2025 badaniaokresowe.com.pl

## 👨‍💻 Development

Developed by [MaxSoft](https://www.maxsoft.pl)
