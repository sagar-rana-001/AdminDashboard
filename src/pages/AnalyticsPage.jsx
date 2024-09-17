import React from 'react'
import Header from '../component/common/Header'
import OverviewCards from '../component/AnalyticsData/OverviewCard'  
import RevenueChart from '../component/AnalyticsData/RevenueChart'  
import ChannelPerformance from '../component/AnalyticsData/ChannelPerformance'  
import ProductPerformance from '../component/AnalyticsData/ProductPerformance'  
import UserRetention from '../component/AnalyticsData/UserRetention'  
import CustomerSegmentation from '../component/AnalyticsData/CustomerSegmentation'  
import AIPoweredInsights from '../component/AnalyticsData/AIPoweredInsights'  

export default function AnalyticsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards  />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>

				<AIPoweredInsights />
			</main>
		</div>
  )
}
