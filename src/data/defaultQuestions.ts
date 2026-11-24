import { Question } from '../types';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran BAHASA INGGRIS
 * Kelas 5 SD - Kurikulum Merdeka
 * Lingkup Materi: My Neighbourhood
 * Tujuan Pembelajaran: Mendeskripsikan lingkungan rumah
 *
 * Komposisi Soal:
 * - 30 Butir Pilihan Ganda (PG) [Nomor 1 - 30] (Bobot: 2 poin/butir = 60 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 31 - 35] (Bobot: 6 poin/butir = 30 poin)
 * Total: 35 Butir Soal (Skor Maksimal: 90 poin -> Nilai Akhir Skala 100)
 */

const EL_VOCAB = 'Mendeskripsikan lingkungan rumah: Kosakata Tempat & Benda (Vocabulary & Places)';
const EL_PREP = 'Mendeskripsikan lingkungan rumah: Preposisi & Penunjuk Arah (Prepositions & Directions)';
const EL_READ = 'Mendeskripsikan lingkungan rumah: Pemahaman Teks & Dialog (Reading & Comprehension)';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN I: 30 SOAL PILIHAN GANDA (PG)
  // ============================================================================

  // --- ELEMEN 1: KOSAKATA TEMPAT & BENDA DI LINGKUNGAN RUMAH (SOAL 1 - 12) ---
  {
    id: 1,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'House & Yard Vocabulary',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bagian luar rumah dan lingkungan sekitarnya berdasarkan gambar.',
    image: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="155" rx="12" fill="#e0f2fe" stroke="#bae6fd" stroke-width="1.5"/>
      <rect y="112" width="420" height="43" rx="0" fill="#86efac"/>
      <circle cx="52" cy="36" r="16" fill="#fde047"/>
      <!-- Pohon -->
      <rect x="46" y="75" width="12" height="40" fill="#78350f"/>
      <circle cx="52" cy="64" r="24" fill="#16a34a"/>
      <!-- Rumah -->
      <polygon points="145,55 210,18 275,55" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <rect x="155" y="55" width="110" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <rect x="197" y="78" width="26" height="37" fill="#92400e"/>
      <circle cx="218" cy="96" r="2.5" fill="#fde047"/>
      <rect x="167" y="68" width="20" height="18" fill="#93c5fd" stroke="#1e40af" stroke-width="1.5"/>
      <rect x="233" y="68" width="20" height="18" fill="#93c5fd" stroke="#1e40af" stroke-width="1.5"/>
      <!-- Pagar & Kotak Surat -->
      <g fill="#ffffff" stroke="#94a3b8" stroke-width="1.5">
        <rect x="92" y="95" width="10" height="24"/>
        <rect x="108" y="95" width="10" height="24"/>
        <rect x="124" y="95" width="10" height="24"/>
        <rect x="285" y="95" width="10" height="24"/>
        <rect x="301" y="95" width="10" height="24"/>
      </g>
      <rect x="340" y="88" width="6" height="27" fill="#475569"/>
      <rect x="331" y="74" width="24" height="15" rx="4" fill="#2563eb"/>
      <text x="343" y="84" font-family="sans-serif" font-size="6.5" font-weight="bold" fill="#ffffff" text-anchor="middle">MAIL</text>
      <text x="210" y="142" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">My House &amp; Front Yard</text>
    </svg>`,
    text: 'Look at the picture above! There is a small blue box in front of the house to put letters in. What is it called?',
    options: [
      { id: 'A', text: 'Mailbox' },
      { id: 'B', text: 'Traffic light' },
      { id: 'C', text: 'Bus stop' },
      { id: 'D', text: 'Hospital' },
    ],
    correctAnswer: 'A',
    explanation: 'Mailbox artinya kotak surat yang biasanya berada di depan pagar rumah untuk menerima surat atau paket pos.',
  },
  {
    id: 2,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Meaning of Neighbourhood',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat memahami arti kata "neighbourhood" dan istilah "neighbour" dengan tepat.',
    text: 'Siti lives next door to my house. We often play together in the afternoon. Siti is my ...',
    options: [
      { id: 'A', text: 'Neighbour' },
      { id: 'B', text: 'Teacher' },
      { id: 'C', text: 'Doctor' },
      { id: 'D', text: 'Passenger' },
    ],
    correctAnswer: 'A',
    explanation: 'Orang yang tinggal di sebelah atau di sekitar rumah kita disebut tetangga (neighbour).',
  },
  {
    id: 3,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Library',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan nama tempat umum untuk membaca dan meminjam buku berdasarkan gambar.',
    image: `<svg viewBox="0 0 400 145" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="145" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="110" y="18" width="180" height="102" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
      <rect x="135" y="25" width="130" height="22" rx="4" fill="#1e3a8a"/>
      <text x="200" y="40" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">SILENCE PLEASE - BOOKS</text>
      <!-- Rak Buku -->
      <rect x="125" y="58" width="150" height="12" fill="#92400e"/>
      <rect x="132" y="47" width="12" height="11" fill="#ef4444"/>
      <rect x="146" y="47" width="10" height="11" fill="#3b82f6"/>
      <rect x="158" y="47" width="14" height="11" fill="#10b981"/>
      <rect x="174" y="47" width="11" height="11" fill="#f59e0b"/>
      <rect x="225" y="47" width="12" height="11" fill="#8b5cf6"/>
      <rect x="239" y="47" width="12" height="11" fill="#ec4899"/>
      <rect x="253" y="47" width="10" height="11" fill="#0ea5e9"/>
      <!-- Meja Baca -->
      <rect x="155" y="90" width="90" height="8" rx="2" fill="#78350f"/>
      <rect x="165" y="98" width="8" height="22" fill="#78350f"/>
      <rect x="227" y="98" width="8" height="22" fill="#78350f"/>
      <text x="200" y="136" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#334155" text-anchor="middle">A Quiet Place to Read &amp; Borrow Books</text>
    </svg>`,
    text: 'Look at the picture! Where can students go to read and borrow many books in their neighbourhood?',
    options: [
      { id: 'A', text: 'Library' },
      { id: 'B', text: 'Bakery' },
      { id: 'C', text: 'Garage' },
      { id: 'D', text: 'Police station' },
    ],
    correctAnswer: 'A',
    explanation: 'Library adalah perpustakaan, tempat untuk membaca dan meminjam berbagai macam buku dengan tenang.',
  },
  {
    id: 4,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Bank',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi fungsi Bank di lingkungan sekitar.',
    text: 'Mr. Ahmad wants to save his money safely. Which place in the neighbourhood should he visit?',
    options: [
      { id: 'A', text: 'A bank' },
      { id: 'B', text: 'A park' },
      { id: 'C', text: 'A cinema' },
      { id: 'D', text: 'A mosque' },
    ],
    correctAnswer: 'A',
    explanation: 'Bank adalah tempat untuk menabung, menyimpan, atau mengambil uang dengan aman.',
  },
  {
    id: 5,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Hospital',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengenali bangunan rumah sakit dan tenaga medisnya dari gambar.',
    image: `<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="140" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <!-- Gedung -->
      <rect x="95" y="25" width="130" height="92" rx="4" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
      <rect x="148" y="34" width="24" height="8" fill="#ef4444"/>
      <rect x="156" y="26" width="8" height="24" fill="#ef4444"/>
      <rect x="110" y="60" width="22" height="18" fill="#bae6fd" stroke="#0284c7"/>
      <rect x="188" y="60" width="22" height="18" fill="#bae6fd" stroke="#0284c7"/>
      <rect x="147" y="82" width="26" height="35" fill="#cbd5e1" stroke="#475569"/>
      <!-- Ambulans -->
      <rect x="245" y="76" width="74" height="32" rx="5" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
      <rect x="295" y="82" width="20" height="14" fill="#bae6fd"/>
      <rect x="260" y="88" width="14" height="5" fill="#ef4444"/>
      <rect x="264.5" y="83.5" width="5" height="14" fill="#ef4444"/>
      <circle cx="262" cy="110" r="8" fill="#1e293b"/>
      <circle cx="302" cy="110" r="8" fill="#1e293b"/>
      <text x="200" y="133" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Doctors &amp; Nurses Work Here</text>
    </svg>`,
    text: 'Look at the building and the ambulance in the picture! When people are sick, they go to the ... to see a doctor.',
    options: [
      { id: 'A', text: 'Hospital' },
      { id: 'B', text: 'Supermarket' },
      { id: 'C', text: 'Post office' },
      { id: 'D', text: 'School' },
    ],
    correctAnswer: 'A',
    explanation: 'Hospital berarti rumah sakit, tempat dokter dan perawat merawat orang sakit serta terdapat ambulans.',
  },
  {
    id: 6,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Police Station',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyebutkan tempat tugas polisi menjaga keamanan lingkungan.',
    text: 'A police officer works to keep our neighbourhood safe and orderly. Where does a police officer work?',
    options: [
      { id: 'A', text: 'At the police station' },
      { id: 'B', text: 'At the bakery' },
      { id: 'C', text: 'At the swimming pool' },
      { id: 'D', text: 'At the bookstore' },
    ],
    correctAnswer: 'A',
    explanation: 'Petugas polisi bekerja di kantor polisi (police station) untuk menjaga keamanan lingkungan.',
  },
  {
    id: 7,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Post Office',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi fungsi kantor pos berdasarkan ilustrasi benda pos.',
    image: `<svg viewBox="0 0 400 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="135" rx="12" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.5"/>
      <!-- Gedung Kantor Pos -->
      <rect x="75" y="25" width="140" height="88" rx="6" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <rect x="95" y="34" width="100" height="20" rx="3" fill="#ea580c"/>
      <text x="145" y="48" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">POST OFFICE</text>
      <rect x="128" y="75" width="34" height="38" fill="#9a3412"/>
      <!-- Amplop & Perangko -->
      <g transform="translate(245, 38)">
        <rect width="95" height="60" rx="6" fill="#ffffff" stroke="#f97316" stroke-width="2"/>
        <polyline points="0,0 47.5,34 95,0" fill="none" stroke="#f97316" stroke-width="2"/>
        <rect x="68" y="8" width="18" height="20" fill="#fed7aa" stroke="#ea580c"/>
      </g>
      <text x="200" y="126" font-family="sans-serif" font-size="10" font-weight="bold" fill="#9a3412" text-anchor="middle">Sending Letters, Stamps &amp; Packages</text>
    </svg>`,
    text: 'Look at the picture! Mother wants to send a letter and a package to Grandma in Surabaya. She goes to the ...',
    options: [
      { id: 'A', text: 'Post office' },
      { id: 'B', text: 'Fire station' },
      { id: 'C', text: 'Train station' },
      { id: 'D', text: 'Fruit stall' },
    ],
    correctAnswer: 'A',
    explanation: 'Post office adalah kantor pos, tempat untuk mengirim surat, membeli perangko, dan mengirim paket.',
  },
  {
    id: 8,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Fire Station',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi fungsi pemadam kebakaran (fire station).',
    text: 'Look! There is a fire truck with a loud siren. Firefighters work at the ... to help put out fires in the neighbourhood.',
    options: [
      { id: 'A', text: 'Fire station' },
      { id: 'B', text: 'Gas station' },
      { id: 'C', text: 'Library' },
      { id: 'D', text: 'Pharmacy' },
    ],
    correctAnswer: 'A',
    explanation: 'Firefighters (petugas pemadam kebakaran) bertugas di fire station (pos pemadam kebakaran).',
  },
  {
    id: 9,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Park / Playground',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi taman bermain lingkungan rumah berdasarkan gambar.',
    image: `<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="140" rx="12" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>
      <rect y="102" width="400" height="38" fill="#4ade80"/>
      <!-- Pohon -->
      <rect x="44" y="64" width="10" height="40" fill="#78350f"/>
      <circle cx="49" cy="54" r="22" fill="#15803d"/>
      <!-- Ayunan -->
      <line x1="120" y1="35" x2="105" y2="105" stroke="#475569" stroke-width="3"/>
      <line x1="185" y1="35" x2="200" y2="105" stroke="#475569" stroke-width="3"/>
      <line x1="115" y1="35" x2="190" y2="35" stroke="#334155" stroke-width="4"/>
      <line x1="138" y1="35" x2="138" y2="80" stroke="#64748b" stroke-width="1.5"/>
      <line x1="166" y1="35" x2="166" y2="80" stroke="#64748b" stroke-width="1.5"/>
      <rect x="132" y="80" width="40" height="6" rx="2" fill="#f59e0b"/>
      <!-- Bangku Taman -->
      <rect x="255" y="82" width="80" height="8" rx="2" fill="#b45309"/>
      <rect x="255" y="92" width="80" height="5" rx="1" fill="#92400e"/>
      <rect x="262" y="97" width="6" height="12" fill="#451a03"/>
      <rect x="322" y="97" width="6" height="12" fill="#451a03"/>
      <text x="200" y="128" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#065f46" text-anchor="middle">Swings, Trees &amp; Benches for Playing</text>
    </svg>`,
    text: 'Look at the picture! Children in my neighbourhood like to ride swings, sit on benches, and play under the trees at the ...',
    options: [
      { id: 'A', text: 'Park' },
      { id: 'B', text: 'Bank' },
      { id: 'C', text: 'Hospital' },
      { id: 'D', text: 'Pharmacy' },
    ],
    correctAnswer: 'A',
    explanation: 'Park (taman) adalah tempat terbuka hijau dengan pepohonan, bangku taman, dan ayunan tempat anak-anak bermain.',
  },
  {
    id: 10,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Pharmacy / Drugstore',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan tempat membeli obat (pharmacy) dari tempat umum lainnya.',
    text: 'After seeing the doctor, Mother buys medicine and vitamins for Ayu. Where does Mother buy medicine?',
    options: [
      { id: 'A', text: 'At a pharmacy' },
      { id: 'B', text: 'At a bakery' },
      { id: 'C', text: 'At a post office' },
      { id: 'D', text: 'At a bus station' },
    ],
    correctAnswer: 'A',
    explanation: 'Pharmacy (atau drugstore) adalah apotek, tempat untuk membeli obat-obatan dan vitamin.',
  },
  {
    id: 11,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Public Places: Bakery & Supermarket',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi toko roti (bakery) berdasarkan barang yang dijual pada gambar.',
    image: `<svg viewBox="0 0 400 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="135" rx="12" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/>
      <rect x="90" y="22" width="220" height="90" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
      <!-- Kanopi -->
      <path d="M 84 44 L 316 44 L 308 58 L 92 58 Z" fill="#dc2626"/>
      <rect x="130" y="26" width="140" height="16" rx="3" fill="#78350f"/>
      <text x="200" y="37" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#fef3c7" text-anchor="middle">FRESH BREAD &amp; CAKES</text>
      <!-- Etalase Roti -->
      <rect x="115" y="68" width="90" height="34" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <ellipse cx="140" cy="86" rx="15" ry="9" fill="#d97706"/>
      <ellipse cx="180" cy="86" rx="14" ry="9" fill="#f59e0b"/>
      <rect x="230" y="68" width="42" height="44" fill="#92400e"/>
      <text x="200" y="126" font-family="sans-serif" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Delicious Bread, Donuts &amp; Cakes</text>
    </svg>`,
    text: 'Look at the shop in the picture! You can buy fresh bread, donuts, and birthday cakes here. This place is a ...',
    options: [
      { id: 'A', text: 'Bakery' },
      { id: 'B', text: 'Hardware store' },
      { id: 'C', text: 'Gas station' },
      { id: 'D', text: 'Police station' },
    ],
    correctAnswer: 'A',
    explanation: 'Bakery adalah toko roti dan kue (fresh bread, donuts, cakes).',
  },
  {
    id: 12,
    type: 'pg',
    element: EL_VOCAB,
    topic: 'Neighbourhood Facilities Comparison',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis pasangan tepat antara tempat umum dan aktivitas yang dilakukan di lingkungan rumah.',
    text: 'Read the table of places and activities below:\n1. Bus stop -> Waiting for the public bus\n2. Mosque / Temple -> Buying fresh vegetables\n3. Supermarket -> Shopping for daily groceries\n4. Gas station -> Filling up motorcycle fuel\n\nWhich pairs are CORRECT?',
    options: [
      { id: 'A', text: '1, 3, and 4' },
      { id: 'B', text: '1, 2, and 3' },
      { id: 'C', text: '2, 3, and 4' },
      { id: 'D', text: '1 and 2 only' },
    ],
    correctAnswer: 'A',
    explanation: 'Bus stop (halte bus) untuk menunggu bus (1 benar); Mosque/Temple adalah tempat ibadah bukan tempat membeli sayur (2 salah); Supermarket untuk berbelanja kebutuhan harian (3 benar); Gas station (SPBU) untuk mengisi bahan bakar (4 benar).',
  },

  // --- ELEMEN 2: PREPOSISI & PENUNJUK ARAH (SOAL 13 - 22) ---
  {
    id: 13,
    type: 'pg',
    element: EL_PREP,
    topic: 'Preposition: Next to / Beside',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan preposisi "next to" berdasarkan posisi dua bangunan pada gambar.',
    image: `<svg viewBox="0 0 400 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="135" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect y="102" width="400" height="33" fill="#cbd5e1"/>
      <!-- Bank -->
      <rect x="85" y="42" width="95" height="60" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="132.5" y="76" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">BANK</text>
      <!-- Bakery tepat di sebelahnya -->
      <rect x="200" y="42" width="95" height="60" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="247.5" y="76" font-family="sans-serif" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">BAKERY</text>
      <text x="200" y="123" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Main Street</text>
    </svg>`,
    text: 'Look at the picture! Where is the Bakery?',
    options: [
      { id: 'A', text: 'The bakery is next to the bank.' },
      { id: 'B', text: 'The bakery is behind the bank.' },
      { id: 'C', text: 'The bakery is under the bank.' },
      { id: 'D', text: 'The bakery is inside the bank.' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada gambar, Bakery dan Bank berdiri bersebelahan pada sisi jalan yang sama, sehingga preposisi yang tepat adalah "next to" (di sebelah).',
  },
  {
    id: 14,
    type: 'pg',
    element: EL_PREP,
    topic: 'Preposition: In front of & Behind',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menggunakan preposisi "in front of" untuk mendeskripsikan benda di depan rumah.',
    text: 'There is a tall mango tree ... my house. Whenever I step out the front door, I can see it clearly.',
    options: [
      { id: 'A', text: 'in front of' },
      { id: 'B', text: 'between' },
      { id: 'C', text: 'under' },
      { id: 'D', text: 'inside' },
    ],
    correctAnswer: 'A',
    explanation: '"In front of" berarti di depan. Karena terlihat tepat saat keluar dari pintu depan (front door), maka pohon mangga berada di depan rumah.',
  },
  {
    id: 15,
    type: 'pg',
    element: EL_PREP,
    topic: 'Preposition: Between',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat melengkapi kalimat dengan preposisi "between" sesuai posisi tiga tempat pada gambar.',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="135" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <rect y="102" width="420" height="33" fill="#94a3b8"/>
      <!-- School -->
      <rect x="35" y="40" width="95" height="62" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="82.5" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">SCHOOL</text>
      <!-- Park di tengah -->
      <rect x="160" y="46" width="100" height="56" rx="5" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
      <text x="210" y="78" font-family="sans-serif" font-size="12" font-weight="bold" fill="#14532d" text-anchor="middle">PARK</text>
      <!-- Library -->
      <rect x="290" y="40" width="95" height="62" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="337.5" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">LIBRARY</text>
      <text x="210" y="123" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Jalan Merak</text>
    </svg>`,
    text: 'Look at the picture! The Park is ... the School and the Library.',
    options: [
      { id: 'A', text: 'between' },
      { id: 'B', text: 'across from' },
      { id: 'C', text: 'behind' },
      { id: 'D', text: 'on the corner of' },
    ],
    correctAnswer: 'A',
    explanation: '"Between" berarti di antara dua objek/tempat. Pada gambar, Park berada di antara School dan Library.',
  },
  {
    id: 16,
    type: 'pg',
    element: EL_PREP,
    topic: 'Preposition: Behind',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan posisi di belakang menggunakan preposisi "behind".',
    text: 'The small garden is at the back of our house. That means the garden is ... our house.',
    options: [
      { id: 'A', text: 'behind' },
      { id: 'B', text: 'in front of' },
      { id: 'C', text: 'across from' },
      { id: 'D', text: 'next to' },
    ],
    correctAnswer: 'A',
    explanation: '"At the back of" memiliki arti yang sama dengan "behind" (di belakang).',
  },
  {
    id: 17,
    type: 'pg',
    element: EL_PREP,
    topic: 'Preposition: Across from / Opposite',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan preposisi berseberangan jalan ("across from / opposite") berdasarkan gambar.',
    image: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="155" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Bangunan Atas: Mosque -->
      <rect x="145" y="14" width="130" height="42" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="210" y="39" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">MOSQUE</text>
      <!-- Jalan Raya di Tengah -->
      <rect y="64" width="420" height="28" fill="#475569"/>
      <line x1="15" y1="78" x2="405" y2="78" stroke="#fde047" stroke-width="2.5" stroke-dasharray="14,10"/>
      <!-- Bangunan Bawah: Market -->
      <rect x="145" y="100" width="130" height="42" rx="6" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="210" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#9a3412" text-anchor="middle">MARKET</text>
    </svg>`,
    text: 'Look at the map above! The Mosque and the Market are separated by the road. The Mosque is ... the Market.',
    options: [
      { id: 'A', text: 'across from' },
      { id: 'B', text: 'between' },
      { id: 'C', text: 'next to' },
      { id: 'D', text: 'inside' },
    ],
    correctAnswer: 'A',
    explanation: '"Across from" (atau opposite) berarti di seberang jalan. Karena dipisahkan jalan raya, Masjid berada di seberang Pasar.',
  },
  {
    id: 18,
    type: 'pg',
    element: EL_PREP,
    topic: 'Preposition: On the corner of',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat memahami makna preposisi "on the corner of" pada persimpangan jalan.',
    text: 'The supermarket stands right where Jalan Merak meets Jalan Melati. So, the supermarket is ... Jalan Merak and Jalan Melati.',
    options: [
      { id: 'A', text: 'on the corner of' },
      { id: 'B', text: 'under' },
      { id: 'C', text: 'between' },
      { id: 'D', text: 'inside' },
    ],
    correctAnswer: 'A',
    explanation: '"On the corner of" berarti di sudut/pojok pertemuan dua jalan (persimpangan).',
  },
  {
    id: 19,
    type: 'pg',
    element: EL_PREP,
    topic: 'Giving Directions: Traffic Signs',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengartikan rambu penunjuk arah (Turn left, Turn right, Go straight) dengan tepat.',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="130" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <!-- Sign 1: Go straight -->
      <g transform="translate(45, 20)">
        <circle cx="35" cy="35" r="30" fill="#2563eb"/>
        <line x1="35" y1="52" x2="35" y2="20" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
        <polyline points="24,30 35,17 46,30" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="35" y="84" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Sign 1</text>
      </g>
      <!-- Sign 2: Turn right -->
      <g transform="translate(165, 20)">
        <circle cx="35" cy="35" r="30" fill="#16a34a"/>
        <path d="M 24 52 L 24 33 Q 24 25 32 25 L 48 25" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
        <polyline points="40,17 50,25 40,33" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="35" y="84" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">Sign 2</text>
      </g>
      <!-- Sign 3: Turn left -->
      <g transform="translate(285, 20)">
        <circle cx="35" cy="35" r="30" fill="#d97706"/>
        <path d="M 46 52 L 46 33 Q 46 25 38 25 L 22 25" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
        <polyline points="30,17 20,25 30,33" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="35" y="84" font-family="sans-serif" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Sign 3</text>
      </g>
    </svg>`,
    text: 'Look at the three direction signs above! What does Sign 2 mean?',
    options: [
      { id: 'A', text: 'Turn right' },
      { id: 'B', text: 'Turn left' },
      { id: 'C', text: 'Go straight' },
      { id: 'D', text: 'Stop here' },
    ],
    correctAnswer: 'A',
    explanation: 'Sign 1 menunjuk lurus ke atas (Go straight), Sign 2 berbelok ke kanan (Turn right), dan Sign 3 berbelok ke kiri (Turn left).',
  },
  {
    id: 20,
    type: 'pg',
    element: EL_PREP,
    topic: 'Giving Directions in Dialogue',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat melengkapi dialog sederhana tentang menanyakan dan memberi petunjuk arah.',
    text: 'Tourist: "Excuse me, could you tell me the way to the post office?"\nDina: "Sure! ... along Jalan Merak for 100 meters, then turn left. It is next to the bank."\n\nThe best phrase to complete Dina\'s sentence is ...',
    options: [
      { id: 'A', text: 'Go straight' },
      { id: 'B', text: 'Sit down' },
      { id: 'C', text: 'Go to sleep' },
      { id: 'D', text: 'Close the door' },
    ],
    correctAnswer: 'A',
    explanation: 'Ungkapan yang tepat untuk memberi arah berjalan lurus menyusuri jalan adalah "Go straight".',
  },
  {
    id: 21,
    type: 'pg',
    element: EL_PREP,
    topic: 'Reading a Neighbourhood Map',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis rute dan letak bangunan berdasarkan peta lingkungan rumah.',
    image: `<svg viewBox="0 0 440 190" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="440" height="190" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Jalan Horizontal: Jalan Merak -->
      <rect x="10" y="82" width="420" height="28" fill="#475569"/>
      <line x1="20" y1="96" x2="420" y2="96" stroke="#fde047" stroke-width="2" stroke-dasharray="10,8"/>
      <text x="360" y="99" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff">Jalan Merak</text>
      <!-- Jalan Vertikal: Jalan Mawar -->
      <rect x="200" y="10" width="28" height="170" fill="#475569"/>
      <text x="214" y="172" font-family="sans-serif" font-size="8" font-weight="bold" fill="#fde047" text-anchor="middle">Jl. Mawar</text>
      <!-- Sisi Atas Kiri -->
      <rect x="24" y="20" width="80" height="52" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="64" y="50" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">SCHOOL</text>
      <rect x="114" y="20" width="76" height="52" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="152" y="50" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">LIBRARY</text>
      <!-- Sisi Atas Kanan -->
      <rect x="240" y="20" width="90" height="52" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="285" y="50" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">PARK</text>
      <!-- Sisi Bawah Kiri -->
      <rect x="24" y="120" width="80" height="52" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="64" y="144" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#92400e" text-anchor="middle">BUDI'S</text>
      <text x="64" y="157" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#92400e" text-anchor="middle">HOUSE</text>
      <rect x="114" y="120" width="76" height="52" rx="5" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="152" y="150" font-family="sans-serif" font-size="10" font-weight="bold" fill="#6b21a8" text-anchor="middle">BANK</text>
      <!-- Sisi Bawah Kanan -->
      <rect x="240" y="120" width="90" height="52" rx="5" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="285" y="150" font-family="sans-serif" font-size="10" font-weight="bold" fill="#9a3412" text-anchor="middle">HOSPITAL</text>
    </svg>`,
    text: 'Look carefully at the neighbourhood map above! Which statement is TRUE about the map?',
    options: [
      { id: 'A', text: 'The Library is across from the Bank and next to the School.' },
      { id: 'B', text: 'Budi\'s House is between the Park and the Hospital.' },
      { id: 'C', text: 'The Hospital is next to the School on the same side.' },
      { id: 'D', text: 'The Park is across from Budi\'s House.' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada peta: Library terletak di seberang (across from) Bank karena dipisahkan Jalan Merak, dan tepat di sebelah (next to) School. Pilihan lain tidak sesuai peta.',
  },
  {
    id: 22,
    type: 'pg',
    element: EL_PREP,
    topic: 'Giving Directions from Map',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan arah perjalanan dari satu tempat ke tempat lain berdasarkan kondisi jalan.',
    text: 'Rama stands at the front gate of his school facing east along Jalan Merak. He wants to go to the Hospital which is across Jalan Mawar on the right side. What should Rama do?',
    options: [
      { id: 'A', text: 'Walk straight east along Jalan Merak, cross Jalan Mawar, then look on his right.' },
      { id: 'B', text: 'Turn around and walk west for five kilometers.' },
      { id: 'C', text: 'Turn left into Jalan Mawar and stop at the Park.' },
      { id: 'D', text: 'Stay inside the school gate without walking.' },
    ],
    correctAnswer: 'A',
    explanation: 'Menghadap ke timur menyusuri Jalan Merak berarti berjalan lurus ke timur, menyeberangi Jalan Mawar, lalu rumah sakit berada di sisi kanan.',
  },

  // --- ELEMEN 3: PEMAHAMAN TEKS & DIALOG LINGKUNGAN RUMAH (SOAL 23 - 30) ---
  {
    id: 23,
    type: 'pg',
    element: EL_READ,
    topic: 'Describing House Location',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat memahami informasi alamat dan letak rumah dari kalimat deskriptif singkat.',
    text: 'Read the short text:\n"Hello, I am Made. My house is on Jalan Merak number 12. It has a green roof and a small flower garden in the yard. My school is very close, just across from my house."\n\nWhere is Made\'s school located?',
    options: [
      { id: 'A', text: 'Across from Made\'s house' },
      { id: 'B', text: 'Behind the flower garden' },
      { id: 'C', text: 'Far away in another city' },
      { id: 'D', text: 'Next to the airport' },
    ],
    correctAnswer: 'A',
    explanation: 'Di dalam teks disebutkan dengan jelas: "My school is very close, just across from my house."',
  },
  {
    id: 24,
    type: 'pg',
    element: EL_READ,
    topic: 'Describing House Exterior',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mencocokkan deskripsi bagian lingkungan rumah dengan ilustrasi gambar.',
    image: `<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="150" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
      <rect y="110" width="420" height="40" fill="#86efac"/>
      <!-- Rumah Utama -->
      <polygon points="105,52 175,16 245,52" fill="#2563eb"/>
      <rect x="115" y="52" width="120" height="60" fill="#ffffff" stroke="#1e40af" stroke-width="2"/>
      <rect x="160" y="75" width="28" height="37" fill="#92400e"/>
      <rect x="126" y="65" width="22" height="18" fill="#bae6fd" stroke="#1e40af"/>
      <rect x="200" y="65" width="22" height="18" fill="#bae6fd" stroke="#1e40af"/>
      <!-- Garasi di samping rumah -->
      <rect x="235" y="68" width="70" height="44" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <rect x="247" y="80" width="46" height="32" fill="#94a3b8"/>
      <line x1="247" y1="88" x2="293" y2="88" stroke="#475569" stroke-width="1.5"/>
      <line x1="247" y1="96" x2="293" y2="96" stroke="#475569" stroke-width="1.5"/>
      <line x1="247" y1="104" x2="293" y2="104" stroke="#475569" stroke-width="1.5"/>
      <!-- Bunga di halaman -->
      <circle cx="70" cy="106" r="6" fill="#ec4899"/>
      <circle cx="85" cy="108" r="5" fill="#facc15"/>
      <text x="210" y="138" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">A Blue-Roofed House with a Garage &amp; Garden</text>
    </svg>`,
    text: 'Look at the picture! Which sentence best describes the house?',
    options: [
      { id: 'A', text: 'The house has a blue roof, two windows, and a garage next to it.' },
      { id: 'B', text: 'The house has a red roof and there is a swimming pool on the roof.' },
      { id: 'C', text: 'There are five cars parked inside the living room.' },
      { id: 'D', text: 'The garage is on top of the mango tree.' },
    ],
    correctAnswer: 'A',
    explanation: 'Gambar menunjukkan rumah beratap biru (blue roof), memiliki dua jendela (two windows), dan terdapat garasi tepat di sebelahnya (a garage next to it).',
  },
  {
    id: 25,
    type: 'pg',
    element: EL_READ,
    topic: 'Clean & Healthy Neighbourhood',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi perilaku menjaga kebersihan dan kenyamanan lingkungan rumah.',
    text: 'Read the paragraph:\n"Every Sunday morning, the residents in my neighbourhood work together (gotong royong). Father sweeps the street, Mother plants flowers, and I put the dry leaves into the trash bin. Our neighbourhood becomes clean and comfortable."\n\nWhy does the neighbourhood become clean and comfortable?',
    options: [
      { id: 'A', text: 'Because the residents work together to clean it every Sunday' },
      { id: 'B', text: 'Because people throw plastic rubbish onto the street' },
      { id: 'C', text: 'Because nobody plants any trees or flowers' },
      { id: 'D', text: 'Because there are no trash bins in the area' },
    ],
    correctAnswer: 'A',
    explanation: 'Lingkungan menjadi bersih dan nyaman karena warga bekerja sama (gotong royong) membersihkannya setiap hari Minggu.',
  },
  {
    id: 26,
    type: 'pg',
    element: EL_READ,
    topic: 'Dialogue About Neighbourhood',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjawab pertanyaan isi dialog sederhana tentang fasilitas di sekitar rumah.',
    text: 'Read the dialogue:\nLani: "Is there a library near your house, Beni?"\nBeni: "Yes, there is. It is across from the playground. I go there every Saturday to read comic books."\nLani: "How about a hospital?"\nBeni: "No, the hospital is quite far, about three kilometers from my house."\n\nWhere does Beni go every Saturday?',
    options: [
      { id: 'A', text: 'To the library' },
      { id: 'B', text: 'To the hospital' },
      { id: 'C', text: 'To the supermarket' },
      { id: 'D', text: 'To the post office' },
    ],
    correctAnswer: 'A',
    explanation: 'Dalam dialog, Beni mengatakan "It is across from the playground. I go there every Saturday to read comic books." Kata "there" merujuk pada library.',
  },
  {
    id: 27,
    type: 'pg',
    element: EL_READ,
    topic: 'Map-Based Reading Comprehension',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyimpulkan lokasi suatu tempat berdasarkan teks deskriptif dan peta.',
    image: `<svg viewBox="0 0 430 175" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="175" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <!-- Jalan -->
      <rect x="12" y="76" width="406" height="24" fill="#64748b"/>
      <text x="215" y="92" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">GREEN STREET</text>
      <!-- Atas -->
      <rect x="25" y="18" width="110" height="48" rx="5" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
      <text x="80" y="46" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">RINA'S HOUSE</text>
      <rect x="160" y="18" width="110" height="48" rx="5" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
      <text x="215" y="46" font-family="sans-serif" font-size="10" font-weight="bold" fill="#9a3412" text-anchor="middle">BAKERY</text>
      <rect x="295" y="18" width="110" height="48" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="350" y="46" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">POLICE STATION</text>
      <!-- Bawah -->
      <rect x="25" y="110" width="175" height="48" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="112.5" y="138" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">SUPERMARKET</text>
      <rect x="230" y="110" width="175" height="48" rx="5" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="317.5" y="138" font-family="sans-serif" font-size="10" font-weight="bold" fill="#6b21a8" text-anchor="middle">POST OFFICE</text>
    </svg>`,
    text: 'Look at the Green Street map! Read Rina\'s note:\n"My mother needs flour and eggs from the place across from my house. Then she wants to buy warm bread next to my house."\n\nWhich two places will Rina\'s mother visit in order?',
    options: [
      { id: 'A', text: 'First the Supermarket, then the Bakery' },
      { id: 'B', text: 'First the Police Station, then the Post Office' },
      { id: 'C', text: 'First the Post Office, then the Supermarket' },
      { id: 'D', text: 'First the Bakery, then the Police Station' },
    ],
    correctAnswer: 'A',
    explanation: 'Tempat di seberang rumah Rina (across from Rina\'s house) untuk membeli tepung & telur adalah Supermarket, lalu di sebelah rumah Rina untuk membeli roti hangat adalah Bakery.',
  },
  {
    id: 28,
    type: 'pg',
    element: EL_READ,
    topic: 'There is / There are in Neighbourhood',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menggunakan struktur kalimat "There is" dan "There are" untuk mendeskripsikan lingkungan rumah.',
    text: 'Complete the description of Ayu\'s neighbourhood:\n"My neighbourhood is very green. ... two large parks and a clean river near my house."',
    options: [
      { id: 'A', text: 'There are' },
      { id: 'B', text: 'There is' },
      { id: 'C', text: 'They is' },
      { id: 'D', text: 'It are' },
    ],
    correctAnswer: 'A',
    explanation: 'Karena benda yang disebutkan pertama bersifat jamak ("two large parks"), maka digunakan "There are".',
  },
  {
    id: 29,
    type: 'pg',
    element: EL_READ,
    topic: 'Paragraph Inference',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyimpulkan sifat dan suasana lingkungan tempat tinggal dari teks bacaan.',
    text: 'Read the text:\n"I live in Loloan Timur village. Most houses have spacious yards with coconut and banana trees. In the morning, I hear birds singing. The street in front of my house is quiet, and the air feels fresh because there are not many factories or traffic jams."\n\nWhat is the writer\'s neighbourhood like?',
    options: [
      { id: 'A', text: 'Peaceful, green, and fresh' },
      { id: 'B', text: 'Noisy, crowded, and polluted' },
      { id: 'C', text: 'Full of tall skyscrapers and factories' },
      { id: 'D', text: 'Dry and dangerous for children' },
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyebutkan adanya banyak pohon, kicau burung, jalan yang tenang (quiet), dan udara segar (fresh), yang berarti lingkungan tersebut damai, hijau, dan segar.',
  },
  {
    id: 30,
    type: 'pg',
    element: EL_READ,
    topic: 'Sentence Arrangement (Describing Neighbourhood)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyusun kata-kata acak menjadi kalimat deskripsi lingkungan rumah yang benar.',
    text: 'Arrange these jumbled words into a correct sentence:\n(1) is  -  (2) school  -  (3) across  -  (4) The  -  (5) the  -  (6) from  -  (7) park',
    options: [
      { id: 'A', text: '4 - 2 - 1 - 3 - 6 - 5 - 7 (The school is across from the park)' },
      { id: 'B', text: '4 - 3 - 1 - 2 - 6 - 5 - 7 (The across is school from the park)' },
      { id: 'C', text: '7 - 2 - 1 - 6 - 3 - 5 - 4 (park school is from across the The)' },
      { id: 'D', text: '4 - 2 - 6 - 3 - 1 - 5 - 7 (The school from across is the park)' },
    ],
    correctAnswer: 'A',
    explanation: 'Susunan tata bahasa Inggris yang tepat adalah: "The school is across from the park" (4 - 2 - 1 - 3 - 6 - 5 - 7).',
  },

  // ============================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS KATEGORI (3 PERNYATAAN BENAR/SALAH)
  // ============================================================================
  {
    id: 31,
    type: 'pgk_kategori',
    element: EL_PREP,
    topic: 'Map Analysis: Loloan Town Map',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat menentukan kebenaran 3 pernyataan tentang letak tempat berdasarkan peta lingkungan.',
    image: `<svg viewBox="0 0 440 185" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="440" height="185" rx="12" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Jalan -->
      <rect x="10" y="80" width="420" height="26" fill="#334155"/>
      <line x1="20" y1="93" x2="420" y2="93" stroke="#facc15" stroke-width="2" stroke-dasharray="10,8"/>
      <text x="220" y="96" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">SUNSHINE STREET</text>
      <!-- Baris Atas -->
      <rect x="20" y="18" width="120" height="50" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="80" y="47" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">FIRE STATION</text>
      <rect x="160" y="18" width="120" height="50" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="220" y="47" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#92400e" text-anchor="middle">POST OFFICE</text>
      <rect x="300" y="18" width="120" height="50" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="360" y="47" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">BANK</text>
      <!-- Baris Bawah -->
      <rect x="20" y="118" width="120" height="50" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="80" y="147" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#14532d" text-anchor="middle">PARK</text>
      <rect x="160" y="118" width="120" height="50" rx="5" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="220" y="147" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#6b21a8" text-anchor="middle">LIBRARY</text>
      <rect x="300" y="118" width="120" height="50" rx="5" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="360" y="147" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#9a3412" text-anchor="middle">BAKERY</text>
    </svg>`,
    text: 'Look at the Sunshine Street map above! Decide whether each statement is TRUE (Benar) or FALSE (Salah):',
    statements: [
      {
        id: 's1',
        text: 'The Post Office is between the Fire Station and the Bank.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'The Library is across from the Post Office.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'The Bakery is next to the Fire Station.',
        correctAnswer: false,
      },
    ],
    explanation: 'Pernyataan 1 BENAR karena Post Office ada di antara Fire Station dan Bank. Pernyataan 2 BENAR karena Library berada di seberang Post Office. Pernyataan 3 SALAH karena Bakery berada di sebelah Library di seberang Bank, bukan di sebelah Fire Station.',
  },
  {
    id: 32,
    type: 'pgk_kategori',
    element: EL_READ,
    topic: 'Public Places & Their Functions',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi kesesuaian 3 pernyataan mengenai tempat umum dan fungsinya di lingkungan rumah.',
    text: 'Evaluate these three statements about public places in a neighbourhood. Choose Benar (True) or Salah (False) for each statement:',
    statements: [
      {
        id: 's1',
        text: 'People go to a pharmacy to buy medicine when they have a fever or cough.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'A bus stop is a place where doctors treat injured patients.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Students can borrow storybooks and study quietly in a library.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (apotek untuk membeli obat). Pernyataan 2 SALAH (dokter merawat pasien di rumah sakit/hospital, bukan di halte bus). Pernyataan 3 BENAR (perpustakaan untuk meminjam buku dan belajar dengan tenang).',
  },
  {
    id: 33,
    type: 'pgk_kategori',
    element: EL_READ,
    topic: 'Describing House & Yard Scene',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat menilai kebenaran 3 deskripsi gambar lingkungan rumah siswa.',
    image: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="155" rx="12" fill="#e0f2fe" stroke="#bae6fd" stroke-width="1.5"/>
      <rect y="112" width="420" height="43" fill="#4ade80"/>
      <!-- Pohon di kiri -->
      <rect x="40" y="72" width="12" height="42" fill="#78350f"/>
      <circle cx="46" cy="58" r="24" fill="#15803d"/>
      <!-- Rumah di tengah -->
      <polygon points="130,52 195,18 260,52" fill="#dc2626"/>
      <rect x="140" y="52" width="110" height="60" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
      <rect x="182" y="76" width="26" height="36" fill="#92400e"/>
      <rect x="152" y="64" width="20" height="16" fill="#93c5fd" stroke="#1e40af"/>
      <rect x="218" y="64" width="20" height="16" fill="#93c5fd" stroke="#1e40af"/>
      <!-- Sepeda di depan rumah -->
      <circle cx="155" cy="118" r="9" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="183" cy="118" r="9" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <polyline points="155,118 168,106 183,118 166,118 155,118" fill="none" stroke="#2563eb" stroke-width="2"/>
      <!-- Pagar dan Kotak Sampah di kanan -->
      <rect x="290" y="88" width="24" height="28" rx="3" fill="#16a34a" stroke="#14532d" stroke-width="1.5"/>
      <rect x="288" y="84" width="28" height="5" rx="2" fill="#15803d"/>
      <text x="302" y="106" font-family="sans-serif" font-size="6.5" font-weight="bold" fill="#ffffff" text-anchor="middle">TRASH</text>
      <!-- Matahari -->
      <circle cx="370" cy="34" r="15" fill="#fde047"/>
    </svg>`,
    text: 'Look carefully at the house and yard illustration above! Decide whether each statement is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'There is a green trash bin next to the house.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'There is a bicycle in front of the house.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'There are three tall trees on top of the red roof.',
        correctAnswer: false,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (ada tempat sampah hijau di sebelah kanan rumah). Pernyataan 2 BENAR (ada sepeda di halaman depan rumah). Pernyataan 3 SALAH (pohon berada di halaman samping kiri rumah, bukan di atas atap).',
  },
  {
    id: 34,
    type: 'pgk_kategori',
    element: EL_READ,
    topic: 'Reading Comprehension: Neighbourhood Text',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat menganalisis isi teks deskriptif tentang lingkungan rumah melalui 3 pernyataan Benar/Salah.',
    text: 'Read the short text carefully:\n"Hi, my name is Wayan. My neighbourhood is clean and friendly. My house is between a small grocery store and a mosque. Every morning, I walk to school because it is only 200 meters from my house. Behind the school, there is a green park where my friends and I play football after class."\n\nDetermine whether each statement is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'Wayan goes to school by bus because it is very far from his house.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Wayan\'s house is located between a grocery store and a mosque.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Wayan and his friends play football in the park behind the school.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 SALAH karena Wayan berjalan kaki ke sekolah (walk to school) yang jaraknya hanya 200 meter. Pernyataan 2 BENAR sesuai teks ("between a small grocery store and a mosque"). Pernyataan 3 BENAR sesuai kalimat terakhir teks.',
  },
  {
    id: 35,
    type: 'pgk_kategori',
    element: EL_PREP,
    topic: 'Route & Direction Reasoning',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat menilai ketepatan 3 pernyataan rute perjalanan dari rumah menuju sekolah berdasarkan peta arah.',
    image: `<svg viewBox="0 0 430 175" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="175" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Jalan Horizontal Bawah: Jl. Melati -->
      <rect x="20" y="122" width="320" height="24" fill="#475569"/>
      <text x="150" y="138" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#fde047" text-anchor="middle">JALAN MELATI</text>
      <!-- Jalan Vertikal Kanan: Jl. Anggrek -->
      <rect x="316" y="25" width="24" height="121" fill="#475569"/>
      <text x="328" y="88" font-family="sans-serif" font-size="7.5" font-weight="bold" fill="#fde047" text-anchor="middle" transform="rotate(-90 328 88)">JL. ANGGREK</text>
      <!-- Home di Kiri Bawah -->
      <rect x="24" y="68" width="76" height="44" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="62" y="94" font-family="sans-serif" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">HOME</text>
      <!-- Bank di Tengah -->
      <rect x="130" y="68" width="76" height="44" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="168" y="94" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">BANK</text>
      <!-- Lampu Merah di Persimpangan -->
      <circle cx="328" cy="134" r="8" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
      <!-- School di Kanan Atas -->
      <rect x="348" y="25" width="68" height="52" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="382" y="55" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">SCHOOL</text>
      <!-- Panah Rute -->
      <path d="M 62 134 L 310 134 L 328 115 L 328 52 L 344 52" fill="none" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4"/>
    </svg>`,
    text: 'Look at the green dashed route from HOME to SCHOOL on the map! Decide whether each statement is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'From Home, go straight along Jalan Melati and pass the Bank.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'At the traffic light (red circle), turn left onto Jalan Anggrek.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'The School is on the left side before the traffic light.',
        correctAnswer: false,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (dari Home jalan lurus di Jalan Melati melewati Bank). Pernyataan 2 BENAR (di lampu merah berbelok ke kiri masuk ke Jalan Anggrek). Pernyataan 3 SALAH karena School berada setelah berbelok kiri di Jalan Anggrek pada sisi kanan jalan.',
  },
];
