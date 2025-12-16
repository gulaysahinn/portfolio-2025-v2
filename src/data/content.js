// Resimler artık public klasöründen otomatik çekilecek.

export const personalInfo = {
  name: "Gülay ŞAHİN",
  title: "Bilgisayar Mühendisliği Öğrencisi & Yazılım Geliştirici",
  description:
    "Karmaşık problemleri modern teknolojilerle çözmeyi seviyorum. Python ile yapay zeka, React ile modern arayüzler ve Flutter ile mobil uygulamalar geliştiriyorum.",
  github: "https://github.com/gulaysahinn",
  linkedin: "https://www.linkedin.com/in/gulaysahinn/",
  email: "mailto:gulaysahin171@gmail.com",
};

export const navLinks = [
  { id: "home", title: "Ana Sayfa" },
  { id: "about", title: "Hakkımda" },
  { id: "techstack", title: "Teknolojiler" },
  { id: "projects", title: "Projeler" },
  { id: "contact", title: "İletişim" },
];

export const skills = [
  { name: "Python", level: "Advanced", category: "AI & Backend" },
  { name: "Machine Learning", level: "Intermediate", category: "AI & Backend" },
  { name: "TensorFlow", level: "Intermediate", category: "AI & Backend" },
  { name: "React.js", level: "Advanced", category: "Frontend" },
  { name: "Flutter", level: "Intermediate", category: "Mobile" },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend" },
  { name: "JavaScript", level: "Advanced", category: "Languages" },
  { name: "MsSQL", level: "Intermediate", category: "Database" },
  { name: "MongoDB", level: "Intermediate", category: "Database" },
  { name: "Git & GitHub", level: "Intermediate", category: "Tools" },
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
