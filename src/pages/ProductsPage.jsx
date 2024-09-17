import React from 'react'
import { FiPackage, FiTrendingUp, FiAlertTriangle, FiDollarSign } from 'react-icons/fi'
import Header from '../component/common/Header'
import Card from '../component/common/Card'
 import ProductTable  from '../component/Product/ProductTable'
import CategoryDistributionChart from '../component/saleoverview/CategoryDistributionChart'
import SaleTrandingChart from '../component/Product/SaleTrandingChart'

export default function ProductsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10 '>
      <Header title='Products' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-clos-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card name='Total Products' icon={FiPackage} value={1234} color='#6366F1' />
					<Card name='Top Selling' icon={FiTrendingUp} value={89} color='#10B981' />
					<Card name='Low Stock' icon={FiAlertTriangle} value={23} color='#F59E0B' />
					<Card name='Total Revenue' icon={FiDollarSign} value={"$543,210"} color='#EF4444' />
        </div>

        <ProductTable />
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-8'>
          <SaleTrandingChart />
          <CategoryDistributionChart />

        </div>
      </main>

    </div>
  )
}
