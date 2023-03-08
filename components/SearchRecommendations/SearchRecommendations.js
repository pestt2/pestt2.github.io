import Link from 'next/link';

/**
 * Render the SearchRecommendations component.
 *
 * @param {Props} props The props object.
 * @param {Array} props.categories Array of categories from WordPress
 *
 * @returns {React.ReactElement} The SearchRecommendations component.
 */
export default function SearchRecommendations({ categories }) {
  return (
    <div className='flex flex-col items-center m-auto prose prose-lg'>
      <h4>Περιήγηση ανά κατηγορία</h4>
      <ul>
        {categories?.map((node) => (
          <li key={node.databaseId}>
            <Link href={node.uri}>
              <a>{node.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
