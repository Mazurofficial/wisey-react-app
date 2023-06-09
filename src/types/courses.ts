export type CourseCardType = {
    id: string;
    title: string;
    tags: string[];
    launchDate: string;
    status: string;
    description: string;
    duration: number;
    lessonsCount: number;
    containsLockedLessons: boolean;
    previewImageLink: string;
    rating: number;
    meta: {
      slug: string;
      skills: string[];
      courseVideoPreview: {
        link: string;
        duration: number;
        previewImageLink: string;
      };
    };
  };

  export type LessonType = {
    id: string;
    title: string;
    duration: number;
    order: number;
    type: string;
    status: string;
    link: string;
    previewImageLink: string;
  };
  
  export type CourseType = {
    id: string;
    title: string;
    tags: string[];
    launchDate: string;
    status: string;
    description: string;
    duration: number;
    previewImageLink: string;
    rating: number;
    meta: {
      slug: string;
      skills: string[];
      courseVideoPreview: {
        link: string;
        duration: number;
        previewImageLink: string;
      };
    };
    lessons: LessonType[];
    containsLockedLessons: boolean
  };
  