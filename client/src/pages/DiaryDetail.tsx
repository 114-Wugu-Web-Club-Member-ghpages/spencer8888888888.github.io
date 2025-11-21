import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Heart } from "lucide-react";
import studyImage from "@assets/generated_images/Study_desk_daily_life_8c144379.png";
import cafeImage from "@assets/generated_images/Cafe_moment_daily_life_c665904d.png";
import cherryImage from "@assets/generated_images/Cherry_blossom_park_scene_b0b95d1f.png";
import bookshelfImage from "@assets/generated_images/Bookshelf_reading_corner_215a501e.png";

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:id");
  const diaryId = params?.id;

  const diaryData: Record<string, any> = {
    "1": {
      title: "充實的讀書日",
      date: "2025-11-05",
      image: studyImage,
      tags: ["學習", "日常"],
      mood: "😊",
      content: `今天在圖書館度過了一整天，準備期末考試。早上九點到達圖書館，找了一個靠窗的位置坐下。陽光透過窗戶灑進來，整個人都充滿了能量。

雖然要背的東西很多，考試範圍也很廣，但看著筆記本上滿滿的重點，覺得很有成就感。每完成一個章節的複習，就給自己一個小小的獎勵，到樓下買杯咖啡或是吃點小零食。

圖書館裡很安靜，只有翻書和寫字的沙沙聲。看著周圍的同學都在認真學習，自己也更有動力了。這種氛圍真的很棒，讓人能夠靜下心來專注學習。

晚上回到家，雖然很累，但心裡很踏實。希望這次考試能有好成績！加油！`,
    },
    "2": {
      title: "咖啡廳的午後",
      date: "2025-11-03",
      image: cafeImage,
      tags: ["咖啡", "放鬆"],
      mood: "☕",
      content: `今天和朋友約在一家新開的咖啡廳見面。這家店的裝潢很有特色，復古又溫馨，一進門就被吸引了。

點了一杯拿鐵，咖啡師的拉花技術真的很厲害！咖啡上面是一個可愛的心形圖案，都捨不得喝了。味道也很棒，不會太苦，奶香味剛剛好。還點了一塊蛋糕，入口即化，甜度適中。

坐在窗邊，看著街上的人來人往，感覺時間都慢了下來。和朋友聊了很久，從學業聊到生活，從夢想聊到未來。這樣的午後時光真的很珍貴。

離開時已經是傍晚了，天空染上了淡淡的粉色。帶著滿滿的幸福感回家，決定以後要常來這裡。`,
    },
    "3": {
      title: "櫻花盛開的公園",
      date: "2025-10-28",
      image: cherryImage,
      tags: ["旅行", "攝影", "春天"],
      mood: "🌸",
      content: `趁著週末天氣好，去了市郊的櫻花公園賞花。到達的時候正好是上午，陽光很溫暖，微風吹過，粉色的花瓣隨風飄落，像是下了一場櫻花雨。

公園裡人不多，很適合拍照。我帶著相機，記錄下這些美麗的瞬間。每一棵櫻花樹都開得很茂盛，粉嫩的花朵在藍天的襯托下，顯得格外美麗。

找了一棵大樹下的長椅坐下，靜靜地欣賞這片美景。不時有花瓣飄落，有的落在頭髮上，有的落在衣服上，輕輕的，柔柔的。

春天真的是最浪漫的季節，充滿了希望和美好。在這裡度過了一個完美的下午，拍了好多照片，也收穫了滿滿的好心情。`,
    },
    "4": {
      title: "我的閱讀角落",
      date: "2025-10-20",
      image: bookshelfImage,
      tags: ["閱讀", "生活", "日常"],
      mood: "📚",
      content: `終於把房間的一角布置成了理想的閱讀空間！花了整個週末的時間整理和布置，雖然累但很值得。

書架上整齊地擺放著我收藏的書籍，從小說到散文，從詩集到攝影集，每一本都是我的寶貝。還特意買了幾盆綠色植物擺在書架上，增添了一些生機。

在窗邊放了一張舒適的椅子和小桌子，以後可以在這裡安靜地閱讀了。光線很好，白天幾乎不需要開燈。晚上的時候，台燈會投下溫暖的光，營造出很棒的閱讀氛圍。

這裡已經成為了我最喜歡的地方，每天回家都想在這裡待一會兒。讀一本好書，喝一杯茶，度過一段安靜的時光。`,
    },
  };

  const diary = diaryId ? diaryData[diaryId] : null;

  if (!diary) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">找不到這篇日記</p>
        <Link href="/diary">
          <Button variant="outline" className="mt-4" data-testid="button-back-diary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回日記列表
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Link href="/diary">
        <Button variant="ghost" className="gap-2" data-testid="button-back">
          <ArrowLeft className="w-4 h-4" />
          返回日記
        </Button>
      </Link>

      <article className="space-y-6">
        <div className="aspect-video overflow-hidden rounded-2xl">
          <img
            src={diary.image}
            alt={diary.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{diary.title}</h1>

          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{diary.date}</span>
            </div>
            {diary.mood && (
              <>
                <span>•</span>
                <span className="text-2xl">{diary.mood}</span>
              </>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            {diary.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {diary.content.split('\n\n').map((paragraph: string, index: number) => (
            <p key={index} className="leading-relaxed text-foreground mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 pt-8 border-t border-border">
          <Heart className="w-5 h-5 text-primary" />
          <span className="text-muted-foreground">感謝閱讀</span>
        </div>
      </article>
    </div>
  );
}
