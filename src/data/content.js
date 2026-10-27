// Resimler artık public klasöründen otomatik çekilecek.

export const personalInfo = {
  name: "Gülay ŞAHİN",
  title:
    "Bilgisayar Mühendisi | Yapay Zeka Geliştiricisi | Full-Stack Developer",
  description:
    "Bilgisayar Mühendisliği eğitimimle karmaşık problemlere mühendislik yaklaşımıyla çözümler üretiyorum. Python ile yapay zeka, React ile modern arayüzler ve Flutter ile mobil uygulamalar geliştiriyorum.",
  github: "https://github.com/gulaysahinn",
  linkedin: "https://www.linkedin.com/in/gulaysahinn/",
  email: "mailto:gulaysahin171@gmail.com",
  cvUrl: "/Gulay_SAHIN_CV.pdf",
};

export const navLinks = [
  { id: "home", title: "Ana Sayfa" },
  { id: "about", title: "Hakkımda" },
  { id: "experience", title: "Deneyim" },
  { id: "techstack", title: "Teknolojiler" },
  { id: "projects", title: "Projeler" },
  { id: "contact", title: "İletişim" },
];

export const skills = [
  // Programlama Dilleri
  { name: "Python", level: "Advanced", category: "language" },
  { name: "C#", level: "Intermediate", category: "language" },
  { name: "JavaScript", level: "Advanced", category: "language" },
  { name: "PHP", level: "Intermediate", category: "language" },

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
  { name: "MySQL", level: "Intermediate", category: "database" },
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
    role: "Uygulama Geliştirme Stajyeri",
    company: "Balıkesir Üniversitesi Rektörlüğü Bilgi İşlem Daire Başkanlığı",
    date: "Şubat 2026 - Devam Ediyor",
    location: "Çağış, Balıkesir",
    duration: "Devam Ediyor",
    description:
      "Üniversite bilgi sistemlerinde uygulama geliştirme ve yazılım süreçlerine katkı sağlıyorum.",
    technologies: [
      "Web Development",
      "Database Management",
      "Application Development",
    ],
  },
  {
    id: 2,
    role: "Yazılım Stajyeri",
    company: "Apps Akademi Şirketi",
    date: "Ağustos 2025 - Eylül 2025",
    location: "Maltepe, İstanbul",
    duration: "2 Ay",
    description:
      "Oracle SQL Developer kullanarak full-stack web uygulamaları geliştirdim ve APEX ile çalıştım.",
    technologies: [
      "Oracle SQL Developer",
      "APEX",
      "Full-stack",
      "Web Development",
    ],
  },
  {
    id: 3,
    role: "Gönüllü Donanım ve Yazılım stajyeri",
    company: "Tuzla Belediyesi Bilgi işlem Müdürlüğü",
    date: "Temmuz 2025 - Ağustos 2025",
    location: "Tuzla, İstanbul",
    duration: "2 Ay",
    description:
      "Web tabanlı yazılım geliştirme ve donanım bakımı konularında deneyim kazandım.",
    technologies: ["Web Development", "Hardware Maintenance", "IT Support"],
  },
];

