import Promo from "@/app/components/promo/Promo";
import Banner from "@/app/components/banner/Banner";
import GamesList from "@/app/components/gamesList/GamesList";

const popularGames = [
    {
        title: "Crystal Kepper",
        description: "Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.",
        author: "Lonely Baobab",
        votes: 20,
        imageUrl: "https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png",
    },
    {
        title: "Dangeons'n'Caves. Prologue",
        description: "Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.",
        author: "F-Style",
        votes: 10,
        imageUrl: "https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png",
    },
    {
        title: "Defence of Crystal",
        description: "Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.",
        author: "MastWe",
        votes: 20,
        imageUrl: "https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png",
    },
];

const newGames = [
    {
        title: "Go Away",
        description: "Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню.",
        author: "Mahisto",
        votes: 20,
        imageUrl: "https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg",
    },
    {
        title: "G.U.N.N.E.R.",
        description: "Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше.",
        author: "IDKWIAm",
        votes: 10,
        imageUrl: "https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png",
    },
    {
        title: "Space Terror",
        description: "Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.",
        author: "IDKWIAm",
        votes: 20,
        imageUrl: "https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png",
    },
    {
        title: "Square Slayer",
        description: "Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень.",
        author: "niclan",
        votes: 10,
        imageUrl: "https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png",
    },
];

export default function Home() {
  return (
      <main className="main">
        <Banner />
        {/* Import popularGames and newGames here */}
        <GamesList title="Популярное" games={popularGames} />
        <GamesList title="Новинки" games={newGames} />
        <Promo />
      </main>
  );
}
