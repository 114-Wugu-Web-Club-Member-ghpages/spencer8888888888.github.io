import GalleryGrid from '../GalleryGrid'
import studyImage from '@assets/generated_images/Study_desk_daily_life_8c144379.png'
import cafeImage from '@assets/generated_images/Cafe_moment_daily_life_c665904d.png'
import cherryImage from '@assets/generated_images/Cherry_blossom_park_scene_b0b95d1f.png'

export default function GalleryGridExample() {
  const images = [
    { id: '1', src: studyImage, alt: '讀書時光', caption: '充實的學習日常' },
    { id: '2', src: cafeImage, alt: '咖啡時光', caption: '下午茶時光' },
    { id: '3', src: cherryImage, alt: '櫻花季', caption: '春天的櫻花' },
  ]

  return <GalleryGrid images={images} />
}
