import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import EmployeeDashboard from '../components/EmployeeDashboard'
import AdminDashboard from '../components/AdminDashboard'
import api from '../../api/axios'
import { toast } from 'react-hot-toast'

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true;

    const timer = window.setTimeout(() => {
      void api.get('/dashboard')
        .then((res) => {
          if (isMounted) setData(res.data)
        })
        .catch((err) => {
          if (isMounted) toast.error(err.response?.data?.error || err?.message)
        })
        .finally(() => {
          if (isMounted) setLoading(false)
        })
    }, 0)

    return () => {
      isMounted = false;
      window.clearTimeout(timer)
    };
  }, [])

  if (loading) return <Loading />
  if (!data) return <p className='text-center text-slate-500 py-12'>failed to load dashboard</p>

  if (data.role === "ADMIN") {
    return <AdminDashboard data={data} />
  }

  return <EmployeeDashboard data={data} />
}

export default Dashboard