import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col text-white  gap-4 items-center h-[44vh]" >
        <div className="font-bold text-5xl flex gap-2 justify-center items-center " >Buy Me A Coffee <span><img className="w-16" src="/tea.svg" alt="" /></span> </div>
        <p>A crownd funding platform for creators. Get funded by your fans and followers. Start now! </p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>

      </div>
      <div className="bg-white h-1 opacity-10" ></div>


      <div className="text-white container mx-auto pb-32 pt-14 ">
        <h2 className="text-2xl font-bold text-center mb-14" >Your Followers can buy you Coffee</h2>
        <div className="flex gap-5 justify-around" >
          <div className="item rounded-full flex flex-col items-center justify-center ">
            <img className="rounded-full p-2 " width={88} src="/man.gif" alt="" />
            <p className="font-bold" >
              Your Fans Want to Help
            </p >
            <p className="text-center" >Yor fans are available to help you</p>
          </div>

          <div className="item rounded-full flex flex-col items-center justify-center ">
            <img className="rounded-full p-2 " width={88} src="/coin.webp" alt="" />
            <p className="font-bold" >
              Your Fans Want to Help
            </p >
            <p className="text-center" >Yor fans are available to help you</p>
          </div>

          <div className="item rounded-full flex flex-col items-center justify-center ">
            <img className="rounded-full p-2 " width={88} src="/group2.gif" alt="" />
            <p className="font-bold" >
              Your Fans Want to Help
            </p >
            <p className="text-center" >Yor fans are available to help you</p>
          </div>

        </div>
      </div>

      <div className="bg-white h-1 opacity-10" ></div>


      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center ">
        <h2 className="text-2xl font-bold text-center mb-14" >Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tGENHSG2lWE?si=QewwPGYtQkC3ge3J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </>
  );
}
