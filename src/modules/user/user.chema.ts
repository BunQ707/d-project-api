import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EmbeddedDocument } from 'src/shared/utils';

export type UserDocument = User & Document;

@Schema({ _id: false })
export class Profile extends EmbeddedDocument {
  @Prop() Pregnancies: number;
  @Prop() Insulin: number;
  @Prop() Height: number;
  @Prop() Weight: number;
  @Prop() Age: number;
  @Prop() Glucose: number;
  @Prop() BloodPressure: number;
  @Prop() DiabetesPedigreeFunction: number;
  @Prop() SkinThickness: number;
  @Prop() prediction: boolean;

  @Prop() Gender: number;
  @Prop() DiabetesType: number;
}
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  profile: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);
