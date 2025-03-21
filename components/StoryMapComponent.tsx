import { useLayoutEffect, useRef } from "react";  // 修改这里
import { StoryMap } from "@/lib/storyMap/StoryMap";
import type { StoryMapConfig } from "@/lib/storyMap/config";

interface StoryMapProps extends Partial<StoryMapConfig> {
  className?: string;
  children?: React.ReactNode;
}

export default function StoryMapComponent({
  className = "",
  children,
  ...config
}: StoryMapProps) {
  const mapRef = useRef<StoryMap | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {  // 使用 useLayoutEffect
    if (!containerRef.current || mapRef.current) return;

    // 创建 StoryMap 实例
    const storyMap = new StoryMap({
      ...config,
      container: ".story-map-container",
      textContainer: ".story-map-text",
    });

    // 保存实例以便清理
    mapRef.current = storyMap;

    // 初始化地图
    storyMap.init();

    // 清理函数
    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, []);  // 依赖数组保持为空

  return (
    <>
      <div
        className={`story-map-container dark:invert ${className}`}
        ref={containerRef}
      ></div>
      <div className="story-map-text text-nord-0 dark:text-nord-4 after:bg-[#a3be8c26] after:dark:bg-black/5">
        {children}
      </div>
    </>
  );
}
