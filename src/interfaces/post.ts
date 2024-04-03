export default interface Post {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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