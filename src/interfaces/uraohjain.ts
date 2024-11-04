export default interface UraohjainResponse {
    id: number;
    attributes: {
        Title: string;
        TitleEn: string;
        InfoText: string;
        InfoTextEn: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}