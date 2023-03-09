import React from 'react';
import { gql } from '@apollo/client';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Heading, FeaturedImage, PostInfo } from 'components';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';

import styles from './Posts.module.scss';
let cx = classNames.bind(styles);

/**
 * Renders a list of Post items
 * @param {Props} props The props object.
 * @param {Post[]} props.posts The array of post items.
 * @param {string} props.id The unique id for this component.
 * @param {string} props.intro Message to show as an introduction text.
 * @returns {React.ReactElement} The Projects component
 */
function Posts({ posts, intro, id }) {
  const { firstNewResultRef, firstNewResultIndex } =
    useFocusFirstNewResult(posts);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section {...(id && { id })}>
      {intro && <p>{intro}</p>}
      <div className='flex flex-col max-w-5xl m-auto'>
        {posts?.map((post, i) => {
          const isFirstNewResult = i === firstNewResultIndex;
          return (
            <div
              className={cx('container')}
              key={post.id ?? ''}
              id={`post-${post.id}`}
            >
              <div className={cx('card')}>
                <PostInfo
                  className={cx('info')}
                  // author={post?.author?.node?.name}
                  date={post?.date}
                />&nbsp;-&nbsp;
                <Heading level="h4" className={cx('header')}>
                  <Link href={post?.uri ?? '#'}>
                    <a ref={isFirstNewResult ? firstNewResultRef : null}>
                      {post.title}
                    </a>
                  </Link>
                </Heading>
              </div>
            </div>
          );
        })}
        {posts && posts?.length < 1 && <p>Δεν βρέθηκαν άρθρα.</p>}
      </div>
    </section>
  );
}

Posts.fragments = {
  entry: gql`
    ${FeaturedImage.fragments.entry}
    fragment PostsItemFragment on Post {
      id
      date
      uri
      title
      author {
        node {
          name
        }
      }
      ...FeaturedImageFragment
    }
  `,
};

export default Posts;
