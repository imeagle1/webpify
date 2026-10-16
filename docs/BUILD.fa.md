<div dir="rtl" align="right">

# ساخت فایل پرتابل ویندوز

خروجی: `dist/WebPify-Portable-<version>.exe` (یک فایل، بدون نصب).

## روش اول: گیت‌هاب اکشنز (پیشنهادی)
یک تگ مثل `v1.0.0` را push کنید. گیت‌هاب خودش فایل exe را می‌سازد و به Release اضافه می‌کند. [راهنمای گیت‌هاب](GITHUB-GUIDE.fa.md) را ببینید.

## روش دوم: روی ویندوز خودتان
۱. Node.js نسخه LTS را از `nodejs.org` نصب کنید.

۲. **Command Prompt را با Run as administrator** باز کنید و هر دستور را جداگانه بزنید:
```
cd /d "C:\path\to\webpify"
npm install
npm run dist
```

۳. فایل exe در پوشه `dist` ساخته می‌شود.

## رفع مشکل
- خطای *running scripts is disabled*: از Command Prompt (cmd) استفاده کنید، نه PowerShell.
- خطای *Cannot create symbolic link*: cmd را با دسترسی ادمین اجرا کنید یا Developer Mode ویندوز را روشن کنید.
- مسیر دارای پرانتز مثل `files(1)`: پروژه را به مسیر ساده‌ای مثل `E:\webpify` ببرید.
- قبل از تست دوباره، پردازش‌های `WebPify` باقی‌مانده را در Task Manager ببندید.
- برای آیکون واضح‌تر، لوگوی PNG با اندازه ۵۱۲ پیکسل را در `build/icon.png` بگذارید.

</div>
