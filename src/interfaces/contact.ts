export default interface ContactResponse {
    data: {
        id: number;
        attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            ContactListAO: Contact[];
            ContactListMetropolia: Contact[];
            ContactListLaurea: Contact[];
        };
    };
}

interface Contact {
    id: number;
    Name: string | null;
    Title: string | null;
    Phone: string | null;
    Email: string | null;
    TitleEn?: string | null;
}
