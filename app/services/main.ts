export const dataStack = [
	{ index: 0, image: '/brand/figma.webp', name: 'Figma' },
	{ index: 1, image: '/brand/html.webp', name: 'HTML' },
	{ index: 2, image: '/brand/css.webp', name: 'CSS' },
	{ index: 3, image: '/brand/javascript.webp', name: 'Javascript' },
	{ index: 4, image: '/brand/php.webp', name: 'PHP' },
	{ index: 5, image: '/brand/python.webp', name: 'Python' },
	{ index: 6, image: '/brand/bootstrap.webp', name: 'Bootstrap' },
	{ index: 7, image: '/brand/tailwind.webp', name: 'TailwindCSS' },
	{ index: 8, image: '/brand/reactjs.webp', name: 'React' },
	{ index: 9, image: '/brand/material-ui.webp', name: 'Material UI' },
	{ index: 10, image: '/brand/shadcn.webp', name: 'Shadcn' },
	{ index: 11, image: '/brand/chakraui.webp', name: 'Chakra UI' },
	{ index: 12, image: '/brand/expressjs.webp', name: 'Express' },
	{ index: 13, image: '/brand/nextjs.webp', name: 'NEXT' },
	{ index: 14, image: '/brand/codeigniter.webp', name: 'Codeigniter' },
	{ index: 15, image: '/brand/laravel.webp', name: 'Laravel' },
	{ index: 16, image: '/brand/django.webp', name: 'Django' },
	{ index: 17, image: '/brand/mysql.webp', name: 'MySQL' },
	{ index: 18, image: '/brand/mongodb.webp', name: 'MongoDB' },
	{ index: 19, image: '/brand/docker.webp', name: 'Docker' },
	{ index: 20, image: '/brand/apache.webp', name: 'Apache' },
	{ index: 21, image: '/brand/nginx.webp', name: 'Nginx' },
	{ index: 22, image: '/brand/nodejs.webp', name: 'NodeJS' },
	{ index: 23, image: '/brand/vite.webp', name: 'Vite' },
	{ index: 24, image: '/brand/linux.webp', name: 'Favorite OS' },
]

export const dataLearning = [
	{ image: '/learning/golang.webp', name: 'Golang', desc: "Go. Golang adalah bahasa pemrograman yang dirancang oleh Google dan pertama kali diluncurkan pada tahun 2009. Go menawarkan kinerja tinggi dan dukungan kuat untuk concurrency melalui goroutines memungkinkan pengembangan aplikasi yang efisien. fitur canggihnya memenuhi kebutuhan pengembang dengan ekosistem pustaka yang kaya dan dukungan komunitas yang luas. Golang ideal untuk pengembangan aplikasi web, microservices, dan sistem terdistribusi." },
	{ image: '/learning/gin.webp', name: 'Gin Web Freamework', desc: "Gin merupakan framework web yang terkenal dan ringan untuk Golang. Gin dianggap lebih unggul dibandingkan framework lain seperti Echo, Beego, dan Fiber karena menawarkan kinerja tinggi, serta sintaks yang sederhana yang memudahkan pengembang baru. Framework ini dirancang khusus untuk pengembangan RESTful API, dengan fitur routing, validasi dan middleware yang fleksibel, Gin menjadi pilihan populer untuk pengembang yang membutuhkan solusi cepat dalam pengembangan aplikasi web." }
]

export const dataCertificate = [
	{ image: '/certificates/certificate-1.webp', link: 'https://www.dicoding.com/certificates/07Z6L0Y4YPQR' },
	{ image: '/certificates/certificate-2.webp', link: 'https://www.dicoding.com/certificates/07Z6L0Y4YPQR' },
	{ image: '/certificates/certificate-3.webp', link: 'https://www.dicoding.com/certificates/07Z6L0Y4YPQR' },
	{ image: '/certificates/certificate-4.webp', link: 'https://www.dicoding.com/certificates/07Z6L0Y4YPQR' },
	{ image: '/certificates/certificate-5.webp', link: 'https://www.credly.com/badges/3b03e292-2de8-4a9c-b89f-a3599a8e69b4' },
]

export const dataContact = [
	{
		image: '/icon/email.webp',
		name: 'Email',
		link: 'mailto:mail.khusniridho@gmail.com',
	},
	{
		image: '/icon/instagram.webp',
		name: 'Instagram',
		link: 'https://www.instagram.com/_async.await/',
	},
	{
		image: '/icon/linkedin.webp',
		name: 'LinkedIn',
		link: 'http://linkedin.com/in/khusni-ridho',
	}
]

