<h1 align="center">
🏴󠁧󠁢󠁥󠁮󠁧󠁿 quick-trans 🇫🇷
</h1>

<h6 align="center">
Auto-translate an i18n file for testing in one command
</h6>

When writing apps that support multiple languages, it's handy
to view the entire app in an alternate language in-case you've
missed any strings etc.

## For example

```bash
npx quick-trans en.json jp.json
```

Will auto-translate all strings in `en.json` into Japanese
(detected by file name).

## Features

`npx quick-trans` has some cool features, like:

 - 🙏 Preserving templates (`Hello, {{name}}!` -> `Konichiwa, {{name}}!`)
 - 🌴 Nested object support
 - 👍 Comments (JSONC)

---

<h6 align="center">by Adam Soutar</h6>
<p align="center">楽しみ!</h6>
