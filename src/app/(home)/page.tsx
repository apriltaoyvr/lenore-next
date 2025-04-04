import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex place-content-center place-items-center'>
      <article className='prose z-50 max-w-prose p-8'>
        <hgroup>
          <h1>👋 Welcome</h1>
        </hgroup>
        <p>
          This is a revival of the original{' '}
          <Link href='https://web.archive.org/web/20071215002147/http://greenlightwiki.com/lenore-exegesis/TheLenoreThomsonExegesisWiki'>
            <em>Lenore Thomson Exegesis Wiki</em>
          </Link>{' '}
          by <Link href='https://wiki.c2.com/?BenKovitz'>Ben Kovitz</Link>. Why
          do this? You can learn more on the{' '}
          <Link href='/wiki/about#about-this-site'>About</Link> page.
        </p>
        <h2 id='where-to-start-'>Where to start?</h2>
        <p>
          For those familiar with{' '}
          <Link href='/wiki/people-and-systems/myers-briggs'>Myers-Briggs</Link>{' '}
          but not{' '}
          <Link href='/wiki/fundamentals/function-attitude'>
            function attitudes
          </Link>{' '}
          or{' '}
          <Link href='/wiki/people-and-systems/carl-jung'>
            Jungian functions
          </Link>
          , the{' '}
          <Link href='/wiki/fundamentals/main-propositions'>
            Main Propositions
          </Link>{' '}
          and <Link href='/wiki/exegeses/not-personality'>Not Personality</Link>{' '}
          will be of interest.
        </p>
        <p>Otherwise, good starting points would be:</p>
        <ul>
          <li>
            <Link href='/wiki/fundamentals/main-propositions'>
              Main Propositions
            </Link>
          </li>
          <li>
            <Link href='/wiki/fundamentals/function-attitude'>
              Function Attitude
            </Link>
          </li>
          <li>
            <Link href='/wiki/our-difficulties'>Our Difficulties</Link>
          </li>
          <li>
            <Link href='/wiki/exegeses/philosophical-exegesis'>
              Philosophical Exegesis
            </Link>
          </li>
          <li>
            <Link href='/wiki/sign-interpretation/orienting'>Orienting</Link>
          </li>
          <li>
            <Link href='/wiki/semiotic-attitude'>Semiotic Attitude</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
