// import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
// import { GenericFields } from 'fragments/Generics';

/**
 * The Blueprint's Footer component
 * @return {React.ReactElement} The Footer component.
 */
export default function Footer() {
  // const { data, loading } = useQuery(Footer.query);
  // // Loading state for previews
  // if (loading) {
  //   return <>Loading...</>;
  // }

  // const { address, googleMaps, email, officeHours, phone } = data?.generics.nodes[0] ?? {};

  return (
    <footer className='flex flex-col-reverse items-center justify-between gap-4 px-4 py-5 mt-4 text-white md:mt-8 bg-primary md:px-12 md:py-12 md:flex-row'>
      {/* <div className=''> */}
        <div className='text-base md:text-lg'>
          <p>Διεύθυνση: <a href="https://www.google.com/maps/place/%CE%A0%CE%B5%CE%B9%CF%81%CE%B1%CE%B9%CF%8E%CF%82+11,+%CE%91%CE%B8%CE%AE%CE%BD%CE%B1+105+52/@37.9830374,23.7236855,18z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd256aff44e1:0xe2050e6761822584!8m2!3d37.9830374!4d23.7259278!16s%2Fg%2F11gg6k5pfj?hl=el" target='_blank' rel='noreferrer'>Π. Τσαλδάρη 9-11 (πρ. Πειραιώς), 10552, Αθήνα</a></p>
          <p>Ώρες γραφείου: Κάθε Πέμπτη 11:00 - 13:00</p>
          <p>Τηλέφωνο επικοινωνίας: <a href="tel:+30210 3303152">210 3303152</a></p>
          <p>e-mail: <a href="mailto:pestaxtam@gmail.com" target='_blank' rel='noreferrer'>pestaxtam@gmail.com</a></p>
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

// Footer.query = gql`
//   ${GenericFields}
//   query FooterQuery {
//     generics(first: 1) {
//       nodes {
//         ...GenericFields
//       }
//     }
//   }
// `;


