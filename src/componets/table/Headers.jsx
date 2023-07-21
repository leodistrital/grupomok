export const Headers = () => {
	const headers = ["Foto", "Nombre", "Apellido", "País", "Acciones"];
	return (
		<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
			<tr>
				{headers.map((header, index) => (
					<th className='px-6 py-3' key={index}>
						{header}
					</th>
				))}
			</tr>
		</thead>
	);
};
