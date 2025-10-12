# 🔧 Діагностика Last.fm віджету

## Перевірте чи працює

### 1. Перевірте .env файл

Створіть або відкрийте `.env.local` в папці `ryoka-website-v2/`:

```env
LASTFM_API_KEY=ваш_api_ключ_тут
LASTFM_USERNAME=TheRyoka
```

⚠️ **ВАЖЛИВО:** Username тепер `TheRyoka` (змінився з `just-ryoka`)

### 2. Отримайте API ключ (якщо немає)

1. Перейдіть на: https://www.last.fm/api/account/create
2. Заповніть форму:
   - Application name: `My Website`
   - Application description: `Personal website now playing`
3. Натисніть **Submit**
4. Скопіюйте **API Key** (НЕ Secret!)

### 3. Перезапустіть dev сервер

```bash
cd ryoka-website-v2

# Зупиніть сервер (Ctrl+C)
# Запустіть знову
npm run dev
```

### 4. Перевірте консоль браузера

1. Відкрийте http://localhost:3000
2. Відкрийте DevTools (F12)
3. Перейдіть в Console
4. Шукайте повідомлення з `[Last.fm]` або `[NowPlaying]`

### 5. Можливі помилки та рішення

#### ❌ `[Last.fm] API key not found`
**Рішення:** Додайте `LASTFM_API_KEY` в `.env.local`

#### ❌ `[Last.fm] API error: 6 User not found`
**Рішення:** Перевірте `LASTFM_USERNAME` (зараз має бути `TheRyoka`)

#### ❌ `[Last.fm] API error: 10 Invalid API key`
**Рішення:** Перевірте що API ключ правильний

#### ❌ `[Last.fm] No tracks found`
**Можливо:** 
- Зараз нічого не грає на Last.fm
- Профіль приватний
- Scrobbling вимкнений

#### ✅ `[Last.fm] Now playing: Song Name by Artist`
**Відмінно!** Віджет працює правильно!

---

## Тестування API напряму

Перевірте чи працює API Last.fm:

```bash
# Замініть YOUR_API_KEY на ваш ключ
curl "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=TheRyoka&api_key=YOUR_API_KEY&format=json&limit=1"
```

Має повернути JSON з треками.

---

## Перевірка в браузері

Відкрийте в браузері:
```
http://localhost:3000/api/lastfm
```

Має показати JSON:
```json
{
  "isPlaying": true,
  "title": "Song Name",
  "artist": "Artist Name",
  "album": "Album Name",
  "image": "https://...",
  "url": "https://..."
}
```

Або якщо нічого не грає:
```json
{
  "isPlaying": false
}
```

---

## Чому може не працювати?

### 1. Username змінився
- Було: `just-ryoka`
- Стало: `TheRyoka`
- **Рішення:** Оновіть `.env.local`

### 2. Немає API ключа
**Рішення:** Додайте `LASTFM_API_KEY` в `.env.local`

### 3. Сервер не перезапустився
**Рішення:** Зупиніть і запустіть `npm run dev` знову

### 4. Нічого не грає
- Треба щоб зараз щось грало на Spotify/Apple Music/YouTube з scrobbling
- Перевірте що scrobbling увімкнений на Last.fm

### 5. Профіль приватний
- Перевірте налаштування приватності на Last.fm
- Recent tracks мають бути публічними

---

## Швидка діагностика

Відкрийте консоль браузера та вставте:

```javascript
fetch('/api/lastfm')
  .then(r => r.json())
  .then(d => console.log('Last.fm response:', d))
  .catch(e => console.error('Error:', e));
```

Це покаже що повертає API.

---

## Все ще не працює?

1. Перевірте файл `.env.local` існує
2. Перевірте що ключ без лапок і пробілів
3. Перевірте що dev сервер запущений
4. Очистіть кеш браузера (Ctrl+Shift+R)
5. Перевірте консоль на помилки

---

## Корисні посилання

- Last.fm API Account: https://www.last.fm/api/account/create
- Last.fm API Docs: https://www.last.fm/api/intro
- Ваш профіль: https://www.last.fm/user/TheRyoka
- Recent tracks: https://www.last.fm/user/TheRyoka/library

---

**Після виправлення віджет має з'явитися автоматично коли щось грає! 🎵**
