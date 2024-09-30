import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  dates,
  tags,
  link,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        target="_blank"
        className={cn("block cursor-pointer", className)}
      >
        <CardHeader className="px-4 pt-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-4 py-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
