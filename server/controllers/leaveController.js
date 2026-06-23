import { inngest } from "../inngest/index.js";
import Employee from "../models/Employee.js";
import LeaveApplication from "../models/LeaveApplication.js";

// create leaves
// POST /api/leaves
export const createLeave = async (req, res) => {
    try {
        const session = req.session;
        const employee = await Employee.findOne({ userId: session.userId })
        if (!employee) return res.status(404).json({
            error: "Employee not found"
        });
        if (employee.isDeleted) {
            return res.status(403).json({ error: "Your account is deactivated. You cannot apply for leave." })
        }
        const { type, startDate, endDate, reason } = req.body;
        if (!type || !startDate || !endDate || !reason) {
            return res.status(400).json({ error: "Missing fields" });
        }
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayISO = today.toISOString().split("T")[0];

        if (startDate <= todayISO || endDate <= todayISO) {
            return res.status(400).json({ error: "Leave dates must be in the future" });
        }
        if (endDate < startDate) {
            return res.status(400).json({ error: "End date cannot be before start date" });
        }

        const parsedStartDate = new Date(`${startDate}T00:00:00`);
        const parsedEndDate = new Date(`${endDate}T00:00:00`);
        if (Number.isNaN(parsedStartDate.getTime()) || Number.isNaN(parsedEndDate.getTime())) {
            return res.status(400).json({ error: "Invalid date format" });
        }

        const leave = await LeaveApplication.create({
            employeeId: employee._id,
            type,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            reason,
            status: "PENDING",

        })

        res.json({ success: true, data: leave });

        inngest.send({
            name: "leave/pending",
            data: { leaveApplicationId: leave._id }
        }).catch((err) => {
            console.error("Leave event send failed:", err);
        });

    } catch (error) {
        return res.status(500).json({ error: "Failed" });
    }
}

// Get leaves
// GET /api/leaves
export const getLeave = async (req, res) => {
    try {
        const session = req.session;
        const isAdmin = session.role === "ADMIN";
        if (isAdmin) {
            const status = req.query.status;
            const where = status ? { status } : {};
            const leaves = await LeaveApplication.find(where).populate("employeeId").sort({ createdAt: -1 });
            const data = leaves.map((l) => {
                const obj = l.toObject();
                return {
                    ...obj,
                    id: obj._id.toString(),
                    employee: obj.employeeId,
                    employeeId: obj.employeeId?._id?.toString(),
                }
            })
            return res.json({ data })
        }
        else {
            const employee = await Employee.findOne({
                userId: session.userId,
            }).lean();
            if (!employee) return res.status(404).json({ error: "Not found" });
            const leaves = await LeaveApplication.find({
                employeeId: employee._id
            }).sort({ createdAt: -1 });
            return res.json({
                data: leaves,
                employee: { ...employee, id: employee._id.toString() },
            })
        }
    } catch (error) {
        return res.status(500).json({ error: "Failed" });
    }
}
// Update leaves
// PATCH /api/leaves/:id
export const updateLeaveStatus = async (req, res) => {
    try {
        const { status, id: bodyId } = req.body;
        const leaveId = req.params.id || bodyId;
        if (!leaveId) {
            return res.status(400).json({ error: "Missing leave id" });
        }
        if (!["PENDING", "APPROVED", "REJECTED"].includes(status)) {
            return res.status(400).json({ error: "Invalid Status" });
        }
        const leave = await LeaveApplication.findByIdAndUpdate(leaveId, { status }, { returnDocument: "after" })
        if (!leave) {
            return res.status(404).json({ error: "Leave not found" });
        }
        return res.json({ success: true, data: leave })
    } catch (error) {
        return res.status(500).json({ error: "Failed" });
    }
}