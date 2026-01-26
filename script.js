// (Data tetap sama dengan aslinya untuk fungsionalitas)
const resultData = {
  G1: {
    title: "Romance",
    desc: "Dikit-dikit baper, hidup lu penuh soal hati dan perasaan.",
  },
  G2: {
    title: "Comedy",
    desc: "Hidup lu santai, penuh tawa, meski kadang semesta becandanya kelewatan.",
  },
  G3: {
    title: "Slice of Life",
    desc: "Hidup lu ngalir aja, ga banyak drama, tapi tiap hari tetap ada cerita kecil yang berasa.",
  },
  G4: {
    title: "Action",
    desc: "Ambisius, gas terus, target lu jelas dan ga suka diem di tempat.",
  },
  G5: {
    title: "Drama",
    desc: "Banyak plot twist, emosional, dan vibes-nya kerasa dalem banget.",
  },
  P1: {
    title: "Social Butterfly",
    desc: "Energi lu muncul pas bareng orang lain. Gampang nyambung!",
  },
  P2: {
    title: "Quiet Thinker",
    desc: "Kalem di luar, tapi pikiran lu aktif terus walau jarang diungkapin.",
  },
  P3: {
    title: "The Achiever",
    desc: "Kalo ada mau, harus dapet. Ambisi lu bahan bakar utama.",
  },
  P4: {
    title: "Easy-Going",
    desc: "'Yaudahlah ya' adalah jalan ninja lu biar ga gampang stres.",
  },
  P5: {
    title: "The Worrier",
    desc: "Pikiran lu sering jalan terus, mikirin banyak kemungkinan sebelum sesuatu terjadi.",
  },
  T1: {
    title: "Legacy Builder",
    desc: "Pengen settle, punya sesuatu yang bisa dibanggain nanti.",
  },
  T2: {
    title: "Wealth Chaser",
    desc: "Cuan dulu, healing kemudian. Masa depan harus stabil secara finansial.",
  },
  T3: {
    title: "Stability Seeker",
    desc: "Ga butuh yang aneh-aneh, yang penting tenang dan aman.",
  },
  T4: {
    title: "Impact Maker",
    desc: "Pengen jadi orang yang berguna buat orang di sekitar lu.",
  },
  T5: {
    title: "Freedom Finder",
    desc: "Kebebasan adalah segalanya. Ga suka diatur-atur.",
  },
  R1: {
    title: "Main Character",
    desc: "Aura lu kenceng, semua kejadian kayak berpusat di lu.",
  },
  R2: {
    title: "Support System",
    desc: "Paling bisa diandelin temen pas lagi susah. Lu pendengar baik.",
  },
  R3: {
    title: "Lone Wolf",
    desc: "Lebih nyaman jalan sendiri. Mandiri adalah kunci.",
  },
  R4: {
    title: "Hidden Hero",
    desc: "Ga banyak gaya, tapi kontribusi lu paling kerasa efeknya.",
  },
  R5: {
    title: "Wild Card",
    desc: "Unik dan susah ditebak. Lu bikin suasana jadi beda.",
  },
  W1: {
    title: "Dunia Realistis",
    desc: "Hidup lu lurus-lurus aja, problem standar manusia biasa.",
  },
  W2: {
    title: "Dunia Kompetitif",
    desc: "Lu ngerasa kayak lagi balapan terus sama orang lain.",
  },
  W3: {
    title: "Dunia Peluang",
    desc: "Banyak pintu kebuka, tinggal lu berani masuk apa nggak.",
  },
  W4: {
    title: "Dunia Emosional",
    desc: "Vibes-nya penuh perasaan, urusan hati sering jadi fokus.",
  },
  W5: {
    title: "Dunia Misterius",
    desc: "Banyak hal random yang bikin lu mikir 'kok bisa ya?'",
  },
};

