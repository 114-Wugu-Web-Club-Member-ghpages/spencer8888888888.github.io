import DiaryCard from "@/components/DiaryCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState } from "react";
import studyImage from "@assets/generated_images/Study_desk_daily_life_8c144379.png";
import cafeImage from "@assets/generated_images/Cafe_moment_daily_life_c665904d.png";
import cherryImage from "@assets/generated_images/Cherry_blossom_park_scene_b0b95d1f.png";
import bookshelfImage from "@assets/generated_images/Bookshelf_reading_corner_215a501e.png";

export default function Diary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allDiaries = [
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
    {
      id: "4",
      title: "我的閱讀角落",
      excerpt: "終於把房間的一角布置成了理想的閱讀空間。書架上擺滿了喜歡的書，綠色植物點綴其中，這裡成了我最喜歡的放鬆之地。",
      date: "2025-10-20",
      image: bookshelfImage,
      tags: ["閱讀", "生活", "日常"],
      mood: "📚",
    },
  ];

  const allTags = Array.from(new Set(allDiaries.flatMap((d) => d.tags)));

  const filteredDiaries = allDiaries.filter((diary) => {
    const matchesSearch = diary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         diary.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || diary.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold">我的日記</h1>
          <p className="text-muted-foreground mt-2">記錄生活中的每一個瞬間</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="搜尋日記..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            data-testid="input-search-diary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer rounded-full"
            onClick={() => setSelectedTag(null)}
            data-testid="badge-filter-all"
          >
            全部
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer rounded-full"
              onClick={() => setSelectedTag(tag)}
              data-testid={`badge-filter-${tag}`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiaries.map((diary) => (
          <DiaryCard key={diary.id} {...diary} />
        ))}
      </div>

      {filteredDiaries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">沒有找到相關的日記</p>
        </div>
      )}
    </div>
  );
}
