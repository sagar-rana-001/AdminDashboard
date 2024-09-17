import React from 'react'
import Header from '../component/common/Header';
import Card from '../component/common/Card';
import { FiDollarSign, FiShoppingBag } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { CgLock } from 'react-icons/cg';
import DailyOrder from '../component/Order/DailyOrder';
import OrderDistribution from '../component/Order/OrderDistribution';
import OrderTable from '../component/Order/OrderTable';

const salesData = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",

};

export default function OrdersPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10 '>
      <Header title='Sale Data' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-clos-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card name='Total Orders' icon={FiShoppingBag} value={salesData.totalOrders} color='#6366F1' />
          <Card name='Pending Orders' icon={CgLock} value={salesData.pendingOrders} color='#8B5CF6' />
          <Card name='Complete Orders' icon={FaCheckCircle} value={salesData.completedOrders} color='#EC4899' />
          <Card name='Total Orders' icon={FiDollarSign} value={salesData.totalOrders} color='#10B981' />
        </div>
        {/* <SalesOverview /> */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <DailyOrder />
          <OrderDistribution />
        </div>
        <OrderTable />  
      </main>
    </div>
  )
}
