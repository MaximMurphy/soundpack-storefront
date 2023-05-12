import { useEffect } from "react";

export default function Blob() {
  useEffect(() => {
    const blob: any = document.getElementById("blob");
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 2000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <div
      id="blob"
      className="-z-10 bg-gradient-to-r from-blue-600/20 to-fuchsia-600/20 h-[35rem] w-[35rem] fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full blur-[200px]"
    ></div>
  );
}
