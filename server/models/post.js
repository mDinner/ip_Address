import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  category: { type: 'String', required: true, default: 'review'},
  rating: { type: Number, required: true, default: 1 }, 
  hasRating: { type: Boolean, required: false },
  othersCanRate: { type: Boolean, required: false },
  othersCanComment: { type: Boolean, required: false },
  commentsHaveRatings: { type: Boolean, required: false },
  isPoll: { type: Boolean, required: false },
});

export default mongoose.model('Post', postSchema);
