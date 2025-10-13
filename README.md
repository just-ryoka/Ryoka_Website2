# 🚀 Ryoka Website v2

> Сучасний персональний веб-сайт з відео-фоном, анімаціями та інтеграцією Last.fm


---

## ✨ Особливості

- 🎬 **Відео фон** — адаптивний background з плавними переходами
- 🎨 **MouseGlow ефект** — інтерактивне свічення за курсором
- 🎵 **NowPlaying** — інтеграція з Last.fm для відображення поточного треку
- 📱 **Responsive дизайн** — працює на всіх пристроях
- ⚡ **Performance** — оптимізовано для швидкого завантаження
- ♿ **Accessibility** — підтримка prefers-reduced-motion, focus-visible
- 🎭 **Smooth animations** — плавні анімації та переходи
- 🔍 **SEO оптимізація** — OpenGraph, Twitter Cards, meta теги

---

## 🛠️ Технології

- **Framework:** Next.js 15.5.4 (App Router)
- **React:** 19.1.0
- **Styling:** TailwindCSS 4
- **Icons:** React Icons
- **Font:** Comfortaa (Google Fonts)

---

## 🚀 Швидкий старт

### Локальна розробка

```bash
# Клонуйте репозиторій
git clone https://github.com/just-ryoka/Ryoka_Website2.git
cd Ryoka_Website2/ryoka-website-v2

# Встановіть залежності
npm install

# Запустіть dev сервер
npm run dev

# Відкрийте http://localhost:3000
```

### Деплой на GitHub Pages

**Читайте:** [QUICKSTART.md](./QUICKSTART.md)

```bash
# 1. Налаштуйте basePath (якщо потрібно)
# Див. BASEPATH_GUIDE.md

# 2. Увімкніть GitHub Pages
# Settings → Pages → Source: GitHub Actions

# 3. Push код
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# 4. Дочекайтеся деплою в Actions tab
```

---

## 📚 Документація

| Файл | Опис |
|------|------|
| [QUICKSTART.md](./QUICKSTART.md) | Швидкий старт для деплою на GitHub Pages |
| [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) | Покроковий чекліст деплою |
| [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) | Детальна інструкція з налаштування |
| [BASEPATH_GUIDE.md](./BASEPATH_GUIDE.md) | Як налаштувати basePath для вашого репо |
| [IMPROVEMENTS.md](./IMPROVEMENTS.md) | Список всіх покращень сайту |
| [SUMMARY.md](./SUMMARY.md) | Огляд змін для GitHub Pages |

---

## 🎯 Структура проекту

```
Ryoka_Website2/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── ryoka-website-v2/
│   ├── public/                 # Статичні файли
│   │   ├── large.mp4          # Фонове відео
│   │   ├── file.svg           # Poster для відео
│   │   └── .nojekyll          # GitHub Pages config
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── Avatar.tsx
│   │   │   │   ├── NowPlaying.tsx
│   │   │   │   ├── MouseGlow.tsx
│   │   │   │   └── dynamic-title.tsx
│   │   │   ├── api/
│   │   │   │   └── lastfm/
│   │   │   │       └── route.ts    # Last.fm API endpoint
│   │   │   ├── layout.tsx          # Root layout
│   │   │   ├── page.tsx            # Home page
│   │   │   └── globals.css         # Global styles
│   │   └── lib/
│   │       └── socialLinks.js      # Social media links
│   ├── next.config.ts              # Next.js config
│   ├── tailwind.config.ts          # Tailwind config
│   └── package.json
└── README.md (цей файл)
```

---

## 🎨 Компоненти

### Avatar
- Завантажує аватар з GitHub
- next/image для оптимізації
- Плавні анімації з'яви

### NowPlaying
- Інтеграція з Last.fm API
- Real-time оновлення (кожні 10 сек)
- Плавні переходи між треками
- Підтримка error states

### MouseGlow
- Інтерактивний glow ефект
- Слідує за курсором
- Градієнтне свічення

---

## ⚙️ Налаштування

### Environment Variables

Створіть `.env.local` для локальної розробки:

```env
LASTFM_API_KEY=your_api_key
LASTFM_USERNAME=just-ryoka
```

Для GitHub Pages додайте в **Settings → Secrets → Actions**:
- `LASTFM_API_KEY`
- `LASTFM_USERNAME`

### basePath Configuration

Для репозиторію НЕ `username.github.io` розкоментуйте в `next.config.ts`:

```typescript
basePath: '/Ryoka_Website2',
assetPrefix: '/Ryoka_Website2/',
```

Детально: [BASEPATH_GUIDE.md](./BASEPATH_GUIDE.md)

---

## 🧪 Команди

```bash
# Development
npm run dev          # Запустити dev сервер з Turbopack
npm run build        # Production білд
npm start            # Запустити production сервер
npm run lint         # Запустити ESLint

# Testing build locally
npm run build        # Створити статичні файли в out/
npx serve out        # Запустити локальний сервер
```

---

## 🌐 Live Demo

- **Production:** [https://just-ryoka.github.io](https://just-ryoka.github.io)
- **Repository:** [https://github.com/just-ryoka/Ryoka_Website2](https://github.com/just-ryoka/Ryoka_Website2)

---

## 📝 License

MIT License - дивіться [LICENSE.md](./LICENSE.md)

---

## 👤 Автор

**Ryoka**
- GitHub: [@just-ryoka](https://github.com/just-ryoka)
- Discord: [justryoka](https://discord.gg/PRYn2ghB)
- Telegram: [@justryoka](https://t.me/justryoka)
- Spotify: [Profile](https://open.spotify.com/user/31gzi2mzyjewmqgn477vzyp3wtwy)

---

## 🙏 Подяки

- Next.js team за чудовий framework
- Tailwind CSS за utility-first підхід
- React Icons за іконки
- Last.fm за API


---

## 🔮 Майбутні плани

- [ ] PWA підтримка
- [ ] Dark/Light theme toggle
- [ ] Blog section з MDX
- [ ] Contact form
- [ ] Analytics integration
- [ ] Particles.js background
- [ ] Custom cursor

---

**Зроблено з ❤️ by Ryoka**
