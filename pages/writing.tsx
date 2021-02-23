import { SiteLayout } from 'layouts';

const nanonets_articles = [
  {
    title: 'A Comprehensive Guide to OCR with RPA and Document Understanding',
    published_on: 'September 25, 2020'
  },
  {
    title: 'How to OCR Resumes using Intelligent Automation',
    published_on: 'April 11, 2020'
  },
  {
    title: 'Table Detection, Information Extraction and Structuring using Deep Learning',
    published_on: ' December 19, 2019'
  },
  {
    title: 'ID Card Digitization and Information Extraction using Deep Learning - A Review',
    published_on: 'December 19, 2019'
  },
  {
    title: 'ID Card Digitization and Information Extraction using Deep Learning - A Review',
    published_on: 'December 19, 2019'
  },
  {
    title: 'Dense and Sparse Crowd Counting Methods and Techniques: A Review',
    published_on: 'July 02, 2019'
  }
];

function WritingPage() {
  return (
    <SiteLayout>
      {nanonets_articles.map((item, index) => {
        return <p>{item.title}</p>;
      })}
    </SiteLayout>
  );
}

export default WritingPage;
