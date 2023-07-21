import { Headers } from "./Headers";
import { Body } from "./Body";
import { Conexion } from "../../service/Conexion";
import { useEffect, useState } from "react";
import { Toolbar } from "./Toolbar";

export const Table = () => {
	const getdata = new Conexion();
	const [datatable, setdatatable] = useState([]);
	const [loading, setloading] = useState(true);
	const [search, setsearch] = useState("");
	const [reset, setreset] = useState(false);
	const [resaltar, setresaltar] = useState(false);

	useEffect(() => {
		getdata.gettable().then((data) => {
			setdatatable(data.results);
			setloading(false);
			// console.log(datatable);
		});
	}, [reset]);

	const handleReset = () => {
		setreset(!reset);
	};

	const OrderContry = () => {
		const dataorder = datatable.sort((a, b) =>
			a.location.country < b.location.country ? -1 : 1
		);
		setdatatable(dataorder);
	};

	const handleResaltar = () => {
		setresaltar(!resaltar);
		console.log(resaltar);
	};

	return (
		<div className='ml-12 mt-2'>
			{loading ? <h1>Cargando...</h1> : null}
			<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				Tabla de usuarios
				<br />
			</h5>
			{search && <h1>Resultados para: {search}</h1>}
			<Toolbar
				search={search}
				setsearch={setsearch}
				reset={handleReset}
				ordercontry={OrderContry}
				cambioColor={handleResaltar}
			/>
			<div class='relative overflow-x-auto'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
					<Headers />
					<Body
						data={datatable}
						search={search}
						resaltar={resaltar}
					/>
				</table>
			</div>
		</div>
	);
};
