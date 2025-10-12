# ⚙️ Налаштування basePath для вашого репозиторію

## 🤔 Як визначити чи потрібен basePath?

### Варіант 1: Репозиторій `username.github.io` (НЕ потрібен basePath)

Якщо ваш репозиторій називається **точно так само** як ваш username:
- Репозиторій: `just-ryoka.github.io`
- URL сайту: `https://just-ryoka.github.io`

**Що робити:** Нічого! Все вже налаштовано правильно.

---

### Варіант 2: Репозиторій з іншою назвою (ПОТРІБЕН basePath)

Якщо репозиторій має будь-яку іншу назву:
- Репозиторій: `Ryoka_Website2`
- URL сайту: `https://just-ryoka.github.io/Ryoka_Website2`

**Що робити:** Розкоментуйте basePath в `next.config.ts`

---

## 📝 Як налаштувати basePath

### Крок 1: Відкрийте next.config.ts

Знайдіть файл:
```
ryoka-website-v2/next.config.ts
```

### Крок 2: Знайдіть закоментовані рядки

Ви побачите:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Якщо репозиторій не є username.github.io, розкоментуйте наступний рядок
  // і замініть 'repo-name' на назву вашого репозиторію
  // basePath: '/Ryoka_Website2',
  // assetPrefix: '/Ryoka_Website2/',
};
```

### Крок 3: Розкоментуйте та змініть

**Для репозиторію `Ryoka_Website2`:**
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Ryoka_Website2',
  assetPrefix: '/Ryoka_Website2/',
};
```

**Для репозиторію з іншою назвою (наприклад `my-portfolio`):**
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
};
```

### Крок 4: Збережіть файл

---

## ✅ Швидка перевірка

### Як дізнатися назву репозиторію?

1. Відкрийте GitHub
2. Подивіться на URL: `github.com/just-ryoka/НАЗВА_РЕПО`
3. Або подивіться на назву вгорі сторінки

### Приклади:

| Репозиторій | basePath потрібен? | Налаштування |
|-------------|-------------------|--------------|
| `just-ryoka.github.io` | ❌ НІ | Нічого не змінювати |
| `Ryoka_Website2` | ✅ ТАК | `basePath: '/Ryoka_Website2'` |
| `portfolio` | ✅ ТАК | `basePath: '/portfolio'` |
| `my-site` | ✅ ТАК | `basePath: '/my-site'` |

---

## 🧪 Як протестувати локально?

### З basePath:
```bash
cd ryoka-website-v2
npm run build
npx serve out

# Відкрийте: http://localhost:3000/Ryoka_Website2
```

### Без basePath:
```bash
cd ryoka-website-v2
npm run build
npx serve out

# Відкрийте: http://localhost:3000
```

---

## ⚠️ Типові помилки

### Помилка 1: Сайт відкривається, але білий екран
**Причина:** basePath налаштовано неправильно або не налаштовано взагалі

**Рішення:** Перевірте що:
- Назва в basePath збігається з назвою репозиторію
- Не забули `/` на початку
- Написання точно як в URL (case-sensitive)

### Помилка 2: 404 на всьому сайті
**Причина:** basePath налаштовано, але репозиторій називається username.github.io

**Рішення:** Видаліть/закоментуйте basePath

### Помилка 3: Стилі не завантажуються
**Причина:** Забули assetPrefix

**Рішення:** Додайте обидва рядки:
```typescript
basePath: '/repo-name',
assetPrefix: '/repo-name/',
```

---

## 📞 Все ще не працює?

1. Перевірте консоль браузера (F12 → Console)
2. Подивіться на помилки в Network tab
3. Переконайтеся що GitHub Pages увімкнено (Settings → Pages)
4. Дочекайтеся повного завершення GitHub Actions
5. Очистіть кеш браузера (Ctrl+Shift+R)

---

## 🎯 Підсумок

**Для `just-ryoka.github.io`:**
```typescript
// Все добре, нічого не змінюйте!
```

**Для інших репозиторіїв:**
```typescript
basePath: '/НАЗВА_ВАШОГО_РЕПО',
assetPrefix: '/НАЗВА_ВАШОГО_РЕПО/',
```

**Після зміни:**
```bash
git add next.config.ts
git commit -m "Configure basePath"
git push
```

✅ Готово!
