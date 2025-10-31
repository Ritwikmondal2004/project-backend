import mongoose, { Schema } from "mongoose";
const subscriptionSchema = new Schema(
  // Argument 1: Schema Definition Object
  {
    subscriber: {
      type: Schema.Types.ObjectId, // one who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // one *being* subscribed to (the channel owner)
      ref: "User",
    },
  },
  // Argument 2: Schema Options Object
  {
    timestamps: true,
  }
);

// Note: You imported mongooseAggregatePaginate but didn't use it.
// If you intend to use it, you need to apply it as a plugin:
// subscriptionSchema.plugin(mongooseAggregatePaginate);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
