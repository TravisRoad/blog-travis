export interface StoryMapConfig {
  textContainer: string;
  container: string;
  mapSrc: string;
  trailVisitedColor?: string;
  fontPresentColor?: string;
}

export const defaultConfig: StoryMapConfig = {
  textContainer: ".story-map-text",
  container: ".container",
  mapSrc: "story-map/map.svg",
  trailVisitedColor: "#47DBB4",
  fontPresentColor: "#5D5C56",
};