export const projects = [
  {
    title: "Resonix AI",
    description:
      "Kamera karşısında yapılan sunumu gerçek zamanlı analiz eden kişisel sunum koçu. Göz odağı, ses tekrarı ve duruş gibi ölçümler ile değerlendirme yapar; geçmiş oturum verileriyle bağlam kuran bir chatbot ile derinlemesine analiz sohbeti sunar.",
    tags: ["AI", "React", "Machine Learning", "Python", "Computer Vision"],
    github: null,
    isPrivate: true,
    demo: null,
    images: [
      "images/resonix-1.png",
      "images/resonix-2.png",
      "images/resonix-3.png",
    ],
    type: "web",
    featured: true,
    // Görünmez katman: modelin gördüğü ham çıktı
    modelLayer: {
      pipeline: "CV Pipeline + LLM Chatbot",
      metrics: [
        { key: "eye_focus",          value: "0.73",  unit: "" },
        { key: "voice_repetition",   value: "0.18",  unit: "" },
        { key: "speech_rate",        value: "138",   unit: "wpm" },
        { key: "posture_stability",  value: "0.91",  unit: "" },
        { key: "session_history",    value: "true",  unit: "" },
      ],
      stack: ["OpenCV", "MediaPipe", "GPT-API", "React"],
    },
  },
  {
    title: "İstanbul Konut Fiyat Tahmin Sistemi",
    description:
      "İstanbul'daki konut fiyatlarını makine öğrenmesi algoritmaları ile tahmin eden yapay zeka projesi. Konum, metrekare ve oda sayısı gibi özelliklere göre fiyat tahmini yapar. En başarılı model 0.8897 R² skoru ile elde edildi.",
    tags: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "Data Analysis",
      "Regression",
    ],
    github: "https://github.com/gulaysahinn/istanbul_konut_fiyat_tahmin",
    demo: null,
    images: ["images/konut-1.png", "images/konut-2.png", "images/konut-3.png"],
    type: "web",
    featured: true,
    modelLayer: {
      pipeline: "Regression Pipeline",
      metrics: [
        { key: "best_model",         value: "Stacked (RF+GB)",  unit: "" },
        { key: "R²_score",           value: "0.8897",           unit: "" },
        { key: "approach",           value: "ensemble",         unit: "" },
        { key: "feature_importance", value: "ilçe 0.38",        unit: "" },
        { key: "feature_importance", value: "m² 0.29",          unit: "" },
        { key: "feature_importance", value: "oda 0.19",         unit: "" },
        { key: "dataset_size",       value: "15,000+",          unit: "listing" },
      ],
      stack: ["RandomForest", "GradientBoosting", "Scikit-learn", "Pandas"],
    },
  },
  {
    title: "Metinlerde Duygu Analizi",
    description:
      "Türkçe metinlerde duygu analizi yapan web tabanlı NLP uygulaması. Flask ve NLTK kullanılarak doğal dil işleme süreçleri uygulandı, Seaborn ile görselleştirildi.",
    tags: ["Python", "Flask", "NLTK", "Seaborn", "NLP"],
    github: "https://github.com/gulaysahinn/sentiment-analysis-project",
    demo: null,
    image: "images/DuyguAnalizi.png",
    type: "web",
    modelLayer: {
      pipeline: "NLP Sentiment Pipeline",
      metrics: [
        { key: "sentiment",   value: "positive",  unit: "" },
        { key: "pos_score",   value: "0.847",     unit: "" },
        { key: "neg_score",   value: "0.031",     unit: "" },
        { key: "neu_score",   value: "0.122",     unit: "" },
        { key: "token_count", value: "127",       unit: "tokens" },
      ],
      stack: ["NLTK", "VADER", "Flask", "Seaborn"],
    },
  },
  {
    title: "AI PassVault",
    description:
      "Cyberpunk tasarımlı, yapay zeka destekli ve güvenli parola yöneticisi. Verileri yerel şifreleme ile korur.",
    tags: ["Flutter", "Hive", "AI", "Security", "Dart"],
    github: null,
    isPrivate: true,
    demo: null,
    image: "images/passvault.jpeg",
    type: "mobile",
    modelLayer: {
      pipeline: "Security Analysis",
      metrics: [
        { key: "encryption",    value: "AES-256",          unit: "" },
        { key: "ai_strength",   value: "0.92",             unit: "" },
        { key: "entropy_bits",  value: "84.3",             unit: "bits" },
        { key: "storage",       value: "local_only",       unit: "" },
      ],
      stack: ["Flutter", "Hive", "Dart", "AES-256"],
    },
  },
  {
    title: "Not Ortalaması Hesapla",
    description:
      "Android ve iOS uyumlu, minimalist arayüze sahip performans odaklı not hesaplama aracı. Gelişmiş State Management yapısı kullanıldı.",
    tags: ["Flutter", "Dart", "UX Design"],
    github: "https://github.com/gulaysahinn/-average-calculation-app",
    demo: null,
    image: "images/ortalama.png",
    type: "mobile",
    modelLayer: {
      pipeline: "Flutter Runtime",
      metrics: [
        { key: "state_mgmt",    value: "Provider",   unit: "" },
        { key: "build_time",    value: "16",         unit: "ms" },
        { key: "platform",      value: "Android+iOS", unit: "" },
        { key: "widget_depth",  value: "7",          unit: "levels" },
      ],
      stack: ["Flutter", "Dart", "Provider"],
    },
  },
  {
    title: "USB Engelleme Sistemi",
    description:
      "Veri güvenliği için belirli USB cihazlarını donanım seviyesinde engelleyen Windows GUI uygulaması.",
    tags: ["C++", "Windows API", "Security", "GUI"],
    github: "https://github.com/gulaysahinn/USBLocker",
    demo: null,
    image: "images/usbBlocker.png",
    type: "web",
    modelLayer: {
      pipeline: "System API",
      metrics: [
        { key: "api",               value: "SetupAPI",  unit: "" },
        { key: "detection_latency", value: "<50",       unit: "ms" },
        { key: "privilege_level",   value: "SYSTEM",    unit: "" },
        { key: "hook_type",         value: "kernel",    unit: "" },
      ],
      stack: ["C++", "Win32 API", "SetupAPI"],
    },
  },
  {
    title: "Todo App",
    description:
      "Hafif, sade ve hızlı çalışan Yapılacaklar Listesi uygulaması. Görev ekleme, silme ve düzenleme özellikleri içerir.",
    tags: ["Flutter", "Dart", "Mobile"],
    github: "https://github.com/gulaysahinn/todo_app",
    demo: null,
    image: "images/TodoApp.png",
    type: "mobile",
    modelLayer: {
      pipeline: "Flutter State",
      metrics: [
        { key: "ops_per_sec",  value: "1200",       unit: "ops/s" },
        { key: "storage",      value: "SharedPrefs", unit: "" },
        { key: "platform",     value: "Android+iOS", unit: "" },
      ],
      stack: ["Flutter", "Dart", "SharedPreferences"],
    },
  },
  {
    title: "Restoran Menü",
    description:
      "React kullanılarak geliştirilmiş, interaktif ve modern arayüze sahip dijital restoran menüsü.",
    tags: ["React", "CSS", "Frontend"],
    github: "https://github.com/gulaysahinn/donercim-ismail-usta-menu",
    demo: null,
    image: "images/menu.png",
    type: "web",
    modelLayer: {
      pipeline: "React Runtime",
      metrics: [
        { key: "components",   value: "12",    unit: "" },
        { key: "load_time",    value: "1.2",   unit: "s" },
        { key: "breakpoints",  value: "3",     unit: "" },
        { key: "bundle_size",  value: "42",    unit: "KB" },
      ],
      stack: ["React", "CSS Modules", "Vite"],
    },
  },
];
