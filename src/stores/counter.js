import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useArt_listStore = defineStore('Art', () => {

const Art_list  = ref([
  {
    id: 'art1',
    title: 'Cyber Skull',
    Owned_by: 'Nocturnal Media',
    price: 975.00,
    description: 'Cyber Skull Virtual Reality Cyberpunk floppy disc wires 80s 90s',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1318065872/display_1500/stock-vector-cyber-skull-virtual-reality-cyberpunk-floppy-disc-wires-s-s-1318065872.jpg',
    category: 'Art'
},
{
    id: 'art2',
    title: 'vector',
    Owned_by: 'nattapon kanchanaket',
    price: 675.00,
    description: 'David michelangelo portraits Illustration vector art',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1665555634/display_1500/stock-vector-david-michelangelo-portraits-illustration-vector-art-1665555634.jpg',
    category: 'Art'
},
{
    id: 'art3',
    title: 'van gogh',
    Owned_by: 'nattapon kanchanaket',
    price: 565.00,
    description: 'van gogh vector art illustration design',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1506765383/display_1500/stock-vector-van-gogh-vector-art-illustration-design-1506765383.jpg',
    category: 'Art'
},
{
    id: 'art4',
    title: 'Lofi girl illustration',
    Owned_by: 'Fortis Design',
    price: 255.40,
    description: 'Young woman looking in the distance.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2279016883/display_1500/stock-vector-lofi-girl-illustration-young-woman-looking-in-the-distance-cartoon-drawing-of-chill-relaxed-lady-2279016883.jpg',
    category: 'Art'
},
{
    id: 'art5',
    title: 'Woman, graffiti street art fashion.',
    Owned_by: 'Fortis Design',
    price: 1580.49,
    description: 'Vector graphic, beautiful, strong, lady spray painted. Paint splatter. Cool urban modern poster texture. Powerful contemporary wall art sketch. home decor style.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2279521423/display_1500/stock-vector-woman-graffiti-street-art-fashion-vector-graphic-beautiful-strong-lady-spray-painted-paint-2279521423.jpg',
    category: 'Art'
},
{
    id: 'art6',
    title: 'Space background',
    Owned_by: 'Fortis Design',
    price: 1245.35,
    description: 'Colorful explosion on dark wallpaper. Vector art. Futuristic explosion. Creative banner for website. Astronomy. Wave of light. Shining stars nebula. Cartoon drawing night painting',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2272132841/display_1500/stock-vector-space-background-colorful-explosion-on-dark-wallpaper-vector-art-futuristic-explosion-creative-2272132841.jpg',
    category: 'Art'
},
{
    id: 'art7',
    title: 'joysticks gamepad',
    Owned_by: 'cddesign.co',
    price: 300.00,
    description: 'Vector Seamless pattern with joysticks gamepad illustration and slogan text, for t-shirt prints and other uses.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1805459848/display_1500/stock-vector-vector-seamless-pattern-with-joysticks-gamepad-illustration-and-slogan-text-for-t-shirt-prints-1805459848.jpg',
    category: 'Art'
},
{
    id: 'art8',
    title: 'Japanese Landscape Watercolor',
    Owned_by: 'Bankphotographer',
    price: 1565.89,
    description: 'It is a traditional garden designed with Japanese aesthetics and philosophical concepts, avoiding artificial decorations and emphasizing the natural landscape. Japanese garden designers generally use plants and worn materials to suggest the natural landscape and to express the fragility of existence as well as the ceaseless progress of time [1]: 6. Ancient Japanese art is Inspiration for garden designers of the past',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2313039995/display_1500/stock-vector-japanese-landscape-watercolor-asia-art-2313039995.jpg',
    category: 'Art'
},
{
    id: 'art9',
    title: "David's head. Man",
    Owned_by: 'Unknown man',
    price: 667.00,
    description: 'Statue. Earphone. Isolated. Gypsum statue of David\'s head. Man. Creative. Plaster statue of David\'s head in pixel glasses. Minimal concept art.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1650203437/display_1500/stock-photo-statue-earphone-isolated-gypsum-statue-of-david-s-head-man-creative-plaster-statue-of-david-s-1650203437.jpg',
    category: 'Art'
},
{
    id: 'art10',
    title: 'Ancient torii gate',
    Owned_by: 'Bankphotographer',
    price: 1234.59,
    description: 'Japanese art with ancient design of Torii gate and the beautiful nature of Japan, vector illustration',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2321626339/display_1500/stock-vector-japanese-art-with-ancient-design-of-torii-gate-and-the-beautiful-nature-of-japan-vector-illustration-2321626339.jpg',
    category: 'Art'
},
{
    id: 'art11',
    title: 'catttttt',
    Owned_by: 'Md Abdul Barek',
    price: 435.00,
    description: 'Angry cat destroyed the world in pop-art style flat',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2277302713/display_1500/stock-vector-angry-cat-distroyed-the-world-in-pop-art-style-flat-2277302713.jpg',
    category: 'Art'
},
{
    id: 'art12',
    title: '☕',
    Owned_by: 'Master1305',
    price: 235.00,
    description: 'Morning coffee makes things better. Comics styled yellow suit. Modern design, contemporary art collage. Inspiration, idea, trendy urban magazine style. Negative space to insert your text or ad.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1909641286/display_1500/stock-photo-morning-coffee-makes-things-better-comics-styled-yellow-suit-modern-design-contemporary-art-1909641286.jpg',
    category: 'Art'
},
{
    id: 'art13',
    title: 'heart musical',
    Owned_by: 'rogistok',
    price: 256.00,
    description: 'Music in the heart, musical orchestral instruments. Comic cartoon pop art illustration retro vintage kitsch vector',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1021588924/display_1500/stock-vector-music-in-the-heart-musical-orchestral-instruments-comic-cartoon-pop-art-illustration-retro-1021588924.jpg',
    category: 'Art'
},
{
    id: 'art14',
    title: 'Monkey',
    Owned_by: 'Max9545',
    price: 999.00,
    description: 'Monkey with headphones listening to music. Colored digital vector drawing illustration. Abstract monkey for wall art, t-shirt, or poster. Digital art.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2019487502/display_1500/stock-vector-monkey-with-headphones-listening-to-music-colored-digital-vector-drawing-illustration-abstract-2019487502.jpg',
    category: 'Art'
},
{
    id: 'art15',
    title: 'eye',
    Owned_by: 'Mari Dein',
    price: 999.00,
    description: 'Fluorite” - oil painting. Conceptual abstract picture of the eye. Oil painting in colorful colors. Conceptual abstract closeup of an oil painting and palette knife on canvas.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1445018480/display_1500/stock-photo--fluorite-oil-painting-conceptual-abstract-picture-of-the-eye-oil-painting-in-colorful-1445018480.jpg',
    category: 'Art'
},
{
    id: 'art16',
    title: 'english bulldog',
    Owned_by: 'ARTEMENKO VALENTYN',
    price: 790.00,
    description: 'english bulldog portrait intellectual art',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1926395366/display_1500/stock-photo-english-bulldog-portrait-intellectual-art-1926395366.jpg',
    category: 'Art'
},
{
    id: 'art17',
    title: 'Sunflowers',
    Owned_by: 'Ivailo Nikolov',
    price: 800.00,
    description: 'Oil painting on canvas. Sunflowers painting. Modern impressionism.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2177029373/display_1500/stock-photo-oil-painting-on-canvas-sunflowers-painting-modern-impressionism-2177029373.jpg',
    category: 'Art'
},
{
    id: 'art18',
    title: 'New year sunrise',
    Owned_by: 'Abstract the studio',
    price: 1005.33,
    description: 'Beautiful Korea, new year sunrise and natural scenery, family wearing traditional hanbok, Korean traditional painting vector illustration.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1880178172/display_1500/stock-vector-beautiful-korea-new-year-sunrise-and-natural-scenery-family-wearing-traditional-hanbok-korean-1880178172.jpg',
    category: 'Art'
},
{
    id: 'art19',
    title: 'Chinese New Year 2023',
    Owned_by: 'extripod',
    price: 1756.70,
    description: 'Dynamic perfect animation for the year of rabbit',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2137532615/display_1500/stock-vector-happy-chinese-new-year-rabbit-zodiac-sign-with-gold-paper-cut-art-and-craft-style-on-color-2137532615.jpg',
    category: 'Art'
},
{
    id: 'art20',
    title: 'Paper Moon',
    Owned_by: 'yesdoubleyes',
    price: 1325.65,
    description: 'Paper Moon trippy spiral vj seamless looping animations, weird surreal dreamscape abstracts for music visualizers, acid flashback montages, strange and glitchy effects that hypnotize and inspire',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2144014629/display_1500/stock-vector-forest-layered-paper-cut-out-style-forest-vector-file-shadow-box-idea-layered-paper-cut-design-2144014629.jpg',
    category: 'Art'
},
{
    id: 'art21',
    title: 'Colorful seamless',
    Owned_by: 'Talirina',
    price: 1205.64,
    description: 'Colorful seamless pattern with leaves, spots. Decorative colored wallpaper, good for printing. Hand drawn overlapping background, texture with decor elements, lines and shapes. Design backdrop vector',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/1282448455/display_1500/stock-vector-colorful-seamless-pattern-with-leaves-spots-decorative-colored-wallpaper-good-for-printing-hand-1282448455.jpg',
    category: 'Art'
},
{
    id: 'art22',
    title: 'Cyber Cat',
    Owned_by: 'frozenbunn',
    price: 345.00,
    description: 'Vector art illustration - Cyber Cat.',
    descriptionfull: '',
    image: 'https://www.shutterstock.com/shutterstock/photos/2226852425/display_1500/stock-vector-vector-art-illustration-cyber-cat-2226852425.jpg',
    category: 'Art'
},
{
    id: 'art23',
    title: 'The Gotham',
    Owned_by: 'Anupa',
    price: 5000.00,
    description: "A city full of crime and there is only Batman. That's all it takes to make it end.",
    descriptionfull: "James's observations often don in combating various places. In Gotham City, it essentially follows the development and evolution of young Bruce Wayne, played by 'Gotham' David Mazouz, his transformation into the most famous vigilante.",
    image: 'https://i.pinimg.com/564x/6e/12/86/6e1286562758ae0528eb0e7283643855.jpg',
    category: 'Art'
},
])

return { Art_list }
})

