import { Button, Header } from "semantic-ui-react";
import styles from "./Item.module.css";

export default function Item({ item }) {
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{name}</strong>
          <strong className={styles.num_price}>${price}</strong>
          <span className={styles.txt_info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}
/**
 * 
 * 
 * api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/452/original/open-uri20171223-4-1pmofky?1514062277"
brand: "maybelline"
category: "powder"
created_at: "2016-10-01T18:35:07.476Z"
currency: null
description: "Maybelline Face Studio Master Hi-Light Light Boosting blush formula has an expert ↵balance of shade + shimmer illuminator for natural glow. Skin goes ↵soft-lit with zero glitz.↵↵		For Best Results: Brush over all shades in palette and gently sweep over ↵cheekbones, brow bones, and temples, or anywhere light naturally touches↵ the face.↵↵		↵	↵↵                    "
id: 452
image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/e8c59b78ebeaec5c4b6aeba49a9ff0f6_ra,w158,h184_pa,w158,h184.png"
name: "Maybelline Face Studio Master Hi-Light Light Booster Blush "
price: "14.99"
price_sign: null
product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/452.json"
product_colors: []
product_link: "https://well.ca/products/maybelline-face-studio-master_88836.html"
product_type: "blush"
rating: 5
tag_list: []
updated_at: "2017-12-23T20:51:17.460Z"
website_link: "https://well.ca"
 * 
 * 
 */
