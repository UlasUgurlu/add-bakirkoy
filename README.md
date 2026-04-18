# ADD Bakırköy Şubesi Web Sitesi

Statik, mobil uyumlu ve kırmızı-beyaz kurumsal tasarıma sahip çok sayfalı web sitesi.

## Sayfalar

- `index.html` — Anasayfa
- `hakkimizda.html` — Kurumsal tanıtım
- `tuzuk.html` — Tüzük esasları özeti
- `yonetim-kurulu.html` — Güncel kamuya açık yönetim bilgileri
- `etkinlikler.html` — Etkinlik içerikleri
- `haberler.html` — Haberler ve duyurular
- `uyelik.html` — Üyelik süreci
- `iletisim.html` — İletişim bilgileri, harita ve form

## Teknolojiler

- HTML5
- CSS3
- Vanilla JavaScript
- Harita için gömülü iframe

## Çalıştırma

Yerel olarak hızlı önizleme için bir statik sunucu açabilirsiniz.

### Python ile

```powershell
python -m http.server 5500
```

Ardından tarayıcıda `http://localhost:5500` adresini açın.

## Notlar

- Site tamamen statiktir; iletişim formu istemci taraflı doğrulama içerir.
- Formdaki "Basit reCAPTCHA doğrulaması" gerçek Google reCAPTCHA entegrasyonu değil, hafif istemci taraflı insan doğrulamasıdır.
- Yönetim kurulu sayfasında kullanılan başkan bilgisi resmî şube kaydından, diğer isimler kamuya açık paylaşımlardan derlenmiştir.
