// next
import Link from 'next/link';

// layouts
import { SiteLayout } from 'layouts';

// seo
import { NextSeo } from 'next-seo';

// data
import { all_articles } from 'constants/articles_list';
import { article_style } from 'constants/articles_style';

function WritingPage() {
  return (
    <>
      <NextSeo title="Vihar Kurama | Writing" description="" />
      <SiteLayout>
        <div className="mt-5 mb-4 pt-5">
          <h2 className="fw-bold">My Writing</h2>
          <p className="p-small text-muted m-0">
            I've been writing since 2017, here are the list of all my tutorials, guides related to
            Web, Machine Learning, Low Code and many more.
          </p>
        </div>
        {all_articles.map((item, index) => {
          return (
            <>
              <Link href={item.url}>
                <a className="text-decoration-none" target="_blank">
                  <div
                    className="card border-0 shadow-sm p-3 mb-3 border-start"
                    style={{
                      borderLeft: `3px solid ${
                        article_style(item.published_at).border_color
                      } !important`
                    }}
                    key={index}
                  >
                    <p className="card-title text-capitalize m-0">{item.title}</p>

                    <div className="d-flex align-items-center">
                      <div>
                        <p className="m-0 p-smaller text-muted">
                          Published on: {item.published_on}
                        </p>
                      </div>
                      <div className="ms-auto">
                        <img
                          className="img-fluid"
                          src={article_style(item.published_at).image_url}
                          width="30"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </>
          );
        })}
      </SiteLayout>
    </>
  );
}

export default WritingPage;
