# 🎯 Quick Start Guide - GitHub Pages

## Варіант 1: Без NowPlaying (найпростіший) ✅

### Крок 1: Налаштуйте basePath
Відкрийте `next.config.ts`:

**Якщо репозиторій `just-ryoka.github.io`:**
```typescript
// Нічого не змінюйте, все вже готово!
```

**Якщо репозиторій `Ryoka_Website2` або інша назва:**
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Ryoka_Website2',  // ⬅️ Розкоментуйте
  assetPrefix: '/Ryoka_Website2/', // ⬅️ Розкоментуйте
};
```

### Крок 2: Вимкніть GitHub Pages в Settings
1. GitHub → Your Repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save

### Крок 3: Push код
```bash
git add .
git commit -m "Setup GitHub Pages"
git push origin main
```

### Крок 4: Дочекайтеся деплою
- Перейдіть в **Actions** tab
- Дочекайтеся зеленої галочки ✅
- Відкрийте сайт!

---

## Варіант 2: З NowPlaying (потребує API ключ) 🎵

### Додаткові кроки:

1. **Отримайте Last.fm API ключ:**
   - Реєстрація: https://www.last.fm/api/account/create
   - Скопіюйте API Key

2. **Додайте до GitHub Secrets:**
   - Settings → Secrets and variables → Actions
   - New repository secret:
     - Name: `LASTFM_API_KEY`
     - Value: `ваш_api_ключ`

3. **Оновіть workflow** (`.github/workflows/deploy.yml`):
```yaml
- name: Build with Next.js
  run: npm run build
  env:
    NODE_ENV: production
    LASTFM_API_KEY: ${{ secrets.LASTFM_API_KEY }}
    LASTFM_USERNAME: just-ryoka
```

4. **Push і готово!**

---

## ⚡ Швидкі команди

```bash
# Локальне тестування
cd ryoka-website-v2
npm install
npm run build
npx serve out

# Деплой
git add .
git commit -m "Update site"
git push
```

---

## 🔗 Де буде сайт?

- `just-ryoka.github.io` → **https://just-ryoka.github.io**
- `Ryoka_Website2` → **https://just-ryoka.github.io/Ryoka_Website2**

---

## 🐛 Проблеми?

1. **404 на сторінці** → Перевірте basePath
2. **Білі стилі** → Перевірте асети (public/)
3. **NowPlaying не працює** → Перевірте GitHub Secrets

Детальна інструкція: [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)
