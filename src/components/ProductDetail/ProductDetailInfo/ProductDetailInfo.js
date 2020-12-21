import React from "react";

import ProductDetailInfoItem from "./ProductDetailInfoItem/ProductDetailInfoItem";

import "./ProductDetailInfo.css";

export default function ProductDetailInfo(props) {
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
				detail={<h3 className="item__price">Rp3.700.255</h3>}
			/>
			<ProductDetailInfoItem title="Info Produk" detail={infoProduct} />
		</div>
	);
}