export const dataWorks = [
	{
		slug: 'kemenag-kota-malang',
		name: 'Kemenag Kota Malang',
		image: '/project/kemenag_1.webp',
		desc: 'Proyek ini bertujuan untuk membuat platform online yang memudahkan akses informasi tentang kegiatan, layanan, dan sejarah Kementerian Agama (Kemenag) Kota Malang. Dengan desain yang user-friendly, website ini diharapkan dapat meningkatkan transparansi, memudahkan komunikasi, serta memperkenalkan berbagai program dan inisiatif yang ada di Kemenag Kota Malang kepada masyarakat.',
		detail: {
			category: 'website development',
			stack: [dataStack[13], dataStack[8], dataStack[6], dataStack[3], dataStack[22]],
			images: [
				'/project/kemenag_2.webp',
				'/project/kemenag_3.webp',
				'/project/kemenag_4.webp',
				'/project/kemenag_5.webp',
				'/project/kemenag_6.webp',
				'/project/kemenag_7.webp',
				'/project/kemenag_8.webp',
				'/project/kemenag_8.webp',
				'/project/kemenag_9.webp'
			]
		}
	},
	{
		slug: 'template-dashboard',
		name: 'Template Dashboard',
		image: '/project/admin_template_1.webp',
		desc: 'Admin Hus adalah proyek pribadi open source berupa template dashboard yang dikembangkan menggunakan teknologi dasar HTML, CSS, dan JavaScript. Template ini didesain untuk menyediakan fondasi user interface (UI) yang bersih, modular, dan mudah dimodifikasi bagi developer yang ingin membangun sistem panel admin mereka sendiri tanpa perlu framework kompleks',
		detail: {
			category: 'website development',
			stack: [dataStack[1], dataStack[2], dataStack[3], dataStack[6]],
			images: [
				'/project/admin_template_2.webp',
				'/project/admin_template_3.webp',
			]
		}

	},
	{
		slug: 'arsip-surat',
		name: 'Arsip Surat',
		image: '/project/arsip_1.webp',
		desc: 'Pada proyek Aplikasi Arsip ini, saya bertanggung jawab penuh mulai dari desain antarmuka hingga implementasi aplikasi yang selesai. Saya mendesain tampilan yang modern dan user-friendly, serta memastikan fungsionalitas aplikasi yang meliputi pengelolaan arsip, jenis akta, arsip surat, dan penerima surat berjalan dengan lancar. Aplikasi ini bertujuan untuk mempermudah pengelolaan dokumen hukum secara digital, dengan memberikan pengalaman pengguna yang efisien dan mudah diakses.',
		detail: {
			category: 'website development',
			stack: [dataStack[0], dataStack[8], dataStack[9], dataStack[12], dataStack[3], dataStack[17]],
			images: [
				'/project/arsip_2.webp',
				'/project/arsip_3.webp',
				'/project/arsip_4.webp'
			]
		}
	},
	{
		slug: 'pt-indonesia-teknologi-preneur',
		name: 'PT. Indonesia Teknologi Preneur',
		image: '/project/indotechpren_1.webp',
		desc: 'Indotechpren adalah perusahaan yang berfokus pada bidang teknologi informasi. Tugas saya di sini adalah mendesain ulang tampilan website agar lebih modern dengan mengusung tema teknologi. Saya berhasil menyelesaikan tugas ini dengan baik, dan klien pun merasa puas dengan hasil akhirnyaIndotechpren adalah perusahaan yang berfokus pada bidang teknologi informasi. Tugas saya di sini adalah mendesain ulang tampilan website agar lebih modern dengan mengusung tema teknologi. Saya berhasil menyelesaikan tugas ini dengan baik, dan klien pun merasa puas dengan hasil akhirnya.',
		detail: {
			category: 'website development',
			stack: [dataStack[1], dataStack[2], dataStack[3], dataStack[6]],
			images: [
				'/project/indotechpren_2.webp',
				'/project/indotechpren_3.webp',
				'/project/indotechpren_4.webp',
				'/project/indotechpren_5.webp',
				'/project/indotechpren_6.webp',
				'/project/indotechpren_7.webp'
			]
		}
	},
	{
		slug: 'capsulein',
		name: 'CapsuleIn',
		image: '/project/capsuleinn_1.webp',
		desc: 'CapsuleInn adalah perusahaan yang bergerak di sektor perhotelan, menyediakan platform untuk memudahkan proses pemesanan hotel. Pada proyek ini, saya bertanggung jawab untuk merancang desain website company profile, mengimplementasikan desain tersebut ke dalam HTML, serta merancang tampilan aplikasi mobile. Aplikasi CapsuleInn kini tersedia untuk diunduh di Google Play Store dan Apple App Store. Untuk melihat lebih detail tentang perusahaan ini, Anda dapat mengunjungi website melalui tombol "Lihat Website.CapsuleInn adalah perusahaan yang bergerak di sektor perhotelan, menyediakan platform untuk memudahkan proses pemesanan hotel. Pada proyek ini, saya bertanggung jawab untuk merancang desain website company profile, mengimplementasikan desain tersebut ke dalam HTML, serta merancang tampilan aplikasi mobile. Aplikasi CapsuleInn kini tersedia untuk diunduh di Google Play Store dan Apple App Store. Untuk melihat lebih detail tentang perusahaan ini, Anda dapat mengunjungi website melalui tombol "Lihat Website.',
		detail: {
			category: 'website development',
			stack: [dataStack[1], dataStack[2], dataStack[3], dataStack[6]],
			images: [
				'/project/capsuleinn_2.webp',
				'/project/capsuleinn_3.webp',
				'/project/capsuleinn_4.webp',
				'/project/capsuleinn_5.webp',
				'/project/capsuleinn_6.webp',
				'/project/capsuleinn_7.webp',
				'/project/capsuleinn_8.webp',
				'/project/capsuleinn_8.webp',
				'/project/capsuleinn_9.webp',
				'/project/capsuleinn_10.webp',
				'/project/capsuleinn_11.webp',
				'/project/capsuleinn_12.webp',
				'/project/capsuleinn_13.webp',
				'/project/capsuleinn_14.webp',
				'/project/capsuleinn_15.webp',
				'/project/capsuleinn_16.webp',
				'/project/capsuleinn_17.webp'
			]
		}
	},
	{
		slug: 'ponpes-darussalam-darussalam-kamal',
		name: 'Ponpes Darussalam Darussalam Kamal',
		image: '/project/ponpes_1.webp',
		desc: 'Website Resmi Pondok Pesantren Darussalam Kamal (PPDSK). Kami merancang solusi mandiri untuk kebutuhan PPDSK, lengkap dengan Sistem Pendaftaran Online dan Pengolahan Data Siswa (Sisfo) yang terintegrasi. Tampilan modern Salaf & Modern.',
		detail: {
			category: 'website development',
			stack: [dataStack[14], dataStack[1], dataStack[2], dataStack[3], dataStack[6], dataStack[4], dataStack[17], dataStack[20]],
			images: [
				'/project/ponpes_2.webp',
				'/project/ponpes_3.webp',
				'/project/ponpes_4.webp',
				'/project/ponpes_5.webp',
				'/project/ponpes_6.webp',
				'/project/ponpes_7.webp',
				'/project/ponpes_8.webp',
				'/project/ponpes_8.webp',
				'/project/ponpes_9.webp',
				'/project/ponpes_10.webp',
				'/project/ponpes_11.webp',
				'/project/ponpes_12.webp',
				'/project/ponpes_13.webp',
				'/project/ponpes_14.webp'
			]
		}
	},
	{
		slug: 'custom-pernikahan',
		name: 'Custom Pernikahan',
		image: '/project/resapi_1.webp',
		desc: 'Saya merancang dan mengembangkan website profile Resepsi Online untuk memasarkan jasa pembuatan undangan pernikahan digital kustom. Solusi ini hadir dengan fokus user experience yang optimal, menawarkan lebih dari 500+ tema elegan,',
		detail: {
			category: 'website development',
			stack: [dataStack[1], dataStack[2], dataStack[3], dataStack[6]],
			images: [
				'/project/resapi_2.webp',
				'/project/resapi_3.webp'
			]
		}
	},
	{
		slug: 'green-eat',
		name: 'Green Eat',
		image: '/project/green_eat_1.webp',
		desc: 'Green Eat adalah aplikasi web pemesanan makanan yang dirancang untuk mendukung pengguna dalam menjaga pola makan dengan menyajikan solusi nutrisi. Aplikasi ini dilengkapi dengan fitur Kalkulator Gizi untuk memonitor asupan, memberikan rekomendasi makanan yang spesifik berdasarkan jenis diet pengguna, serta fitur pemesanan langsung untuk pengalaman.',
		detail: {
			category: 'website development',
			stack: [dataStack[8], dataStack[1], dataStack[2], dataStack[6], dataStack[12], dataStack[3], dataStack[18], dataStack[22]],
			images: [
				'/project/green_eat_2.webp'
			]
		}
	},
	{
		slug: 'arsya',
		name: 'Arsya',
		image: '/project/arsha_1.webp',
		desc: 'Proyek Arsya berfokus pada front-end modification (modifikasi tampilan) dari website yang sudah ada. Kontribusi utama saya meliputi implementasi elemen dinamis, yaitu penambahan slider interaktif pada bagian header, pembuatan cection Berita',
		detail: {
			category: 'website development',
			stack: [dataStack[1], dataStack[2], dataStack[3], dataStack[6]],
			images: [
				'/project/arsha_2.webp',
				'/project/arsha_3.webp',
			]
		}
	},
	{
		slug: 'undangan-pernikahan-ii',
		name: 'Undangan Pernikahan II',
		image: '/project/undangan_1.webp',
		desc: 'Proyek ini adalah pengembangan website undangan pernikahan digital yang sepenuhnya didasarkan pada desain grafis yang disediakan oleh klien. Fokus utama adalah pada presisi implementasi front-end untuk memastikan setiap detail visual (tipografi, palet warna, dan tata letak) pada desain statis dapat diterjemahkan dengan sempurna menjadi tampilan web elegan, dan berfungsi penuh.',
		detail: {
			category: 'website development',
			stack: [dataStack[1], dataStack[2], dataStack[3], dataStack[7]],
			images: [
				'/project/arsip_2.webp',
				'/project/arsip_3.webp',
				'/project/arsip_4.webp',
				'/project/arsip_5.webp',
				'/project/arsip_6.webp'
			]
		}
	},
	{
		slug: 'undangan-pernikahan-i',
		name: 'Undangan Pernikahan I',
		image: '/project/pernikahan_1.webp',
		desc: 'Proyek ini adalah studi kasus desain dan pengembangan pembuatan undangan pernikahan digital. Saya bertanggung jawab penuh, mulai dari konseptualisasi desain orisinal hingga coding front-end. Fokus utamanya adalah menciptakan pengalaman visual yang unik dan menarik, sekaligus menjamin fungsionalitas seperti RSVP dan penghitung mundur.',
		detail: {
			category: 'website development',
			stack: [dataStack[1], dataStack[2], dataStack[3], dataStack[6]],
			images: [
				'/project/pernikahan_2.webp',
				'/project/pernikahan_3.webp',
				'/project/pernikahan_4.webp',
			]
		}
	},
	{
		slug: 'desain-mobile-profil',
		name: 'Desain Mobile Profil',
		image: '/project/mobileporto_1.webp',
		desc: 'Proyek ini adalah konseptualisasi dan perancangan desain full-page website portofolio pribadi (Husni Design) yang bertujuan menampilkan layanan dan proyek desain digital. Fokus desain terletak pada visual yang bersih, penggunaan ilustrasi untuk menarik perhatian, dan hirarki informasi yang jelas (Home, About, Galery), memastikan pengunjung dapat langsung memahami kompetensi dengan jelas.',
		detail: {
			category: 'desain UI',
			stack: [dataStack[0]],
			images: [
				'/project/mobileporto_2.webp',
				'/project/mobileporto_3.webp',
				'/project/mobileporto_4.webp',
				'/project/mobileporto_5.webp',
			]
		}
	},
	{
		slug: 'desain-website-profil',
		name: 'Desain Website Profil',
		image: '/project/porto_1.webp',
		desc: 'Husni Portfolio Mobile adalah proyek desain user interface (UI) yang berfokus pada pengalaman pengguna (user experience - UX) portofolio pribadi pada perangkat seluler. Desain ini mengutamakan aksesibilitas cepat dan tata letak berbasis kartu (card-based layout) untuk memamerkan proyek terbaru, memastikan setiap informasi layanan dapat disajikan dengan indah di layar kecil.',
		detail: {
			category: 'desain UI',
			stack: [dataStack[0]],
			images: [
				'/project/porto_2.webp',
				'/project/porto_3.webp',
				'/project/porto_4.webp',
			]
		}
	}
]