import className from 'classnames/bind';
// import { FeaturedImage, Heading, PostInfo } from 'components';
import { Heading } from 'components';

import styles from './EntryHeader.module.scss';
const cx = className.bind(styles);
// * @param {MediaItem} props.image The image node.
/**
 * A Page or Post entry header component
 * @param {Props} props The props object.
 * @param {string} props.title The post/page title.
 * @param {string} props.date The post/page publish date.
 * @param {string} props.author The post/page author's name.
 * @param {string} props.className An optional className to be added to the EntryHeader.
 * @return {React.ReactElement} The EntryHeader component.
 */
// export default function EntryHeader({ title, image, date, author, className }) {
export default function EntryHeader({ title, date, author, className }) {
  const hasText = title || date || author;

  return (
    <div className={cx(['entry-header', className])}>
      {hasText && (
        <div className={cx('text', 'prose lg:prose-xl')}>
          {!!title && <Heading level='h2' className={cx('title', 'text-white')}>{title}</Heading>}
          {/* <PostInfo className={cx('byline')} author={author} date={date} /> */}
        </div>
      )}

      {/* {image && (
        <div className={cx('image')}>
          <div className="container">
            <FeaturedImage
              className={cx('featured-image')}
              image={image}
              priority
            />
          </div>
        </div>
      )} */}
    </div>
  );
}
