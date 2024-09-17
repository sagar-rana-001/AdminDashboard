import React from 'react'
import { FaEye, FaUserShield } from 'react-icons/fa6';
import { FiDollarSign, FiShoppingBag } from 'react-icons/fi';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

const overviewData = [
	{ name: "Revenue", value: "$1,234,567", change: 12.5, icon: FiDollarSign },
	{ name: "Users", value: "45,678", change: 8.3, icon: FaUserShield },
	{ name: "Orders", value: "9,876", change: -3.2, icon: FiShoppingBag },
	{ name: "Page Views", value: "1,234,567", change: 15.7, icon: FaEye },
];

export default function OverviewCard() {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
			{overviewData.map((item, index) => (
				<div
					key={item.name}
					className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
            rounded-xl p-6 border border-gray-700
          '
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
							<p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
						</div>

						<div
							className={`
              p-3 rounded-full bg-opacity-20 ${item.change >= 0 ? "bg-green-500" : "bg-red-500"}
              `}
						>
							<item.icon className={`size-6  ${item.change >= 0 ? "text-green-500" : "text-red-500"}`} />
						</div>
					</div>
					<div
						className={`
              mt-4 flex items-center ${item.change >= 0 ? "text-green-500" : "text-red-500"}
            `}
					>
						{item.change >= 0 ? <FiArrowUpRight size='20' /> : <FiArrowDownRight size='20' />}
						<span className='ml-1 text-sm font-medium'>{Math.abs(item.change)}%</span>
						<span className='ml-2 text-sm text-gray-400'>vs last period</span>
					</div>
				</div>
			))}
		</div>
  )
}