<div dir="rtl" align="right">

# انتشار در گیت‌هاب

## ۱. ساخت مخزن
۱. در `github.com` وارد شوید و **New repository** را بزنید.

۲. نام را `webpify` بگذارید و **Public** را انتخاب کنید. README، .gitignore و license را اضافه نکنید (در پروژه هستند).

۳. **Create repository** را بزنید.

## ۲. بارگذاری فایل‌ها
از Git استفاده کنید، نه صفحه آپلود وب: صفحه وب ممکن است پوشه مخفی `.github` را که exe را می‌سازد رد کند.

Git را از `git-scm.com/download/win` نصب کنید، داخل پوشه پروژه cmd را باز کنید و هر خط را جداگانه بزنید (به‌جای `YOUR-USERNAME` نام کاربری خود را بنویسید):
```
git init
git add .
git commit -m "WebPify v1.0.0"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/webpify.git
git push -u origin main
```

## ۳. ساخت و انتشار exe
```
git tag v1.0.0
git push origin v1.0.0
```
۱. به تب **Actions** بروید و صبر کنید «Build Windows EXE» سبز شود (۳ تا ۵ دقیقه).

۲. در بخش **Releases** فایل `WebPify-Portable-1.0.0.exe` را می‌بینید.

اگر Actions خطای دسترسی داد: Settings، بعد Actions، بعد General، بعد Workflow permissions، گزینه **Read and write permissions** را انتخاب و ذخیره کنید، سپس کار را دوباره اجرا کنید.

## ۴. تکمیل صفحه پروژه
- روی چرخ‌دنده کنار **About** بزنید: توضیح، وب‌سایت `https://iramo.ai` و موضوع‌هایی مثل `webp`، `image-converter`، `electron` و `offline` را اضافه کنید.
- یک اسکرین‌شات به README اضافه کنید.

## ۵. نسخه‌های بعدی
۱. مقدار `version` را در `package.json` بالا ببرید (مثلاً 1.1.0).

۲. `git add . && git commit -m "v1.1.0" && git push`

۳. `git tag v1.1.0 && git push origin v1.1.0`

## درباره مجوز
فایل `LICENSE` یک مجوز سفارشی از نوع سورس‌اویلبل است. طبق قوانین گیت‌هاب، دیگران همچنان می‌توانند مخزن عمومی را فورک کنند. حتماً یک وکیل متن را بررسی کند. برای کنترل بیشتر، مخزن را خصوصی نگه دارید و فقط exe را منتشر کنید.

</div>
