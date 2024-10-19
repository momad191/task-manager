
"use client"
 import { deleteEmail } from "@/app/actions/email"
 import { updateEmail } from "@/app/actions/email"
 import { openEmail } from "@/app/actions/email"
 
 
 
const Subscribers = ({subscribers,unsub}) => {
 


const handleDelete = async (id) => {
  var result = confirm("Want to delete?");
      if (result) {
        await deleteEmail(id);
      }
  };


  const handleClose = async(id) => {
    var result = confirm("Want to close?");
        if (result) {
          await updateEmail(id);
        }
    };


    const handleOpen = async(id) => {
      var result = confirm("Want to open?");
          if (result) {
            await openEmail(id);
          }
      };



  return (
<> 
  <div className=" mb-10 mx-auto px-4 flex   max-w-screen-lg ">
  <div className="w-full bg-white shadow-lg rounded-lg p-6 sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
    <h2 className="text-2xl font-bold text-center mb-6">Subscribers List</h2>

    {subscribers.length > 0 ? (
      <ul className="space-y-1">
        {subscribers.map((subscriber) => (
          <li
            key={subscriber._id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-md shadow-sm"
          >
            <div className="mb-4 sm:mb-0 sm:mr-10">
              <p className="font-semibold text-gray-800">{subscriber.name}</p>
              <p className="text-sm text-gray-600">{subscriber.email}</p>
            </div>
            <div className="space-x-0 sm:space-x-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0">
              <button
              onClick={() => handleClose(subscriber._id)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out w-full sm:w-auto"
              >
               make unsubscribed  
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out w-full sm:w-auto"
                onClick={() => handleDelete(subscriber._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-500">No subscribers found.</p>
    )}
  </div>
</div>










<div className=" mb-10 mx-auto px-4 flex   max-w-screen-lg ">
  <div className="w-full bg-white shadow-lg rounded-lg p-6 sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
    <h2 className="text-2xl font-bold text-center mb-6">UnSub </h2>

    {unsub.length > 0 ? (
      <ul className="space-y-1">
        {unsub.map((subscriber) => (
          <li
            key={subscriber._id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-md shadow-sm"
          >
            <div className="mb-4 sm:mb-0 sm:mr-10">
              <p className="font-semibold text-gray-800">{subscriber.name}</p>
              <p className="text-sm text-gray-600">{subscriber.email}</p>
            </div>
            <div className="space-x-0 sm:space-x-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0">
              <button
              onClick={() => handleOpen(subscriber._id)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out w-full sm:w-auto"
              >
               make still subscribed  
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out w-full sm:w-auto"
                onClick={() => handleDelete(subscriber._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-500">All still with us </p>
    )}
  </div>
</div>



</>
     
  );
};
 
export default Subscribers;
