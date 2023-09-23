export interface ICategory {
  id: number;
  name: string;
}

export interface IProduit {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  promotion?: IPromotion | safePromotionType[] | boolean;
  category: ICategory;
}

export interface IPromotion {
  id: number;
  dateDebut: Date;
  dateFin: Date;
  reduction: number;
}

export type safePromotionType = Omit<IPromotion, "dateDebut" | "dateFin"> & {
  dateDebut: string;
  dateFin: string;
};
