import mongoose from 'mongoose';

const connect = async () => {
  const uri = process.env.MONGO_URI as string;
  try {
    await mongoose.connect(uri);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting', error);
  }
};

export default connect;
