import Link from 'next/link';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>

      <h1>Dionisio</h1>

      <h3>¿What's Dionisio?</h3>
      <p>
        Dionisio is a NodeJS web framework built on-top of NestJS that aims to provide a developer experience similar to Google's Firebase. Dionisio is meant to be used with one of his client-side libraries in order to achieve the best results.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Realtime Database (Cloud Firestore-like)</li>
        <li>Entity Scaffolding</li>
        <li>Client libraries to consume Dionisio</li>
        <li>Agnostic ORM (TypeORM)</li>
        <li>Extension support</li>
      </ul>

      <h3>¿Ready?</h3>
      <p>Build your first Dionisio app in seconds with Dionisio CLI: <Link href="/getting-started">Getting Started</Link></p>

    </Layout>
  )
}