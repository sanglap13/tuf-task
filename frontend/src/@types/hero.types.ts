export interface IBanner {
  id: number;
  imageUrl: string;
  description: string;
  timer: number;
  visibility: boolean;
}

export interface IHeroProps {
  visibleBanners: IBanner[];
  timer: number;
  currentIndex: number;
}
