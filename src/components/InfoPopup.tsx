import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import { cn } from "../lib/utils";
import React from "react";
import { getLanguageFromURL } from "../languages";


export function InfoPopup({
    currentPage,
    onClose,
    className,
    open,
}: {
    currentPage: string;
    onClose: () => void;
    className?: string;
    open: boolean;  // Accept `open` prop to control dialog visibility
}) {

    const langCode = getLanguageFromURL(currentPage);


    return (
        <div className={className}>
            <Dialog
                open={open}
                onOpenChange={(isOpen) => !isOpen && onClose()}  // Close dialog if dismissed
            >
                <DialogContent
                    className={cn(
                        "flex flex-col items-center sm:max-w-[425px] md:max-w-[861px] overflow-y-auto max-h-[80vh] bg-u+sunny"
                    )}
                >
                    <DialogHeader className="flex-col items-center">
                        <DialogTitle className="text-[2rem]">
                            {langCode === "fi" ? "Hei!" : "Hey!"}
                        </DialogTitle>
                        <DialogDescription className="text-[2rem] text-u+burg">
                            {langCode === "fi" ? "Ilmoittautuminen palveluun on valitettavasti päättynyt." : "Registration for the service has unfortunately ended."}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}