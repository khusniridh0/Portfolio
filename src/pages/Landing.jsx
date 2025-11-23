import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/themes";
import LandingLayout from "../layout/landing-layout";
import { ArrowRight, Close, Copy, ExternalLink, Github, Instagram, LinkedIn, Menu, Moon, SendMessage, Sun, WhatsApp } from "../utils/icons";

const dataStack = [
	{ image: 'brand/figma.svg', name: 'Figma' },
	{ image: 'brand/html.svg', name: 'HTML' },
	{ image: 'brand/css.svg', name: 'CSS' },
	{ image: 'brand/javascript.svg', name: 'Javascript' },
	{ image: 'brand/php.svg', name: 'PHP' },
	{ image: 'brand/python.svg', name: 'Python' },
	{ image: 'brand/bootstrap.svg', name: 'Bootstrap' },
	{ image: 'brand/tailwind.svg', name: 'TailwindCSS' },
	{ image: 'brand/reactjs.svg', name: 'React' },
	{ image: 'brand/material-ui.svg', name: 'Material UI' },
	{ image: 'brand/shadcn.svg', name: 'Shadcn' },
	{ image: 'brand/chakraui.svg', name: 'Chakra UI' },
	{ image: 'brand/expressjs.svg', name: 'Express' },
	{ image: 'brand/nextjs.svg', name: 'NEXT' },
	{ image: 'brand/codeigniter.svg', name: 'Codeigniter' },
	{ image: 'brand/laravel.svg', name: 'Laravel' },
	{ image: 'brand/django.svg', name: 'Django' },
	{ image: 'brand/mysql.svg', name: 'MySQL' },
	{ image: 'brand/mongodb.svg', name: 'MongoDB' },
	{ image: 'brand/docker.svg', name: 'Docker' },
	{ image: 'brand/apache.svg', name: 'Apache' },
	{ image: 'brand/nginx.svg', name: 'Nginx' },
	{ image: 'brand/nodejs.svg', name: 'NodeJS' },
	{ image: 'brand/vite.svg', name: 'Vite' },
	{ image: 'brand/linux.svg', name: 'Favorite OS' },
]

const dataLearning = [
	{ image: 'learning/golang.png', name: 'Golang', desc: "Go. Golang adalah bahasa pemrograman yang dirancang oleh Google dan pertama kali diluncurkan pada tahun 2009. Go menawarkan kinerja tinggi dan dukungan kuat untuk concurrency melalui goroutines memungkinkan pengembangan aplikasi yang efisien. fitur canggihnya memenuhi kebutuhan pengembang dengan ekosistem pustaka yang kaya dan dukungan komunitas yang luas. Golang ideal untuk pengembangan aplikasi web, microservices, dan sistem terdistribusi." },
	{ image: 'learning/gin.png', name: 'Gin Web Freamework', desc: "Gin merupakan framework web yang terkenal dan ringan untuk Golang. Gin dianggap lebih unggul dibandingkan framework lain seperti Echo, Beego, dan Fiber karena menawarkan kinerja tinggi, serta sintaks yang sederhana yang memudahkan pengembang baru. Framework ini dirancang khusus untuk pengembangan RESTful API, dengan fitur routing, validasi dan middleware yang fleksibel, Gin menjadi pilihan populer untuk pengembang yang membutuhkan solusi cepat dalam pengembangan aplikasi web." }
]

const dataCertificate = [
	{ image: 'certificates/certificate-1.png', link: 'dicoding.com/certificates/07Z6L0Y4YPQR' },
	{ image: 'certificates/certificate-2.png', link: 'dicoding.com/certificates/07Z6L0Y4YPQR' },
	{ image: 'certificates/certificate-3.png', link: 'dicoding.com/certificates/07Z6L0Y4YPQR' },
	{ image: 'certificates/certificate-4.png', link: 'dicoding.com/certificates/07Z6L0Y4YPQR' },
	{ image: 'certificates/certificate-5.png', link: 'dicoding.com/certificates/07Z6L0Y4YPQR' },
]

