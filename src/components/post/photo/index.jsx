export default function Photo({ photos }) {
	switch (photos.length) {
		case 1:
			return (
				<div className="mt-3">
					<img
						src={photos[0]}
						alt=""
						className="border max-h-[510px] w-full object-cover border-[color:var(--background-third)] rounded-2xl"
					/>
				</div>
			);

		case 2:
			return (
				<div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--background-third)] rounded-2xl overflow-hidden">
					<img src={photos[0]} alt="" className="h-full w-full object-cover" />
					<img src={photos[1]} alt="" className="h-full w-full object-cover" />
				</div>
			);

		case 3:
			return (
				<div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--background-third)] rounded-2xl overflow-hidden">
					<img src={photos[0]} alt="" className="h-full w-full object-cover" />
					<div className="h-full flex flex-col gap-0.5">
						<img src={photos[1]} alt="" className="h-[50%] w-full object-cover" />
						<img src={photos[2]} alt="" className="h-[50%] w-full object-cover" />
					</div>
				</div>
			);

		case 4:
			return (
				<div className="mt-3 grid grid-cols-2 gap-0.5 h-[286px] border border-[color:var(--background-third)] rounded-2xl overflow-hidden">
					{photos.map((photo, index) => (
						<img key={index} src={photo} alt="" className="h-full w-full object-cover" />
					))}
				</div>
			);
	}
}
