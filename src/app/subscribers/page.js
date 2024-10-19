import React from 'react'
import Subscribers from '../../components/subscribers'
import SubscriptionForm from '../../components/subscription-form'

import { getStillSubscribers } from "@/queries/subscribers";
import { getUnSubscribers } from "@/queries/subscribers";

const page = async() => {
  const still = await getStillSubscribers();
  const unsub = await getUnSubscribers();


  return (
    <div className="lg:flex md:flex">
 
        <Subscribers subscribers={still} unsub={unsub} />
        <SubscriptionForm /> 
    </div>
  )
}
 
export default page