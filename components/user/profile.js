"use client";
import { Settings } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Profile() {
  return (
    <div className="h-full ">
      <ProfileHeader />
      <Navigations />
    </div>
  );
}

function ProfileHeader() {
  return (
    <div>
      <div className="h-20 w-full p-2 px-4 flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="rounded-full overflow-hidden w-fit">
            <Image src={"/no_image.jpg"} height={48} width={48} />
          </div>
          <p>user name</p>
        </div>
        <div className="flex gap-3 items-center w-fit">
          <p className="text-gray-500 text-lg">Settings</p>
          <Settings />
        </div>
      </div>
    </div>
  );
}

function ButtonLink({ title, link = "#" }) {
  const router = useRouter();
  function handleclick() {
    router.push(link);
  }
  return (
    <div className="w-full">
      <button
        className="w-full rounded-lg h-24 p-2 bg-black hover:bg-sky-600 text-white font-semibold"
        onClick={handleclick}
      >
        {title}
      </button>
    </div>
  );
}

function Navigations() {
  return (
    <div className="flex gap-2 p-2 ">
      <div className="w-1/2 ">
        <div className="items-center flex flex-col  gap-1">
          <ButtonLink title={"My ads"} link="/user/ads" />
          <ButtonLink title={"Post Ad"} link="/user/postadd" />
        </div>
        <div className=" flex flex-col items-center mt-2 gap-1">
          <ButtonLink title={"Notifications"} />
          <ButtonLink title={"Sales"} />
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="flex flex-col items-center gap-1">
          <ButtonLink title={"Feedbacks"} />
          <ButtonLink title={"Followers"} />
        </div>
      </div>
    </div>
  );
}
