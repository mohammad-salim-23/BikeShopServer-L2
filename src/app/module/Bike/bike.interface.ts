import { Model} from 'mongoose';


export interface IBike  {
  name: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  stock: number;
  availability?: boolean;
  engineCapacity: number; // in cc
  color: string[]; // Array of colors
  image: string; // URL of the bike image
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
//Define Mongoose Model Interface
export interface BikeModel extends Model<IBike> {}