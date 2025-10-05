import Head from 'next/head';
import './style/background.css';
import './style/main.css';

export default function Home() {
    return (
        <div>
            <Head>
                <title>The Ryoka</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <section>
                <video
                    id="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/poster.jpg"
                >
                    <source src="/large.mp4" type="video/mp4" />
                    Your browser doesn't support video
                </video>
            </section>

            <section>
                <div className="flex flex-col justify-center items-center">
                    <img
                        className="rounded-full"
                        src="https://github.com/just-ryoka.png"
                        alt="GitHub Avatar"
                        width={118}
                        height={118}
                    />
                    <h1>The Ryoka</h1>
                </div>
            </section>
        </div>
    );
}