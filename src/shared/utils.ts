import { SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema } from 'mongoose';

export class EmbeddedDocument extends Document {
  static get schema(): Schema {
    return SchemaFactory.createForClass(this as any);
  }
}
