import { useCallback, useEffect, useState } from "react"
import { dummyAttendanceData } from "../assets/assets"
import Loading from '../components/Loading'
import CheckInButton from "../components/attendance/CheckInButton"
import AttendanceStats from "../components/attendance/AttendanceStats"
import AttendanceHistory from "../components/attendance/AttendanceHistory"
import { toast } from "react-hot-toast"
import api from "../../api/axios"

const Attendance = () => {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [isDeleted, setIsDeleted] = useState(false)

  const fetchData = useCallback(async (isMounted = true) => {
    try {
      const res = await api.get("/attendance");
      const json = res.data;
      if (isMounted) {
        setHistory(json.data || [])
        if (json.employee?.isDeleted) setIsDeleted(true)
      }
    } catch (err) {
      if (isMounted) {
        toast.error(err.response?.data?.error || err.message);
      }
    } finally {
      if (isMounted) {
        setLoading(false)
      }
    }

  }, [])

  useEffect(() => {
    let isMounted = true;
    fetchData(isMounted);

    return () => {
      isMounted = false;
    };
  }, [fetchData])

  if (loading) return <Loading />

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayRecord = history.find((r) => new Date(r.date).toDateString() === today.toDateString())
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Attendance</h1>
        <p className="page-subtitle">Track Your Work Hours And Daily check-ins</p>
      </div>
      {isDeleted ? (
        <div className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center">
          <p className="tetxt-rose-600">You can no longer clock in or out because your employee records have been marked as deleted.</p>
        </div>) : (
        <div className="mb-8">
          <CheckInButton todayRecord={todayRecord} onAction={fetchData} />
        </div>)}

      <AttendanceStats history={history} />
      <AttendanceHistory history={history} />
    </div>
  )
}

export default Attendance