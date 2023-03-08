import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import { GenericFields } from 'fragments/Generics';

/**
 * The Blueprint's Footer component
 * @return {React.ReactElement} The Footer component.
 */
export default function Footer() {
  const { data, loading } = useQuery(Footer.query);
  // Loading state for previews
  if (loading) {
    return <>Loading...</>;
  }

  const { address, googleMaps, email, officeHours, phone } = data?.generics.nodes[0] ?? {};

  return (
    <footer className='flex flex-col-reverse items-center justify-between gap-4 px-4 py-5 mt-4 text-white md:mt-8 bg-primary md:px-12 md:py-12 md:flex-row'>
      {/* <div className=''> */}
        <div className='text-base md:text-lg'>
          <p>Διεύθυνση: <a href={googleMaps} target='_blank' rel='noreferrer'>{address}</a></p>
          <p>Ώρες γραφείου: {officeHours}</p>
          <p>Τηλέφωνο επικοινωνίας: <a href={`tel:+30${phone}`}>{phone}</a></p>
          <p>e-mail: <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>{email}</a></p>
        </div>
        <div className='w-32'>
          <Link href="/">
            <a title="Home">
              <Image
                src="/logo.png"
                width={128}
                height={128}
                alt="ΠΕΣΤΤ logo"
                layout="responsive"
              />
            </a>
          </Link>
        </div>
      {/* </div> */}
    </footer>
  );
}

Footer.query = gql`
  ${GenericFields}
  query FooterQuery {
    generics(first: 1) {
      nodes {
        ...GenericFields
      }
    }
  }
`;