export const useGame_listStore = defineStore('Game_list', () => {
    const Game_list = ref([
        {
            id: 'game1',
            title: 'Portrait of a futuristic',
            Owned_by: 'Digital Storm',
            price: 1152.82,
            description: 'Portrait of a futuristic sci-fi female wearing a tactical jumpsuit and a science fiction visor. Blurred lights background with lens flares. 3D rendering.',
            descriptionfull: '',
            image: 'https://www.shutterstock.com/shutterstock/photos/2043994739/display_1500/stock-photo-portrait-of-a-futuristic-sci-fi-female-wearing-a-tactical-jump-suit-and-a-science-fiction-visor-2043994739.jpg',
            category: 'Game'
        },
        {
            id: 'game2',
            title: 'Pixel Game',
            Owned_by: 'PixelChoice',
            price: 125.00,
            description: 'Pixel art design with outdoor landscape background. Colorful pixel arcade screen for game design. Banner with button level up. Game design concept in retro style. Vector illustration.',
            descriptionfull: '',
            image: 'https://www.shutterstock.com/shutterstock/photos/1715459347/display_1500/stock-vector-pixel-art-design-with-outdoor-landscape-background-colorful-pixel-arcade-screen-for-game-design-1715459347.jpg',
            category: 'Game'
        },
        {
            id: 'game3',
            title: 'Pixel Mona Lisa',
            Owned_by: 'NLD Illustration',
            price: 777.00,
            description: 'Pixel Art, Portrait of Mona Lisa, Leonardo da Vinci in frame. Creative artwork, crypto art, modern digital pixelated canvas, NFT nonfungible token. World\'s Most Famous Painting. Vector illustration.',
            descriptionfull: '',
            image: 'https://www.shutterstock.com/shutterstock/photos/2254415147/display_1500/stock-vector-pixel-art-portrait-of-mona-lisa-leonardo-da-vinci-in-frame-creative-artwork-crypto-art-modern-2254415147.jpg',
            category: 'Game'
        },
        {
            id: 'game4',
            title: 'Mobile game concept art',
            Owned_by: 'FGFACTORY',
            price: 777.00,
            description: 'We create game character concept art consequently allowing it to be 2d rendered or 3d modeled. Depending on project requirements.',
            descriptionfull: '',
            image: 'https://fgfactory.com/wp-content/uploads/2019/12/image1-3-1594x768.jpg',
            category: 'Game'
        },
        {
            id : 'game5',
            title: 'cyberpunk skull robot',
            Owned_by: 'GrandeDuc ',
            price: 1152.82,
            description: 'Hardwired cyberpunk skull robot - 3D illustration of science fiction cyberpunk skull faced grinning android wearing futuristic virtual reality glasses',
            descriptionfull: '',
            image: 'https://www.shutterstock.com/shutterstock/photos/2022343115/display_1500/stock-photo-hardwired-cyberpunk-skull-robot-d-illustration-of-science-fiction-cyberpunk-skull-faced-grinning-2022343115.jpg',
            category: 'Game'
        },
        {
            id: 'game6',
            title: 'pagoda tower',
            Owned_by: 'Jonistudio',
            price: 1846.00,
            description: 'Pagoda tower on the side of a quiet flowing river with cherry trees. Background of Mount Fujiyama, afternoon atmosphere. Animated looping background.',
            descriptionfull: '',
            image: 'https://www.shutterstock.com/shutterstock/photos/2322034225/display_1500/stock-vector-japan-landscape-flat-vector-art-illustration-retro-vintage-background-2322034225.jpg',
            category: 'Game'
        },
        {
            id: 'game7',
            title: 'mountains in style sumi-e, u-sin.',
            Owned_by: 'Bankphotographer',
            price: 985.63,
            description: 'Watercolor and ink illustration of Chinese landscape with pagoda and mountains in style sumi-e, u-sin. Traditional Asian architecture. Oriental traditional painting.',
            descriptionfull: '',
            image: 'https://www.shutterstock.com/shutterstock/photos/2310172265/display_1500/stock-vector-watercolor-and-ink-illustration-of-chinese-landscape-with-pagoda-and-mountains-in-style-sumi-e-u-2310172265.jpg',
            category: 'Game'
        },
        {
            id: 'game8',
            title: 'Duel of Death',
            Owned_by: 'Irina',
            price: 460.00,
            description: 'Starting a regular family game night is a great way to bond with your child while also helping them learn important skills.',
            descriptionfull: '',
            image: 'https://nogginsland.com/wp-content/uploads/2021/04/104151701-GettyImages-143949731-scaled.jpg',
            category: 'Game'
        },
        {
            id: 'game9',
            title: 'Titanfall',
            Owned_by: 'EA',
            price: 1050.00,
            description: 'Space war from the future who set out to colonize in order to survive',
            descriptionfull: '',
            image: 'https://getwallpapers.com/wallpaper/full/d/e/d/1444110-gorgerous-4k-games-wallpaper-3840x2160-for-ios.jpg',
            category: 'Game'
        },
        {
            id: 'game10',
            title: 'Friday the 13th',
            Owned_by: 'IllFonic',
            price: 250.00,
            description: 'Friday the 13th: The Game horror, survival game',
            descriptionfull: 'Survive from Jason. Find a way to escape from him or fight until you die.',
            image: 'https://getwallpapers.com/wallpaper/full/e/f/b/1444088-new-4k-games-wallpaper-3840x2160.jpg',
            category: 'Game'
        },
        {
            id: 'game11',
            title: 'Mario',
            Owned_by: 'ruiji',
            price: 450.00,
            description: 'Portly plumber who lives in the fictional land of the Mushroom Kingdom with Luigi.',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/31/41/42/31414253dd9f32f2553bcfc2ab415b5d.jpg',
            category: 'Game'
        },
        {
            id: 'game12',
            title: 'Pacman Game Over',
            Owned_by: 'mario0',
            price: 340.00,
            description: 'Game is Overrrrrrrrrr.',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/ac/34/dc/ac34dc6c06baeab25fef08b58a6c20e3.jpg',
            category: 'Game'
        },
        {
            id: 'game13',
            title: 'Skeleton Tundra',
            Owned_by: 'Minecraft',
            price: 450.00,
            description: '',
            descriptionfull: 'Everyone has a favorite movie; TV show; band or sports team. Whether you love an actor; character or singer or player; our posters run the gamut -- from cult classics to new releases; superheroes to divas; wise cracking cartoons to wrestlers; sports teams to player phenoms. Trends has them all.',
            image: 'https://i.pinimg.com/564x/59/fd/1d/59fd1d4bfe9938a459df2d15fff240c2.jpg',
            category: 'Game'
        },
        {
            id: 'game14',
            title: 'Dark Souls',
            Owned_by: 'FromSoftware',
            price: 550.00,
            description: 'for every death, there\'s always a reason to keep trying again, no matter how futile it may seem.',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/a4/50/8d/a4508dbc02f7b1ecb863ffa6ad2c2b60.jpg',
            category: 'Game'
        },
        {
            id: 'game15',
            title: 'Cuphead',
            Owned_by: 'StudioMDHR',
            price: 120.00,
            description: '',
            descriptionfull: 'Cuphead and his brother Mugman are two fun-loving kids who live under the watchful eye of Elder Kettle. Against the elder\'s warnings, the brothers enter the Devil\'s Casino and begin playing craps. When they go on a winning streak, the Devil himself offers to raise the stakes. If Cuphead and Mugman can win one more roll, they will receive all the money in the casino; if not, the Devil will take their souls.',
            image: 'https://i.pinimg.com/564x/f7/a7/d8/f7a7d8380fa4c309aa5b2f6434e5b6f6.jpg',
            category: 'Game'
        },
        {
            id: 'game16',
            title: 'Eeveelutions',
            Owned_by: 'Atsuko Nishida',
            price: 1230.00,
            description: 'Since its debut appearance, Eevee and its evolutions have received generally positive reception. GamesRadar described Eevee as',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/2c/cc/e4/2ccce46cf97587b979e4768240f1ccf3.jpg',
            category: 'Game'
        },
        {
            id: 'game17',
            title: 'Pokemon Emerald',
            Owned_by: 'Satoshitajiri',
            price: 350.00,
            description: 'Wide world adventure',
            descriptionfull: 'The Pokémon game series involves catching and battling Pokémon. Let\'s start with the starter Pokemon. Players can capture wild Pokémon by weakening them and capturing them with Pokéballs. On the other hand, they can choose to battle it to win and the Pokémon will gain experience points. By leveling it up and teaching it new moves, a Pokémon can evolve into a new, stronger form.',
            image: 'https://i.pinimg.com/564x/60/05/a3/6005a33720eeef5f03d5f8facd42ecda.jpg',
            category: 'Game'
        },
        {
            id: 'game18',
            title: 'Pac-Man',
            Owned_by: 'Toru Iwatani',
            price: 860.00,
            description: '',
            descriptionfull: 'Pac-Man is one of the longest-running, best-selling, and highest-grossing video game franchises in history, and the game has seen regular releases for over 40 years, has sold nearly 48 million copies across all of the platforms, and has grossed over US$14 billion, most of which has been from the original arcade game.',
            image: 'https://i.pinimg.com/564x/5a/71/82/5a7182f7990e9bb1bf06c30679a421d8.jpg',
            category: 'Game'
        },
        {
            id: 'game19',
            title: 'Rockman',
            Owned_by: 'Akira Kitamura',
            price: 960.00,
            description: '',
            descriptionfull: 'The original Rockman video game series consisted of the 10 base games, from Rockman to Rockman 10, and additional games on both PC and portable consoles like the Game Boy. This series of games is considered to be the origin of the original story of Rockman.',
            image: 'https://i.pinimg.com/564x/85/58/fa/8558fad512dbf8704a93a92a7f458c78.jpg',
            category: 'Game'
        },
        {
            id: 'game20',
            title: 'Luacky blox',
            Owned_by: 'ashishk3d',
            price: 34.00,
            description: 'Take your luck and take a chance.',
            descriptionfull: 'Lucky Blocks are a popular gameplay feature in the Minecraft modding community. These blocks add an element of randomness and excitement to the game by providing various unpredictable outcomes when broken. Here\'s how they work:',
            image: 'https://i.pinimg.com/236x/76/8c/3b/768c3bb9e36edf786d5b49e09e80f564.jpg',
            category: 'Game'
        },
        {
            id: 'game21',
            title: 'Tetris',
            Owned_by: 'Behance',
            price: 324.00,
            description: 'classic puzzle video game',
            descriptionfull: 'Tetris is a classic puzzle video game that was created by Russian game designer Alexey Pajitnov in 1984. It is one of the most iconic and enduring video games in history. The game\'s name is derived from the Greek prefix tetra which means four, and the game is played with various shapes made up of four square blocks called tetrominos.',
            image: 'https://i.pinimg.com/564x/cd/46/40/cd4640b6f96e8da2992c30599e30f4bc.jpg',
            category: 'Game'
        },
        {
            id: 'game22',
            title: 'Doom Eternal',
            Owned_by: 'ArtStation',
            price: 454.00,
            description: "My God, there's so many of them! Doomguy: For now...",
            descriptionfull: 'Doom Eternal players once again take on the role of the Doom Slayer, a heavily armed and powerful warrior, as they battle hordes of demons from Hell. The game features fast-paced, intense gameplay, with a focus on movement and combat mechanics. The Doom Slayer has a wide range of weapons and abilities at their disposal, allowing for creative and brutal ways to dispatch enemies.',
            image: 'https://i.pinimg.com/564x/8f/40/ea/8f40ea40416bb406f7d6c44fb1450801.jpg',
            category: 'Game'
        }
    ])
    

    return { Game_list }
})

