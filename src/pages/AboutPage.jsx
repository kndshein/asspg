import profiles from '../content/aboutProfiles';
import FAQ from '../components/FAQ';
import FAQs from '../content/aboutFAQs';

export default function AboutPage() {
  return (
    <div className="max-w-2xl m-auto text-lg p-4 pt-0">
      <h4 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-400 mb-2">
        Our History
      </h4>
      <p className="mb-8 text-gray-300">
        After having our cybersecurity firm being hacked into for the fifth time in 3 months, we realized that
        using the string 'password' as our database's password is no longer cutting it in 2022. So, we set out
        on a mission to build a password generating service that we would be proud to call someone else's. In
        fact, that's what we did -- we called somebody. We reached out to our aforementioned hackers and
        inquired about their process behind their work. By having their perspective, we were able to
        understand the ins-and-outs of today's cybersecurity industry trends. We then teamed up to provide a
        service, leveraging our synergy as hacker and hackee -- they consult us on how to better secure our
        systems (such as not using 'password' as our master password), and we in turn provide them our users'
        data. It's a win-win!
      </p>
      <h4 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
        Our Product
      </h4>
      <p className="mb-8 text-gray-300">
        As an ASSPG user, you can be rest assured that you will receive an industry-leading secure password
        produced by our AI's artificial neural network hybrid-cloud blockchain engine. The generated passwords
        have been tested vigorously. From regression to taste tests, we employ the use of cutting-edge
        technology whenever and wherever possible. It has been statistically proven that compared to an
        average user, ASSPG-ers' information are the least penetrated by most hacking methods. Once you've
        been onboarded as an ASSPG-er, you will not only receive a lifetime of backend support, but also
        obtain access to our Discord server. Take care of your private systems, become an ASSPG-er today!
      </p>
      <h4 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 mb-4">
        Our Background
      </h4>
      <ul className="flex flex-wrap mb-8">
        {profiles.map((content, idx) => {
          return (
            <li
              key={idx}
              className="flex flex-col p-6 sm:even:mr-0 sm:odd:ml-0 mx-0 sm:mx-3 min-w-200 m-3 basis-5/12 grow bg-gray-800 rounded-lg"
            >
              <div className="h-24 w-24 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src={`/images/${content.image}`}
                  alt={content.name}
                />
              </div>
              <div className="text-sky-500 font-semibold text-lg mt-4">{content.name}</div>
              <div className="text-gray-500 italic">{content.position}</div>
              <div className="text-md text-gray-400">{content.desc}</div>
            </li>
          );
        })}
      </ul>
      <h4 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 mb-4">
        Frequently Asked Questions
      </h4>
      <ul>
        {FAQs.map((content, idx) => {
          return <FAQ question={content.question} answer={content.answer} />;
        })}
      </ul>
    </div>
  );
}
