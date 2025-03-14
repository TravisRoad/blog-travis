import { StoryMapConfig, defaultConfig } from "./config";
import CanvasMap from "./canvas-map";

export class StoryMap {
  private map: any;
  private config: StoryMapConfig;

  constructor(config: Partial<StoryMapConfig> = {}) {
    this.config = {
      ...defaultConfig,
      ...config,
    };
  }

  public init(): void {
    this.map = CanvasMap({
      textContainer: document.querySelector(this.config.textContainer),
      mapSrc: this.config.mapSrc,
      trailVisitedColor: this.config.trailVisitedColor,
      fontPresentColor: this.config.fontPresentColor,
    }).appendTo(this.config.container);
  }

  public destroy(): void {
    // 清理资源的方法
    if (this.map) {
      // TODO: 实现清理逻辑
    }
  }
}
