import { Typography } from "@/components/ui/typography";
import { TMenu } from "@/types/menu";
import { ChevronRight, CircleEllipsis } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MainLayout = ({
  children,
  menu,
}: {
  children: React.ReactNode;
  menu: TMenu;
}) => {
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const pageHeaderRef = useRef<HTMLHeadingElement>(null);
  const appRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const headerSize = pageHeaderRef.current?.getBoundingClientRect().height;
    const handleFade = () => {
      if (pageHeaderRef.current && headerSize) {
        const { top, height } = pageHeaderRef.current.getBoundingClientRect();
        const opacity = Math.max(Math.min((headerSize - top) / height, 1), 0);
        setHeaderOpacity(opacity);
      }
    };
    window.addEventListener("scroll", handleFade);
    return () => window.removeEventListener("scroll", handleFade);
  }, []);

  return (
    <>
      <header className="sticky top-0 flex justify-between bg-background px-5 pb-2 pt-1">
        <div>
          <CircleEllipsis color="hsl(221.2 83.2% 53.3%)" />
        </div>
        <h1
          className="text-2xl font-bold text-white"
          ref={appRef}
          style={{ opacity: headerOpacity }}
        >
          {menu.title}
        </h1>
        <div>
          <ChevronRight color="hsl(221.2 83.2% 53.3%)" />
        </div>
      </header>
      <main className="grid gap-4 px-4">
        <Typography type="h1" ref={pageHeaderRef}>
          {menu.title}
        </Typography>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
