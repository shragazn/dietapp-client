import { ChevronLeft, CircleEllipsis } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const AppHeader = ({ title }: Props) => {
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const pageHeaderRef = useRef<HTMLHeadingElement>(null);
  const appRef = useRef<HTMLHeadingElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleFade = () => {
      const headerSize = pageHeaderRef.current?.getBoundingClientRect().height;
      if (pageHeaderRef.current && headerSize) {
        const opacity = Math.min(
          1,
          Math.max(
            0,
            (window.scrollY - pageHeaderRef.current.scrollTop) / headerSize,
          ),
        );
        setHeaderOpacity(opacity);
      }
    };
    window.addEventListener("scroll", handleFade);
    return () => window.removeEventListener("scroll", handleFade);
  }, []);
  return (
    <header
      className="sticky top-0 flex items-center justify-between bg-background px-5 pb-4 pt-3"
      ref={pageHeaderRef}
    >
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CircleEllipsis color="hsl(221.2 83.2% 53.3%)" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ido Zrihen</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/workout-plans">Workout plans</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/workouts">Workouts</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <h1
        className="text-2xl font-bold text-white"
        ref={appRef}
        style={{
          opacity: headerOpacity,
          translate: `0 ${(1 - headerOpacity) * 30}%`,
        }}
      >
        {title}
      </h1>
      <div
        className="relative flex items-center"
        onClick={() => navigate("..", { relative: "path" })}
      >
        <ChevronLeft color="hsl(221.2 83.2% 53.3%)" />
      </div>
    </header>
  );
};

export default AppHeader;
