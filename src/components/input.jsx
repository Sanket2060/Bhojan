
function placeholder() {
    return "   Please write here";
  }
  
  function InpBar() {
    const value = placeholder();
    return (
      <>
        <div>lets start our course</div>
        <div >
          <label >
            <input className="block w-48 h-10 p-4 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="mainbar"
              placeholder={value}
            />
          </label>
        </div>
      </>
    );
  }
  
  export default InpBar;
  