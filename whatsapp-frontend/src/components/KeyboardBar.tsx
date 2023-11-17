
function KeyboardBar() {


    return (
        <div className='flex h-full w-full flex-row justify-center p-2 bg-gray-100'>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-5" placeholder="Write your message" required />
        </div>
    )
}

export default KeyboardBar
