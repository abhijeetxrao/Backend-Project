import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
  },
  fullName:{
    type:String,
    required:true,
    trim:true,
    index:true
  },
  avatar:{
    type:String,
    required:true,
  },
  coverimage:{
    type:String
  },
  watchHistory:[{
    type:Schema.type.ObjectId,
    ref:'Video'
  }],
  password:{
    type:String,
    required:true,
  },
  refreshToken:{
    type:String
  }
},{timestamps:true});

userSchema.pre('Save', async function(next){
  if(!bcrypt.isModified('password')) return next();
  this.password = bcrypt.hash(this.password,10)
  next()
});

userSchema.methods.isPasswordCorrect = async function(password){
  await bcrypt.compare(password, this.password);
}

export const User = mongoose.model('User',userSchema)