import { Footer } from "@features/Footer";
import { Header } from "@features/Header";
import { Headline } from "@features/Headline";
import { Timers } from "@features/Timers";
import { Layout } from "@layouts/Layout";

export function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Headline />
        <Timers />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;