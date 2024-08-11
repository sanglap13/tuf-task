export interface IBanner {
  id: number;
  imageUrl: string;
  description: string;
  timer: number;
  visibility: boolean;
}

export interface IHeroProps {
  banners: IBanner[];
}
