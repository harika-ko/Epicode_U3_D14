import Article from '../types/Article'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

interface SingleArticleProps {
    article: Article
}

const SingleArticle = ({ article }: SingleArticleProps) => {

    const navigate = useNavigate()

    return (
        <Card
            style={{ maxWidth: '17rem', height: '30rem', marginBottom: '1rem', position: "relative" }}
        >
            <Card.Img
                variant="top" src={article.imageUrl}
                style={{
                    height: "10rem",
                    minHeight: "10rem",
                    width: "16.9rem",
                    backgroundSize: "contain"

                }}
            />
            <Card.Body className='px-2 card-title'>
                <Card.Title>{article.title}</Card.Title>
                <div className='card-content'>
                    <p>{article.summary}</p>
                </div>

                <div style={{ position: "absolute", height: "5rem", bottom: '0.8rem' }}>

                    <Card.Text style={{ margin: "3px 0px" }}>
                        Published on : {article.publishedAt.slice(0, 10)}
                    </Card.Text>

                    <Button onClick={() => navigate(`/${article.id}`)} variant="primary">Read more...</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SingleArticle