const dataWorks = [
	{
		name: 'Kemenag Kota Malang',
		image: 'project/kemenag_1.png',
		desc: 'Proyek ini bertujuan untuk membuat platform online yang memudahkan akses informasi tentang kegiatan, layanan, dan sejarah Kementerian Agama (Kemenag) Kota Malang. Dengan desain yang user-friendly, website ini diharapkan dapat meningkatkan transparansi, memudahkan komunikasi, serta memperkenalkan berbagai program dan inisiatif yang ada di Kemenag Kota Malang kepada masyarakat.'
	},
	{
		name: 'Template Dashboard',
		image: 'project/admin_template_1.png',
		desc: 'Admin Hus adalah proyek pribadi open source berupa template dashboard yang dikembangkan menggunakan teknologi dasar HTML, CSS, dan JavaScript. Template ini didesain untuk menyediakan fondasi user interface (UI) yang bersih, modular, dan mudah dimodifikasi bagi developer yang ingin membangun sistem panel admin mereka sendiri tanpa perlu framework kompleks'
	},
	{
		name: 'Arsip Surat',
		image: 'project/arsip_1.png',
		desc: 'Pada proyek Aplikasi Arsip ini, saya bertanggung jawab penuh mulai dari desain antarmuka hingga implementasi aplikasi yang selesai. Saya mendesain tampilan yang modern dan user-friendly, serta memastikan fungsionalitas aplikasi yang meliputi pengelolaan arsip, jenis akta, arsip surat, dan penerima surat berjalan dengan lancar. Aplikasi ini bertujuan untuk mempermudah pengelolaan dokumen hukum secara digital, dengan memberikan pengalaman pengguna yang efisien dan mudah diakses.'
	},
	{
		name: 'PT. Indonesia Teknologi Preneur',
		image: 'project/indotechpren_1.png',
		desc: 'Indotechpren adalah perusahaan yang berfokus pada bidang teknologi informasi. Tugas saya di sini adalah mendesain ulang tampilan website agar lebih modern dengan mengusung tema teknologi. Saya berhasil menyelesaikan tugas ini dengan baik, dan klien pun merasa puas dengan hasil akhirnyaIndotechpren adalah perusahaan yang berfokus pada bidang teknologi informasi. Tugas saya di sini adalah mendesain ulang tampilan website agar lebih modern dengan mengusung tema teknologi. Saya berhasil menyelesaikan tugas ini dengan baik, dan klien pun merasa puas dengan hasil akhirnya.'
	},
	{
		name: 'CapsuleIn',
		image: 'project/capsuleinn_1.png',
		desc: 'CapsuleInn adalah perusahaan yang bergerak di sektor perhotelan, menyediakan platform untuk memudahkan proses pemesanan hotel. Pada proyek ini, saya bertanggung jawab untuk merancang desain website company profile, mengimplementasikan desain tersebut ke dalam HTML, serta merancang tampilan aplikasi mobile. Aplikasi CapsuleInn kini tersedia untuk diunduh di Google Play Store dan Apple App Store. Untuk melihat lebih detail tentang perusahaan ini, Anda dapat mengunjungi website melalui tombol "Lihat Website.CapsuleInn adalah perusahaan yang bergerak di sektor perhotelan, menyediakan platform untuk memudahkan proses pemesanan hotel. Pada proyek ini, saya bertanggung jawab untuk merancang desain website company profile, mengimplementasikan desain tersebut ke dalam HTML, serta merancang tampilan aplikasi mobile. Aplikasi CapsuleInn kini tersedia untuk diunduh di Google Play Store dan Apple App Store. Untuk melihat lebih detail tentang perusahaan ini, Anda dapat mengunjungi website melalui tombol "Lihat Website.'
	},
	{
		name: 'Ponpes Darussalam Darussalam Kamal',
		image: 'project/ponpes_1.png',
		desc: 'Website Resmi Pondok Pesantren Darussalam Kamal (PPDSK). Kami merancang solusi mandiri untuk kebutuhan PPDSK, lengkap dengan Sistem Pendaftaran Online dan Pengolahan Data Siswa (Sisfo) yang terintegrasi. Tampilan modern Salaf & Modern.'
	},
	{
		name: 'Custom Pernikahan',
		image: 'project/resapi_1.png',
		desc: 'Saya merancang dan mengembangkan website profile Resepsi Online untuk memasarkan jasa pembuatan undangan pernikahan digital kustom. Solusi ini hadir dengan fokus user experience yang optimal, menawarkan lebih dari 500+ tema elegan,'
	},
	{
		name: 'Green Eat',
		image: 'project/green_eat_1.png',
		desc: 'Green Eat adalah aplikasi web pemesanan makanan yang dirancang untuk mendukung pengguna dalam menjaga pola makan dengan menyajikan solusi nutrisi. Aplikasi ini dilengkapi dengan fitur Kalkulator Gizi untuk memonitor asupan, memberikan rekomendasi makanan yang spesifik berdasarkan jenis diet pengguna, serta fitur pemesanan langsung untuk pengalaman.'
	},
	{
		name: 'Arsya',
		image: 'project/arsha_1.png',
		desc: 'Proyek Arsya berfokus pada front-end modification (modifikasi tampilan) dari website yang sudah ada. Kontribusi utama saya meliputi implementasi elemen dinamis, yaitu penambahan slider interaktif pada bagian header, pembuatan cection Berita'
	},
	{
		name: 'Undangan Pernikahan II',
		image: 'project/undangan_1.png',
		desc: 'Proyek ini adalah pengembangan website undangan pernikahan digital yang sepenuhnya didasarkan pada desain grafis yang disediakan oleh klien. Fokus utama adalah pada presisi implementasi front-end untuk memastikan setiap detail visual (tipografi, palet warna, dan tata letak) pada desain statis dapat diterjemahkan dengan sempurna menjadi tampilan web elegan, dan berfungsi penuh.'
	},
	{
		name: 'Undangan Pernikahan I',
		image: 'project/pernikahan_1.png',
		desc: 'Proyek ini adalah studi kasus desain dan pengembangan pembuatan undangan pernikahan digital. Saya bertanggung jawab penuh, mulai dari konseptualisasi desain orisinal hingga coding front-end. Fokus utamanya adalah menciptakan pengalaman visual yang unik dan menarik, sekaligus menjamin fungsionalitas seperti RSVP dan penghitung mundur.'
	},
	{
		name: 'Desain Mobile Profil',
		image: 'project/mobileporto_1.png',
		desc: 'Proyek ini adalah konseptualisasi dan perancangan desain full-page website portofolio pribadi (Husni Design) yang bertujuan menampilkan layanan dan proyek desain digital. Fokus desain terletak pada visual yang bersih, penggunaan ilustrasi untuk menarik perhatian, dan hirarki informasi yang jelas (Home, About, Galery), memastikan pengunjung dapat langsung memahami kompetensi dengan jelas.'
	},
	{
		name: 'Desain Website Profil',
		image: 'project/porto_1.png',
		desc: 'Husni Portfolio Mobile adalah proyek desain user interface (UI) yang berfokus pada pengalaman pengguna (user experience - UX) portofolio pribadi pada perangkat seluler. Desain ini mengutamakan aksesibilitas cepat dan tata letak berbasis kartu (card-based layout) untuk memamerkan proyek terbaru, memastikan setiap informasi layanan dapat disajikan dengan indah di layar kecil.'
	}
]

