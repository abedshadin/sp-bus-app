import React from "react";

export default function Modal(props) {
    const {b_id,b_name,b_img_out,b_img_in,b_type,b_sp_loc,b_dk_loc,b_route,b_seat,b_sp_time,b_dk_time,b_img_out_credit} = props.bus;
    console.log(b_id)
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>   See Details
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   {b_name}
                  </h3>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th colspan="2" scope="col" className="px-5 py-3">
Images
</th>

</tr>
<tr>
<th scope="col" className="px-5 py-3 w-10"> <img src={b_img_out} alt=""/></th>
<th scope="col" className="px-5 py-3 w-10"> <img src={b_img_in} alt="" /></th>
</tr>
</thead>
<tbody></tbody>
</table>
</div>
               
                

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th colspan="2" scope="col" className="px-5 py-3">
Informations
</th>

</tr>
</thead>
<tbody>


<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<th scope="row" className="px-5 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
{b_route.from} Counter
</th>
<th className="px-5 py-4 dark:text-white">
{b_sp_loc}
</th>


</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<th scope="row" className="px-5 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
{b_route.to} Counter
</th>
<th className="px-5 py-4 dark:text-white">
{b_dk_loc}
</th>


</tr>

<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<th scope="row" className="px-5 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
 Departure From {b_route.from}
</th>
<th className="px-5 py-4 dark:text-white">
{b_sp_time.dep}
</th>


</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<th scope="row" className="px-5 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
 Departure From {b_route.to}
</th>
<th className="px-5 py-4 dark:text-white">
{b_dk_time.dep}
</th>


</tr>
</tbody>
<tfoot className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th colspan="2" scope="col" className="px-5 py-3">
Image Credits : {b_img_out_credit}
</th>

</tr>
</tfoot>
</table>
</div>
                </div>
               </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

