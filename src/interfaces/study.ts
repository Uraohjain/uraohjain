export default interface Study {
    id: number;
    attributes: {
      title: string;
      titleEn: string;
      description: string;
      descriptionEn: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      field: string;
      fieldEn: string;
      tag: string;
      time: string;
      courses: {
        type: string;
        children: {
          type: string;
          text: string;
        }[];
      }[];
      coursesEn: {
        type: string;
        children: {
          type: string;
          text: string;
        }[];
      }[];
    };
  }