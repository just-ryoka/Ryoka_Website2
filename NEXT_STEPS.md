# 🎯 ЩО РОБИТИ ДАЛІ

## ✅ Все налаштовано! Тепер:

### 1️⃣ Визначте тип вашого репозиторію

**Подивіться на назву репо на GitHub:**

**Якщо це `just-ryoka.github.io`:**
```
✅ Все готово! Переходьте до кроку 2.
```

**Якщо це `Ryoka_Website2` або інша назва:**
```
📝 Відкрийте: ryoka-website-v2/next.config.ts
📝 Розкоментуйте рядки:
   basePath: '/Ryoka_Website2',
   assetPrefix: '/Ryoka_Website2/',
```

Детально: [BASEPATH_GUIDE.md](./BASEPATH_GUIDE.md)

---

### 2️⃣ Налаштуйте GitHub Pages

1. Відкрийте: `https://github.com/just-ryoka/Ryoka_Website2/settings/pages`
2. В **Source** виберіть: **GitHub Actions**
3. Клікніть **Save**

---

### 3️⃣ Запуште код на GitHub

```bash
# Перейдіть в корінь репозиторію
cd /home/bazzite/WebSite/Ryoka_Website2

# Перевірте статус
git status

# Додайте всі файли
git add .

# Закомітьте
git commit -m "Configure GitHub Pages deployment 🚀"

# Запуште
git push origin main
```

---

### 4️⃣ Дочекайтеся деплою

1. Відкрийте: `https://github.com/just-ryoka/Ryoka_Website2/actions`
2. Побачите workflow **"Deploy to GitHub Pages"**
3. Дочекайтеся зеленої галочки ✅ (2-3 хвилини)

---

### 5️⃣ Відкрийте ваш сайт! 🎉

**URL залежить від назви репозиторію:**

- `just-ryoka.github.io` → **https://just-ryoka.github.io**
- `Ryoka_Website2` → **https://just-ryoka.github.io/Ryoka_Website2**

---

## 🎵 (Опціонально) Налаштування Last.fm

**Якщо хочете щоб працював NowPlaying:**

### 1. Отримайте API ключ
- Реєстрація: https://www.last.fm/api/account/create
- Заповніть форму (Application name: "My Website")
- Скопіюйте **API Key**

### 2. Додайте в GitHub Secrets
1. Відкрийте: `https://github.com/just-ryoka/Ryoka_Website2/settings/secrets/actions`
2. Клікніть **New repository secret**
3. Name: `LASTFM_API_KEY`
4. Value: `ваш_api_ключ`
5. Клікніть **Add secret**

### 3. Додайте username (опціонально)
1. **New repository secret**
2. Name: `LASTFM_USERNAME`
3. Value: `just-ryoka` (або ваш username)
4. **Add secret**

### 4. Перезапустіть деплой
- Actions → Deploy to GitHub Pages → Re-run jobs

---

## ✨ Готово!

Тепер кожен `git push` автоматично оновлюватиме ваш сайт!

---

## 📚 Корисні посилання

- **Сайт:** https://just-ryoka.github.io
- **Репо:** https://github.com/just-ryoka/Ryoka_Website2
- **Actions:** https://github.com/just-ryoka/Ryoka_Website2/actions
- **Settings:** https://github.com/just-ryoka/Ryoka_Website2/settings/pages

---

## 🐛 Щось не працює?

1. **Сайт 404** → Перевірте basePath в next.config.ts
2. **Білий екран** → Перевірте що Actions завершився успішно
3. **Стилі не завантажуються** → Перевірте assetPrefix
4. **NowPlaying не працює** → Перевірте GitHub Secrets

Детально: [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)

---

## 🆘 Потрібна допомога?

Читайте документацію:
- [QUICKSTART.md](./QUICKSTART.md) - швидкий старт
- [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) - повна інструкція
- [BASEPATH_GUIDE.md](./BASEPATH_GUIDE.md) - налаштування basePath

---

**Успіхів! 🚀**
