import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  LayoutDashboard,
  Users,
  Clock3,
  CalendarDays,
  FileText,
  Settings,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  UserRound,
  CheckCircle2,
  Plane,
  ClipboardList,
  Menu,
  X,
  TrendingUp,
  Activity,
  Plus,
  Edit2,
  Trash2,
  Save,
  ArrowLeftRight,
  LogIn,
  LogOut,
  BarChart3,
  Filter,
  Mail,
  Shield,
  Package,
  RefreshCw,
  Download,
  Upload,
  Target,
  Award,
  ChevronUp,
  AlertCircle,
  Check,
  XCircle,
  Eye,
  UserPlus,
  Key,
  Smartphone,
  Palette,
  Lock,
  MapPin,
  Building2,
  Clock,
  Calendar,
  TrendingDown,
  PieChart,
  Activity as ActivityIcon,
  ChevronRight as Cr,
  ChevronDown as Cd
} from "lucide-react";
import "./styles.css";

const translations = {
  Indonesia: {
    dashboard: "Dashboard",
    karyawan: "Karyawan",
    absensi: "Absensi",
    pengajuanCuti: "Pengajuan Cuti",
    laporan: "Laporan",
    pengaturan: "Pengaturan",
    hello: "Halo, {name}",
    todayActivity: "Berikut ringkasan aktivitas dan data karyawan hari ini.",
    timeNow: "Waktu sekarang",
    timezone: "WITA",
    totalKaryawan: "Total Karyawan",
    hadirHariIni: "Hadir Hari Ini",
    cuti: "Cuti",
    izin: "Izin",
    attendanceChart: "Kehadiran Karyawan",
    last7Days: "Data 7 hari terakhir",
    weekly: "Mingguan",
    present: "Hadir",
    absent: "Tidak hadir",
    employeeStatus: "Status Karyawan",
    currentStatus: "Ringkasan status saat ini",
    latestEmployees: "Karyawan Terbaru",
    employeeList: "Daftar karyawan dalam sistem",
    viewAll: "Lihat Semua",
    latestRequests: "Pengajuan Terbaru",
    requestsDesc: "Permintaan cuti dan izin",
    name: "Nama",
    position: "Posisi",
    department: "Departemen",
    status: "Status",
    active: "Aktif",
    leave: "Cuti",
    permission: "Izin",
    sick: "Sakit",
    email: "Email",
    phone: "Telepon",
    joinDate: "Tanggal Bergabung",
    searchPlaceholder: "Cari karyawan...",
    notFound: "Karyawan tidak ditemukan.",
    addEmployee: "Tambah Karyawan",
    editEmployee: "Edit Karyawan",
    save: "Simpan",
    cancel: "Batal",
    add: "Tambah",
    edit: "Edit",
    delete: "Hapus",
    confirmDelete: "Hapus karyawan ini?",
    requiredFields: "Isi semua kolom wajib (Nama, Posisi, Departemen).",
    checkIn: "Check-in",
    checkOut: "Check-out",
    late: "Terlambat",
    presentStatus: "Hadir",
    attendanceToday: "Absensi Hari Ini",
    recordAttendance: "Catat atau lihat absensi",
    selectEmployee: "-- Pilih Karyawan --",
    selectAction: "-- Aksi --",
    process: "Proses",
    leaveRequests: "Pengajuan Cuti",
    manageRequests: "Kelola pengajuan cuti dan izin karyawan.",
    totalRequests: "Total Pengajuan",
    pending: "Menunggu",
    approved: "Disetujui",
    rejected: "Ditolak",
    duration: "Durasi",
    date: "Tanggal",
    reason: "Alasan",
    approve: "Setujui",
    reject: "Tolak",
    submitRequest: "Ajukan Cuti",
    leaveType: "Jenis",
    leaveDuration: "Durasi",
    leaveReason: "Alasan",
    reports: "Laporan",
    reportsDesc: "Ringkasan laporan data karyawan, absensi, dan pengajuan.",
    export: "Export",
    allReports: "Semua Laporan",
    attendanceReport: "Absensi",
    requestReport: "Pengajuan",
    employeeReport: "Karyawan",
    summary: "Ringkasan",
    settings: "Pengaturan",
    settingsDesc: "Kelola profil, akun, dan preferensi sistem.",
    profile: "Profil",
    security: "Keamanan",
    notifications: "Notifikasi",
    company: "Perusahaan",
    system: "Sistem",
    profileTitle: "Profil Pengguna",
    profileDesc: "Update informasi diri Anda",
    fullName: "Nama Lengkap",
    role: "Jabatan",
    profileTimezone: "Zona Waktu",
    reset: "Reset",
    saved: "Berhasil disimpan!",
    securityTitle: "Keamanan Akun",
    securityDesc: "Kelola password dan otentikasi",
    oldPassword: "Password Lama",
    newPassword: "Password Baru",
    confirmPassword: "Konfirmasi Password",
    updatePassword: "Update Password",
    twoFactor: "Otentikasi Dua Faktor",
    emailVerification: "Email Verification",
    verifyEmail: "Verifikasi akun via email",
    sms2fa: "2FA SMS",
    verifySms: "Verifikasi via pesan SMS",
    notificationsTitle: "Pengaturan Notifikasi",
    notificationsDesc: "Pilih notifikasi yang ingin diterima",
    leaveNotif: "Notifikasi Cuti",
    leaveNotifDesc: "Pengingat pengajuan cuti",
    attendanceNotif: "Notifikasi Absen",
    attendanceNotifDesc: "Reminder check-in/out",
    requestNotif: "Notifikasi Pengajuan",
    requestNotifDesc: "Persetujuan cuti/izin",
    reportNotif: "Notifikasi Laporan",
    reportNotifDesc: "Laporan mingguan",
    marketingNotif: "Notifikasi Marketing",
    marketingNotifDesc: "Promo dan update",
    companyTitle: "Pengaturan Perusahaan",
    companyDesc: "Informasi perusahaan",
    companyName: "Nama Perusahaan",
    address: "Alamat",
    enterAddress: "Masukkan alamat",
    companyTimezone: "Zona Waktu",
    logo: "Logo Perusahaan",
    clickToUpload: "Klik untuk upload",
    systemTitle: "Pengaturan Sistem",
    systemDesc: "Konfigurasi sistem secara keseluruhan",
    darkMode: "Mode Gelap",
    darkModeDesc: "Aktifkan tema gelap",
    autoRefresh: "Auto Refresh",
    autoRefreshDesc: "Refresh data otomatis",
    autoExport: "Export Otomatis",
    autoExportDesc: "Export laporan mingguan",
    language: "Bahasa",
    languageDesc: "Pilih bahasa antarmuka",
    apply: "Terapkan",
    dangerZone: "⚠ Area Berbahaya",
    dangerDesc: "Hapus Semua Data",
    confirmDeleteAll: "Yakin hapus SEMUA data? Aksi ini tidak bisa dibatalkan!",
    allDataDeleted: "Semua data dihapus & direset ke default",
    notificationsMenu: "Notifikasi",
    leaveApproved: "Pengajuan cuti diterima",
    leaveApprovedMsg: "Permintaan cuti 3 hari Dewi Lestari sudah disetujui",
    lateAttendance: "Absensi terlambat",
    lateAttendanceMsg: "Rizky Pratama check-in pukul 08:45",
    systemUpdate: "System Update",
    systemUpdateMsg: "Versi aplikasi diperbarui ke v1.2.0",
    minutesAgo: "{time} menit lalu",
    hoursAgo: "{time} jam lalu",
    allRead: "Semua dibaca",
    profileMenu: "Profil",
    settingsMenu: "Pengaturan",
    logout: "Keluar",
    loggedOut: "Logged out (demo)",
    login: "Masuk",
  },
  English: {
    dashboard: "Dashboard",
    karyawan: "Employees",
    absensi: "Attendance",
    pengajuanCuti: "Leave Requests",
    laporan: "Reports",
    pengaturan: "Settings",
    hello: "Hello, {name}",
    todayActivity: "Here is a summary of today's employee activity and data.",
    timeNow: "Current Time",
    timezone: "WITA",
    totalKaryawan: "Total Employees",
    hadirHariIni: "Present Today",
    cuti: "On Leave",
    izin: "Permission",
    attendanceChart: "Employee Attendance",
    last7Days: "Last 7 days data",
    weekly: "Weekly",
    present: "Present",
    absent: "Absent",
    employeeStatus: "Employee Status",
    currentStatus: "Current status summary",
    latestEmployees: "Latest Employees",
    employeeList: "Employee list in system",
    viewAll: "View All",
    latestRequests: "Latest Requests",
    requestsDesc: "Leave and permission requests",
    name: "Name",
    position: "Position",
    department: "Department",
    status: "Status",
    active: "Active",
    leave: "On Leave",
    permission: "Permission",
    sick: "Sick",
    email: "Email",
    phone: "Phone",
    joinDate: "Join Date",
    searchPlaceholder: "Search employees...",
    notFound: "No employees found.",
    addEmployee: "Add Employee",
    editEmployee: "Edit Employee",
    save: "Save",
    cancel: "Cancel",
    add: "Add",
    edit: "Edit",
    delete: "Delete",
    confirmDelete: "Delete this employee?",
    requiredFields: "Fill all required fields (Name, Position, Department).",
    checkIn: "Check-in",
    checkOut: "Check-out",
    late: "Late",
    presentStatus: "Present",
    attendanceToday: "Today's Attendance",
    recordAttendance: "Record or view attendance",
    selectEmployee: "-- Select Employee --",
    selectAction: "-- Action --",
    process: "Process",
    leaveRequests: "Leave Requests",
    manageRequests: "Manage employee leave and permission requests.",
    totalRequests: "Total Requests",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    duration: "Duration",
    date: "Date",
    reason: "Reason",
    approve: "Approve",
    reject: "Reject",
    submitRequest: "Submit Leave",
    leaveType: "Type",
    leaveDuration: "Duration",
    leaveReason: "Reason",
    reports: "Reports",
    reportsDesc: "Summary of employee, attendance, and request data.",
    export: "Export",
    allReports: "All Reports",
    attendanceReport: "Attendance",
    requestReport: "Requests",
    employeeReport: "Employees",
    summary: "Summary",
    settings: "Settings",
    settingsDesc: "Manage profile, account, and system preferences.",
    profile: "Profile",
    security: "Security",
    notifications: "Notifications",
    company: "Company",
    system: "System",
    profileTitle: "User Profile",
    profileDesc: "Update your personal information",
    fullName: "Full Name",
    role: "Role",
    profileTimezone: "Timezone",
    reset: "Reset",
    saved: "Saved successfully!",
    securityTitle: "Account Security",
    securityDesc: "Manage password and authentication",
    oldPassword: "Old Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    updatePassword: "Update Password",
    twoFactor: "Two-Factor Authentication",
    emailVerification: "Email Verification",
    verifyEmail: "Verify account via email",
    sms2fa: "2FA SMS",
    verifySms: "Verify via SMS",
    notificationsTitle: "Notification Settings",
    notificationsDesc: "Choose notifications to receive",
    leaveNotif: "Leave Notifications",
    leaveNotifDesc: "Leave request reminders",
    attendanceNotif: "Attendance Notifications",
    attendanceNotifDesc: "Check-in/out reminders",
    requestNotif: "Request Notifications",
    requestNotifDesc: "Leave/permission approvals",
    reportNotif: "Report Notifications",
    reportNotifDesc: "Weekly reports",
    marketingNotif: "Marketing Notifications",
    marketingNotifDesc: "Promos and updates",
    companyTitle: "Company Settings",
    companyDesc: "Company information",
    companyName: "Company Name",
    address: "Address",
    enterAddress: "Enter address",
    companyTimezone: "Timezone",
    logo: "Company Logo",
    clickToUpload: "Click to upload",
    systemTitle: "System Settings",
    systemDesc: "Overall system configuration",
    darkMode: "Dark Mode",
    darkModeDesc: "Enable dark theme",
    autoRefresh: "Auto Refresh",
    autoRefreshDesc: "Auto refresh data",
    autoExport: "Auto Export",
    autoExportDesc: "Weekly report export",
    language: "Language",
    languageDesc: "Select interface language",
    apply: "Apply",
    dangerZone: "⚠ Danger Zone",
    dangerDesc: "Delete All Data",
    confirmDeleteAll: "Are you sure to delete ALL data? This action cannot be undone!",
    allDataDeleted: "All data deleted & reset to default",
    notificationsMenu: "Notifications",
    leaveApproved: "Leave request approved",
    leaveApprovedMsg: "Dewi Lestari's 3-day leave request has been approved",
    lateAttendance: "Late attendance",
    lateAttendanceMsg: "Rizky Pratama checked in at 08:45",
    systemUpdate: "System Update",
    systemUpdateMsg: "Application updated to v1.2.0",
    minutesAgo: "{time} minutes ago",
    hoursAgo: "{time} hours ago",
    allRead: "All read",
    profileMenu: "Profile",
    settingsMenu: "Settings",
    logout: "Logout",
    loggedOut: "Logged out (demo)",
    login: "Login",
  },
  Japanese: {
    dashboard: "ダッシュボード",
    karyawan: "社員",
    absensi: "勤怠",
    pengajuanCuti: "休暇申請",
    laporan: "レポート",
    pengaturan: "設定",
    hello: "こんにちは、{name}さん",
    todayActivity: "本日の社員アクティビティとデータの概要です。",
    timeNow: "現在時刻",
    timezone: "WITA",
    totalKaryawan: "総社員数",
    hadirHariIni: "本日の出席",
    cuti: "休暇中",
    izin: "許可",
    attendanceChart: "社員出勤状況",
    last7Days: "過去7日間のデータ",
    weekly: "週間",
    present: "出席",
    absent: "欠席",
    employeeStatus: "社員ステータス",
    currentStatus: "現在のステータス概要",
    latestEmployees: "最新の社員",
    employeeList: "システム内の社員リスト",
    viewAll: "すべて表示",
    latestRequests: "最新の申請",
    requestsDesc: "休暇と許可の申請",
    name: "名前",
    position: "役職",
    department: "部署",
    status: "ステータス",
    active: "在籍中",
    leave: "休暇中",
    permission: "許可",
    sick: "病欠",
    email: "メール",
    phone: "電話",
    joinDate: "入社日",
    searchPlaceholder: "社員を検索...",
    notFound: "社員が見つかりません。",
    addEmployee: "社員を追加",
    editEmployee: "社員を編集",
    save: "保存",
    cancel: "キャンセル",
    add: "追加",
    edit: "編集",
    delete: "削除",
    confirmDelete: "この社員を削除しますか？",
    requiredFields: "必須項目を入力してください（名前、役職、部署）。",
    checkIn: "出勤",
    checkOut: "退勤",
    late: "遅刻",
    presentStatus: "出席",
    attendanceToday: "本日の勤怠",
    recordAttendance: "勤怠を記録または確認",
    selectEmployee: "-- 社員を選択 --",
    selectAction: "-- アクションを選択 --",
    process: "実行",
    leaveRequests: "休暇申請",
    manageRequests: "社員の休暇と許可の申請を管理します。",
    totalRequests: "総申請数",
    pending: "保留中",
    approved: "承認済み",
    rejected: "却下",
    duration: "期間",
    date: "日付",
    reason: "理由",
    approve: "承認",
    reject: "却下",
    submitRequest: "休暇を申請",
    leaveType: "種類",
    leaveDuration: "期間",
    leaveReason: "理由",
    reports: "レポート",
    reportsDesc: "社員、勤怠、申請データの概要。",
    export: "エクスポート",
    allReports: "すべてのレポート",
    attendanceReport: "勤怠",
    requestReport: "申請",
    employeeReport: "社員",
    summary: "概要",
    settings: "設定",
    settingsDesc: "プロフィール、アカウント、システム設定を管理。",
    profile: "プロフィール",
    security: "セキュリティ",
    notifications: "通知",
    company: "会社",
    system: "システム",
    profileTitle: "ユーザープロフィール",
    profileDesc: "個人情報を更新",
    fullName: "氏名",
    role: "役職",
    profileTimezone: "タイムゾーン",
    reset: "リセット",
    saved: "保存しました！",
    securityTitle: "アカウントセキュリティ",
    securityDesc: "パスワードと認証を管理",
    oldPassword: "現在のパスワード",
    newPassword: "新しいパスワード",
    confirmPassword: "パスワード確認",
    updatePassword: "パスワード更新",
    twoFactor: "二段階認証",
    emailVerification: "メール認証",
    verifyEmail: "メールでアカウントを認証",
    sms2fa: "SMS二段階認証",
    verifySms: "SMSで認証",
    notificationsTitle: "通知設定",
    notificationsDesc: "受信する通知を選択",
    leaveNotif: "休暇通知",
    leaveNotifDesc: "休暇申請のリマインダー",
    attendanceNotif: "勤怠通知",
    attendanceNotifDesc: "出勤/退勤リマインダー",
    requestNotif: "申請通知",
    requestNotifDesc: "休暇/許可の承認",
    reportNotif: "レポート通知",
    reportNotifDesc: "週次レポート",
    marketingNotif: "マーケティング通知",
    marketingNotifDesc: "プロモーションと更新",
    companyTitle: "会社設定",
    companyDesc: "会社情報",
    companyName: "会社名",
    address: "住所",
    enterAddress: "住所を入力",
    companyTimezone: "タイムゾーン",
    logo: "会社ロゴ",
    clickToUpload: "クリックしてアップロード",
    systemTitle: "システム設定",
    systemDesc: "システム全体の設定",
    darkMode: "ダークモード",
    darkModeDesc: "ダークテーマを有効化",
    autoRefresh: "自動更新",
    autoRefreshDesc: "データを自動更新",
    autoExport: "自動エクスポート",
    autoExportDesc: "週次レポート出力",
    language: "言語",
    languageDesc: "インターフェース言語を選択",
    apply: "適用",
    dangerZone: "⚠ 危険区域",
    dangerDesc: "すべてのデータを削除",
    confirmDeleteAll: "本当にすべてのデータを削除しますか？この操作は元に戻せません！",
    allDataDeleted: "すべてのデータを削除し、デフォルトにリセットしました",
    notificationsMenu: "通知",
    leaveApproved: "休暇申請が承認されました",
    leaveApprovedMsg: "出頭玲佳の3日間の休暇申請が承認されました",
    lateAttendance: "遅刻勤怠",
    lateAttendanceMsg: "リズキー・プラタマが08:45に出勤",
    systemUpdate: "システムアップデート",
    systemUpdateMsg: "アプリケーションがv1.2.0に更新されました",
    minutesAgo: "{time}分前",
    hoursAgo: "{time}時間前",
    allRead: "すべて既読",
    profileMenu: "プロフィール",
    settingsMenu: "設定",
    logout: "ログアウト",
    loggedOut: "ログアウトしました（デモ）",
    login: "ログイン",
  }
};

