export default interface Post {
  id: number;
  attributes: {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    postContent: string;
    postContentEn: string;
    postImage: {
      data: {
        attributes: {
          url: string;
          alt: string | null;
        };
      };
    };
  };
}