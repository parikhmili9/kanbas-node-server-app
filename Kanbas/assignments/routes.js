import db from "../Database/index.js";

function AssignmentRoutes(app) {

    // To update a assignment by ID
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments.findIndex(
          (m) => m._id === aid);
        db.assignments[assignmentIndex] = {
          ...db.assignments[assignmentIndex],
          ...req.body
        };
        res.sendStatus(204);
      });    

    // To delete an assignment by ID
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((m) => m._id !== aid);
        res.sendStatus(200);
      });    

    // To create new assignments for a particular course ID
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });
    
    // To get all assignments for a particular course ID
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments
            .filter((m) => m.course === cid);
        res.send(assignments);
    });
}
export default AssignmentRoutes;

