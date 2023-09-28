"use client"
import React, { useEffect, useState } from 'react'
import styles from './product.module.css'


const Product = () => {

    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const [totalpages, setTotalpages] = useState(0)

    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
        const data = await response.json()
        if (data && data.products) {
            setProduct(data.products)
            setTotalpages(data.total / 10)
        }
        console.log(data)
    }
    // console.log(product)

    useEffect(() => {
        fetchProduct()
    }, [page])

    const  selecPageHandler = (selectedPage: any) => {
        if (selectedPage>=1 && selectedPage <= totalpages && selectedPage !== page)
        setPage(selectedPage)
    }
    return (
        <div>
            {
                product.length > 0 && (
                    <div className={styles.product} >
                        {product.map((item: any) => {
                            return (
                                <span className={styles.products__single} key={item.id}>
                                    <img src={item.thumbnail} alt={item.title} />
                                    <div className={styles.title}>
                                        <span>{item.title}</span>
                                        <span>${item.price}</span>
                                    </div>
                                </span>
                            )

                        })}
                    </div>
                )
            }

            {
                product.length>0 && <div className={styles.pagination}>
                    <span onClick={() => selecPageHandler(page-1)} className={page>1? "" : styles.pagination__disabled}>◀️</span>
                    {
                        [...Array(totalpages)].map((_, i) => {
                            return <span className={page===i+1? styles.pagination__selected: ""} onClick={() => selecPageHandler(i+1)} key={i}>{i+1}</span>
                        })
                    }
                    <span onClick={() => selecPageHandler(page+1)} className={page<totalpages? "": styles.pagination__disabled }>▶️</span>
                </div>
            }

        </div>
    )
}

export default Product
