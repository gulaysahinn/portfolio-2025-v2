// Resimler artık public klasöründen otomatik çekilecek.

export const personalInfo = {
  name: "Gülay ŞAHİN",
  title:
    "Frontend Developer | Yapay Zeka Geliştiricisi | Mobil Uygulama Geliştiricisi",
  description:
    "Karmaşık problemleri modern teknolojilerle çözmeyi seviyorum. Python ile yapay zeka, React ile modern arayüzler ve Flutter ile mobil uygulamalar geliştiriyorum.",
  github: "https://github.com/gulaysahinn",
  linkedin: "https://www.linkedin.com/in/gulaysahinn/",
  email: "mailto:gulaysahin171@gmail.com",
  cvUrl: "public/cv.pdf",
};

export const navLinks = [
  { id: "home", title: "Ana Sayfa" },
  { id: "about", title: "Hakkımda" },
  { id: "experience", title: "Deneyim" },
  { id: "techstack", title: "Teknolojiler" },
  { id: "projects", title: "Projeler" },
  { id: "contact", title: "İletişim" },
];

// data/content.js
export const skills = [
  // Programlama Dilleri
  { name: "Python", level: "Advanced", category: "language" },
  { name: "C#", level: "Intermediate", category: "language" },
  { name: "JavaScript", level: "Advanced", category: "language" },

  // Frontend
  { name: "React.js", level: "Advanced", category: "frontend" },
  { name: "Tailwind CSS", level: "Advanced", category: "frontend" },

  // Mobil
  { name: "Flutter", level: "Intermediate", category: "mobile" },

  // AI & Machine Learning
  { name: "Machine Learning", level: "Intermediate", category: "ai" },
  { name: "TensorFlow", level: "Intermediate", category: "ai" },

  // Database
  { name: "Oracle", level: "Intermediate", category: "database" },
  { name: "MsSQL", level: "Intermediate", category: "database" },
  { name: "MongoDB", level: "Intermediate", category: "database" },

  // Tools & DevOps
  { name: "Git & GitHub", level: "Advanced", category: "tools" },

  // Backend
  { name: "Node.js", level: "Intermediate", category: "backend" },
  { name: "Firebase", level: "Intermediate", category: "backend" },
  { name: "TypeScript", level: "Intermediate", category: "language" },
  { name: "Next.js", level: "Intermediate", category: "frontend" },
];

export const experience = [
  {
    id: 1,
    role: "Yazılım Stajyeri",
    company: "Apps Akademi Şirketi",
    date: "Ağustos 2025 - Eylül 2025",
    description:
      "Oracel Sql Developer kullanarak full-stack web uygulamaları geliştirdim ve APEX ile çalıştım.",
    technologies: [
      "Oracle SQL Developer",
      "APEX",
      "Full-stack",
      "Web Development",
    ],
  },
  {
    id: 2,
    role: "Gönüllü Donanım ve Yazılım stajyeri",
    company: "Tuzla Belediyesi Bilgi işlem Müdürlüğü",
    date: "Temmuz 2025 - Ağustos 2025",
    description:
      "web tabanlı yazılım geliştirme ve donanım bakımı konularında deneyim kazandım.",
    technologies: ["Web Development", "Hardware Maintenance", "IT Support"],
  },
];

export const projects = [
  {
    title: "Metinlerde Duygu Analizi",
    description:
      "Türkçe metinlerde duygu analizi yapan web tabanlı NLP uygulaması. Flask ve NLTK kullanılarak doğal dil işleme süreçleri uygulandı, Seaborn ile görselleştirildi.",
    tags: ["Python", "Flask", "NLTK", "Seaborn", "NLP"],
    github: "https://github.com/gulaysahinn/sentiment-analysis-project",
    demo: null,
    image: "src/assets/images/DuyguAnalizi.png",
    type: "web",
  },
  {
    title: "AI PassVault",
    description:
      "Cyberpunk tasarımlı, yapay zeka destekli ve güvenli parola yöneticisi. Verileri yerel şifreleme ile korur.",
    tags: ["Flutter", "Hive", "AI", "Security", "Dart"],
    github: "https://github.com/gulaysahinn/ai_PassVault",
    demo: null,
    image: "src/assets/images/passvault.jpeg",
    type: "mobile",
  },
  {
    title: "Pet Klinik Takip Sistemi",
    description:
      "Veteriner klinikleri için hasta takibini dijitalleştiren masaüstü uygulaması. Gerçek zamanlı veri akışı sağlar.",
    tags: ["React", "Electron", "Firebase", "Desktop"],
    github: "https://github.com",
    demo: null,
    image: "src/assets/images/petklinik.png",
    type: "web",
  },
  {
    title: "Not Ortalaması Hesapla",
    description:
      "Android ve iOS uyumlu, minimalist arayüze sahip performans odaklı not hesaplama aracı. Gelişmiş State Management yapısı kullanıldı.",
    tags: ["Flutter", "Dart", "UX Design"],
    github: "https://github.com/gulaysahinn/-average-calculation-app",
    demo: null,
    image: "src/assets/images/ortalama.png",
    type: "mobile",
  },
  {
    title: "USB Engelleme Sistemi",
    description:
      "Veri güvenliği için belirli USB cihazlarını donanım seviyesinde engelleyen Windows GUI uygulaması.",
    tags: ["C++", "Windows API", "Security", "GUI"],
    github: "https://github.com/gulaysahinn/USBLocker",
    demo: null,
    image: "src/assets/images/usbBlocker.png",
    type: "web",
  },
  {
    title: "Todo App",
    description:
      "Hafif, sade ve hızlı çalışan Yapılacaklar Listesi uygulaması. Görev ekleme, silme ve düzenleme özellikleri içerir.",
    tags: ["Flutter", "Dart", "Mobile"],
    github: "https://github.com/gulaysahinn/todo_app",
    demo: null,
    image: "src/assets/images/TodoApp.png",
    type: "mobile",
  },
  {
    title: "Restoran Menü",
    description:
      "React kullanılarak geliştirilmiş, interaktif ve modern arayüze sahip dijital restoran menüsü.",
    tags: ["React", "CSS", "Frontend"],
    github: "https://github.com/gulaysahinn/donercim-ismail-usta-menu",
    demo: null,
    image: "src/assets/images/menu.png",
    type: "web",
  },
];
