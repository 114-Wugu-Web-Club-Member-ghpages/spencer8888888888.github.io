import HeroSection from "@/components/HeroSection";
import DiaryCard from "@/components/DiaryCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import studyImage from "@assets/generated_images/Study_desk_daily_life_8c144379.png";
import cafeImage from "@assets/generated_images/Cafe_moment_daily_life_c665904d.png";
import cherryImage from "@assets/generated_images/Cherry_blossom_park_scene_b0b95d1f.png";

export default function Home() {
  const recentDiaries = [
    {
      id: "1",
      title: "充實的讀書日",
      excerpt: "今天在圖書館度過了一整天，準備期末考試。雖然很累，但看著筆記本上滿滿的重點，覺得很有成就感。陽光透過窗戶灑進來，整個人都充滿了能量。",
      date: "2025-11-05",
      image: studyImage,
      tags: ["學習", "日常"],
      mood: "😊",
    },
    {
      id: "2",
      title: "咖啡廳的午後",
      excerpt: "找到一家超棒的咖啡廳！拿鐵的拉花好漂亮，蛋糕也很好吃。坐在窗邊看著街上的人來人往，感覺時間都慢了下來。",
      date: "2025-11-03",
      image: cafeImage,
      tags: ["咖啡", "放鬆"],
      mood: "☕",
    },
    {
      id: "3",
      title: "櫻花盛開的公園",
      excerpt: "趁著週末去公園賞櫻，粉色的花瓣隨風飄落，真的太美了！拍了好多照片，春天真的是最浪漫的季節。",
      date: "2025-10-28",
      image: cherryImage,
      tags: ["旅行", "攝影", "春天"],
      mood: "🌸",
    },
  ];

  return (
    <div className="space-y-12">
      <HeroSection />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">最新日記</h2>
            <p className="text-muted-foreground mt-2">記錄生活中的點點滴滴</p>
          </div>
          <Link href="/diary">
            <Button variant="ghost" className="gap-2" data-testid="link-all-diary">
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentDiaries.map((diary) => (
            <DiaryCard key={diary.id} {...diary} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">歡迎來到我的小天地</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          這裡記錄著我的日常生活、學習心得和旅行見聞。希望通過這些文字和照片，能和大家分享生活中的美好時刻。
        </p>
        <Link href="/about">
          <Button variant="default" size="lg" className="mt-4" data-testid="button-learn-more">
            了解更多關於我
          </Button>
        </Link>
      </section>
    </div>
  );
}