export const usePhotography_listStore = defineStore('Photography_list', () => {
    const Photography_list = ref([
        {
            id: 'photo1',
            title: 'Star trail',
            Owned_by: 'Amazing Travel Lifestyle',
            price: 565.69,
            description: 'View of Table Mountain with star trail from Lion’s Head mountain, Cape Town, South Africa.',
            descriptionfull: '',
            image: 'https://www.shutterstock.com/shutterstock/photos/2180472695/display_1500/stock-photo-view-of-table-mountain-with-star-trail-form-lion-s-head-mountain-cape-town-cape-town-south-2180472695.jpg',
            category: 'Pho'
        },
        {
            id: 'photo2',
            title: 'milky way above frozen',
            Owned_by: 'Addictive Creative',
            price: 685.79,
            description: 'Picturesque glowing stars of milky way above frozen sea surrounding high rocky snowy Vestrahorn mountain in Stockness Beach, Iceland.',
            descriptionfull: '',
            image: 'https://www.shutterstock.com/shutterstock/photos/2250976357/display_1500/stock-photo-picturesque-glowing-stars-of-milky-way-above-frozen-sea-surrounding-high-rocky-snowy-vestrahorn-2250976357.jpg',
            category: 'Pho'
        },
        {
            id: 'photo3',
            title: 'Your own value',
            Owned_by: 'M. Scott Peck',
            price: 862,
            description: 'Until you value yourself, you will not value your time.',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/a9/fa/08/a9fa0836ac7edb7b707a0306e805b439.jpg',
            category: 'Pho'
        },
        {
            id: 'photo4',
            title: 'cat in morning',
            Owned_by: 'Matteo Petralli',
            price: 300.00,
            description: 'In the refreshing morning, Emma slowly woke up from her bed, as if her body was emerging from a state of weakness from sleep. Her eyes began to open, gradually adjusting to the warm, cozy surroundings of her bedroom.',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg',
            category: 'Pho'
        },
        {
            id: 'photo5',
            title: 'Night Town',
            Owned_by: "Elijah O'Donnell",
            price: 450.00,
            description: 'In the refreshing morning, Emma slowly woke up from her bed, as if her body was emerging from a state of weakness from sleep. Her eyes began to open, gradually adjusting to the warm, cozy surroundings of her bedroom.',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo6',
            title: 'Ultraman nice boy',
            Owned_by: 'Tsuburaya',
            price: 9999.00,
            description: 'ha ha ha ...',
            descriptionfull: '',
            image: 'https://i.pinimg.com/originals/cf/4f/e1/cf4fe1d466d0fd90da22b6b9ce409287.jpg',
            category: 'Pho'
        },
        {
            id: 'photo7',
            title: 'Spiderman',
            Owned_by: 'Stan Lee',
            price: 450.00,
            description: 'With great power comes great responsibility.',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/09/f0/0b/09f00be7b3bae2c217e53a3ac3ce8fb9.jpg',
            category: 'Pho'
        },
        {
            id: 'photo8',
            title: 'universe of chaos: Photo',
            Owned_by: 'Anonymous Monk',
            price: 367.00,
            description: 'Pure hellsite effervescence. Home of Reblogs. All the art you never knew you needed. Your new fandom communities. Add to it or scroll through and soak it up.',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/6e/3e/9d/6e3e9dcee279be287b1b16860394028c.jpg',
            category: 'Pho'
        },
        {
            id: 'photo9',
            title: 'fear of time',
            Owned_by: 'Earl Nightingale',
            price: 767.00,
            description: 'Don’t let the fear of the time it will take to accomplish something stand in the way of your doing it. The time will pass anyway; we might as well put that passing to the best possible use.',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/75/ce/39/75ce392ab612950ec2e8845c10afe28c.jpg',
            category: 'Pho'
        },
        {
            id: 'photo10',
            title: 'Over the moon',
            Owned_by: 'Lamba Meitei',
            price: 367.00,
            description: 'Be over the moon',
            descriptionfull: 'I\'ve been over the moon ever since I got engaged—I just can\'t stop looking at my ring!',
            image: 'https://image.dek-d.com/contentimg/2018/miew/moon/moon-323425_960_720.jpg',
            category: 'Pho'
        },
        {
            id: 'photo11',
            title: 'Your own value',
            Owned_by: 'M. Scott Peck',
            price: 862.00,
            description: 'Until you value yourself, you will not value your time.',
            descriptionfull: '',
            image: 'https://i.pinimg.com/564x/a9/fa/08/a9fa0836ac7edb7b707a0306e805b439.jpg',
            category: 'Pho'
        },
        {
            id: 'photo12',
            title: 'Light Trails on the Expressway',
            Owned_by: 'Geni Hoka',
            price: 5000.00,
            description: '',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo13',
            title: 'Green Pine Trees',
            Owned_by: 'eberhard grossgasteiger',
            price: 1000.00,
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/1287128/pexels-photo-1287128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo14',
            title: 'Hot Air Balloons in Cappadocia Sky',
            Owned_by: 'Eyup Sayar',
            price: 1000.00,
            description: '',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/18373308/pexels-photo-18373308/free-photo-of-hot-air-balloons-in-cappadocia-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo15',
            title: 'Hot Air Balloons Flying Over Grass Field',
            Owned_by: 'Maria Loznevaya',
            price: 1200.00,
            description: '',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/13164299/pexels-photo-13164299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo16',
            title: 'Hot Air Balloons over the Mountains',
            Owned_by: 'jin yang',
            price: 1000.00,
            description: '',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/8099224/pexels-photo-8099224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo17',
            title: 'Photo Of Ocean And Sky',
            Owned_by: 'Emiliano Arano',
            price: 1000.00,
            description: '',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/1370725/pexels-photo-1370725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo18',
            title: 'Flowing Water in the Rocky Mountains',
            Owned_by: 'TA MEDIA',
            price: 1000.00,
            description: '',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/8614603/pexels-photo-8614603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo19',
            title: 'Rocks Covered in Moss and Sea',
            Owned_by: 'Le Anh Tuan',
            price: 1000.00,
            description: '',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/15613087/pexels-photo-15613087/free-photo-of-rocks-covered-in-moss-and-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo20',
            title: 'Aerial View of Long Exposure of Sea of Clouds',
            Owned_by: 'Zetong Li',
            price: 1000.00,
            description: 'A natural landscape is the original landscape that exists before it is acted upon by human culture',
            descriptionfull: '',
            image: 'https://images.pexels.com/photos/9877697/pexels-photo-9877697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
    ])

    return { Photography_list }
})