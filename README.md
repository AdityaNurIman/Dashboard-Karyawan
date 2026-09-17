# WorkHub - Dashboard Karyawan

Aplikasi manajemen karyawan lengkap dengan React + Vite. Mencakup dashboard, manajemen karyawan, absensi, pengajuan cuti/izin, laporan, dan pengaturan sistem.

## Fitur Utama

### Dashboard
- Ringkasan statistik: Total Karyawan, Hadir Hari Ini, Cuti, Izin
- Chart kehadiran 7 hari terakhir
- Donut chart status karyawan
- Daftar karyawan terbaru & pengajuan terbaru

### Manajemen Karyawan (CRUD)
- Tambah, edit, hapus karyawan
- Form lengkap: Nama, Posisi, Departemen, Status, Email, Telepon
- Pencarian real-time
- Status: Aktif, Cuti, Izin, Sakit
- Data tersimpan di localStorage (persist setelah refresh)

### Absensi
- Check-in / Check-out per karyawan
- Statistik: Check-in, Check-out, Terlambat, Hadir
- Tabel riwayat absensi harian
- Filter karyawan yang tidak cuti

### Pengajuan Cuti & Izin
- Ajukan cuti/izin baru dengan durasi & alasan
- Filter: Semua, Menunggu, Disetujui, Ditolak
- Approve/Reject dengan satu klik
- Status badge visual (warna berbeda per status)

### Laporan
- 4 mode laporan: Semua, Absensi, Pengajuan, Karyawan
- Rekap absensi bulanan (6 bulan) dengan chart
- Ringkasan statistik kepegawaian
- Tabel detail dengan filter

### Pengaturan (5 Tab)
1. **Profil** - Nama, jabatan, email, zona waktu (persist ke localStorage)
2. **Keamanan** - Ganti password, 2FA (Email/SMS)
3. **Notifikasi** - Toggle 5 jenis notifikasi
4. **Perusahaan** - Nama, alamat, timezone, logo upload
5. **Sistem** - Dark mode, auto refresh, auto export, bahasa (i18n), danger zone (hapus semua data)

### Fitur Tambahan
- **Dark Mode** - Toggle instan, persist, CSS variables
- **Internasionalisasi (i18n)** - 3 bahasa: Indonesia, English, Japanese (~150+ key)
- **Notifikasi Bell** - Dropdown dengan status read/unread
- **Profile Dropdown** - Profil, Pengaturan, Logout
- **Animasi** - Card statistik hover lift, entrance animation
- **localStorage Persistence** - Semua data (karyawan, request, absensi, profil, company, system) tersimpan
- **Responsive** - Mobile friendly (<700px sidebar collapse)

## Teknologi
- **React 18** + **Vite 6**
- **Lucide React** - Icons
- **CSS Variables** - Theming (light/dark mode)
- **localStorage** - Data persistence
- **Vanilla CSS** - No framework CSS

## Cara Menjalankan

### Prasyarat
- Node.js 18+ 
- npm 9+

### Instalasi
```bash
# Clone repository
git clone https://github.com/AdityaNurIman/Dashboard-Karyawan.git
cd Dashboard-Karyawan

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build Production
```bash
npm run build
```

Output di folder `dist/`

### Preview Production Build
```bash
npm run preview
```

## Struktur Proyek
```
workhub-react-vite/
├── index.html              # Entry HTML
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite config
├── README.md               # Dokumentasi ini
├── src/
│   ├── main.jsx            # Main App component (single file)
│   └── styles.css          # All styles (CSS variables, dark mode, animations)
└── dist/                   # Build output (production)
```

## Data Default
Aplikasi dilengkapi 10 karyawan dummy:
- IT: 4 karyawan (Frontend, Backend, UI/UX, System Admin)
- Marketing: 3 karyawan (Design, Content Writer, Marketing Manager)
- HR: 1 karyawan
- Finance: 1 karyawan
- Sales: 1 karyawan

## Penggunaan

### Menambah Karyawan
1. Klik menu **Karyawan** di sidebar
2. Klik tombol **"Tambah Karyawan"**
3. Isi form (wajib: Nama, Posisi, Departemen)
3. Klik **"Tambah"**

### Edit/Hapus Karyawan
- Di tabel karyawan, klik icon **pensil** (edit) atau **sampah** (hapus)

### Absensi
1. Buka menu **Absensi**
2. Pilih karyawan dari dropdown
3. Pilih aksi: **Check-in** atau **Check-out**
4. Klik **Proses**

### Pengajuan Cuti
1. Buka menu **Pengajuan Cuti**
2. Klik **"Ajukan Cuti"**
3. Isi: Nama, Jenis (Cuti/Izin), Durasi, Alasan
4. Klik **"Ajukan"**
5. Admin bisa **Setujui/Tolak** dari daftar

### Ganti Bahasa
1. Buka **Pengaturan** → tab **Sistem**
2. Pilih bahasa: Indonesia / English / Japanese
3. Klik **"Terapkan"**

### Dark Mode
- Di **Pengaturan** → **Sistem** → toggle **Mode Gelap**
- Atau akan otomatis mengikuti preferensi sistem (jika diimplementasikan)

## Konfigurasi Environment
Tidak diperlukan file `.env` untuk development. Semua konfigurasi via UI Pengaturan.

## Scripts
```json
{
  "dev": "vite",           # Development server
  "build": "vite build",   # Production build
  "preview": "vite preview" # Preview production build
}
```

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Lisensi
MIT License - Bebas digunakan untuk keperluan pribadi/komersial.

## Kontak
**Aditya Nur Iman**  
GitHub: [@AdityaNurIman](https://github.com/AdityaNurIman)  
Repository: [Dashboard-Karyawan](https://github.com/AdityaNurIman/Dashboard-Karyawan)

---

*Dibangun dengan React + Vite untuk manajemen karyawan modern.*