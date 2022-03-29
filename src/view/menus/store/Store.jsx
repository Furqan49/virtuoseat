import React, {useState} from 'react'
import styled from 'styled-components'
import ProductCard from '../../../components/productCard/ProductCard'
import ProductButton from '../../../components/productButton/ProductButton'
import {Row, Col} from 'antd';

function Store() {

    const [showFor, setShowFor] = useState(null)

    const productData = [
        {
            title: 'Oneplus 8',
            price: "1,200.00",
            soldBy: "Andy Bhattacharjee",
            category: 3
        }, {
            title: 'Samplea',
            price: "100.00",
            soldBy: "Andy Bhattacharjee",
            category: 1
        }, {
            title: 'Iphone 11',
            price: "1,100.00",
            soldBy: "Andy Bhattacharjee",
            category: 3
        }, {
            title: 'Iphone 11',
            price: "1,100.00",
            soldBy: "Andy Bhattacharjee",
            category: 3
        },
    ];

    const FilteredData = showFor == null ? productData : productData.filter(category => category.category == showFor);
    console.log(FilteredData)

    return (
        <Wrapper>
            <div className="heading">
                BROWSER PRODUCTS
            </div>

            <div className="buttons">
                <ProductButton text={"All"}
                    isActive={
                        showFor == null
                    }
                    onClick={
                        () => {
                            setShowFor(null)
                        }
                    }/>
                <ProductButton text={"Electronics"}
                    isActive={
                        showFor == 1
                    }
                    onClick={
                        () => {
                            setShowFor(1)
                        }
                    }/>
                <ProductButton text={"Groceries"}
                    isActive={
                        showFor == 2
                    }
                    onClick={
                        () => {
                            setShowFor(2)
                        }
                    }/>
                <ProductButton text={"Mobile"}
                    isActive={
                        showFor == 3
                    }
                    onClick={
                        () => {
                            setShowFor(3)
                        }
                    }/>
                <ProductButton text={"Laptops"}
                    isActive={
                        showFor == 4
                    }
                    onClick={
                        () => {
                            setShowFor(4)
                        }
                    }/>
                <ProductButton text={"Medicines"}
                    isActive={
                        showFor == 5
                    }
                    onClick={
                        () => {
                            setShowFor(5)
                        }
                    }/>
            </div>

        <div className="product">

            <Row gutter={
                [15, 15]
            }>
                {
                FilteredData.map(data => {
                    return <Col xs={24}
                        sm={24}
                        md={12}
                        lg={8}
                        xl={6}
                        xxl={4}><ProductCard title={
                                data.title
                            }
                            price={
                                data.price
                            }
                            soldBy={
                                data.soldBy
                            }/></Col>
            })
            } </Row>

            {FilteredData.length < 1 && <div className='notFound'> Product Not Found</div>}

        </div>

    </Wrapper>
    )
}

export default Store


const Wrapper = styled.div `
padding:20px;
.heading{
    font-size: 36px;
    color:white;
    margin-bottom: 70px;
    text-align: center;
}
.buttons{
    display:flex;
    justify-content:center;
    padding-bottom:15px;
}
.notFound{
    color:white;
    font-weight:bold;
    text-align:center;
    margin-top:100px;
    font-size:22px;
}
`
