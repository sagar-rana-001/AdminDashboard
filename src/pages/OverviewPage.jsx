import React from 'react'
import { FiZap } from "react-icons/fi";
import Header from '../component/common/Header'
import { FaUserSecret } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { RiBarChart2Fill } from "react-icons/ri";
import Card from '../component/common/Card';
import SaleOverviewChart from '../component/saleoverview/SaleOverviewChart';
import CategoryDistributionChart from '../component/saleoverview/CategoryDistributionChart';
import SaleChannelChart from '../component/saleoverview/SaleChannelChart';


export default function OverviewPage() {
  return (
    <div className=' flex-1 overflow-auto relative z-10'>
      <Header title="OverviewPage" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-clos-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card name='Total Sales' icon={FiZap} value='$12,345' color='#6366F1' />
          <Card name='New Users' icon={FaUserSecret} value='1,234' color='#8B5CF6' />
          <Card name='Total Products' icon={GiShoppingBag} value='567' color='#EC4899' />
          <Card name='Conversion Rate' icon={RiBarChart2Fill} value='12.5%' color='#10B981' />
        </div>

        	{/* CHARTS */}

          
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SaleOverviewChart />
          <CategoryDistributionChart />
          <SaleChannelChart />
        </div>
      </main>
    </div>
  )
}
