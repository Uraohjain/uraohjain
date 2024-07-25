export default interface InfoResponse {
    id: number;
    attributes: {
        infotext: string;
        infotextEn: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}