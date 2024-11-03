// import PostInfo from 'components/PostInfo';
import className from 'classnames/bind';

import styles from './ContentWrapper.module.scss';

const cx = className.bind(styles);

/**
 * A basic Container Wrapper component
 * @param {Props} props The props object.
 * @param {string} props.content The content as string.
 * @param {string} props.className An optional className to be added to the container.
 * @param {React.ReactElement} props.children The children to be rendered.
 * @return {React.ReactElement} The ContentWrapper component.
 */
// export default function ContentWrapper({ content, className, children, date }) {
export default function ContentWrapper({ content, className, children }) {
  return (
    <article className={cx('content', className, 'px-2 md:px-4 lg:px-0 max-w-5xl prose lg:prose-xl')}>
      {/* <PostInfo date={date} className='text-left' /> */}
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
