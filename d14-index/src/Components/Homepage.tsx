import { useState, useEffect } from "react"
import SingleArticle from "./SingleArticle"
import Article from "../types/Article"
import { Container, Row, Col } from 'react-bootstrap'

const Homepage = () => {

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        getArticles()
    }, [])


    const getArticles = async () => {
        try {
            let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if (response.ok) {
                const articles = await response.json()
                setArticles(articles)
            } else {
                console.log("There is something wrong with API fetch.")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <h1 className='my-4 text-center text-light'> Spaceflight News Articles</h1>
            <Row className='p-0 mx-0'>
                {articles.map((article, i) =>
                (
                    <Col md={4}>
                        <SingleArticle key={i} article={article}></SingleArticle>
                    </Col>
                )
                )}
            </Row>
        </Container>

    )

}

export default Homepage