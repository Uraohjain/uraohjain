export default interface CompanyResponse {
    id: number;
    attributes: {
        Title: string;
        TitleEn: string;
        InfoText: string;
        InfoTextEn: string;
        Interested: boolean;
        InterestedEn: boolean;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}