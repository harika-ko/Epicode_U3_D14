import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Article from "../types/Article"

const Detailspage = () => {
    let { id } = useParams();

    useEffect(() => {
        getDetails()
    }, [id])

    const [details, setDetails] = useState<Article | null>(null)

    const getDetails = async () => {
        try {
            let response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
            if (response.ok) {
                const details = await response.json()
                setDetails(details)

            } else {
                console.log("There is something wrong in fetching API data")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container className="text-light">
            <Row>
                <Col className="text-center">
                    <h3 className='my-4  text-light'>{details?.title}</h3>
                    <img style={{ maxWidth: '50%', maxHeight: '400px' }} src={details?.imageUrl} alt='Image' />
                    <p>Summary: {details?.summary}</p>
                    <p>Details From: <span className='text-weight-bold'>{details?.newsSite}</span></p>
                    <p>Published On: {details?.publishedAt.slice(0, 10)}</p>
                    <p>To visit the website, click here: <a href={details?.url} target="_blank">Details</a></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Detailspage

