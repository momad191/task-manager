import { Subscriber } from "@/model/subs-model";
// import { replaceMongoIdInArray } from "@/lib/transform"; // to return all _id to String id

export async function getSubscribers() {
  try {
    const subscribers = await Subscriber.find({});
    return subscribers;
  } catch (e) {
    throw new Error(e.message);
  }
}

 

export async function getUnSubscribers() {
  try {
    const unsub = await Subscriber.find({unsubscribed:true});
    return unsub;
  } catch (e) {
    throw new Error(e.message);
  }
}


export async function getStillSubscribers() {
  try {
    const still = await Subscriber.find({unsubscribed:false});
    return still;
  } catch (e) {
    throw new Error(e.message);
  }
}