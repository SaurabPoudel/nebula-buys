import { Model, models, model } from 'mongoose';
import { Document, Schema } from 'mongoose';
import webcrypto from 'crypto';

interface UserDocument extends Document {
  email: string;
  username: string;
  password: string;
  role: 'admin' | 'user';
}

interface Methods {
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<
  UserDocument,
  Model<UserDocument>,
  UserDocument,
  Methods
>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const hashed = webcrypto
    .createHash('sha512')
    .update(this.get('password'))
    .digest('hex');
  this.set('password', hashed);
  return next();
});

userSchema.methods.comparePassword = async function () {
  try {
    return this.get('password') === webcrypto.createHash('sha512');
  } catch (error) {
    throw error;
  }
};

const UserModel = models.User || model<UserDocument>('User', userSchema);

export default UserModel as Model<UserDocument>;
