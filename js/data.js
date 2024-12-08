const sidebarData = [
  {
    title: "Modul Ajar Peluang",
    content: "<h4>Modul 1: Pendahuluan</h4><p>Ini adalah konten untuk Modul 1.</p>",
    subMateri: [
      {
        title: "KOMPETENSI AWAL",
        content: `
        <h5>Kompetensi Awal</h5>

        <ol>
        <li>Peserta didik mampu mendeskripsikan dan menentukan peluang</li>
        <li>Peserta didik mampu menyelesaikan masalah yang berkaitan dengan peluang.</li>
        </ol>
        `,
      },
      {
        title: "CAPAIAN PEMBELAJARAN",
        content: `
        <h5>Capaian Pembelajaran</h5>

        <p>Di akhir Fase D Peserta didik dapat menjelaskan dan menggunakan pengertian peluang dan frekuensi relatif untuk menentukan frekuensi harapan satu kejadian pada suatu percobaan sederhana (semua hasil percobaan dapat muncul secara merata).</p>
        `,
      },
      {
        title: "PROFIL PELAJAR PANCASILA",
        content: `
        <h5>Profil Pelajar Pancasila</h5>

        <ol>
          <li>Beriman, bertakwa kepada Tuhan Yang MahaEsa, dan Berakhlak Mulia</li>
          <li>Gotong Royong</li>
          <li>Berpikir Kritis</li>
        </ol>
        `,
      },
      {
        title: "PEMAHAMAN BERMAKNA",
        content: `
        <h5>Pemahaman Bermakna</h5>

        <p>Peserta didik dapat menemukan konsep peluang serta menyelesaikan permasalahan mengenai peluang yang berkaitan dengan titik sampel, ruang sampel, frekuensi harapan pada suatu percobaan sederhana.</p>
        `,
      },
      {
        title: "TARGET PESERTA DIDIK",
        content: `
        <h5>Target Peserta Didik</h5>

        <ol>
          <li>Peserta didik dapat mengetahui cara menentukan ruang sampel dan titik sampel.</li>
          <li>Peserta didik dapat mengetahui cara mencari peluang mata dadu./li>
          <li>Peserta didik dapat mengetahui cara mencari frekuensin harapan.</li>
        </ol>
        `,
      },
      {
        title: "TUJUAN PEMBELAJARAN",
        content: `
        <h5>Tujuan Pembelajaran</h5>

        <ol>
          <li>Mengetahui cara menentukan ruang sampel dan titik sampel.</li>
          <li>Mengetahui cara mencari peluang suatu kejadian./li>
          <li>Mengetahui cara mencari frekuensi harapan.</li>
        </ol>
        `,
      },
      {
        title: "PERTANYAAN PEMANTIK",
        content: `
        <h5>Pertanyaan Pemantik</h5>

        <ol>
          <li>Apa yang dimaksud dengan peluang?</li>
          <li>Ada berapa kemungkinan hasil melempar sebuah dadu normal?/li>
        </ol>
        `,
      },
      {
        title: "BAHAN AJAR",
        content: `
        <h4>A. PERCOBAAN, RUANG SAMPEL, TITIK SAMPEL, DAN KEJADIAN</h4>
        <P style="padding-left:5px">Peluang merupakan bagian matematika yang membahas pengukuran tingkat keyakinan orang akan muncul atau tidak munculnya suatu kejadian atau suatu peristiwa.</P>

        <h5>1.Percobaan</h5>
        <p style="padding-left:15px">Percobaan atau eksperimen adalah suatu kegiatan yang dapat memberikan beberapa kemungkinan. Contohnya melemparkan dadu, melemparkan koin, mengambil kartu atau bola secara acak dan lain-lain.</p>

        <h5>2.Ruang Sample</h5>
        <p style="padding-left:15px">Ruang sampel adalah semua hasil yang mungkin terjadi dari suatu percobaan. Ruang sampel dinotasikan sebagai S dan banyaknya elemen ruang sampel dinotasikan n(S). Misalnya melemparkan dua buah koin, kemungkinan hasil yang muncul adalah {(A,G), (G,A), (A,A), (G,G)}.</p>

        <h5>3.Titik Sampel</h5>
        <p style="padding-left:15px">Titik sampel adalah hasil yang mungkin terjadi dari suatu percobaan dan merupakan anggota dari ruang sampel. Banyaknya titik sampel pada suatu ruang sampel dapat dilambangkan dengan n(S).</p>
        <p style="padding-left:15px">Contoh titik sampel</p>
        <ul>
          <li>Jika melempar satu dadu, maka titik sampelnya adalah 1, 2, 3, 4, 5, dan 6. </li>
          <li>Jika melempar satu uang koin, maka titik sampelnya adalah (A) dan (G).</li>
        </ul>

        <h5>4.Kejadian</h5>
        <p style="padding-left:15px">Kejadian adalah hasil diharapkan terjadi pada ruang sampel. Kejadian dinotasikan sebagai A. Dengan demikian, banyaknya kejadian A dinotasikan sebagai n(A). Misalnya, berapakah banyaknya kejadian muncul 1 A dan 1 G pada pelemparan dua buah koin? Munculnya 1 A dan 1 G bisa diperoleh dari {(A,G), (G,A)}. Dengan demikian, banyaknya kejadian muncul 1 A dan 1 G adalah 2.</p>
        <p style="padding-left:15px"><strong>Contoh</strong></p>
        <p style="padding-left:15px">Eksperimen</p>
        <p style="padding-left:15px">Melambungkan sebuah dadu satu kali dan dilihat banyaknya mata dadu yang tampak/muncul</p>
        <p style="padding-left:15px">Ruang sampel</p>
        <p style="padding-left:15px">Dadu mempunyai 6 sisi, dan masing-masing sisi bermata satu, dua,tiga, empat, lima dan enam. Jadi S = {1, 2, 3, 4, 5, 6}</p>
        <p style="padding-left:15px">Titik sampel</p>
        <p style="padding-left:15px">Titik sampel merupakan suatu elemen dari ruang sampel S. elemen-elemen dari S adalah : 1, 2, 3, 4, 5, 6. jadi titik sampelnya : 1 atau 2 atau 3 atau 4 atau 5 atau 6</p>
        <p style="padding-left:15px">Kejadian</p>
        <p style="padding-left:15px">Kejadian merupakan himpunan bagian dari ruang sampel</p>

        <h4>B. PELUANG SUATU KEJADIAN</h4>
        <P style="padding-left:15px">Peluang suatu kejadian berkaitan dengan pembahasan tentang ruang sampel dan kejadian. Peluang suatu kejadian adalah perbandingan antara jumlah suatu kejadian n(A) dan semua kemungkinan yang ada n(S). Secara matematis, rumus peluang suatu kejadian A pada ruang sampel S adalah sebagai berikut.</P>
        <p style="padding-left:15px">P(A) = peluang terjadinya A</p>
        <p style="padding-left:15px">n(A) = banyaknya elemen kejadian A.</p>
        <p style="padding-left:15px">n(S) = banyaknya elemen ruang sampel S.</p>
        <br>
        <p style="padding-left:15px">Peluang terjadinya suatu kejadian berada di rentang 0 dan 1. Nilai 0 menunjukkan kejadian yang mustahil terjadi atau banyaknya elemen A = 0. Sementara itu, nilai 1 menunjukkan kejadian yang pasti terjadi atau banyaknya elemen A sama dengan ruang sampel. Dinotasikan sebagai:</p>
        <p class="text-center">0 ≤ P(A) ≤ 1</p>
        <p style="padding-left:15px">Contoh peluang 0 dan 1 adalah sebagai berikut.</p>
        <ul>
          <li>P(A) = 0 atau kejadian yang mustahil terjadi, misalnya laki-laki melahirkan</li>
          <li>P(A) = 1 atau kejadian yang pasti terjadi, misalnya Matahari terbit dari timur</li>
        </ul>

        <h4>C. FREKUENSI HARAPAN</h4>
        <P style="padding-left:15px">Frekuensi harapan adalah besarnya peluang suatu kejadian yang terjadi secara berulang-ulang (percobaan berulang). Jika suatu percobaan dilakukan sebanyak N kali dan nilai kemungkinan terjadinya kejadian A pada setiap percobaan adalah P(A) maka frekuensi harapan dari kejadian A adalah: </P>

        <p class="text-center">0 ≤ P(A) ≤ 1</p>
        <p style="padding-left:15px">FH = frekuensi harapan kejadian.</p>
        <p style="padding-left:15px">P(A) = peluang kejadian A.</p>
        <p style="padding-left:15px">n = banyaknya kejadian atau percobaan</p>
        <br>
        <p style="padding-left:15px"><strong>Contoh:</strong></p>
        <p style="padding-left:15px">Frekuensi harapan muncul mata dadu 5 pada pelemparan sebuah dadu sebanyak 150 kali adalah?</p>

        <br>
        <p style="padding-left:15px">Diketahui:</p>
        <p style="padding-left:15px">A = (5), maka n(A) = 1</p>
        <p style="padding-left:15px">S = (1,2,3,4,5,6), maka n(S) = 6</p>
        <p style="padding-left:15px">n = 150</p>

        <br>
        <p style="padding-left:15px">Jawab:</p>
        <p style="padding-left:15px">P(A) = n(A)/n(S)</p>
        <p style="padding-left:15px">P(A) = 1/6</p>
        <p style="padding-left:15px">FH = P(A) x n</p>
        <p style="padding-left:15px">FH = FH = 1/6 x 150 = 25</p>

        <br>
        <p>Jadi dalam frekuensi harapan muncul mata dadu 5 pada pelemparan sebanyak 150 kali adalah 25 kali.</p>
        `,
      },
      {
        title: "TEST SOAL",
        content: {
          questions: [
            {
              question: "Sebuah uang logam dilempar satu kali. Berapa peluang munculnya gambar setelah pelemparan itu?",
              options: [
                { value: "A", text: "1/1" },
                { value: "B", text: "1/2" },
                { value: "C", text: "1/3" },
                { value: "d", text: "1/4" },
              ],
              answer: "B",
            },
            {
              question: "Sebuah dadu dilemparkan sekali. Tentukan peluang kejadian muncul mata dadu lebih dari 4",
              options: [
                { value: "A", text: "1/1" },
                { value: "B", text: "1/2" },
                { value: "C", text: "1/3" },
                { value: "d", text: "1/4" },
              ],
              answer: "C",
            },
            {
              question: "Dua buah dadu dilempar secara bersamaan. Berapakah peluang kejadian muncul jumlah kedua mata dadu = 6?",
              options: [
                { value: "A", text: "5/36" },
                { value: "B", text: "3/36" },
                { value: "C", text: "9/36" },
                { value: "d", text: "7/36" },
              ],
              answer: "A",
            },
            {
              question: "Sebuah dadu dilemparkan ke atas sebanyak 36 kali. Berapa frekuensi harapan munculnya mata dadu bernomor 3?",
              options: [
                { value: "A", text: "6 kali" },
                { value: "B", text: "5 kali" },
                { value: "C", text: "4 kali" },
                { value: "d", text: "3 kali" },
              ],
              answer: "A",
            },
            {
              question: "Jika sebuah dadu dilempar 600 kali, tentukan frekuensi harapan munculnya mata dadu 4",
              options: [
                { value: "A", text: "200 kali" },
                { value: "B", text: "150 kali" },
                { value: "C", text: "100 kali" },
                { value: "d", text: "50 kali" },
              ],
              answer: "C",
            },
          ],
        },
      },
    ],
  },
];