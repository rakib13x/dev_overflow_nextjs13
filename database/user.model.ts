import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  localtion?: string;
  portfolioWebsite?: string;
  reputation?: string;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: { type: Date, default: Date.now },
});

// to check if the model already exist if not we can create it by saying model("Question", QuestionSchema);

const User = models.User || model("User", UserSchema);

export default User;

// import { Schema, models, model, Document } from "mongoose";

// export interface IUser extends Document {}

// const UserSchema = new Schema({});

// // to check if the model already exist if not we can create it by saying model("Question", QuestionSchema);

// const User = models.User || model("User", UserSchema);

// export default User;