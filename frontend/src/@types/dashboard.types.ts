import { IBanner } from "./hero.types";

export interface IBannerFormProps {
  banner?: IBanner;
  onUpload?: (formData: FormData) => Promise<void>;
  onUpdate?: (updatedBanner: IBanner) => Promise<void>;
  onClose: () => void;
}

export interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
