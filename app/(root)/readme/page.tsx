import Footer from "@/app/components/Footer";
import { HeaderII } from "@/app/components/header";
import ImageSkeleton from "@/app/components/image";

const ReadMe = async () => {

    return (
        <>
            <HeaderII />
            <section className="grid grid-cols-12 pt-20 max-w-5xl mx-auto">
                <div className="col-span-1 hidden lg:block relative">
                    <div className="sticky top-0 flex lg:flex-col justify-center items-center gap-10 h-screen">
                        <div className="horizon w-px h-full" />
                        <div className="-rotate-90 absolute bg-[var(--body)] w-60 py-2 px-6 uppercase text-center">
                            web development
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                    <Heading level={1}>Readme</Heading>
                    <Quote>
                        Arsitektur, Optimasi Kinerja, dan Keputusan Teknis yang Membentuk Proyek ini
                    </Quote>

                    <div className="relative hidden lg:flex lg:flex-col justify-center items-center h-10 translate-y-8">
                        <div className="horizon w-full h-px" />
                        <div className="absolute bg-[var(--body)] w-50 py-2 px-6 uppercase text-center">
                            design ui/ux
                        </div>
                    </div>

                    <ImageSkeleton src="/picture/readme.webp" alt="Website My Portfolio" width={853} height={480} className="w-full h-auto aspect-video object-cover my-10" />

                    <div className="part-1 mb-20">
                        <Heading level={2}>Intoduction</Heading>
                        <Paragraph>
                            Selamat datang, reviewer. Jika Anda membaca hingga halaman ini, Anda akan melihat hasil kerja yang telah saya buat. Apa yang akan Anda baca adalah kisah di balik proses pembuatan portofolio saya.
                        </Paragraph>
                        <Paragraph>
                            Bagi saya, portofolio ini bukan sekadar ajang pamer proyek (<i>showcase</i>), melainkan sebuah jurnal perjalanan. Setiap baris kode yang saya tulis adalah jejak dari proses belajar dan pengalaman saya dalam pemecahan masalah dan pengambilan keputusan. Ini adalah bukti kesiapan saya untuk melangkah ke tantangan yang lebih besar, dan refleksi keputusan yang saya ambil sepanjang perjalanan ini.
                            <Spotlight>Melalui kisah ini, saya ingin menunjukkan bahwa hasil yang saya bangun bukan sekadar tampilan visual, melainkan sebuah perjalanan proses belajar, eksplorasi teknologi baru, dan penyelesaian tantangan teknis, yang semuanya saya tempuh dengan tujuan untuk siap menghadapi tantangan berikutnya</Spotlight>.
                            Penyelesaian proyek ini membuat saya yakin untuk melangkah ke tingkat berikutnya.
                        </Paragraph>
                    </div>

                    <div className="part-2 mb-20">
                        <Heading level={2}>Case Study</Heading>
                        <Paragraph>
                            Sejalan dengan tujuan portofolio sebagai jurnal perjalanan, case study ini menjadi wadah untuk eksperimen pribadi. Saya berupaya menampilkan diri sebagai pengembang yang peduli pada detail, performa, dan pengalaman pengguna (<i>UX</i>).
                        </Paragraph>
                        <Paragraph>
                            <Spotlight>Pemilihan stack Next.js dan TypeScript adalah keputusan yang beralasan. Next.js memberikan fondasi untuk membangun aplikasi web yang cepat dan scalable. Fitur-fitur unggulan Next.js yang saya manfaatkan mencakup pemisahan client-side rendering dan server-side rendering, kemudahan dalam optimasi SEO, pembuatan API dan Server Actions, serta yang paling saya sukai optimasi gambar yang sangat powerful. Sementara itu, TypeScript berperan penting dalam menjaga kualitas kode dan meminimalkan potensi error</Spotlight>.
                        </Paragraph>
                        <Paragraph>
                            Kombinasi teknologi ini memungkinkan saya berfokus pada pengembangan fitur kompleks dengan kinerja yang optimal. Melalui case study ini, saya ingin memperkenalkan diri, menyajikan karya yang telah saya selesaikan, sekaligus mendokumentasikan proses perjalanan saya. Ini lebih dari sekadar proyek ini adalah cerminan dari etos kerja dan inovasi saya.
                        </Paragraph>
                    </div>

                    <div className="part-3 mb-20">
                        <Heading level={2}>Engineering Challenge</Heading>
                        <Paragraph>
                            Selama membangun portofolio ini, saya menghadapi tantangan di bidang SEO dan animasi. Untuk SEO, saya akhirnya saya mempelajari tentang OpenGraph, metadata, struktur head, dan indexing. Meskipun SEO adalah area baru bagi saya, proses pembelajaran ini justru menjadi value terbesar, menambah pengetahuan dan wawasan teknis, sekaligus melengkapi skill set pengembangan saya.
                        </Paragraph>
                        <Paragraph>
                            Pada sisi animasi, saya mempertimbangkan untuk menggunakan library populer seperti GSAP atau Swiper. Keduanya memiliki keunggulan, GSAP memiliki keunggulan animasinya yang smooth, fleksibel, dan mendukung animation scroll. Sementara itu, Swiper memudahkan pengembang dalam membuat slider dengan berbagai efek.
                        </Paragraph>
                        <Paragraph>
                            Namun, karena tidak semua fitur dari library tersebut saya gunakan, nantinya akan terjadi pemborosan sumber daya. Fitur-fitur yang tidak terpakai secara efisien ini akan menjadi bundling yang memberatkan kode saya. Hal ini pada akhirnya mengakibatkan file size hasil build terlalu besar dan nantinya akan memengaruhi performa.
                        </Paragraph>
                        <Paragraph>
                            <Spotlight>Oleh karena itu, demi menjaga performa, saya memutuskan untuk mengembangkan animasi secara mandiri. Tentu saja, pengembangan mandiri memerlukan kompromi dengan beberapa efek canggih yang harus saya relakan. Maka dari itu, mengembangkan animasi secara mandiri, menurut saya, adalah pilihan yang paling tepat, sebab saya benar-benar hanya menggunakan animasi yang memang saya perlukan</Spotlight>.
                        </Paragraph>
                        <Paragraph>
                            Dalam proses ini, saya berusaha menyeimbangkan antara performa, fungsionalitas, dan estetika, serta menunjukkan bahwa detail kecil seperti ini cukup krusial saat membangun proyek nyata.
                        </Paragraph>
                    </div>

                    <div className="part-3 mb-20">
                        <Heading level={2}>Architecture & Technical</Heading>
                        <Heading level={3}>Rendering</Heading>
                        <Paragraph>
                            Dalam membangun portofolio ini,
                            <Spotlight> saya memisahkan antara Server Component dan Client Component. Pemisahan ini bertujuan untuk meningkatkan performa. karena Next.js dapat membedakan komponen mana yang harus di-render di sisi client dan komponen mana yang dapat di-render di sisi server. Dengan kata lain, pemisahan ini memberikan prioritas rendering pada masing-masing komponen. Pemisahan ini juga membantu menjaga keteraturan kode, memudahkan pemeliharaan, serta meningkatkan reusability dari komponen tersebut. </Spotlight>.
                        </Paragraph>
                        <Heading level={3}>HTTP Request</Heading>
                        <Paragraph>
                            Untuk pengelolaan HTTP request,
                            <Spotlight> saya menggunakan Axios dan membuat interceptor. Interceptor memungkinkan saya membuat request menjadi lebih bersih, reusable, dan mudah dikelola. Jika terjadi perubahan pada pola request, misalnya domain atau header, perubahan cukup dilakukan pada interceptor tanpa perlu memodifikasi seluruh kode yang melakukan request </Spotlight>.
                        </Paragraph>
                        <Heading level={3}>Image Optimization</Heading>
                        <Paragraph>
                            Seperti yang telah disebutkan sebelumnya, fitur optimasi gambar di Next.js adalah <Code>Next/Image</Code>. Secara teknis,
                            <Spotlight> saya memanfaatkan fitur bawaan Next.js, didukung dengan format .webp yang lebih ramah terhadap aplikasi web-based. Secara default, <Code>Next/Image</Code> telah menerapkan lazy loading untuk eager loading, saya cukup menambahkan atribut priority pada komponen <Code>{'<Image priority {...atribute} />'}</Code>, dan memastikan ukuran gambar sesuai dengan perangkat pengguna (<i>responsive sizes</i>). Setiap gambar juga dikompresi untuk menjaga performa tanpa mengurangi kualitas visual </Spotlight>.
                        </Paragraph>
                        <Paragraph>
                            Struktur folder juga telah dirancang untuk mendukung arsitektur tersebut. Dengan begitu, proyek tetap terorganisir dan memiliki skalabilitas seiring dengan penambahan fitur baru.
                        </Paragraph>
                    </div>

                    <div className="part-3 mb-20">
                        <Heading level={2}>Performance</Heading>
                        <Paragraph>
                            Fokus utama dalam pembangunan portofolio ini adalah performa.
                            <Spotlight>
                                Setiap aspek diuji menggunakan Lighthouse, mencakup SEO, Performance, Best Practices, dan Accessibility. Hasilnya memuaskan semua skor berada di atas 90% pada perangkat mobile maupun desktop, bahkan hampir sempurna. Setelah total pengujian sebanyak 10 kali, rata-rata skor yang diperoleh adalah 98.8%
                            </Spotlight>
                        </Paragraph>
                        <Paragraph>
                            Angka tersebut membuktikan bahwa setiap keputusan teknis dan upaya optimasi yang dilakukan memberikan dampak nyata. Melalui langkah-langkah arsitektural dan teknikal yang telah dipaparkan, portofolio ini berhasil tidak hanya cepat dan user-friendly, tetapi juga memenuhi standar terbaik dalam pengujian Lighthouse.
                        </Paragraph>
                    </div>
                    <div className="part-3 mb-20">
                        <Heading level={2}>closing</Heading>
                        <Paragraph>
                            Setelah meninjau seluruh portofolio dan cerita di baliknya, saya berharap Anda mendapatkan gambaran yang jelas terkait hasil kerja dan pengambilan keputusan teknis yang saya lakukan.
                        </Paragraph>
                        <Paragraph>
                            Portofolio ini merepresentasikan performa dan kesabaran. Setiap tantangan, mulai dari memilih stack, mengoptimasi animasi native hingga SEO telah menjadi peluang untuk memperluas skill set saya.
                        </Paragraph>
                        <Paragraph>
                            Saya sangat antusias untuk membawa inovasi dan ketelitian ini ke tantangan berikutnya. Saya sangat terbuka untuk berdiskusi lebih lanjut mengenai peluang baru atau bagaimana keahlian saya dapat berkontribusi pada tim Anda.
                        </Paragraph>
                        <Spotlight>
                            Terima kasih atas waktu dan perhatian Anda.
                        </Spotlight>

                    </div>

                    <div className="part-3 mb-20">
                        <Heading level={1}>What Next?</Heading>
                        <Quote>
                            Data Science, Machine Learning, atau Deep Learning...
                        </Quote>
                    </div>
                </div>
                <div className="col-span-1 hidden lg:block relative">
                    <div className="sticky top-0 flex lg:flex-col justify-center items-center gap-10 h-screen">
                        <div className="horizon w-px h-full" />
                        <div className="-rotate-90 absolute bg-[var(--body)] w-60 py-2 px-6 uppercase text-center">
                            software tester
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

const Heading = ({ children, level }: { children: React.ReactNode, level: number }) => {
    return (
        <>
            {level == 1 ? <h1 className="text-3xl lg:text-6xl text-center font-semibold uppercase mb-4">{children}</h1> : null}
            {level == 2 ? <h2 className="text-2xl lg:text-4xl text-center font-semibold uppercase mb-4">{children}</h2> : null}
            {level == 3 ? <h3 className="text-lg lg:text-2xl font-semibold capitalize mb-4 mt-10"># {children}</h3> : null}
        </>
    )
}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-lg mx-auto dark:text-[#efefeee7] tracking-wide indent-8 mb-6">
            {children}
        </p>
    )
}

const Quote = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex text-center max-w-lg mx-auto">
            <span className="text-4xl inline-block">&quot;</span>
            <span className="text-2xl">{children}</span>
            <span className="text-4xl inline-block">&quot;</span>
        </div>
    )
}

const Spotlight = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="font-semibold italic mx-1 dark:text-[#ffffff] indent-0">
            <span className="inline-block">&quot;</span>
            {children}
            <span className="inline-block">&quot;</span>
        </span>
    )
}

const Code = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="inline-block dark:text-[#efefeee7] bg-zinc-200 dark:bg-zinc-700 text-sm border-1 border-zinc-700 dark:border-zinc-400 rounded py-px px-2 indent-0 font-semibold">
            <code>{children}</code>
        </span>
    )
}

export default ReadMe;