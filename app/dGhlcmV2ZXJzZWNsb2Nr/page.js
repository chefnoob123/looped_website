import Door from "@/components/Door";
import RandomNav from "@/components/randomnav";


export default function PageB() {
  return (
    <div className=" video" >
      <div className="">
      <Door href="/timeless" no={1} />

      </div>
       <video width="600" height="600" controls preload="none" >
      <source src="/clue.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    </div>
  );
}