"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  const { theme } = useTheme();
  const [loaderColor, setloaderColor] = useState("");
  useEffect(() => {
    if (theme === "dark") {
      setloaderColor("white");
    } else {
      setloaderColor("black");
    }
  }, [theme]);

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-full w-full backdrop-blur">
      <PropagateLoader
        color={loaderColor}
        loading={true}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
