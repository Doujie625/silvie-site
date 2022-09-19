import ce1 from "./../../images_books/CE1.jpg"
import ce2 from "./../../images_books/CE2.jpg"
import ce3 from "./../../images_books/CE3.jpg"
import CV401 from "./../../images_books/401CV.jpg"
import FDC from "./../../images_books/FDC.jpg"
import CKZK1 from "./../../images_books/CKZK1.webp"
import CKZK2 from "./../../images_books/CKZK2.jpg"
import Povidani from "./../../images_books/Povidani.jpg"
import Prazke from "./../../images_books/Prazke.jpeg"
import Povidky from "./../../images_books/Povidky.jpg"
import Brneske from "./../../images_books/Brneske.jpeg"
import FF from "./../../images_books/Fluent_forever.webp"
import BF from "./../../images_books/Becoming_fluent.jpg"
import FI3 from "./../../images_books/Fluent_in_3.webp"
import MS from "./../../images_books/Make_stick.jpg"
import Einstein from "./../../images_books/Einstein.jpg"

export const book_data = [
    {
        id: 1,
        title: 'Čeština Expres 1',
        image: ce1,
        url: 'https://www.amazon.com/Cestina-Expres-Czech-Express-Pack/dp/8087481224/ref=sr_1_1?dchild=1&keywords=Czech+Express+1&qid=1605385253&sr=8-1',
        author: "Lída Holá, Pavla Bořilová"
    },
    {
        id: 2,
        title: 'Čeština Expres 2',
        image: ce2,
        url: 'https://www.amazon.com/Cestina-Expres-Czech-Express-Pack/dp/8087481267/ref=sr_1_1?keywords=%C4%8De%C5%A1tina+express+2&qid=1572160772&sr=8-1',
        author: "Lída Holá, Pavla Bořilová"
    },

    {
        id: 3,
        title: 'Čeština Expres 3',
        image: ce3,
        url: 'https://www.amazon.com/Cestina-Expres-Express-English-Multilingual/dp/8074700321/ref=sr_1_1?crid=2M9CG3Y0I2O87&keywords=cestina+express+3+%2F+czech+express+3+by+lida+hola&qid=1663264306&sprefix=%C4%8De%C5%A1tina+expres+3+%2F+czech+express+3+by+l%C3%ADda+hol%C3%A1%2Caps%2C151&sr=8-1',
        author: "Lída Holá, Pavla Bořilová"
    },
    {
        id: 4,
        title: '401 Czech Verbs',
        image: CV401,
        url: 'https://www.amazon.com/401-Czech-Verbs-English/dp/802397260X',
        author: "Bruce Davies and Jana Hejduková"
    },
    {
        id: 5,
        title: 'A Frequency Dictionary of Czech:',
        subtitle: "Core Vocabulary for Learners",
        image: FDC,
        url: 'https://www.amazon.com/Frequency-Dictionary-Czech-Vocabulary-Dictionaries/dp/0415576628/ref=sr_1_1?keywords=A+Frequency+Dictionary+of+Czech%3A+Core+Vocabulary+for+Learners+by+František+Čermák+and+Michal+Křen&qid=1663264385&s=books&sr=1-1',
        author: "František Čermák and Michal Křen"
    },

    {
        id: 6,
        title: 'Česky krok za krokem 1',
        image: CKZK1,
        url: 'https://www.amazon.com/Czech-Step-Textbook-Appendix-Multilingual/dp/8074701298/ref=sr_1_1?qid=1663264451&refinements=p_27%3AHola+Lida&s=books&sr=1-1&text=Hola+Lida',
        author: "Lída Holá"
    },
    {
        id: 7,
        title: 'Česky krok za krokem 2',
        image: CKZK2,
        url: 'https://www.amazon.com/New-Czech-Step-v-English/dp/8086903923/ref=pd_rhf_d_se_s_pd_crcd_sccl_1_16/140-0175372-5249052?pd_rd_w=s8WbD&content-id=amzn1.sym.cee83ff1-8fc1-4533-a3f5-bf3d998f4558&pf_rd_p=cee83ff1-8fc1-4533-a3f5-bf3d998f4558&pf_rd_r=2H5K5VVC47AE9JWCRF9X&pd_rd_wg=vy09x&pd_rd_r=5610c6fc-1fa1-45f8-8ce3-208d596277f3&pd_rd_i=8086903923&psc=1',
        author: "Lída Holá"
    },

    {
        id: 8,
        title: 'O pejskovi a kočičce',
        subtitle: "adapted by Silvie Převrátilová and Petra Bulejčíková",
        image: Povidani,
        url: 'https://www.czechstepbystep.cz/en/detail-ucebnice/o-pejskovi-a-kocicce',
        author: "Josef Čapek"
    },
    {
        id: 9,
        title: 'Pražské legendy',
        subtitle: "adapted by Lída Holá",
        image: Prazke,
        url: 'https://www.czechstepbystep.cz/en/detail-ucebnice/prazske-legendy',
        author: "František Langer"
    },
    {
        id: 11,
        title: 'Povídky malostranské',
        subtitle: "adapted by Lída Holá",
        image: Povidky,
        url: 'https://www.czechstepbystep.cz/en/detail-ucebnice/povidky-malostranske',
        author: "Jan Neruda"
    },
    {
        id: 12,
        title: 'Brněnské legendy',
        subtitle: "adapted by Martina Trchová",
        image: Brneske,
        url: 'https://www.czechstepbystep.cz/detail-ucebnice/brnenske-legendy',
        author: ""
    },

    {
        id: 13,
        title: 'Fluent Forever: How to Learn Any Language Fast and Never Forget It',
        image: FF,
        url: 'https://www.amazon.com/Fluent-Forever-Learn-Language-Forget/dp/0385348118/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1663618537&sr=8-1',
        author: "Gabriel Wyner"
    },
    {
        id: 14,
        title: 'Becoming Fluent: How Cognitive Science Can Help Adults Learn a Foreign Language',
        image: BF,
        url: 'https://www.amazon.com/Becoming-Fluent-Cognitive-Science-Language/dp/0262529807/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1663618572&sr=8-1',
        author: "Richard Roberts and Roger Kreuz"
    },
    {
        id: 15,
        title: 'Fluent in 3 Months: How Anyone at Any Age Can Learn to Speak Any Language from Anywhere in the World',
        image: FI3,
        url: 'https://www.amazon.com/Fluent-Months-Anyone-Language-Anywhere/dp/0062282697/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1663618590&sr=8-2',
        author: "Benny Lewis"
    },
    {
        id: 16,
        title: 'Make It Stick: The Science of Successful Learning',
        image: MS,
        url: 'https://www.amazon.com/Make-Stick-Science-Successful-Learning/dp/0674729013/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1663618612&sr=8-1',
        author: "Brown, Peter C."
    },
    {
        id: 17,
        title: 'Moonwalking with Einstein: The Art and Science of Remembering Everything',
        image: Einstein,
        url: 'https://www.amazon.com/Moonwalking-Einstein-Science-Remembering-Everything/dp/0143120530/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1663618700&sr=8-1',
        author: "Joshua Foer"
    }
]