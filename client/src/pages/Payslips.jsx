import React, { useCallback, useEffect, useState } from 'react'
import { dummyEmployeeData, dummyPayslipData } from "../assets/assets"
import Loading from '../components/Loading'
import PayslipList from '../components/payslip/PayslipList'
import GeneratePayslipForm from '../components/payslip/GeneratePayslipForm'
import { toast } from "react-hot-toast"
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axios'

const Payslips = () => {
  const [payslips, setPayslips] = useState([])
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true);
  const { user } = useAuth()
  const isAdmin = user?.role === "ADMIN";

  const fetchPayslips = useCallback(async (isMounted = true) => {
    try {
      const res = await api.get('/payslips')
      if (isMounted) setPayslips(res.data.data || [])
    } catch (err) {
      if (isMounted) {
        toast.error(err.response?.data?.error || err.message);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  }, [])

  useEffect(() => {
    let isMounted = true;
    fetchPayslips(isMounted);

    return () => {
      isMounted = false;
    };
  }, [fetchPayslips])

  useEffect(() => {
    let isMounted = true;

    if (isAdmin) {
      api.get("/employees")
        .then((res) => {
          if (isMounted) setEmployees(res.data.filter((e) => !e.isDeleted))
        })
        .catch(() => { })
    }

    return () => {
      isMounted = false;
    };
  }, [isAdmin])

  if (loading) return <Loading />
  return (
    <div className='animate-fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
        <div>
          <h1 className='page-title'>Payslips</h1>
          <p className='page-subtitle'>{isAdmin ? "Generate and manage employee payslips" : "Your payslip history"}</p>
        </div>
        {isAdmin && <GeneratePayslipForm employees={employees} onSuccess={fetchPayslips} />}
      </div>
      <PayslipList payslips={payslips} isAdmin={isAdmin} />
    </div>
  )
}

export default Payslips