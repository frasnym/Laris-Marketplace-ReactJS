import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import ProductDetailInfoItem from "./ProductDetailInfoItem/ProductDetailInfoItem";
import { numberWithSeparators } from "../../../utils/Helper";

import "./ProductDetailInfo.css";

export default function ProductDetailInfo(props) {
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
		<div className="ProductDetailInfo ps-5">
			<ProductDetailInfoItem
				title="Harga"
				detail={
					<h3 className="item__price">
						Rp{numberWithSeparators(props.product.price)}
					</h3>
				}
			/>
			<ProductDetailInfoItem
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
			<ProductDetailInfoItem title="Info Produk" detail={infoProduct} />
			<ProductDetailInfoItem
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
