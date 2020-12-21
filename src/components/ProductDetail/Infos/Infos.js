import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import InfoItem from "./InfoItem/InfoItem";
import { numberWithSeparators } from "../../../utils/Helper";

import "./Infos.css";

export default function Infos(props) {
	const [qty, setQty] = useState(props.qty);

	const infoProduct = (
		<dl>
			<div className="info__list__item">
				<dt>Berat</dt>
				<dd>1000gr</dd>
			</div>
			<div className="info__list__item">
				<dt>Kondisi</dt>
				<dd>Baru</dd>
			</div>
			<div className="info__list__item">
				<dt>Asuransi</dt>
				<dd>Opsional</dd>
			</div>
		</dl>
	);

	return (
		<div className="Infos">
			<InfoItem
				title="Harga"
				detail={
					<h3 className="item__price">
						Rp{numberWithSeparators(props.product.price)}
					</h3>
				}
			/>
			<InfoItem
				title="Jumlah"
				detail={
					<div className="quantity__editor">
						<FaMinus
							className={`quantity__editor ${
								parseInt(qty) <= 1 ? "disabled" : null
							}`}
							onClick={() => {
								if (parseInt(qty) >= 2) {
									const newQty = parseInt(qty) - 1;
									setQty(newQty);
									props.totalPriceHandler(newQty);
								}
							}}
						/>
						<input
							type="number"
							value={qty}
							onChange={(event) => {
								setQty(event.target.value);
								props.totalPriceHandler(event.target.value);
							}}
						/>
						<FaPlus
							className="quantity__editor"
							onClick={() => {
								const newQty = parseInt(qty) + 1;
								setQty(newQty);
								props.totalPriceHandler(newQty);
							}}
						/>
					</div>
				}
			/>
			<InfoItem title="Info Produk" detail={infoProduct} />
			<InfoItem
				title="Total"
				detail={
					<h3 className="item__price">
						Rp{numberWithSeparators(props.total)}
					</h3>
				}
			/>
		</div>
	);
}