const initialEmployees = [
  { id: 1, name: "Rizky Pratama", role: "Frontend Developer", department: "IT", status: "Aktif", email: "rizky@workhub.com", phone: "0812-3456-7890", joinDate: "15 Jan 2024" },
  { id: 2, name: "Salsabila Putri", role: "Desain Grafis", department: "Marketing", status: "Aktif", email: "salsabila@workhub.com", phone: "0812-3456-7891", joinDate: "20 Feb 2024" },
  { id: 3, name: "Dimas Ardiansyah", role: "Backend Developer", department: "IT", status: "Aktif", email: "dimas@workhub.com", phone: "0812-3456-7892", joinDate: "10 Mar 2023" },
  { id: 4, name: "Nabila Putri", role: "HRD", department: "Human Resource", status: "Aktif", email: "nabila@workhub.com", phone: "0812-3456-7893", joinDate: "05 Apr 2023" },
  { id: 5, name: "Fahri Setiawan", role: "UI/UX Designer", department: "IT", status: "Aktif", email: "fahri@workhub.com", phone: "0812-3456-7894", joinDate: "01 Aug 2024" },
  { id: 6, name: "Dewi Lestari", role: "Content Writer", department: "Marketing", status: "Cuti", email: "dewi@workhub.com", phone: "0812-3456-7895", joinDate: "12 Sep 2023" },
  { id: 7, name: "Budi Santoso", role: "Data Analyst", department: "Finance", status: "Aktif", email: "budi@workhub.com", phone: "0812-3456-7896", joinDate: "03 Mei 2023" },
  { id: 8, name: "Putri Kusuma", role: "Sales Executive", department: "Sales", status: "Cuti", email: "putri@workhub.com", phone: "0812-3456-7897", joinDate: "28 Des 2022" },
  { id: 9, name: "Andi Wijaya", role: "System Admin", department: "IT", status: "Izin", email: "andi@workhub.com", phone: "0812-3456-7898", joinDate: "18 Jan 2021" },
  { id: 10, name: "Rina Handayani", role: "Marketing Manager", department: "Marketing", status: "Aktif", email: "rina@workhub.com", phone: "0812-3456-7899", joinDate: "12 Okt 2020" }
];

