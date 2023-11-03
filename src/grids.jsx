import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

function ArticleGrid({ articles }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {articles.map((article) => (
        <Col key={article.id}>
          <Link to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
            <Card>
              <Card.Img variant="top" src={article.imageUrl} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.content.substring(0, 100)}...</Card.Text>
                <Link to={`/article/${article.id}`}>Read More</Link>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default ArticleGrid;

