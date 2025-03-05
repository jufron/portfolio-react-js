import { 
    faFacebookF, 
    faInstagram, 
    faLinkedinIn, 
    faGithub,
    faReact,
    faGitAlt,
    faLaravel, 
    faHtml5, 
    faCss3Alt, 
    faJs, 
    faNode, 
    faPhp, 
    faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import imageTailwind from './assets/img/tailwind.256x154.png?format=webp&quality=70';


import imageProfileKampus from './assets/img/project/web-profile-kampus.png?format=webp&quality=70';
import imageReturBarang from './assets/img/project/web-retur-barang.png?format=webp&quality=70';
import imageKenaikanPangkat from './assets/img/project/web-kenaikan-pangkat.png?format=webp&quality=70';
import imageArsipBerkas from './assets/img/project/web-arsip-berkas.png?format=webp&quality=70';

import imageSertifikatDicodingDasarWeb from './assets/img/sertifikat/dicoding-dasar-web.jpg?format=webp&quality=70';
import imageSertifikatUdemyPhp from './assets/img/sertifikat/udemy-php.jpeg?format=webp&quality=70';
import imageSertifikatUdemyJs from './assets/img/sertifikat/udemy-js.jpg?format=webp&quality=70';
import imageSertifikatUdemyLaravel from './assets/img/sertifikat/udemy-laravel.jpg?format=webp&quality=70';
import imageSertifikatDicodingReact from './assets/img/sertifikat/dicoding-react.jpg?format=webp&quality=70';
import imageSertifikatDicodingAi from './assets/img/sertifikat/dicoding-ai.jpg?format=webp&quality=70';
import imageSertifikatDicodingAws from './assets/img/sertifikat/dicoding-aws.jpg?format=webp&quality=70';
import imageSertifikatDicodingBe from './assets/img/sertifikat/dicoding-beck-end.jpg?format=webp&quality=70';
import imageSertifikatDicodingJs from './assets/img/sertifikat/dicoding-js.jpg?format=webp&quality=70';

const urlFacebook = import.meta.env.VITE_SOCIAL_MEDIA_FACEBOOK_URL;
const urlInstagram = import.meta.env.VITE_SOCIAL_MEDIA_INSTAGRAM_URL;
const urlLinkedin = import.meta.env.VITE_SOCIAL_MEDIA_LINKEDIN_URL;
const urlGithub = import.meta.env.VITE_SOCIAL_MEDIA_GITHUB_URL;

const menuList = [
    { name: 'Beranda' },
    { name: 'Tentang' },
    // { name: 'Experience' },
    { name: 'Keahlian' }, // belum ditandai
    { name: 'Sertifikat' },
    { name: 'Proyek' },
    { name: 'Kontak' } // belum ditandai
];

const socialMediaLinks = [
    {
        href: urlFacebook,
        iconName: faFacebookF,
        className: "text-blue-600 hover:text-white hover:bg-[#1877F2]",
    },
    {
        href: urlInstagram,
        iconName: faInstagram,
        className: "text-red-500 hover:text-white hover:bg-[#E4405F]",
    },
    {
        href: urlLinkedin,
        iconName: faLinkedinIn,
        className: "text-sky-700 hover:text-white hover:bg-[#0077B5]",
    },
    { 
        href: urlGithub,
        iconName: faGithub, 
        className: "text-gray-800 dark:text-gray-600 hover:text-white hover:bg-[#333]" 
    },
];

const skills = [
    {
        name: 'HTML',
        status: 'icon',
        icon:  faHtml5
    },
    {
        name: 'CSS',
        status: 'icon',
        icon: faCss3Alt
    },
    {
        name: 'Javascript',
        status: 'icon',
        icon: faJs
    },
    {
        name: 'Node Js',
        status: 'icon',
        icon: faNode
    },
    {
        name: 'PHP',
        status: 'icon',
        icon: faPhp
    },
    {
        name: 'Tailwind CSS',
        status: 'img',
        icon: imageTailwind
    },
    {
        name: 'Bootstrap',
        status: 'icon',
        icon: faBootstrap
    },
    {
        name: 'Laravel',
        status: 'icon',
        icon: faLaravel
    },
    {
        name: 'React Js',
        status: 'icon',
        icon: faReact
    },
    {
        name: 'Git',
        status: 'icon',
        icon: faGitAlt
    },
    {
        name: 'Github',
        status: 'icon',
        icon: faGithub
    },
    {
        name: 'MySQL',
        status: 'icon',
        icon: faDatabase
    },
    {
        name: 'PsgrSQL',
        status: 'icon',
        icon: faDatabase
    },
]

const certificate = [
    {
        image: imageSertifikatDicodingReact,
        title: 'Pemrograman PHP Pemula sampai Mahir'
    },
    {
        image: imageSertifikatUdemyPhp,
        title: 'Pemrograman PHP Pemula sampai Mahir'
    },
    {
        image: imageSertifikatUdemyJs,
        title: 'Pemrograman Javascript Pemula sampai Mahir'
    },
    {
        image: imageSertifikatUdemyLaravel,
        title: 'Laravel Pemula sampai Mahir'
    },
    {
        image: imageSertifikatDicodingAi,
        title: 'Dasar AI'
    },
    {
        image: imageSertifikatDicodingBe,
        title: 'Membuat Aplikasi Beck-end Pemula'
    },
]

const project = [
    {
        image: imageProfileKampus,
        projectName: 'Web Application Profile Campus',
        kategory: 'profesional',
        techStack: [
            {
                name: 'HTML',
                icon: 'icon'
            },
            {
                name: 'CSS',
                icon: 'icon'
            },
            {
                name: 'Firebase',
                icon: 'icon'
            }
        ]
    },
    {
        image: imageReturBarang,
        projectName: 'Web Application Retur Barang',
        kategory: 'profesional',
        techStack: [
        ]
    },
    {
        image: imageKenaikanPangkat,
        projectName: 'Web Application Kenaikan Pangkat',
        kategory: 'profesional',
        techStack: [
        ]
    },
    {
        image: imageArsipBerkas,
        projectName: 'Web Application Arsip Berkas',
        kategory: 'profesional',
        techStack: [
        ]
    },
]

const languages = {
    id: {
        heroSection: [
            'Halo, saya',
            'Saya seorang Pengembang Full-Stack berpengalaman dengan keahlian lebih dari 2 tahun dalam membangun aplikasi web yang tangguh dan membuat desain yang menarik secara visual. Mahir dalam Laravel dan React JS, saya menggabungkan kekuatan kode dan kreativitas untuk menghadirkan pengalaman digital yang lancar.'
        ],
    },
    en: {
        heroSection: [
            'Hi there, I am', 
            'm an experienced Full-Stack Developer with 2+ years of expertise in building robust web applications and crafting visually appealing designs. Proficient in Laravel and React JS, I bring together the power of code and creativity to deliver seamless digital experiences.'
        ],
    }
};

export { project, skills, certificate, socialMediaLinks, menuList, languages };