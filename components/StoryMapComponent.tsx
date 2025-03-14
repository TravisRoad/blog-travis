import { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (!containerRef.current) return;

    // 创建 StoryMap 实例
    const storyMap = new StoryMap({
      ...config,
      container: ".container", // 使用固定的容器类名
      textContainer: ".text", // 使用固定的文本容器类名
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
  }, []); // 仅在组件挂载时运行

  return (
    <>
      <div
        className={`container ${className}`}
        ref={containerRef}
      ></div>
      <div className="text">
        {children}
      </div>
    </>
  );
}
