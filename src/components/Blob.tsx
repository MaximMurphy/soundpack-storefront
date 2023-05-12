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
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <div
      id="blob"
      className="-z-10 bg-gradient-to-r from-blue-600/20 to-fuchsia-600/20 h-[35rem] w-[35rem] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]"
    ></div>
  );
}