const initialRequests = [
  { id: 1, name: "Dewi Lestari", type: "Cuti", duration: "3 hari", date: "16 Sep 2026", status: "Menunggu", reason: "Ibadah" },
  { id: 2, name: "Rizky Pratama", type: "Izin", duration: "1 hari", date: "15 Sep 2026", status: "Disetujui", reason: "Acara keluarga" },
  { id: 3, name: "Salsabila Putri", type: "Cuti", duration: "2 hari", date: "14 Sep 2026", status: "Disetujui", reason: "Liburan" },
  { id: 4, name: "Dimas Ardiansyah", type: "Izin", duration: "1 hari", date: "13 Sep 2026", status: "Ditolak", reason: "Janji dokter" },
  { id: 5, name: "Nabila Putri", type: "Cuti", duration: "1 hari", date: "12 Sep 2026", status: "Disetujui", reason: "Cuti besar" }
];

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Karyawan", icon: Users },
  { label: "Absensi", icon: Clock3 },
  { label: "Pengajuan Cuti", icon: CalendarDays },
  { label: "Laporan", icon: FileText },
  { label: "Pengaturan", icon: Settings }
];

function getInitials(name) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

function StatCard({ icon: Icon, iconClass, label, value, note, positive = true }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${iconClass}`}>
        <Icon size={19} />
      </div>
      <p>{label}</p>
      <h2>{value}</h2>
      <span className={positive ? "positive" : "negative"}>
        {positive ? "↑" : "↓"} {note}
      </span>
    </div>
  );
}

function AttendanceChart({ data }) {
  const chartData = data || [
    { day: "Sen", value: 72 }, { day: "Sel", value: 82 }, { day: "Rab", value: 76 },
    { day: "Kam", value: 88 }, { day: "Jum", value: 80 }, { day: "Sab", value: 92 }, { day: "Min", value: 86 }
  ];
  return (
    <div className="chart-area">
      {chartData.map((item) => (
        <div className="chart-column" key={item.day}>
          <div className="bar" style={{ height: `${item.value}%` }} />
          <span>{item.day}</span>
        </div>
      ))}
    </div>
  );
}

function Modal({ open, onClose, title, children, width = 480 }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ width }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

function DashboardPage({ employees, requests, search, setSearch, today, t }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const stats = useMemo(() => {
    const total = employees.length;
    const hadir = employees.filter(e => e.status === "Aktif").length;
    const cuti = employees.filter(e => e.status === "Cuti").length;
    const izin = total - hadir - cuti;
    return { total, hadir, cuti, izin };
  }, [employees]);

  return (
    <div className="page-content">
      <section className="page-heading">
        <div>
          <p className="date">{today}</p>
          <h1>{t("hello").replace("{name}", "Adit")}</h1>
          <p>{t("todayActivity")}</p>
        </div>
        <div className="clock-card">
          <span>{t("timeNow")}</span>
          <strong>{new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</strong>
          <small>{t("timezone")}</small>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard icon={Users} iconClass="blue" label={t("totalKaryawan")} value={stats.total} note={`${employees.filter(e=>e.status==='Aktif').length} ${t("active").toLowerCase()} bulan ini`} />
        <StatCard icon={CheckCircle2} iconClass="green" label={t("hadirHariIni")} value={stats.hadir} note={`${Math.round(stats.hadir / stats.total * 100)}% ${t("totalKaryawan").toLowerCase()}`} />
        <StatCard icon={Plane} iconClass="orange" label={t("cuti")} value={stats.cuti} note="1 dari kemarin" positive={false} />
        <StatCard icon={Clock3} iconClass="purple" label={t("izin")} value={stats.izin} note="1 dari kemarin" positive={false} />
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <h3>{t("attendanceChart")}</h3>
              <p>{t("last7Days")}</p>
            </div>
            <button className="filter-button">{t("weekly")} <ChevronDown size={14} /></button>
          </div>
          <AttendanceChart />
          <div className="legend">
            <span><i className="dot blue-dot" /> {t("present")}</span>
            <span><i className="dot gray-dot" /> {t("absent")}</span>
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <div>
              <h3>{t("employeeStatus")}</h3>
              <p>{t("currentStatus")}</p>
            </div>
          </div>
          <div className="donut-wrapper">
            <div className="donut">
              <div>
                <strong>{stats.total}</strong>
                <span>{t("summary")}</span>
              </div>
            </div>
            <div className="status-list">
              <div><span><i className="dot blue-dot" /> {t("active")}</span><strong>{stats.hadir}</strong></div>
              <div><span><i className="dot orange-dot" /> {t("cuti")}</span><strong>{stats.cuti}</strong></div>
              <div><span><i className="dot purple-dot" /> {t("izin")}</span><strong>{stats.izin}</strong></div>
              <div><span><i className="dot red-dot" /> {t("sick")}</span><strong>1</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-grid">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <h3>{t("latestEmployees")}</h3>
              <p>{t("employeeList")}</p>
            </div>
            <button className="text-button" onClick={() => setSearch("")}>{t("viewAll")}</button>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{t("name")}</th>
                  <th>{t("position")}</th>
                  <th>{t("department")}</th>
                  <th>{t("status")}</th>
                </tr>
              </thead>
              <tbody>
                {employees.slice(0, 4).map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <div className="employee-cell">
                        <div className="mini-avatar">{getInitials(emp.name)}</div>
                        <span>{emp.name}</span>
                      </div>
                    </td>
                    <td>{emp.role}</td>
                    <td>{emp.department}</td>
                    <td><span className={`status-badge ${emp.status === "Cuti" ? "leave" : ""}`}>{emp.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {employees.slice(0, 4).length === 0 && <p className="empty">{t("notFound")}</p>}
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <div>
              <h3>{t("latestRequests")}</h3>
              <p>{t("requestsDesc")}</p>
            </div>
            <button className="text-button" onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "Pengajuan Cuti" }))}>{t("viewAll")}</button>
          </div>
          <div className="request-list">
            {requests.slice(0, 4).map((req) => (
              <div className="request-item" key={req.id}>
                <div className="request-person">
                  <div className="mini-avatar">{getInitials(req.name)}</div>
                  <div>
                    <strong>{req.name}</strong>
                    <small>{req.type} · {req.duration}</small>
                  </div>
                </div>
                <div className="request-meta">
                  <small>{req.date}</small>
                  <span className={`request-status ${req.status.toLowerCase().replace(" ", "")}`}>{req.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function KaryawanPage({ employees, setEmployees, search, setSearch, t }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", role: "", department: "", status: "Aktif", email: "", phone: "", joinDate: "" });

  const filtered = useMemo(() => {
    const kw = search.toLowerCase().trim();
    if (!kw) return employees;
    return employees.filter(e => Object.values(e).some(v => String(v).toLowerCase().includes(kw)));
  }, [employees, search]);

  const openAdd = () => {
    setEditId(null);
    setForm({ name: "", role: "", department: "", status: "Aktif", email: "", phone: "", joinDate: "" });
    setModalOpen(true);
  };

  const openEdit = (emp) => {
    setEditId(emp.id);
    setForm({ name: emp.name, role: emp.role, department: emp.department, status: emp.status, email: emp.email, phone: emp.phone, joinDate: emp.joinDate });
    setModalOpen(true);
  };

  const save = () => {
    if (!form.name.trim() || !form.role.trim() || !form.department.trim()) {
      alert(t("requiredFields"));
      return;
    }
    setEmployees(prev => {
      if (editId) {
        return prev.map(e => e.id === editId ? { ...e, ...form } : e);
      }
      return [...prev, { ...form, id: Date.now(), joinDate: new Date().toLocaleDateString("id-ID") }];
    });
    setModalOpen(false);
    setForm({ name: "", role: "", department: "", status: "Aktif", email: "", phone: "", joinDate: "" });
  };

  const deleteEmp = (id) => {
    if (!confirm(t("confirmDelete"))) return;
    setEmployees(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="page-content">
      <section className="page-heading">
        <div>
          <p className="date">{new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
          <h1>{t("karyawan")}</h1>
          <p>{t("employeeList")}</p>
        </div>
        <button className="add-button" onClick={openAdd}><Plus size={18} /> {t("addEmployee")}</button>
      </section>

      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat-card"><div className="stat-icon blue"><Users size={19} /></div><p>{t("totalKaryawan")}</p><h2>{employees.length}</h2></div>
        <div className="stat-card"><div className="stat-icon green"><CheckCircle2 size={19} /></div><p>{t("active")}</p><h2>{employees.filter(e => e.status === "Aktif").length}</h2></div>
        <div className="stat-card"><div className="stat-icon orange"><Plane size={19} /></div><p>{t("cuti")}</p><h2>{employees.filter(e => e.status === "Cuti").length}</h2></div>
      </div>

      <div className="panel">
        <div className="panel-heading">
          <div>
            <h3>{t("employeeList")}</h3>
            <p>{filtered.length} {t("karyawan").toLowerCase()} {t("notFound").includes("tidak") ? "ditemukan" : "found"}</p>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>{t("name")}</th>
                <th>{t("position")}</th>
                <th>{t("department")}</th>
                <th>{t("email")}</th>
                <th>{t("status")}</th>
                <th>{t("edit")} / {t("delete")}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <div className="employee-cell">
                      <div className="mini-avatar">{getInitials(emp.name)}</div>
                      <span>{emp.name}</span>
                    </div>
                  </td>
                  <td>{emp.role}</td>
                  <td>{emp.department}</td>
                  <td>{emp.email}</td>
                  <td><span className={`status-badge ${emp.status === "Cuti" ? "leave" : ""}`}>{emp.status}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit" onClick={() => openEdit(emp)} title={t("edit")}><Edit2 size={14} /></button>
                      <button className="action-btn delete" onClick={() => deleteEmp(emp.id)} title={t("delete")}><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <p className="empty">{t("notFound")}</p>}
        </div>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editId ? t("editEmployee") : t("addEmployee")}>
        <div className="form-grid">
          <div className="form-group">
            <label>{t("fullName")} *</label>
            <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder={t("fullName")} />
          </div>
          <div className="form-group">
            <label>{t("role")} *</label>
            <input value={form.role} onChange={e => setForm({...form, role: e.target.value})} placeholder={t("role")} />
          </div>
          <div className="form-group">
            <label>{t("department")} *</label>
            <input value={form.department} onChange={e => setForm({...form, department: e.target.value})} placeholder={t("department")} />
          </div>
          <div className="form-group">
            <label>{t("status")}</label>
            <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
              <option value="Aktif">{t("active")}</option>
              <option value="Cuti">{t("cuti")}</option>
              <option value="Izin">{t("izin")}</option>
              <option value="Sakit">{t("sick")}</option>
            </select>
          </div>
          <div className="form-group">
            <label>{t("email")}</label>
            <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@perusahaan.com" />
          </div>
          <div className="form-group">
            <label>{t("phone")}</label>
            <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="08xx-xxxx-xxxx" />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={() => setModalOpen(false)}>{t("cancel")}</button>
          <button className="btn-primary" onClick={save}><Save size={15} /> {editId ? t("save") : t("add")}</button>
        </div>
      </Modal>
    </div>
  );
}

function AbsensiPage({ employees }) {
  const [attendances, setAttendances] = useState([
    { id: 1, name: "Rizky Pratama", checkIn: "07:45", checkOut: "16:30", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
    { id: 2, name: "Salsabila Putri", checkIn: "08:00", checkOut: "16:25", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
    { id: 3, name: "Dimas Ardiansyah", checkIn: "07:30", checkOut: "17:00", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
    { id: 4, name: "Nabila Putri", checkIn: "09:15", checkOut: null, status: "Late", date: new Date().toLocaleDateString("id-ID") },
    { id: 5, name: "Fahri Setiawan", checkIn: "08:10", checkOut: "16:40", status: "Hadir", date: new Date().toLocaleDateString("id-ID") }
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [action, setAction] = useState("");

  const doAction = (empName, act) => {
    const now = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
    setAttendances(prev => {
      const existing = prev.find(a => a.name === empName && a.date === new Date().toLocaleDateString("id-ID"));
      if (existing) {
        if (act === "checkout" && existing.checkOut) {
          alert("Sudah check-out.");
          return prev;
        }
        return prev.map(a => a.name === empName && a.date === new Date().toLocaleDateString("id-ID") ? { ...a, checkOut: act === "checkout" ? now : null, status: act === "checkout" ? "Hadir" : a.status } : a);
      }
      if (act === "checkout") {
        alert("Belum check-in.");
        return prev;
      }
      return [...prev, { id: Date.now(), name: empName, checkIn: now, checkOut: null, status: "Hadir", date: new Date().toLocaleDateString("id-ID") }];
    });
    setAction("");
    setSelectedEmployee("");
  };

  return (
    <div className="page-content">
      <section className="page-heading">
        <div>
          <p className="date">{new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
          <h1>Absensi</h1>
          <p>Catat kehadiran dan pengelolaan absensi karyawan.</p>
        </div>
        <div className="clock-card">
          <span>Waktu sekarang</span>
          <strong>{new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</strong>
          <small>WITA</small>
        </div>
      </section>

      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div className="stat-card"><div className="stat-icon blue"><LogIn size={19} /></div><p>Check-in</p><h2>{attendances.filter(a => a.checkIn).length}</h2></div>
        <div className="stat-card"><div className="stat-icon green"><LogOut size={19} /></div><p>Check-out</p><h2>{attendances.filter(a => a.checkOut).length}</h2></div>
        <div className="stat-card"><div className="stat-icon orange"><Clock size={19} /></div><p>Late</p><h2>{attendances.filter(a => a.status === "Late").length}</h2></div>
        <div className="stat-card"><div className="stat-icon purple"><CheckCircle2 size={19} /></div><p>Hadir</p><h2>{attendances.filter(a => a.status === "Hadir").length}</h2></div>
      </div>

      <div className="panel">
        <div className="panel-heading">
          <div><h3>Absensi Hari Ini</h3><p>Catat atau lihat absensi</p></div>
        </div>
        <div className="absensi-action">
          <select value={selectedEmployee} onChange={e => setSelectedEmployee(e.target.value)}>
            <option value="">-- Pilih Karyawan --</option>
            {employees.filter(e => e.status !== "Cuti").map(emp => (
              <option key={emp.id} value={emp.name}>{emp.name}</option>
            ))}
          </select>
          <select value={action} onChange={e => setAction(e.target.value)}>
            <option value="">-- Aksi --</option>
            <option value="checkin">Check-in</option>
            <option value="checkout">Check-out</option>
          </select>
          <button className="btn-primary" onClick={() => selectedEmployee && action && doAction(selectedEmployee, action)} disabled={!selectedEmployee || !action}>
            <ArrowLeftRight size={15} /> Proses
          </button>
        </div>
        <div className="table-container" style={{ marginTop: 20 }}>
          <table>
            <thead><tr><th>Nama</th><th>Check-in</th><th>Check-out</th><th>Status</th><th>Tanggal</th></tr></thead>
            <tbody>
              {attendances.map(a => (
                <tr key={a.id}>
                  <td><div className="employee-cell"><div className="mini-avatar">{getInitials(a.name)}</div><span>{a.name}</span></div></td>
                  <td>{a.checkIn || "-"}</td>
                  <td>{a.checkOut || "-"}</td>
                  <td><span className={`status-badge ${a.status === "Late" ? "leave" : ""}`}>{a.status}</span></td>
                  <td>{a.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PengajuanCutiPage({ requests, setRequests }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", type: "Cuti", duration: "1 hari", reason: "" });
  const [filter, setFilter] = useState("Semua");

  const filtered = useMemo(() => {
    if (filter === "Semua") return requests;
    return requests.filter(r => r.status === filter);
  }, [requests, filter]);

  const save = () => {
    if (!form.name.trim()) { alert("Isi nama karyawan."); return; }
    setRequests(prev => [...prev, { id: Date.now(), ...form, date: new Date().toLocaleDateString("id-ID"), status: "Menunggu" }]);
    setModalOpen(false);
    setForm({ name: "", type: "Cuti", duration: "1 hari", reason: "" });
  };

  const updateStatus = (id, status) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  return (
    <div className="page-content">
      <section className="page-heading">
        <div>
          <p className="date">{new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
          <h1>Pengajuan Cuti</h1>
          <p>Kelola pengajuan cuti dan izin karyawan.</p>
        </div>
        <button className="add-button" onClick={() => { setForm({ name: "", type: "Cuti", duration: "1 hari", reason: "" }); setModalOpen(true); }}>
          <Plus size={18} /> Ajukan Cuti
        </button>
      </section>

      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat-card"><div className="stat-icon blue"><CalendarDays size={19} /></div><p>Total Pengajuan</p><h2>{requests.length}</h2></div>
        <div className="stat-card"><div className="stat-icon orange"><Clock size={19} /></div><p>Menunggu</p><h2>{requests.filter(r => r.status === "Menunggu").length}</h2></div>
        <div className="stat-card"><div className="stat-icon green"><CheckCircle2 size={19} /></div><p>Disetujui</p><h2>{requests.filter(r => r.status === "Disetujui").length}</h2></div>
      </div>

      <div className="panel">
        <div className="panel-heading">
          <div><h3>Daftar Pengajuan</h3><p>{filtered.length} pengajuan</p></div>
          <div className="filter-row">
            {["Semua", "Menunggu", "Disetujui", "Ditolak"].map(f => (
              <button key={f} className={`filter-chip ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
        <div className="request-list">
          {filtered.map(req => (
            <div className="request-card" key={req.id}>
              <div className="request-card-header">
                <div className="request-person">
                  <div className="mini-avatar">{getInitials(req.name)}</div>
                  <div>
                    <strong>{req.name}</strong>
                    <small>{req.type} · {req.duration}</small>
                  </div>
                </div>
                <span className={`request-status ${req.status.toLowerCase().replace(" ", "")}`}>{req.status}</span>
              </div>
              <div className="request-card-body">
                <div className="request-meta">
                  <small><Calendar size={12} /> {req.date}</small>
                  <small><span className={req.type === "Cuti" ? "dot orange-dot" : "dot blue-dot"} style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", marginRight: 4 }} />{req.reason}</small>
                </div>
              </div>
              {req.status === "Menunggu" && (
                <div className="request-card-actions">
                  <button className="btn-approve" onClick={() => updateStatus(req.id, "Disetujui")}><Check size={14} /> Setujui</button>
                  <button className="btn-reject" onClick={() => updateStatus(req.id, "Ditolak")}><XCircle size={14} /> Tolak</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Ajukan Cuti/izin">
        <div className="form-grid">
          <div className="form-group"><label>Nama Karyawan *</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Nama" /></div>
          <div className="form-group"><label>Jenis</label><select value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
            <option value="Cuti">Cuti</option><option value="Izin">Izin</option>
          </select></div>
          <div className="form-group"><label>Durasi</label><select value={form.duration} onChange={e => setForm({...form, duration: e.target.value})}>
            <option value="1 hari">1 hari</option><option value="2 hari">2 hari</option><option value="3 hari">3 hari</option><option value="Seminggu">Seminggu</option>
          </select></div>
          <div className="form-group"><label>Alasan</label><input value={form.reason} onChange={e => setForm({...form, reason: e.target.value})} placeholder="Alasan pengajuan" /></div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={() => setModalOpen(false)}>Batal</button>
          <button className="btn-primary" onClick={save}><Save size={15} /> Ajukan</button>
        </div>
      </Modal>
    </div>
  );
}

function LaporanPage({ employees, requests, attendances }) {
  const [type, setType] = useState("semua");
  const today = new Date().toLocaleDateString("id-ID");

  const hadirCount = employees.filter(e => e.status === "Aktif").length;
  const cutiCount = employees.filter(e => e.status === "Cuti").length;
  const izinCount = employees.length - hadirCount - cutiCount;

  const approvedRequests = requests.filter(r => r.status === "Disetujui").length;
  const pendingRequests = requests.filter(r => r.status === "Menunggu").length;
  const rejectedRequests = requests.filter(r => r.status === "Ditolak").length;

  const monthlyData = [
    { month: "Jan", absen: 380, cuti: 12, izin: 8 },
    { month: "Feb", absen: 395, cuti: 15, izin: 10 },
    { month: "Mar", absen: 400, cuti: 10, izin: 6 },
    { month: "Apr", absen: 385, cuti: 14, izin: 9 },
    { month: "Mei", absen: 410, cuti: 8, izin: 7 },
    { month: "Jun", absen: 405, cuti: 11, izin: 5 }
  ];

  return (
    <div className="page-content">
      <section className="page-heading">
        <div>
          <p className="date">{today}</p>
          <h1>Laporan</h1>
          <p>Ringkasan laporan data karyawan, absensi, dan pengajuan.</p>
        </div>
        <button className="filter-button"><Download size={15} /> Export</button>
      </section>

      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div className="stat-card"><div className="stat-icon blue"><Users size={19} /></div><p>Total Karyawan</p><h2>{employees.length}</h2></div>
        <div className="stat-card"><div className="stat-icon green"><CheckCircle2 size={19} /></div><p>Disetujui</p><h2>{approvedRequests}</h2></div>
        <div className="stat-card"><div className="stat-icon orange"><Clock size={19} /></div><p>Menunggu</p><h2>{pendingRequests}</h2></div>
        <div className="stat-card"><div className="stat-icon purple"><FileText size={19} /></div><p>Ditolak</p><h2>{rejectedRequests}</h2></div>
      </div>

      <div className="filter-row" style={{ marginBottom: 18 }}>
        {["semua", "absensi", "pengajuan", "karyawan"].map(t => (
          <button key={t} className={`filter-chip ${type === t ? "active" : ""}`} onClick={() => setType(t)}>
            {t === "semua" ? "Semua Laporan" : t === "absensi" ? "Absensi" : t === "pengajuan" ? "Pengajuan" : "Karyawan"}
          </button>
        ))}
      </div>

      {type === "semua" && (
        <>
          <div className="dashboard-grid">
            <div className="panel">
              <div className="panel-heading"><div><h3>Rekap Absensi</h3><p>Data 6 bulan terakhir</p></div></div>
              <AttendanceChart data={monthlyData} />
              <div className="legend">
                <span><i className="dot blue-dot" /> Hadir</span>
                <span><i className="dot orange-dot" /> Cuti</span>
                <span><i className="dot purple-dot" /> Izin</span>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading"><div><h3>Ringkasan</h3><p>Statistik kepegawaian</p></div></div>
              <div className="donut-wrapper">
                <div className="donut"><div><strong>{employees.length}</strong><span>Total</span></div></div>
                <div className="status-list">
                  <div><span><i className="dot blue-dot" /> Aktif</span><strong>{hadirCount}</strong></div>
                  <div><span><i className="dot orange-dot" /> Cuti</span><strong>{cutiCount}</strong></div>
                  <div><span><i className="dot purple-dot" /> Izin/Sakit</span><strong>{izinCount}</strong></div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading"><div><h3>Detail Pengajuan</h3><p>Ringkasan semua pengajuan</p></div></div>
            <div className="table-container">
              <table>
                <thead><tr><th>Nama</th><th>Jenis</th><th>Durasi</th><th>Tanggal</th><th>Status</th><th>Alasan</th></tr></thead>
                <tbody>
                  {requests.map(r => (
                    <tr key={r.id}>
                      <td><div className="employee-cell"><div className="mini-avatar">{getInitials(r.name)}</div><span>{r.name}</span></div></td>
                      <td>{r.type}</td><td>{r.duration}</td><td>{r.date}</td>
                      <td><span className={`request-status ${r.status.toLowerCase().replace(" ", "")}`}>{r.status}</span></td>
                      <td>{r.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {type === "absensi" && (
        <div className="panel">
          <div className="panel-heading"><div><h3>Data Absensi</h3><p>Semua catatan absensi</p></div></div>
          <div className="table-container">
            <table>
              <thead><tr><th>Nama</th><th>Check-in</th><th>Check-out</th><th>Status</th><th>Tanggal</th></tr></thead>
              <tbody>
                {attendances.map(a => (
                  <tr key={a.id}>
                    <td><div className="employee-cell"><div className="mini-avatar">{getInitials(a.name)}</div><span>{a.name}</span></div></td>
                    <td>{a.checkIn || "-"}</td><td>{a.checkOut || "-"}</td>
                    <td><span className={`status-badge ${a.status === "Late" ? "leave" : ""}`}>{a.status}</span></td><td>{a.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {type === "pengajuan" && (
        <div className="panel">
          <div className="panel-heading"><div><h3>Data Pengajuan</h3><p>Semua pengajuan cuti dan izin</p></div></div>
          <div className="table-container">
            <table>
              <thead><tr><th>Nama</th><th>Jenis</th><th>Durasi</th><th>Tanggal</th><th>Status</th><th>Alasan</th></tr></thead>
              <tbody>
                {requests.map(r => (
                  <tr key={r.id}>
                    <td><div className="employee-cell"><div className="mini-avatar">{getInitials(r.name)}</div><span>{r.name}</span></div></td>
                    <td>{r.type}</td><td>{r.duration}</td><td>{r.date}</td>
                    <td><span className={`request-status ${r.status.toLowerCase().replace(" ", "")}`}>{r.status}</span></td>
                    <td>{r.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {type === "karyawan" && (
        <div className="panel">
          <div className="panel-heading"><div><h3>Data Karyawan</h3><p>Semua karyawan dalam sistem</p></div></div>
          <div className="table-container">
            <table>
              <thead><tr><th>Nama</th><th>Posisi</th><th>Departemen</th><th>Status</th><th>Email</th></tr></thead>
              <tbody>
                {employees.map(e => (
                  <tr key={e.id}>
                    <td><div className="employee-cell"><div className="mini-avatar">{getInitials(e.name)}</div><span>{e.name}</span></div></td>
                    <td>{e.role}</td><td>{e.department}</td>
                    <td><span className={`status-badge ${e.status === "Cuti" ? "leave" : ""}`}>{e.status}</span></td>
                    <td>{e.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function PengaturanPage({ profile, setProfile, system, setSystem }) {
  const [activeTab, setActiveTab] = useState("profil");
  const [saved, setSaved] = useState(false);
  const [company, setCompany] = useState(() => {
    const stored = localStorage.getItem("workhubCompany");
    return stored ? JSON.parse(stored) : { name: "WorkHub", address: "Jakarta, Indonesia", timezone: "WIB" };
  });

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  React.useEffect(() => {
    localStorage.setItem("workhubCompany", JSON.stringify(company));
  }, [company]);

  React.useEffect(() => {
    localStorage.setItem("workhubSystem", JSON.stringify(system));
    if (system.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [system]);

  return (
    <div className="page-content">
      <section className="page-heading">
        <div>
          <p className="date">{new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
          <h1>Pengaturan</h1>
          <p>Kelola profil, akun, dan preferensi sistem.</p>
        </div>
      </section>

      <div className="settings-layout">
        <div className="settings-sidebar">
          {[
            { key: "profil", icon: UserRound, label: "Profil" },
            { key: "akun", icon: Shield, label: "Keamanan" },
            { key: "notifikasi", icon: Bell, label: "Notifikasi" },
            { key: "perusahaan", icon: Building2, label: "Perusahaan" },
            { key: "sistem", icon: Settings, label: "Sistem" }
          ].map(tab => (
            <button key={tab.key} className={`settings-tab ${activeTab === tab.key ? "active" : ""}`} onClick={() => setActiveTab(tab.key)}>
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </div>

        <div className="settings-body">
          {activeTab === "profil" && (
            <div className="panel">
              <div className="panel-heading"><div><h3>Profil Pengguna</h3><p>Update informasi diri Anda</p></div></div>
              <div className="form-grid">
                <div className="form-group"><label>Nama Lengkap</label><input value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} /></div>
                <div className="form-group"><label>Jabatan</label><input value={profile.role} onChange={e => setProfile({...profile, role: e.target.value})} /></div>
                <div className="form-group"><label>Email</label><input type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} /></div>
                <div className="form-group"><label>Zona Waktu</label><select value={profile.timeZone} onChange={e => setProfile({...profile, timeZone: e.target.value})}><option>WITA</option><option>WIB</option><option>WIT</option></select></div>
              </div>
              <div className="modal-footer">
                <button className="btn-secondary">Reset</button>
                <button className="btn-primary" onClick={handleSave}><Save size={15} /> Simpan</button>
              </div>
              {saved && <div className="success-msg"><Check size={15} /> Berhasil disimpan!</div>}
            </div>
          )}

          {activeTab === "akun" && (
            <div className="panel">
              <div className="panel-heading"><div><h3>Keamanan Akun</h3><p>Kelola password dan otentikasi</p></div></div>
              <div className="form-grid">
                <div className="form-group"><label>Password Lama</label><input type="password" placeholder="********" /></div>
                <div className="form-group"><label>Password Baru</label><input type="password" placeholder="********" /></div>
                <div className="form-group"><label>Konfirmasi Password</label><input type="password" placeholder="********" /></div>
              </div>
              <div className="modal-footer">
                <button className="btn-primary" onClick={handleSave}><Key size={15} /> Update Password</button>
              </div>
              <div style={{ marginTop: 20 }}>
                <h4 style={{ marginBottom: 12 }}>Otentikasi Dua Faktor</h4>
                <div className="toggle-row">
                  <div><strong>Email Verification</strong><small>Verifikasi akun via email</small></div>
                  <label className="toggle"><input type="checkbox" defaultChecked /><span className="toggle-slider" /></label>
                </div>
                <div className="toggle-row">
                  <div><strong>2FA SMS</strong><small>Verifikasi via pesan SMS</small></div>
                  <label className="toggle"><input type="checkbox" /><span className="toggle-slider" /></label>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifikasi" && (
            <div className="panel">
              <div className="panel-heading"><div><h3>Pengaturan Notifikasi</h3><p>Pilih notifikasi yang ingin diterima</p></div></div>
              {[
                { title: "Notifikasi Cuti", desc: "Pengingat pengajuan cuti", checked: true },
                { title: "Notifikasi Absen", desc: "Reminder check-in/out", checked: true },
                { title: "Notifikasi Pengajuan", desc: "Persetujuan cuti/izin", checked: true },
                { title: "Notifikasi Laporan", desc: "Laporan mingguan", checked: false },
                { title: "Notifikasi Marketing", desc: "Promo dan update", checked: false }
              ].map((item, i) => (
                <div className="toggle-row" key={i}>
                  <div><strong>{item.title}</strong><small>{item.desc}</small></div>
                  <label className="toggle"><input type="checkbox" defaultChecked={item.checked} /><span className="toggle-slider" /></label>
                </div>
              ))}
              <div className="modal-footer" style={{ marginTop: 18 }}>
                <button className="btn-primary" onClick={handleSave}><Save size={15} /> Simpan</button>
              </div>
            </div>
          )}

          {activeTab === "perusahaan" && (
            <div className="panel">
              <div className="panel-heading"><div><h3>Pengaturan Perusahaan</h3><p>Informasi perusahaan</p></div></div>
              <div className="form-grid">
                <div className="form-group"><label>Nama Perusahaan</label><input value={company.name} onChange={e => setCompany({...company, name: e.target.value})} /></div>
                <div className="form-group"><label>Alamat</label><input value={company.address} onChange={e => setCompany({...company, address: e.target.value})} placeholder={<><MapPin size={14} /> Masukkan alamat</>} /></div>
                <div className="form-group"><label>Zona Waktu</label><select value={company.timezone} onChange={e => setCompany({...company, timezone: e.target.value})}><option>WIB</option><option>WITA</option><option>WIT</option></select></div>
                <div className="form-group"><label>Logo Perusahaan</label><div className="upload-area"><Upload size={24} /><span>Klik untuk upload</span></div></div>
              </div>
              <div className="modal-footer">
                <button className="btn-primary" onClick={handleSave}><Save size={15} /> Simpan</button>
              </div>
            </div>
          )}

          {activeTab === "sistem" && (
            <div className="panel">
              <div className="panel-heading"><div><h3>Pengaturan Sistem</h3><p>Konfigurasi sistem secara keseluruhan</p></div></div>
              <div style={{ display: "grid", gap: 16 }}>
                <div className="toggle-row">
                  <div><strong>Mode Gelap</strong><small>Aktifkan tema gelap</small></div>
                  <label className="toggle"><input type="checkbox" checked={system.darkMode} onChange={e => setSystem({...system, darkMode: e.target.checked})} /><span className="toggle-slider" /></label>
                </div>
                <div className="toggle-row">
                  <div><strong>Auto Refresh</strong><small>Refresh data otomatis</small></div>
                  <label className="toggle"><input type="checkbox" checked={system.autoRefresh} onChange={e => setSystem({...system, autoRefresh: e.target.checked})} /><span className="toggle-slider" /></label>
                </div>
                <div className="toggle-row">
                  <div><strong>Export Otomatis</strong><small>Export laporan mingguan</small></div>
                  <label className="toggle"><input type="checkbox" checked={system.autoExport} onChange={e => setSystem({...system, autoExport: e.target.checked})} /><span className="toggle-slider" /></label>
                </div>
                <div className="form-group" style={{ marginTop: 8 }}>
                  <label>Bahasa</label>
                  <select value={system.language} onChange={e => setSystem({...system, language: e.target.value})}>
                    <option value="Indonesia">Indonesia</option>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer" style={{ marginTop: 18 }}>
                <button className="btn-primary" onClick={handleSave}><RefreshCw size={15} /> Terapkan</button>
              </div>
              <div style={{ marginTop: 20, padding: "16px", background: "rgba(228, 76, 76, 0.1)", borderRadius: 9, border: "1px solid rgba(228, 76, 76, 0.3)" }}>
                <h4 style={{ color: "#e44c4c", marginBottom: 6 }}>⚠ Area Berbahaya</h4>
                <button className="btn-reject" style={{ marginTop: 8 }} onClick={() => { 
                  if (confirm("Yakin hapus SEMUA data? Aksi ini tidak bisa dibatalkan!")) {
                    localStorage.clear();
                    setEmployees(initialEmployees);
                    setRequests(initialRequests);
                    setAttendances([
                      { id: 1, name: "Rizky Pratama", checkIn: "07:45", checkOut: "16:30", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
                      { id: 2, name: "Salsabila Putri", checkIn: "08:00", checkOut: "16:25", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
                      { id: 3, name: "Dimas Ardiansyah", checkIn: "07:30", checkOut: "17:00", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
                      { id: 4, name: "Nabila Putri", checkIn: "09:15", checkOut: null, status: "Late", date: new Date().toLocaleDateString("id-ID") }
                    ]);
                    setProfile({ name: "Adit", role: "Administrator", email: "adit@workhub.com", timeZone: "WITA" });
                    setCompany({ name: "WorkHub", address: "Jakarta, Indonesia", timezone: "WIB" });
                    setSystem({ darkMode: false, autoRefresh: true, autoExport: false, language: "Indonesia" });
                    setToast("Semua data dihapus & direset ke default");
                  }
                }}><Trash2 size={14} /> Hapus Semua Data</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem("workhubEmployees");
    return stored ? JSON.parse(stored) : initialEmployees;
  });
  const [requests, setRequests] = useState(() => {
    const stored = localStorage.getItem("workhubRequests");
    return stored ? JSON.parse(stored) : initialRequests;
  });
  const [attendances, setAttendances] = useState(() => {
    const stored = localStorage.getItem("workhubAttendances");
    return stored ? JSON.parse(stored) : [
      { id: 1, name: "Rizky Pratama", checkIn: "07:45", checkOut: "16:30", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
      { id: 2, name: "Salsabila Putri", checkIn: "08:00", checkOut: "16:25", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
      { id: 3, name: "Dimas Ardiansyah", checkIn: "07:30", checkOut: "17:00", status: "Hadir", date: new Date().toLocaleDateString("id-ID") },
      { id: 4, name: "Nabila Putri", checkIn: "09:15", checkOut: null, status: "Late", date: new Date().toLocaleDateString("id-ID") }
    ];
  });

  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem("workhubProfile");
    return stored ? JSON.parse(stored) : { name: "Adit", role: "Administrator", email: "adit@workhub.com", timeZone: "WITA" };
  });

  React.useEffect(() => {
    localStorage.setItem("workhubProfile", JSON.stringify(profile));
  }, [profile]);

  const [company, setCompany] = useState(() => {
    const stored = localStorage.getItem("workhubCompany");
    return stored ? JSON.parse(stored) : { name: "WorkHub", address: "Jakarta, Indonesia", timezone: "WIB" };
  });

  const [system, setSystem] = useState(() => {
    const stored = localStorage.getItem("workhubSystem");
    return stored ? JSON.parse(stored) : { darkMode: false, autoRefresh: true, autoExport: false, language: "Indonesia" };
  });

  const t = (key) => {
    const lang = system?.language || "Indonesia";
    return translations[lang]?.[key] || translations["Indonesia"]?.[key] || key;
  };

  const today = new Intl.DateTimeFormat("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date());

  const handleNavigate = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  React.useEffect(() => {
    const handler = (e) => handleNavigate(e.detail);
    window.addEventListener("navigate", handler);
    return () => window.removeEventListener("navigate", handler);
  }, []);

  React.useEffect(() => {
    setNotifications([
      { id: 1, type: "cuti", title: "Pengajuan cuti diterima", message: "Permintaan cuti 3 hari Dewi Lestari sudah disetujui", time: "12 menit lalu", read: false },
      { id: 2, type: "izin", title: "Absensi terlambat", message: "Rizky Pratama check-in pukul 08:45", time: "18 menit lalu", read: false },
      { id: 3, type: "system", title: "System Update", message: "Versi aplikasi diperbarui ke v1.2.0", time: "1 jam lalu", read: true }
    ]);
  }, []);

  const toggleNotif = () => setOpenNotif(prev => !prev);
  const toggleProfile = () => setOpenProfile(prev => !prev);

  React.useEffect(() => {
    const handleClickOutside = () => {
      setOpenNotif(false);
      setOpenProfile(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard": return <DashboardPage employees={employees} requests={requests} search={search} setSearch={setSearch} today={today} t={t} />;
      case "Karyawan": return <KaryawanPage employees={employees} setEmployees={setEmployees} search={search} setSearch={setSearch} t={t} />;
      case "Absensi": return <AbsensiPage employees={employees} t={t} />;
      case "Pengajuan Cuti": return <PengajuanCutiPage requests={requests} setRequests={setRequests} t={t} />;
      case "Laporan": return <LaporanPage employees={employees} requests={requests} attendances={attendances} t={t} />;
      case "Pengaturan": return <PengaturanPage profile={profile} setProfile={setProfile} t={t} system={system} setSystem={setSystem} />;
      default: return null;
    }
  };

  return (
    <div className="app">
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-logo">W</div>
          <span>WorkHub</span>
          <button className="close-sidebar" onClick={() => setSidebarOpen(false)}><X size={20} /></button>
        </div>
        <nav className="navigation">
          {menuItems.map(({ label, icon: Icon }) => (
            <button key={label} className={`nav-item ${activePage === label ? "active" : ""}`} onClick={() => handleNavigate(label)}>
              <Icon size={19} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-message">
          <ActivityIcon size={25} />
          <p>Kerja hari ini, untuk masa depan yang lebih baik.</p>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setSidebarOpen(true)}><Menu size={22} /></button>
          <div className="search-box">
            <Search size={18} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari karyawan..." />
          </div>
          <div className="topbar-right">
            <div className="dropdown-wrapper" onClick={(e) => e.stopPropagation()}>
              <button className="notification" onClick={toggleNotif}><Bell size={19} /><span>{notifications.filter(n => !n.read).length}</span></button>
              {openNotif && (
                <div className="notif-dropdown">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`notif-item ${notif.read ? "read" : "unread"}`}>
                      <div className="notif-icon">
                        {notif.type === "cuti" ? (
<CalendarDays size={14} />
) : notif.type === "izin" ? (
<Clock size={14} />
) : notif.type === "system" ? (
<Settings size={14} />
) : (
<Bell size={14} />
)}
                      </div>
                      <div className="notif-content">
                        <strong>{notif.title}</strong>
                        <small>{notif.message}</small>
                      </div>
                      <small>{notif.time}</small>
                    </div>
                  ))}
                  {notifications.filter(n => !n.read).length === 0 && <p className="empty">Semua dibaca</p>}
                </div>
              )}
            </div>
            <div className="dropdown-wrapper" onClick={(e) => e.stopPropagation()}>
              <button className="profile" onClick={toggleProfile}>
                <div className="avatar">{profile.name[0]}</div>
                <div><strong>{profile.name}</strong><small>{profile.role}</small></div>
                <ChevronDown size={16} />
              </button>
              {openProfile && (
                <div className="profile-dropdown">
                  <div className="profile-header">
                    <div className="avatar">{profile.name[0]}</div>
                    <div>
                      <strong>{profile.name}</strong>
                      <small>{profile.role}</small>
                    </div>
                  </div>
                  <button className="profile-item" onClick={() => { setActivePage("Pengaturan"); setOpenProfile(false); }}>
                    <UserRound size={16} /> Profil
                  </button>
                  <button className="profile-item" onClick={() => { setActivePage("Pengaturan"); setOpenProfile(false); }}>
                    <Settings size={16} /> Pengaturan
                  </button>
                  <hr className="profile-divider" />
                  <button className="profile-item logout" onClick={() => { setToast("Logged out (demo)"); setOpenProfile(false); }}>
                    <LogOut size={16} /> Keluar
                  </button>
                </div>
              )}
            </div>
            <div className="admin-badge">Admin</div>
          </div>
        </header>

        <div className="content">{renderPage()}</div>
      </main>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
