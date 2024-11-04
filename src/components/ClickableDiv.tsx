import { InfoPopup } from './InfoPopup';
import { useState } from "react";
import { getLanguageFromURL } from '../languages';


// this function was requested, but later deemed not needed

export function ClickableDiv({
    currentPage,
}: {
    currentPage: string;
}) {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    const langCode = getLanguageFromURL(currentPage);

    return (
        <>
            <div
                className="mt-4 flex items-center justify-center bg-u+sunny py-12 md:ml-5 md:mt-0 md:basis-2/5"
            >
                <h2 className="text-[2rem] font-semibold text-u+green">
                    <button
                        onClick={() => {
                            openDialog();
                        }}
                        className="text-center underline"
                    >
                        {langCode === "fi" ? <>
                            Testaa sopiiko <br />
                            Uraohjain-palvelu <br />
                            sinulle ja ilmoittaudu!
                        </> : <>
                            Take our test to see <br />
                            whether the service is <br />
                            right for you and sign up!
                        </>}
                    </button>
                </h2>
            </div>
            {isDialogOpen && (
                <InfoPopup
                    currentPage={currentPage}
                    open={isDialogOpen}
                    onClose={closeDialog}
                    className="fixed inset-0 flex items-center justify-center cursor-pointer"
                />
            )}
        </>
    );
}
