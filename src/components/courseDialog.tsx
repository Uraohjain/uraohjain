import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { MdContentCopy } from 'react-icons/md';
import { getLanguageFromURL } from "../languages";
import type Study from '../interfaces/study';


export function CourseDialog({
  children,
  currentPath,
  course,
  className
}: {
  children: React.ReactNode;
  currentPath: string;
  course: Study;
  className?: string;
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

  const lang = getLanguageFromURL(currentPath);

  function checkLang() {
    return lang === "en";
  }


  function copyToClipboard() {
    navigator.clipboard.writeText(
      `${currentPath}?id=${currentId}&open=${open}`,
    );
  }
  return (
    <div className={className}>
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
          course.attributes.tag === "media" ? "bg-u+pinky" : "bg-u+sunny",
        )}
      >
        <DialogHeader className="flex-col items-center">
          <div className="rounded-full bg-white p-8">
            {course.attributes.tag === "media" ? (
              <svg
                width="59"
                height="43"
                viewBox="0 0 59 43"
                fill="none"
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1266_1615)">
                  <path
                    d="M29.4833 35.4822C35.464 35.4822 40.3123 30.5875 40.3123 24.5496C40.3123 18.5117 35.464 13.6169 29.4833 13.6169C23.5026 13.6169 18.6543 18.5117 18.6543 24.5496C18.6543 30.5875 23.5026 35.4822 29.4833 35.4822Z"
                    stroke="#701C3E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.5003 31.3793C33.2365 31.3793 36.2653 28.3215 36.2653 24.5496C36.2653 20.7776 33.2365 17.7199 29.5003 17.7199C25.7641 17.7199 22.7354 20.7776 22.7354 24.5496C22.7354 28.3215 25.7641 31.3793 29.5003 31.3793Z"
                    stroke="#701C3E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.4442 4.6041H4.98926V8.49465H12.4442V4.6041Z"
                    stroke="#701C3E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M52.4872 13.8123H45.0322V17.7029H52.4872V13.8123Z"
                    stroke="#701C3E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M42.8278 8.49465V0.637085H16.8197V8.49465H0.630859V42.3629H58.3687V8.49465H42.8278Z"
                    stroke="#701C3E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1266_1615">
                    <rect width="59" height="43" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="62"
                height="47"
                viewBox="0 0 62 47"
                fill="none"
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1384_112)">
                  <path
                    d="M53.9031 3.12576H8.98374C8.6531 3.12576 8.37891 3.40109 8.37891 3.7331V30.0188C8.37891 30.3508 8.6531 30.6261 8.98374 30.6261H53.9112C54.2418 30.6261 54.516 30.3508 54.516 30.0188V3.7331C54.516 3.40109 54.2418 3.12576 53.9112 3.12576H53.9031ZM53.2983 29.4114H9.58858V4.34044H53.3063V29.4114H53.2983Z"
                    fill="#701C3E"
                  />
                  <path
                    d="M44.0485 39.4123H16.6937C16.3631 39.4123 16.0889 39.6876 16.0889 40.0196C16.0889 40.3516 16.3631 40.627 16.6937 40.627H44.0485C44.3792 40.627 44.6534 40.3516 44.6534 40.0196C44.6534 39.6876 44.3792 39.4123 44.0485 39.4123Z"
                    fill="#701C3E"
                  />
                  <path
                    d="M61.9516 43.4126C61.9516 43.4126 61.9516 43.4045 61.9516 43.3965L57.6613 32.934C57.629 32.8611 57.5806 32.7963 57.5242 32.7397V0.60734C57.5242 0.275327 57.25 0 56.9194 0H5.96774C5.6371 0 5.3629 0.275327 5.3629 0.60734V33.0069L0.0645161 43.3479V43.3641C0.0241935 43.445 0 43.526 0 43.6232V46.3927C0 46.7247 0.274194 47 0.604839 47H61.3952C61.7258 47 62 46.7247 62 46.3927V43.6232C62 43.5503 61.9839 43.4774 61.9597 43.4126H61.9516ZM6.57258 1.21468H56.3145V32.5453H6.57258V1.21468ZM6.33871 33.76H56.6936L60.4839 43.0159H1.59677L6.33871 33.76ZM60.7903 45.7853H1.20968V44.2305H60.7903V45.7853Z"
                    fill="#701C3E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1384_112">
                    <rect width="62" height="47" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
          <DialogTitle className="text-[2rem]">{checkLang() ? course.attributes.titleEn : course.attributes.title}</DialogTitle>
          <DialogDescription className="text-[2rem] text-u+burg">
            {checkLang() ? course.attributes.fieldEn : course.attributes.field}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 text-xl">
          <p className="text-center">
            {checkLang() ? course.attributes.descriptionEn : course.attributes.description}
          </p>
          {checkLang() ? (
            // Render course attributes directly
            <ul>
              {course.attributes.coursesEn.map((courseItem, index) => (
                <li key={index}>{courseItem.children[0].text}</li>
              ))}
            </ul>
          ) : (
            // Render mapped <li> elements
            <ul>
              {course.attributes.courses.map((courseItem, index) => (
                <li key={index}>{courseItem.children[0].text}</li>
              ))}
            </ul>
          )}
          <div className="flex flex-col items-center">
            <p className="font-bold">{checkLang() ? "Topical" : "Ajankohtaista" }</p>
            <p>{course.attributes.time}</p>
          </div>
        </div>
        <div className="flex justify-end absolute bottom-0 right-0 mb-4 mr-4">
        <Button variant="circular" onClick={() => copyToClipboard()}>
          <MdContentCopy />
        </Button>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
}
