# 🚀 Gülay Şahin - Personal Portfolio

Bu proje, yeteneklerimi, projelerimi ve akademik geçmişimi sergilemek amacıyla modern web teknolojileri kullanılarak geliştirilmiş kişisel portfolyo web sitesidir.

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

Bu proje aşağıdaki teknolojiler ve kütüphaneler kullanılarak geliştirilmiştir:

- **Core**: React.js (Vite ile)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & React Type Animation
- **Icons**: React Icons (FontAwesome, Simple Icons)
- **Form Handling**: EmailJS (Sunucusuz e-posta gönderimi için)

## ✨ Özellikler

- ✅ **Tamamen Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- ✅ **Modern UI/UX**: Glassmorphism efektleri ve yumuşak geçişler
- ✅ **Animasyonlu Geçişler**: Framer Motion ile zenginleştirilmiş sayfa etkileşimleri
- ✅ **Scroll to Top**: Sayfa yukarı çıkma butonu
- ✅ **İletişim Formu**: Ziyaretçilerin doğrudan e-posta gönderebilmesi (EmailJS entegrasyonu)
- ✅ **SEO Optimized**: Meta taglar, Open Graph ve Twitter Card desteği
- ✅ **Performance**: Lazy loading, code splitting ve optimize edilmiş build

## 🚀 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/gulaysahinn/portfolio-2025-v2.git
cd portfolio-2025-v2
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. EmailJS Yapılandırması

İletişim formunun çalışması için EmailJS hesabınızı yapılandırmanız gerekir:

1. [EmailJS](https://www.emailjs.com/) hesabı oluşturun
2. Bir service ve email template oluşturun
3. `.env` dosyası oluşturun:

```bash
cp .env.example .env
```

4. `.env` dosyasını düzenleyin ve bilgilerinizi ekleyin:

```env
VITE_SERVICE_ID=your_service_id_here
VITE_TEMPLATE_ID=your_template_id_here
VITE_PUBLIC_KEY=your_public_key_here
```

### 4. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

## 📦 Production Build

```bash
npm run build
npm run preview
```

## 📁 Proje Yapısı

```
portfolio-2025-v2/
├── public/
│   ├── images/          # Proje görselleri
│   ├── cv.pdf          # CV dosyası
│   └── logo.jpg        # Site ikonu
├── src/
│   ├── components/     # Yeniden kullanılabilir bileşenler
│   ├── data/          # İçerik verileri
│   ├── layout/        # Layout bileşenleri (Navbar, Footer)
│   ├── sections/      # Sayfa bölümleri
│   ├── App.jsx        # Ana uygulama bileşeni
│   └── main.jsx       # Giriş noktası
├── .env.example       # Örnek çevre değişkenleri
└── vite.config.js     # Vite yapılandırması
```

## 🎨 Özelleştirme

### İçerik Güncelleme

Tüm içerik `src/data/content.js` dosyasında merkezi olarak yönetilir:

- Kişisel bilgiler
- Navigasyon linkleri
- Yetenekler ve teknolojiler
- Deneyimler
- Projeler

### Renkler ve Tema

Tailwind CSS yapılandırması `tailwind.config.js` dosyasında bulunur.

## 📄 Lisans

Bu proje kişisel kullanım içindir. Tüm hakları saklıdır.

## 📬 İletişim

- **Email**: gulaysahin171@gmail.com
- **LinkedIn**: [linkedin.com/in/gulaysahinn](https://www.linkedin.com/in/gulaysahinn/)
- **GitHub**: [github.com/gulaysahinn](https://github.com/gulaysahinn)

---

Made with ❤️ by Gülay Şahin
