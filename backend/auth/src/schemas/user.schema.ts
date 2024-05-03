import mongoose, { Schema } from 'mongoose';

// const schema = new Schema({
//   firstName: { 
//     type: String,
//     required: true 
//   },
//   lastName: { 
//     type: String,
//     required: true 
//   },
// });



// export const UserModel = mongoose.model('User', schema);


const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  });
  
  // interface
  export interface IUser extends Document {
    firstName: string;
    lastName: string;
  }
  
  export default mongoose.model<IUser>(
    "User",
    UserSchema
  );