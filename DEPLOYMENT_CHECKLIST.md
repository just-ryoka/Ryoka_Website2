# ✅ GitHub Pages Deployment Checklist

## Перед деплоєм

### 1. Визначте тип репозиторію

- [ ] Мій репозиторій: `just-ryoka.github.io` ✅ (Готово, basePath не потрібен)
- [ ] Мій репозиторій: `Ryoka_Website2` ⚠️ (Потрібно розкоментувати basePath)

### 2. Налаштуйте next.config.ts

**Для репозиторію НЕ username.github.io:**

```typescript
// В next.config.ts розкоментуйте:
basePath: '/Ryoka_Website2',
assetPrefix: '/Ryoka_Website2/',
```

### 3. Налаштування GitHub

- [ ] Відкрито Settings → Pages
- [ ] Source: GitHub Actions (обрано)
- [ ] Збережено

### 4. (Опціонально) Last.fm API

**Якщо хочете NowPlaying:**

- [ ] Отримано API ключ на https://www.last.fm/api/account/create
- [ ] Додано в Settings → Secrets → Actions:
  - [ ] Secret `LASTFM_API_KEY` = ваш_ключ
  - [ ] Secret `LASTFM_USERNAME` = just-ryoka (або ваш username)

**Якщо НЕ потрібен NowPlaying:**
- [ ] Все працюватиме без API ключа (компонент просто не показується)

---

## Деплой

### 5. Запуш коду

```bash
cd /home/bazzite/WebSite/Ryoka_Website2

# Перевірте статус
git status

# Додайте всі файли
git add .

# Закомітьте
git commit -m "Configure GitHub Pages deployment"

# Запуште
git push origin main
```

### 6. Перевірте деплой

- [ ] Відкрито Actions tab на GitHub
- [ ] Workflow "Deploy to GitHub Pages" запустився
- [ ] Білд пройшов успішно (зелена галочка ✅)
- [ ] Deploy завершився

### 7. Відкрийте сайт!

**URL залежить від назви репозиторію:**

- `just-ryoka.github.io` → https://just-ryoka.github.io
- `Ryoka_Website2` → https://just-ryoka.github.io/Ryoka_Website2

---

## Перевірка працездатності

- [ ] Сайт відкривається
- [ ] Відео фон працює
- [ ] Соціальні іконки кліковабельні
- [ ] Анімації працюють
- [ ] MouseGlow ефект працює (рухайте мишкою)
- [ ] Responsive на мобільних (відкрийте DevTools)
- [ ] (Якщо є API ключ) NowPlaying показує треки

---

## Якщо щось не так

### Сайт не відкривається (404)
- ✅ Перевірте basePath в next.config.ts
- ✅ Перевірте що Actions workflow завершився успішно
- ✅ Дочекайтеся 1-2 хвилини після першого деплою

### Білі стилі / не завантажуються ресурси
- ✅ Перевірте basePath/assetPrefix
- ✅ Перевірте що в папці public/ є всі файли

### NowPlaying не працює
- ✅ Перевірте що додали LASTFM_API_KEY в Secrets
- ✅ Перевірте що зараз щось грає на Last.fm
- ✅ Відкрийте Console (F12) для помилок

### Workflow падає з помилкою
- ✅ Перевірте що package-lock.json існує
- ✅ Перевірте що в package.json правильні scripts
- ✅ Перегляньте логи в Actions tab

---

## Майбутні оновлення

Після початкового деплою просто:

```bash
# Внесіть зміни в код
# ...

# Запуште
git add .
git commit -m "Update website"
git push

# Автоматичний деплой! 🚀
```

---

## 🎉 Готово!

Ваш сайт тепер live на GitHub Pages!

Поділіться посиланням:
- Discord
- Telegram  
- GitHub Profile README
- Social Media

---

**Потрібна допомога?** Перегляньте:
- [QUICKSTART.md](./QUICKSTART.md) - швидкий старт
- [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) - детальна інструкція
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