const dataContact = [
	{
		image: 'icon/whatsapp.svg',
		name: 'Email',
		link: 'mail.khusniridho@gmail.com',
	},
	{
		image: 'icon/instagram.svg',
		name: 'Instagram',
		link: 'https://www.instagram.com/_async.await/',
	},
	{
		image: 'icon/linkedin.svg',
		name: 'LinkedIn',
		link: 'http://linkedin.com/in/khusni-ridho',
	}
]

const dataBrand = [
	{
		icon: <LinkedIn color="var(--text-content)" width={30} height={30} />,
		name: 'LinkedIn',
		link: 'http://linkedin.com/in/khusni-ridho'
	},
	{
		icon: <Github color="var(--text-content)" width={30} height={30} />,
		name: 'Github',
		link: 'https://github.com/khusniridh0'
	},
	{
		icon: <Instagram color="var(--text-content)" width={30} height={30} />,
		name: 'Instagram',
		link: 'https://www.instagram.com/_async.await/'
	},
	{
		icon: <WhatsApp color="var(--text-content)" width={30} height={30} />,
		name: 'WhatsApp',
		link: 'https://wa.me/6282399180746?text=Halo%20Khusni%20Ridho%2C%0ASaya%20sudah%20melihat%20website%20portofolio%20kamu%20dan%20kemampuan%20yang%20kamu%20miliki.%20Saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20peluang%20kerja%20sama%20atau%20proyek%20yang%20bisa%20kita%20kerjakan%20bersama.%0AApakah%20kamu%20ada%20waktu%20untuk%20berdiskusi%20lebih%20lanjut%3F'
	}
]

