import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CourseDetails } from '../../components/CourseDetails';
import { LessonModal } from '../../components/LessonModal';
import { Lessons } from '../../components/Lessons';
import { Preloader } from '../../components/Preloader';
import { selectActiveCourse, selectCourseStatus } from '../../features/course/courseSelectors';
import { clearDetails, loadCourseById } from '../../features/course/courseSlice';
import { Modal } from '../../features/modalWindow/Modal/Modal';
import styles from './CoursePage.module.scss';

export const CoursePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    id && dispatch(loadCourseById(id));
    return () => {
      dispatch(clearDetails());
    };
  }, [id, dispatch]);

  const course = useAppSelector(selectActiveCourse);
  const loadingStatus = useAppSelector(selectCourseStatus);

  if (loadingStatus === 'loading') {
    return (
      <div
        style={{
          marginTop: '50px',
        }}
      >
        <Preloader />
      </div>
    );
  }

  return course ? (
    <div className={styles.container}>
      <div className={styles.course_heading}>
        <img
          src={`${course.previewImageLink}/cover.webp`}
          alt="course_previewImage"
          className={styles.course_image}
        />
        <h1 className={styles.course_title}>{course.title}</h1>
      </div>

      <CourseDetails
        description={course.description}
        duration={course.duration}
        lessonsCount={course.lessons.length}
        rating={course.rating}
        skills={course.meta.skills}
        videoLink={course.meta.courseVideoPreview ? course.meta.courseVideoPreview.link : undefined}
      />

      <Lessons />
      <Modal>
        <LessonModal />
      </Modal>
    </div>
  ) : (
    <h1>{loadingStatus.charAt(0).toUpperCase() + loadingStatus.slice(1)}</h1>
  );
};
