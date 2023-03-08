import * as MENUS from 'constants/menus';

import { useQuery, gql } from '@apollo/client';
import {
  Main,
  ContentWrapper,
  NavigationMenu,
  FeaturedImage,
  SEO,
  Header,
  Footer,
  Posts,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';

const postsPerPage = 3;

export default function Component() {
  const { data, loading } = useQuery(Component.query, {
    variables: Component.variables(),
  });
  if (loading) {
    return null;
  }

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const { title, content, featuredImage } = data?.page ?? { title: '' };

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />

      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />

      <Main>
        <FeaturedImage
          image={featuredImage?.node}
          priority
        />
        <ContentWrapper content={content} />
      </Main>
      <Footer />
    </>
  );
}

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    first: postsPerPage,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  ${Posts.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $first: Int
  ) {
    page(id: "index", idType: URI) {
      title
      content
      ...FeaturedImageFragment
    }
    posts(first: $first) {
      nodes {
        ...PostsItemFragment
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