const questions = [
  {
    q: "Lagi gabut parah biasanya lu...",
    w: 1.0,
    a: [
      ["Cari temen buat nongkrong", "P1"],
      ["Nonton/Denger musik sendiri", "G3"],
      ["Beresin tugas/projek", "G4"],
      ["Scroll medsos sampe pagi", "P5"],
      ["Bercanda di grup chat", "G2"],
    ],
  },
  {
    q: "Kalo hidup lu dibikin film, genre-nya...",
    w: 1.2,
    a: [
      ["Kisah cinta yang haru", "G1"],
      ["Komedi receh tiap hari", "G2"],
      ["Keseharian yang tenang", "G3"],
      ["Perjuangan ngejar mimpi", "G4"],
      ["Banyak konflik internal", "G5"],
    ],
  },
  {
    q: "Apa yang paling bikin lu bahagia?",
    w: 1.4,
    a: [
      ["Pas disayang & dihargai", "G1"],
      ["Bisa ketawa bareng circle", "G2"],
      ["Pas lagi santai ga ada beban", "G3"],
      ["Pas target lu kecapai", "G4"],
      ["Momen dalem bareng seseorang", "G5"],
    ],
  },
  {
    q: "Pas lagi di tongkrongan, lu itu...",
    w: 1.0,
    a: [
      ["Yang paling rame & heboh", "P1"],
      ["Nyimak sambil sesekali komen", "P2"],
      ["Ngomongin masa depan & kerjaan", "P3"],
      ["Ikut aja mau kemana", "P4"],
      ["Mikirin hal lain di kepala", "P5"],
    ],
  },
  {
    q: "Ada masalah dateng, reaksi lu...",
    w: 1.2,
    a: [
      ["Langsung curhat ke temen", "P1"],
      ["Mikir keras cari celah", "P2"],
      ["Langsung sat-set cari solusi", "P3"],
      ["Bawa santai dulu, nanti juga kelar", "P4"],
      ["Kepikiran terus sampe susah tidur", "P5"],
    ],
  },
  {
    q: "First impression orang ke lu biasanya...",
    w: 1.4,
    a: [
      ["Anaknya asik & humble", "P1"],
      ["Kalem dan agak misterius", "P2"],
      ["Keliatan ambisius & rapi", "P3"],
      ["Anaknya chill banget", "P4"],
      ["Keliatan pemalu/banyak mikir", "P5"],
    ],
  },
  {
    q: "Goals lu 5 tahun ke depan itu...",
    w: 1.0,
    a: [
      ["Punya keluarga/pasangan tetap", "T1"],
      ["Tabungan numpuk & mandiri", "T2"],
      ["Hidup tenang tanpa drama", "T3"],
      ["Bisa bantu banyak orang", "T4"],
      ["Bisa jalan-jalan bebas kemana aja", "T5"],
    ],
  },
  {
    q: "Sukses menurut lu itu kalau...",
    w: 1.2,
    a: [
      ["Punya circle/keluarga yang solid", "T1"],
      ["Bisa beli apa aja tanpa liat harga", "T2"],
      ["Batin tenang & ga stress", "T3"],
      ["Bikin perubahan yang bagus", "T4"],
      ["Punya kitaran penuh atas waktu", "T5"],
    ],
  },
  {
    q: "Yang lagi lu fokusin sekarang banget:",
    w: 1.4,
    a: [
      ["Ngebangun hubungan serius", "T1"],
      ["Ngejar karier/cuan", "T2"],
      ["Mencari ketenangan diri", "T3"],
      ["Berbuat baik buat sesama", "T4"],
      ["Eksplor hal-hal baru", "T5"],
    ],
  },
  {
    q: "Di sebuah tim, lu biasanya jadi...",
    w: 1.0,
    a: [
      ["Pemimpin/Pusat perhatian", "R1"],
      ["Pendukung yang selalu ada", "R2"],
      ["Yang kerja sendiri-sendiri", "R3"],
      ["Dibalik layar tapi penting", "R4"],
      ["Yang bawa ide out of the box", "R5"],
    ],
  },
  {
    q: "Lu pengennya diinget sebagai orang yang...",
    w: 1.2,
    a: [
      ["Ikonik & berpengaruh", "R1"],
      ["Baik banget & suka bantu", "R2"],
      ["Mandiri & ga ngerepotin", "R3"],
      ["Berjasa meski ga terkenal", "R4"],
      ["Unik & beda dari yang lain", "R5"],
    ],
  },
  {
    q: "Vibes hidup lu sekarang kayak...",
    w: 1.4,
    a: [
      ["Tokoh utama di cerita", "R1"],
      ["Karakter pendukung terbaik", "R2"],
      ["Lagi asik di dunia sendiri", "R3"],
      ["Pahlawan tanpa tanda jasa", "R4"],
      ["Karakter misterius yang muncul tiba-tiba", "R5"],
    ],
  },
  {
    q: "Lingkungan lu sekarang rasanya...",
    w: 1.0,
    a: [
      ["Biasa aja, normal", "W1"],
      ["Ketat banget, penuh saingan", "W2"],
      ["Banyak banget kesempatan", "W3"],
      ["Penuh drama orang sekitar", "W4"],
      ["Sering terjadi hal yang ga diduga", "W5"],
    ],
  },
  {
    q: "Perasaan yang sering muncul belakangan:",
    w: 1.2,
    a: [
      ["Datar, jalanin aja", "W1"],
      ["Capek karena dituntut terus", "W2"],
      ["Optimis pengen coba hal baru", "W3"],
      ["Lagi sensitif banget", "W4"],
      ["Bingung sama arah dunia", "W5"],
    ],
  },
  {
    q: "Hidup ini menurut lu adalah sebuah...",
    w: 1.4,
    a: [
      ["Realitas yang harus dijalani", "W1"],
      ["Tempat buat berjuang keras", "W2"],
      ["Taman bermain penuh peluang", "W3"],
      ["Perjalanan penuh rasa", "W4"],
      ["Misteri yang seru buat dipecah", "W5"],
    ],
  },
];

