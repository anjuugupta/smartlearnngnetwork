import { Back } from '../../common/back/Back';
import { Coursescard } from './Coursescard';
import { OnlineCourses } from './OnlineCourses';


export const CoursesHome = () => {
  return (
    <>
    <Back title='Explore Courses'/>
    <Coursescard/>
    <OnlineCourses/>
    </>
  )
}

