import React from 'react'
import Header from '../component/common/Header'
import Card from '../component/common/Card'
import { FaDollarSign } from 'react-icons/fa6';
import { CiShoppingCart } from 'react-icons/ci';
import { FiTrendingUp } from 'react-icons/fi';
import { BsCreditCard } from 'react-icons/bs';
import SalesOverview from '../component/SaleData/SalesOverview';
import SalesbyCategory from '../component/SaleData/SalesbyCategory';
import DailySalesTrend from '../component/SaleData/DailySalesTrend';



const salesData = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};


export default function SalesPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10 '>
      <Header title='Sale Data' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-clos-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card name='Total Revenue' icon={FaDollarSign} value={salesData.totalRevenue} color='#6366F1' />
          <Card name='Avg. Order Value' icon={CiShoppingCart} value={salesData.averageOrderValue} color='#8B5CF6' />
          <Card name='Conversion Rate' icon={FiTrendingUp} value={salesData.conversionRate} color='#EC4899' />
          <Card name='Sales Growth' icon={BsCreditCard} value={salesData.salesGrowth} color='#10B981' />
        </div>
          <SalesOverview />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <SalesbyCategory />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  )
}