let index = 0;
let score = {};
let freq = {};

function switchScreen(from, to) {
  const fromEl = document.getElementById(from);
  const toEl = document.getElementById(to);

  fromEl.classList.remove("active");
  setTimeout(() => {
    fromEl.style.display = "none";
    toEl.style.display = "block";
    setTimeout(() => toEl.classList.add("active"), 50);
  }, 400);
}

function startQuiz() {
  switchScreen("intro-screen", "quiz-screen");
  nextQuestion();
}

function nextQuestion() {
  if (index >= questions.length) return showResult();

  const q = questions[index];
  const progress = (index / questions.length) * 100;

  document.getElementById("progress-bar").style.width = `${progress}%`;
  document.getElementById("progress-text").innerText = `Chapter ${index + 1}`;

  const qContainer = document.getElementById("question");
  const optBox = document.getElementById("options");

  // Smooth content swap
  qContainer.style.opacity = 0;
  optBox.style.opacity = 0;

  setTimeout(() => {
    qContainer.innerText = q.q;
    qContainer.style.opacity = 1;
    optBox.innerHTML = "";
    optBox.style.opacity = 1;

    q.a.forEach((o, i) => {
      const btn = document.createElement("div");
      btn.className = "option";
      btn.style.animation = `slideIn 0.4s ease forwards ${i * 0.1}s`;
      btn.innerText = o[0];
      btn.onclick = () => {
        score[o[1]] = (score[o[1]] || 0) + q.w;
        freq[o[1]] = (freq[o[1]] || 0) + 1;
        index++;
        nextQuestion();
      };
      optBox.appendChild(btn);
    });
  }, 300);
}

function pickCategory(prefix) {
  const entries = Object.keys(score)
    .filter((k) => k.startsWith(prefix))
    .map((k) => ({ k, s: score[k], f: freq[k] }))
    .sort((a, b) => b.s - a.s || b.f - a.f || Math.random() - 0.5);

  return entries.length ? entries[0].k : null;
}

function showResult() {
  switchScreen("quiz-screen", "result-screen");

  const resultContainer = document.getElementById("final-results");
  const loadingTexts = [
    "Membaca garis tangan digital",
    "Menghitung probabilitas nasib",
    "Menyusun plot twist hidupmu",
    "Selesai!",
  ];
  let step = 0;

  const loader = setInterval(() => {
    resultContainer.innerHTML = `<p class="loading-dots" style="text-align:center; font-style:italic; padding: 40px 0;">${loadingTexts[step]}</p>`;
    step++;

    if (step >= loadingTexts.length) {
      clearInterval(loader);
      renderFinalCards();
    }
  }, 1000);
}

function renderFinalCards() {
  const g = pickCategory("G");
  const p = pickCategory("P");
  const t = pickCategory("T");
  const r = pickCategory("R");
  const w = pickCategory("W");

  const categories = [
    { label: "🎬 Genre Hidup", code: g },
    { label: "🧠 Kepribadian", code: p },
    { label: "🌌 Tujuan Utama", code: t },
    { label: "🎭 Peran Cerita", code: r },
    { label: "🌍 Setting Dunia", code: w },
  ];

  let resultHTML = "";
  categories.forEach((cat, i) => {
    if (cat.code) {
      resultHTML += `
        <div class="result-card" style="animation-delay: ${i * 0.15}s">
          <h4>${cat.label}</h4>
          <b>${resultData[cat.code].title}</b>
          <i>${resultData[cat.code].desc}</i>
        </div>`;
    }
  });
  document.getElementById("final-results").innerHTML = resultHTML;
}
