# 🚀 Деплой на GitHub Pages

## 📋 Що було налаштовано

### 1. **Next.js конфігурація** (`next.config.ts`)
- ✅ Додано `output: 'export'` для статичного експорту
- ✅ Додано `images: { unoptimized: true }` для роботи без Image Optimization API
- ⚠️ Закоментовано `basePath` - розкоментуйте якщо ваш репозиторій не `username.github.io`

### 2. **GitHub Actions** (`.github/workflows/deploy.yml`)
- ✅ Автоматичний білд при push в `main`
- ✅ Автоматичний деплой на GitHub Pages
- ✅ Підтримка manual trigger

### 3. **Package.json**
- ✅ Оновлено build скрипт (прибрано --turbopack для стабільності)
- ✅ Додано export команду

### 4. **Додаткові файли**
- ✅ `.nojekyll` в public/ для правильної роботи з Next.js

---

## 🔧 Інструкція по налаштуванню GitHub Pages

### Крок 1: Перевірте назву репозиторію

**Якщо ваш репозиторій називається `just-ryoka.github.io`:**
- ✅ Все готово! Нічого не треба змінювати.
- Сайт буде доступний за адресою: `https://just-ryoka.github.io`

**Якщо репозиторій має іншу назву (наприклад, `Ryoka_Website2`):**
- 📝 Розкоментуйте в `next.config.ts` рядки:
  \`\`\`typescript
  basePath: '/Ryoka_Website2',
  assetPrefix: '/Ryoka_Website2/',
  \`\`\`
- Сайт буде доступний за адресою: `https://just-ryoka.github.io/Ryoka_Website2`

### Крок 2: Увімкніть GitHub Pages

1. Відкрийте ваш репозиторій на GitHub
2. Перейдіть в **Settings** → **Pages**
3. В секції **Source** виберіть:
   - Source: **GitHub Actions**
4. Збережіть налаштування

### Крок 3: Запуште зміни

\`\`\`bash
cd /home/bazzite/WebSite/Ryoka_Website2
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
\`\`\`

### Крок 4: Перевірте деплой

1. Перейдіть в **Actions** tab у вашому репозиторії
2. Ви побачите workflow "Deploy to GitHub Pages"
3. Дочекайтеся завершення (зелена галочка ✅)
4. Відкрийте ваш сайт за адресою з налаштувань Pages

---

## 🎯 Важливі моменти

### ⚠️ API Route не працюють на GitHub Pages
GitHub Pages підтримує тільки статичні сайти. Ваш `/api/lastfm` route **не буде працювати**.

**Рішення:**
1. Перемістити Last.fm API на окремий backend (Vercel, Railway, Netlify Functions)
2. Або використати клієнтське fetch безпосередньо до Last.fm API
3. Або видалити NowPlaying функціонал для GitHub Pages версії

### 📝 Оновлення коду для GitHub Pages версії

Якщо хочете залишити NowPlaying, потрібно змінити `NowPlaying.tsx`:

\`\`\`typescript
// Замість
const res = await fetch('/api/lastfm');

// Використовуйте
const res = await fetch('https://your-backend.vercel.app/api/lastfm');
// або прямий запит до Last.fm API
\`\`\`

---

## 🔄 Автоматичні оновлення

Після налаштування кожен push в `main` branch автоматично:
1. 🏗️ Збирає проект
2. 📦 Створює статичні файли
3. 🚀 Деплоїть на GitHub Pages

---

## 🧪 Локальне тестування експорту

Перед пушем можна протестувати локально:

\`\`\`bash
cd ryoka-website-v2

# Білд
npm run build

# Перевірте папку out/
ls -la out/

# Запустіть локальний сервер для тестування
npx serve out
\`\`\`

---

## 🐛 Вирішення проблем

### Помилка: "Module not found"
- Перевірте що всі залежності встановлені: \`npm install\`

### Помилка: "Image Optimization API not available"
- ✅ Вже виправлено через \`images: { unoptimized: true }\`

### Сайт не завантажується / 404 на ресурсах
- Перевірте чи правильно налаштовано \`basePath\` в \`next.config.ts\`
- Для репозиторію не username.github.io потрібен basePath

### API routes не працюють
- GitHub Pages не підтримує server-side code
- Використовуйте зовнішній backend або client-side fetch

---

## 📚 Додаткова інформація

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)

---

## ✅ Checklist перед деплоєм

- [ ] Перевірено назву репозиторію
- [ ] Налаштовано basePath (якщо потрібно)
- [ ] Увімкнено GitHub Pages в Settings
- [ ] Вирішено питання з API routes
- [ ] Протестовано локально (\`npm run build\`)
- [ ] Запушено зміни в main
- [ ] Перевірено Actions workflow
- [ ] Відкрито сайт і все працює!

---

**Створено для Ryoka Website v2** 🚀
