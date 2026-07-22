import { Footer } from "@/features/Footer";
import { Header } from "@/features/Header";
import { Headline } from "@/features/Headline";
import { TimersSection } from "@/features/TimersSection";
import { Layout } from "@/layouts/Layout";

export function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Headline />
        <TimersSection />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;