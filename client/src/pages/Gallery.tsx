import GalleryGrid from "@/components/GalleryGrid";
import studyImage from "@assets/generated_images/Study_desk_daily_life_8c144379.png";
import cafeImage from "@assets/generated_images/Cafe_moment_daily_life_c665904d.png";
import cherryImage from "@assets/generated_images/Cherry_blossom_park_scene_b0b95d1f.png";
import bookshelfImage from "@assets/generated_images/Bookshelf_reading_corner_215a501e.png";

export default function Gallery() {
  const galleryImages = [
    {
      id: "1",
      src: studyImage,
      alt: "讀書時光",
      caption: "圖書館的充實時光",
    },
    {
      id: "2",
      src: cafeImage,
      alt: "咖啡廳",
      caption: "最愛的咖啡廳一角",
    },
    {
      id: "3",
      src: cherryImage,
      alt: "櫻花季",
      caption: "春天的櫻花公園",
    },
    {
      id: "4",
      src: bookshelfImage,
      alt: "閱讀角落",
      caption: "我的專屬閱讀空間",
    },
    {
      id: "5",
      src: studyImage,
      alt: "學習日常",
      caption: "準備考試中",
    },
    {
      id: "6",
      src: cafeImage,
      alt: "下午茶",
      caption: "悠閒的午後時光",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">生活相簿</h1>
        <p className="text-muted-foreground mt-2">用鏡頭捕捉美好的每一刻</p>
      </div>

      <GalleryGrid images={galleryImages} />
    </div>
  );
}
