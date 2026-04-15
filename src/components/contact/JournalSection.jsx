import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  Container,
  Header,
  TitleArea,
  Title,
  Subtitle,
  ViewAllButton,
  Grid,
  ArticleCard,
  CardImage,
  CardContent,
  CardTitle,
  CardExcerpt,
  ReadMoreLink
} from './JournalSection.styles';

const journalArticles = [
  {
    id: 1,
    title: 'Small Spaces, Smarter Design',
    excerpt: 'Designing small spaces is all about making every element count. With the right layout, even compact rooms can feel expansive.',
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Designing the Perfect Modern Kitchen',
    excerpt: 'A modern kitchen is more than just a place to cook—it\'s a space where functionality meets design. Explore the latest trends.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Where Design Comes to Life',
    excerpt: 'A well-designed space is one that reflects both personality and purpose. It\'s not just about how it looks, but how it feels.',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=800&auto=format&fit=crop'
  }
];

const JournalSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Header>
          <TitleArea>
            <Title>From Our Journal</Title>
            <Subtitle>Ideas, inspiration, and insights for better living.</Subtitle>
          </TitleArea>
          <ViewAllButton>
            View All Articles <ArrowRightOutlined style={{ fontSize: '12px' }} />
          </ViewAllButton>
        </Header>

        <Grid>
          {journalArticles.map((article) => (
            <ArticleCard key={article.id}>
              <CardImage src={article.image} alt={article.title} />
              <CardContent>
                <CardTitle>{article.title}</CardTitle>
                <CardExcerpt>{article.excerpt}</CardExcerpt>
                <ReadMoreLink>
                  Read More <ArrowRightOutlined style={{ fontSize: '12px' }} />
                </ReadMoreLink>
              </CardContent>
            </ArticleCard>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default JournalSection;