import { remark } from 'remark';
import html from 'remark-html';
import slug from 'remark-slug';
import Container from '../components/container';
import Header from '../components/header';
import { TableOfContents } from '../components/toc';

export default function WhitePaper({ markdownString }) {
  return (
    <Container>
      <Header />
      <div className="flex">
        <TableOfContents/>
        <div className="markdown max-w-screen-lg ml-auto" dangerouslySetInnerHTML={{ __html: markdownString }}>
      </div>
    </div>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://raw.githubusercontent.com/saintceliac/not-quite-a-whitepaper/main/README.md");
  const post = await res.text();
  const markdown = await remark().use(html).use(slug).process(post);
  const markdownString = markdown.toString();

  return {
    props: { markdownString }
  }
}