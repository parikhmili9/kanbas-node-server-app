import * as dao from "./dao.js";

export default function CourseRoutes(app) {

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  }

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  }

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  }

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.courseId);
    res.json(course);
  }

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    res.json(status);
  }

  const findCourseNumber = async (req, res) => {
    const { courseId } = req.params;
    const courseNumber = await dao.findCourseNumber(courseId);
    res.json(courseNumber);
  }

  app.post("/api/Courses", createCourse);
  app.delete("/api/Courses/:courseId", deleteCourse);
  app.get("/api/Courses", findAllCourses);
  app.get("/api/Courses/:courseId", findCourseById);
  app.put("/api/Courses/:courseId", updateCourse);
  app.get("/api/Courses/:courseId/CourseNumber", findCourseNumber);
}