const Landing = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const [drag, setDrag] = useState({ status: false, startX: 0, scrollLeft: 0 });
	const [menu, setMenu] = useState(false);
	const [activeTap, setActiveTap] = useState('tap-1');
	const [activeWorks, setActiveWorks] = useState(dataWorks[0]);
	const newRows = [9, 7, 5, 3, 1]

	const createPiramid = (count, data) => {
		const output = [];
		let index = 0;

		count.forEach(row => {
			const chunk = data.slice(index, index + row);
			output.push(chunk);
			index += row;
		});

		return output;
	}

	const changeTaps = (elmn) => {
		elmn.preventDefault()
		const button = elmn.currentTarget;
		const buttons = [...button.parentElement.children].filter(el => el.tagName === 'BUTTON');

		buttons.forEach(btn => {
			btn.classList.remove('active');
		})
		button.classList.add('active');

		setActiveTap(button.dataset.target);
	}

	const dragCarousel = (e) => {
		e.preventDefault();
		const carousel = e.currentTarget;

		if (!drag.status) return;
		carousel.scrollLeft = drag.scrollLeft + (drag.startX - e.pageX);

	}

	const copying = (e, data) => {
		const elmn = e.currentTarget
		navigator.clipboard.writeText(JSON.parse(JSON.stringify(data.link)))
			.then(() => {
				elmn.classList.add('copied')
				setTimeout(() => {
					elmn.classList.remove('copied')
				}, 5000)
			}).catch(err => console.log('Gagal copy link:', err));
	}

	const scrolling = (e) => {
		e.preventDefault()
		const target = e.currentTarget.getAttribute('href').slice(1)
		const element = document.querySelector(`#${target}`)
		element.scrollIntoView()
		setMenu(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		const formData = new FormData(form)
		const data = Object.fromEntries(formData)
		console.log('This feature is not available yet')
		form.reset()
	}

	useEffect(() => {
		document.querySelectorAll('img').forEach(img => {
			img.setAttribute('draggable', 'false')
		})
	}, [])

	return (
		<LandingLayout>
			<header id="main-nav" className="flex justify-between items-center sticky top-5">
				<img src="logo/logo-91x80.svg" alt="Khusni Ridho" className="logo h-10 lg:h-[70px] p-1 lg:p-3 aspect-square rounded-full" loading="lazy" />
				<nav className={`border-primary animated ${menu && 'show'}`}>
					<a href="#hero" className={'item-link w-full py-3 lg:p-0 text-center font-semibold active'} onClick={scrolling}>
						<span>Home</span>
					</a>
					<a href="#about" className={'item-link w-full py-3 lg:p-0 text-center font-semibold'} onClick={scrolling}>
						<span>About</span>
					</a>
					<a href="#skill" className={'item-link w-full py-3 lg:p-0 text-center font-semibold'} onClick={scrolling}>
						<span>Skill</span>
					</a>
					<a href="#works" className={'item-link w-full py-3 lg:p-0 text-center font-semibold'} onClick={scrolling}>
						<span>Project</span>
					</a>
					<a href="#cta" className={'item-link w-full py-3 lg:p-0 text-center font-semibold'} onClick={scrolling}>
						<span>Contact</span>
					</a>
					<button className="absolute top-5 right-5 lg:hidden" onClick={() => { setMenu(false) }}>
						<Close color="var(--text-content)" />
					</button>
				</nav>

				<div className="flex items-center gap-3 bg-[var(--body-50)] backdrop-filter backdrop-blur-sm rounded-full pl-6">
					<span className="text-sm font-semibold capitalize">{theme}</span>
					<button className="border-primary p-2 lg:p-3 rounded-full" onClick={() => { setTheme(theme == 'light' ? 'dark' : 'light') }}>
						{theme == 'dark' ? <Sun color="var(--text-content)" /> : <Moon color="var(--text-content)" />}
					</button>
				</div>

				<button className={`fixed -right-6 top-0 bottom-0 lg:hidden animated z-[40] ${menu ? 'fadeOutRight' : 'fadeInRight'}`} onClick={() => { setMenu(true) }}>
					<div className="bg-[var(--tertiary)] p-2 rounded-1 show-nav">
						<Menu color="var(--text-content)" width={26} height={26} />
					</div>
				</button>

			</header>

			<section id="hero" className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen">
				<div className="avatar flex justify-center lg:justify-end lg:order-2">
					<img src="picture/avatar-dark.png" alt="Khusni Ridho" className="hidden dark:block" loading="lazy" />
					<img src="picture/avatar-light.png" alt="Khusni Ridho" className="block dark:hidden" loading="lazy" />
				</div>
				<div className="description ">
					<div className="flex gap-x-8 gap-y-4 flex-col lg:flex-row items-center mb-8 lg:mb-4">
						<span className="color-gradient font-semibold text-2xl uppercase">Hey there</span>
						<span className="text-sm  font-semibold py-3 px-6 border border-primary rounded-full capitalize flex items-center gap-4">
							<div className="dot-animated rounded-full dark:bg-green-900"></div>
							available for new opportunities
						</span>
					</div>
					<h1 className="text-4xl lg:text-7xl font-bold mb-2 lg:mb-6 w-fit uppercase">Khusni Ridho</h1>
					<p className="text-md lg:text-xl mb-8">Software Developer fokus pada UI/UX, Full-Stack Web Development, dan Software Testing.</p>
					<a href="#contact" className="w-fit btn rounded-full border-gradient" onClick={scrolling}>
						<span className="me-4">Contact Me</span>
						<ArrowRight color="var(--text-content)" />
					</a>
				</div>
			</section>

			<section id="brand" className="py-18 lg:p-0">
				<div id="brand" className="flex flex-wrap justify-around lg:justify-between items-center gap-x-22 gap-y-8 lg:gap-4 lg:flex-nowrap lg:flex-row">
					{dataBrand.map((item, i) => (
						<a href={item.link} target="_blank" className="flex gap-x-4 justify-center items-center" key={i}>
							<span className="lg:inline-block">{item.icon}</span>
							<span className=" md:text-2xl">{item.name}</span>
						</a>
					))}

				</div>
			</section>

			<section id="about" className="pt-40 relative">
				<div className="section-title relative flex justify-center items-center mb-20">
					<h1 className="text-7xl lg:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">About</h1>
					<h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">introduction</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 relative">
					<div className="profile sticky top-0 md:top-30  bg-[var(--body)] h-fit">
						<img src="picture/profile.png" alt="Khusni Ridho" className="w-full grayscale mix-blend-plus-darker dark:mix-blend-difference" loading="lazy" />
					</div>
					<div className="description lg:pt-[10px] pl-1 ">
						<div className="pb-8 mb-8 about-point">
							<p className="text-xl">Saya menciptakan solusi digital yang mendorong bisnis Anda maju. Mulai dari merancang antarmuka (interface) yang bersih dan intuitif, menghubungkannya dengan logika back-end yang kuat, hingga menguji fungsionalitas sistem secara menyeluruh, fokus saya adalah membangun sistem digital yang tidak hanya berfungsi, tetapi juga bernilai.</p>
						</div>
						<div className="pb-8 mb-8 about-point">
							<h2 className="text-xl font-semibold mb-8">[ 01 ] Design UI/UX</h2>
							<p className="text-xl">Ketertarikan saya pada dunia UI/UX didasari oleh rasa ingin tahu mengapa beberapa antarmuka terasa lebih mudah dipahami dibandingkan yang lain. Saya menuangkan ide dengan empati, menyusun tata letak dengan logika, dan membangun dengan presisi. Tujuan utama saya adalah menciptakan pengalaman pengguna (User Experience) yang terasa alami, intuitif, dan secara visual.</p>
						</div>
						<div className="pb-8 mb-8 about-point">
							<h2 className="text-xl font-semibold mb-8">[ 02 ] Full-Stack Developer</h2>
							<p className="text-xl">Seiring eksplorasi saya lebih dalam, saya menyadari bahwa saya tidak hanya ingin mendesain, saya juga ingin memahami apa yang menggerakkannya. Jadi, saya mendalami pengembangan full-stack, mempelajari bagaimana data mengalir, bagaimana server merespons, dan bagaimana menghubungkan antara front-end dan back-end. Saya senang membangun sistem yang tidak hanya fungsional, tetapi juga skalabel dan mudah dipelihara.</p>
						</div>
						<div className="pb-8 mb-8 about-point">
							<h2 className="text-xl font-semibold mb-8">[ 03 ] Software Testing</h2>
							<p className="text-xl">Sebelum sebuah produk diluncurkan, memastikan semua fitur berfungsi sesuai harapan adalah peran krusial. Saya terlibat dalam Software Testing untuk menjamin setiap fungsionalitas bekerja dengan baik dan tidak terjadi bug dalam penggunaan normal. Bagi saya, pengujian adalah tentang kejelasan, konsistensi, dan menemukan masalah kecil sebelum sampai ke tangan pengguna.</p>
						</div>
					</div>
				</div>
			</section>

			<section id="skill" className="lg:pt-40">
				<div className="section-title relative flex justify-center items-center mb-20">
					<h1 className="text-7xl lg:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">mastery</h1>
					<h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Journey & Learning</h1>
				</div>
				<div className="flex gap-x-6 lg:gap-x-14 justify-center items-center border-primary rounded-full w-fit my-8 p-[30px] mx-auto">
					<button className="item-link text-sm uppercase font-semibold active" data-target="tap-1" onClick={(changeTaps)}>
						<span>Tech Stack</span>
					</button>
					<button className="item-link text-sm uppercase font-semibold" data-target="tap-2" onClick={(changeTaps)}>
						<span>learning</span>
					</button>
					<button className="item-link text-sm uppercase font-semibold" data-target="tap-3" onClick={(changeTaps)}>
						<span>certificate</span>
					</button>
				</div>
				{activeTap === 'tap-1' &&
					<>
						<div className="flex flex-wrap gap-3 mb-4 xl:hidden xl:gap-8 xl:mb-8 justify-center item-center mx-auto">
							{dataStack.map((item, i) => (
								<div className="smooth hover:border-gradient rounded-1 p-4 w-28 h-28 lg:w-30 lg:h-30 flex flex-col justify-center items-center shadow-primary duration-200" key={i}>
									<img src={`${item.image}`} alt="Stack Brand" className="mb-4" loading="lazy" />
									<span className=" font-semibold text-center text-sm">{item.name}</span>
								</div>
							))}
						</div>
						{createPiramid(newRows, dataStack).map((items, i) => (
							<div className="hidden xl:flex flex-wrap gap-4 mb-4 xl:gap-8 xl:mb-8 justify-center item-center mx-auto" key={i}>
								{items.map((item, i) => {
									return (
										<div className="smooth hover:border-gradient rounded-1 p-4 w-28 h-28 lg:w-30 lg:h-30 flex flex-col justify-center items-center shadow-primary duration-200" key={i}>
											<img src={`${item.image}`} alt="Stack Brand" className="mb-4" loading="lazy" />
											<span className=" font-semibold text-center text-sm">{item.name}</span>
										</div>
									)
								})}
							</div>
						))}
					</>
				}

				{activeTap === 'tap-2' &&
					<div className="">
						{dataLearning.map((item, i) => (
							<>
								<div className="flex gap-6 lg:gap-20 justify">
									<h3 className="text-xl min-w-fit">[ {i + 1} ]</h3>
									<img src={item.image} alt={item.name} className="hidden lg:block aspect-[1.43/1] object-cover w-88 rounded-1" loading="lazy" />
									<div className="">
										<h3 className="text-2xl lg:text-4xl font-bold mb-4">{item.name}</h3>
										<p>{item.desc}</p>
									</div>
								</div>
								{i != dataLearning.length - 1 && <div className="horizon w-full h-px my-8" />}
							</>
						))}
					</div>
				}
				{activeTap === 'tap-3' &&
					<div className="flex flex-wrap gap-4 mb-4 justify-center item-center mx-auto">
						{dataCertificate.map((item, i) => (
							<a href={item.link} target="_blank" className="smooth hover:border-gradient rounded-1 p-2 lg:w-90 md:w-78 flex flex-col justify-center items-center shadow-primary duration-200" key={i}>
								<img src={item.image} alt="Certificate" className="aspect-[1.43/1]" loading="lazy" />
							</a>
						))}
					</div>
				}
			</section>

			<section id="works" className="pt-40">
				<div className="section-title relative flex justify-center items-center mb-20">
					<h1 className="text-7xl lg:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">works</h1>
					<h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Experience</h1>
				</div>
				<div className="benner">
					<div className="benner-content relative mb-8">
						<img src={activeWorks.image} alt="Banner" className="w-full rounded-1 aspect-[9/16] md:aspect-[4/3] lg:aspect-video object-cover" loading="lazy" />
						<div className="banner-attribute flex flex-col lg:flex-row gap-6 lg:items-end absolute bottom-0 left-0 p-4 w-full">
							<div className="banner-caption flex-2 text-white">
								<a className="inline-block text-2xl lg:text-5xl font-semibold capitalize underline underline-offset-4 mb-2 lg:mb-6 lg:underline-offset-6 text-nowrap text-truncate">
									{activeWorks.name}
									<sup className="inline-block ml-2"><ExternalLink color="#fff" width={16} height={16} /></sup>
								</a>
								<p className="text-sm lg:text-lg  text-ellipsis line-clamp-3 mb-6">{activeWorks.desc}</p>
								<a href="#contact" className="w-fit btn rounded-full border-gradient mx-auto lg:mx-0">
									<span className="me-4">View Details</span>
									<ExternalLink color="var(--text-content)" />
								</a>
							</div>
							<div className="banner-other flex gap-4 flex-1 lg:justify-end">
								{dataWorks.slice(0, 3).map((item, i) => (
									<div className="other-item" key={i} onClick={() => setActiveWorks(item)}>
										<span className="flex text-sm lg:text-md  font-semibold mb-2 text-white">
											[ {i + 1} ]
										</span>
										<img src={item.image} alt={item.name} className="w-24 lg:w-34 aspect-[3/4] object-cover" loading="lazy" />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="clip-banner gap-4" onMouseMove={dragCarousel} onMouseDown={(e) => setDrag({ status: true, startX: e.pageX, scrollLeft: e.currentTarget.scrollLeft })} onMouseUp={() => setDrag({ status: false })}>
						<div className="clip-banner-content">
							{dataWorks.slice(3).map((item, i) => (
								<div className="clip-banner-item aspect-[4/3] rounded-1 overflow-hidden" draggable={false} key={i}>
									<img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="cta" className="py-40">
				<div className="section-title relative flex justify-center items-center mb-20">
					<h1 className="text-7xl lg:text-[200px] text-[var(--body)] font-bold text-border-gradient w-fit uppercase opacity-50 tracking-[6px] absolute left-0">links</h1>
					<h1 className="relative text-2xl lg:text-6xl w-fit  uppercase">Let's Make a Change</h1>
				</div>

				<div className="cta-branding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
					<div className="branding-item relative overflow-hidden rounded-1 border-primary p-5">
						<div className="flex justify-between items-center mb-3">
							<img src="icon/worker.svg" alt="worker" loading="lazy" />
							<h3 className="text-3xl  font-bold">30</h3>
						</div>
						<h3 className="text-lg  font-semibold">Project</h3>
						<p className="text-sm ">Portofolio proyek full-stack dan desain. Pengalaman praktik nyata dari ide hingga peluncuran.</p>
					</div>
					<div className="branding-item relative overflow-hidden rounded-1 border-primary p-5">
						<div className="flex justify-between items-center mb-3">
							<img src="icon/technology.svg" alt="technology" loading="lazy" />
							<h3 className="text-3xl  font-bold">30</h3>
						</div>
						<h3 className="text-lg  font-semibold">Tech Stack</h3>
						<p className="text-sm ">Kemampuan dalam berbagai teknologi & framework utama. Siap menyesuaikan dengan kebutuhan tim Anda.</p>
					</div>
					<div className="branding-item relative overflow-hidden rounded-1 border-primary p-5 md:col-span-2 lg:col-span-1">
						<div className="flex justify-between items-center mb-3">
							<img src="icon/certificate.svg" alt="certificate" loading="lazy" />
							<h3 className="text-3xl  font-bold">30</h3>
						</div>
						<h3 className="text-lg  font-semibold">Certificate</h3>
						<p className="text-sm ">Validasi kompetensi profesional dan keahlian teruji. Komitmen pada pembelajaran berkelanjutan.</p>
					</div>
				</div>

				<div className="cta-content relative overflow-hidden rounded-1 border-primary p-5 md:col-span-2 lg:col-span-1">
					<div className="lg:w-150 py-4 lg:py-[12px] lg:px-[12px] text-center lg:text-left">
						<h1 className="text-4xl lg:text-[48px] md:w-120 lg:w-full  font-medium uppercase mx-auto mb-4">Let's What are you waiting for?</h1>
						<h3 className="text-xl  mb-8">Diskusikan proyek Anda sekarang, mari berkolaborasi dan ciptakan inovasi bersama!</h3>
						<a href="#contact" className="w-fit btn rounded-full border-gradient mx-auto lg:mx-0" onClick={scrolling}>
							<span className="me-4">Contact Me</span>
							<ArrowRight color="var(--text-content)" />
						</a>
					</div>
				</div>
			</section>

			<section id="contact">
				<div className="marquee flex py-30">
					<div className="marquee-content flex gap-10 pr-10">
						<h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
						<h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
						<h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
					</div>
					<div className="marquee-content flex gap-10 pr-10">
						<h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
						<h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
						<h1 className="text-7xl lg:text-8xl text-[var(--body)] font-bold text-border-gradient w-fit uppercase tracking-[6px]">contact</h1>
					</div>
				</div>

				<div className="section-title text-center mb-20">
					<h1 className="relative text-2xl lg:text-6xl  uppercase mb-4">Get in Touch with Us</h1>
					<p>Silakan isi formulir di bawah ini, atau Anda dapat menghubungi saya melalui media sosial maupun email.</p>
				</div>

				<div className="grid grid-cols-6 md:grid-cols-12 gap-10">
					<div className="md:form col-span-6 md:col-span-7 order-2 md:order-1">
						<form onSubmit={handleSubmit}>
							<div className=" w-full flex flex-col gap-2 mb-4">
								<label className="text-sm font-medium" htmlFor="name">Name</label>
								<input type="text" id="name" name="name" className="rounded-1 text-sm border-secondary p-4" required autoComplete='true' />
							</div>
							<div className=" w-full flex flex-col gap-2 mb-4">
								<label className="text-sm font-medium" htmlFor="email">Email</label>
								<input type="email" id="email" name="email" className="rounded-1 text-sm border-secondary p-4" required autoComplete='true' />
							</div>
							<div className=" w-full flex flex-col gap-2 mb-4">
								<label className="text-sm font-medium" htmlFor="message">Message</label>
								<textarea id="message" name="message" rows="10" className="rounded-1 text-sm border-secondary p-4" required autoComplete='true' ></textarea>
							</div>
							<button type="submit" className="flex justify-center items-center bg-[var(--primary)] text-sm  font-semibold rounded-1 p-3 w-full">
								<span className="me-2 text-white">Send Message</span>
								<SendMessage color="var(--color-white)" />
							</button>
						</form>
					</div>
					<div className="contact-card col-span-6 md:col-span-5 order-1 md:order-2">
						<h6 className="font-semibold mb-1">Contact Details</h6>
						{dataContact.map((item, i) => (
							<div className="rounded-1 border-primary p-5 md:col-span-2 lg:col-span-1 mb-6" key={i}>
								<div className="flex justify-between items-center mb-3">
									<img src={item.image} alt="whatsapp" loading="lazy" />
									<button type="button" className="copy flex flex-col gap-1 items-center" onClick={e => copying(e, item)}>
										<Copy color="var(--text-content)" />
										<span className="text-sm">Copy</span>
									</button>
								</div>
								<h3 className="text-lg  font-semibold">{item.name}</h3>
								<p className="text-sm ">{item.link}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<footer className="flex flex-wrap justify-between items-center py-6 gap-6 mt-10">
				<div className="horizon w-full h-px" />
				<h6 className="text-sm  font-medium">♥️ 2025 Created By Khusni Ridho</h6>
				<h6 className="text-sm font-medium">Showcase</h6>
			</footer>
		</LandingLayout>
	);
}

export default Landing;