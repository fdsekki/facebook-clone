import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

/* HANDLE THE SESSION */
// the context is the request that came when user tried to acces the web site
export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  /* TO PREFETCH THE POSTS ON THE SERVER BEFORE IT REACHES THE BROWSER */
  // get posts from firebase
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  // transform the information from firebase
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null, // don't fetch timestamp to not f*ck up the info in the db
  }));

  // the user makes a request to the server
  // the server got the user's session, are the user logged in or not
  // the user is waiting at this point
  // the server has the info, it prepares the page
  // that session information it passes it to the component as a prop
  // and then all of this information gets rendered on the user browser
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
