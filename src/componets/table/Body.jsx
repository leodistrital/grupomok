import { useEffect, useState } from "react";

export const Body = ({ data = [], search, resaltar }) => {
	const [dataset, setdataset] = useState([]);

	useEffect(() => {
		setdataset(data);
		console.log(resaltar);
	}, [data, dataset]);

	const hadleDlete = (index) => {
		setdataset(dataset.splice(index, 1));
	};
	return (
		<tbody>
			{dataset
				.filter((item) => {
					return (
						item.name.first
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						item.name.last
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						item.location.country
							.toLowerCase()
							.includes(search.toLowerCase())
					);
				})
				.map((item, index) => (
					<tr
						className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
						key={index}
						className={resaltar ? "resaltar" : ""}>
						<td className='px-6 py-4'>
							<img
								src={item?.picture.thumbnail}
								alt='Photography Dwight Collins'
							/>
						</td>
						<td className='px-6 py-4'>{item?.name.first}</td>
						<td className='px-6 py-4'>{item?.name.last}</td>
						<td className='px-6 py-4'>{item?.location.country}</td>
						<td className='px-6 py-4'>
							<button
								onClick={() => {
									hadleDlete(index);
								}}>
								Borrar
							</button>
						</td>
					</tr>
				))}
		</tbody>
	);
};
