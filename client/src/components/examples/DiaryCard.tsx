import DiaryCard from '../DiaryCard'
import studyImage from '@assets/generated_images/Study_desk_daily_life_8c144379.png'

export default function DiaryCardExample() {
  return (
    <div className="max-w-sm">
      <DiaryCard
        id="1"
        title="充實的讀書日"
        excerpt="今天在圖書館度過了一整天，準備期末考試。雖然很累，但看著筆記本上滿滿的重點，覺得很有成就感。"
        date="2025-11-05"
        image={studyImage}
        tags={["學習", "日常"]}
        mood="😊"
      />
    </div>
  )
}
