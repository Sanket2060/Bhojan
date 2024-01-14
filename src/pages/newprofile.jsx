export default function Newprofile() {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="h-3/4 w-[45%] shadow-lg overflow-auto rounded-lg hover:shadow-2xl">
        <div className="bg-gradient-to-br from-blue-400 to-white p-8 rounded-t-lg shadow-lg h-1/5"></div>
        <div className="grid gap-y-4 relative top-[-3rem]">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-400">
              <a href="#">
                <img
                  className="rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjIUVF6oxH5XlftLQ0lIypktQQPooA1Fb2w&usqp=CAU"
                  alt="your profile picture"
                />
              </a>
            </div>
          </div>
          <div className="grid gap-y-4 text-center mt-4">
            <h1 className="text-2xl font-bold text-gray-800">Mr Bean.</h1>
            <p className="text-gray-600">@Beany32</p>
            <div className="flex justify-center text-gray-600">
              <div className="flex gap-9 pl-24">
                <span>&#x1F4CD; birmingham</span>
                <span>&#x1F5D3; registerd date:2026/03/45</span>
              </div>
            </div>
            <hr className="h-0.5 bg-black" />
          </div>
          <div className="flex justify-center gap-5 ">
            <div className="grid gap-y-2">
              <h3 className="mx-auto font-bold">3</h3>
              <span text-gray-600>achievement</span>
            </div>
            <div className="grid gap-y-2">
              <h3 className="mx-auto font-bold"> 25</h3>
              <span text-gray-600>activity</span>
            </div>
            <div className="grid gap-y-2">
              <h3 className="mx-auto font-bold">34</h3>
              <span text-gray-600>progress</span>
            </div>
          </div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              delectus minus fugiat ex sint dignissimos voluptates rerum ea
              maiores incidunt quis suscipit dicta tempora facere magni,
              blanditiis consequatur doloribus ipsam!
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
