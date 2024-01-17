import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/utils/util";
import React, { useEffect, useState } from "react";

export function CourseDialog({
  children,
  currentPath,
  course,
}: {
  children: React.ReactNode;
  currentPath: string;
  course: {
    id: number;
    name: string;
    title: string;
    tag: string;
  };
}) {
  let isId = new URLSearchParams(currentPath).get("id");
  const [currentId, setCurrentId] = useState(isId);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isId = params.get("id");
    const isOpen = params.get("open") === "true" && isId === String(course.id);

    setOpen(isOpen);
  }, [currentPath, course.id]);

  console.log(currentId);
  console.log(currentPath);

  function copyToClipboard() {
    navigator.clipboard.writeText(
      `${currentPath}?id=${currentId}&open=${open}`,
    );
  }
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setCurrentId(String(course.id));
        setOpen(!open);
      }}
    >
      <DialogTrigger asChild>
        <div className="flex flex-col items-center">{children}</div>
      </DialogTrigger>
      <DialogContent
        className={cn(
          "flex flex-col items-center sm:max-w-[425px] md:max-w-[861px]",
          course.tag === "media" ? "bg-u+pinky" : "bg-u+sunny",
        )}
      >
        <Button variant="default" onClick={() => copyToClipboard()}>
          copy
        </Button>
        <DialogHeader className="flex-col items-center">
          <div className="rounded-full bg-white p-8">
            <svg
              width="62"
              height="47"
              viewBox="0 0 62 47"
              fill="none"
              className="h-28 w-28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1384_112)">
                <path
                  d="M53.9031 3.12576H8.98374C8.6531 3.12576 8.37891 3.40109 8.37891 3.7331V30.0188C8.37891 30.3508 8.6531 30.6261 8.98374 30.6261H53.9112C54.2418 30.6261 54.516 30.3508 54.516 30.0188V3.7331C54.516 3.40109 54.2418 3.12576 53.9112 3.12576H53.9031ZM53.2983 29.4114H9.58858V4.34044H53.3063V29.4114H53.2983Z"
                  fill="#701C3E"
                ></path>
                <path
                  d="M44.0485 39.4123H16.6937C16.3631 39.4123 16.0889 39.6876 16.0889 40.0196C16.0889 40.3516 16.3631 40.627 16.6937 40.627H44.0485C44.3792 40.627 44.6534 40.3516 44.6534 40.0196C44.6534 39.6876 44.3792 39.4123 44.0485 39.4123Z"
                  fill="#701C3E"
                ></path>
                <path
                  d="M61.9516 43.4126C61.9516 43.4126 61.9516 43.4045 61.9516 43.3965L57.6613 32.934C57.629 32.8611 57.5806 32.7963 57.5242 32.7397V0.60734C57.5242 0.275327 57.25 0 56.9194 0H5.96774C5.6371 0 5.3629 0.275327 5.3629 0.60734V33.0069L0.0645161 43.3479V43.3641C0.0241935 43.445 0 43.526 0 43.6232V46.3927C0 46.7247 0.274194 47 0.604839 47H61.3952C61.7258 47 62 46.7247 62 46.3927V43.6232C62 43.5503 61.9839 43.4774 61.9597 43.4126H61.9516ZM6.57258 1.21468H56.3145V32.5453H6.57258V1.21468ZM6.33871 33.76H56.6936L60.4839 43.0159H1.59677L6.33871 33.76ZM60.7903 45.7853H1.20968V44.2305H60.7903V45.7853Z"
                  fill="#701C3E"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1384_112">
                  <rect width="62" height="47" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <DialogTitle className="text-[2rem]">{course.name}</DialogTitle>
          <DialogDescription className="text-[2rem] text-u+burg">
            {course.title}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 text-xl">
          <p className="text-center">
            Tutustu verkkosivujen kehittämiseen. Perehdy webkehityksessä
            käytettäviin ohjelmointikieliin, -kehyksiin ja
            sisällönhallintajärjestelmiin.
          </p>
          <ul>
            <li>kurssi 1</li>
            <li>kurssi 2</li>
            <li>kurssi 3</li>
            <li>kurssi 4</li>
            <li>kurssi 5</li>
          </ul>
          <div className="flex flex-col items-center">
            <p className="font-bold">Ajankohtaista</p>
            <p>02.02.–03.05.2024</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
